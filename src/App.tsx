import { useEffect, useState } from 'react'

import { AddFavoriteButton } from './components/AddFavoriteButton'
import { FavoritesList } from './components/FavoritesList'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { FavoriteItemType } from './types'
import { addFavorite, getFavorites, removeFavorite } from './utils/storage'

export default function App() {
    const [items, setItems] = useState<FavoriteItemType[]>([])
    const [loading, setLoading] = useState(true)

    const [isProductPage, setIsProductPage] = useState(false)
    const [currentProduct, setCurrentProduct] = useState<FavoriteItemType | null>(null)

    const getProductFromPage = async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

        if (!tab?.id || !tab.url) return null

        if (!tab.url.includes('trodo.com')) {
            return null
        }

        try {
            const response = await chrome.tabs.sendMessage(tab.id, {
                type: 'GET_PRODUCT',
            })

            return response
        } catch (e) {
            return null
        }
    }

    useEffect(() => {
        const init = async () => {
            const data = await getFavorites()
            setItems(data)

            const response = await getProductFromPage()

            if (response?.success && response.product) {
                setIsProductPage(true)
                setCurrentProduct(response.product)
            } else {
                setIsProductPage(false)
                setCurrentProduct(null)
            }

            setLoading(false)
        }

        init()
    }, [])

    const handleAdd = async () => {
        if (!currentProduct) return

        const updated = await addFavorite(currentProduct)
        setItems(updated)
    }

    const handleRemove = async (id: string) => {
        const updated = await removeFavorite(id)
        setItems(updated)
    }

    return (
        <div className="w-94.5 bg-white text-gray-900">
            <Header count={items.length} />

            {loading ? (
                <Loader />
            ) : (
                <>
                    <AddFavoriteButton onClick={handleAdd} isDisabled={!isProductPage} />
                    <FavoritesList items={items} onRemove={handleRemove} />
                </>
            )}
        </div>
    )
}
