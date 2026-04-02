import { FavoriteItemType } from '../types'

const STORAGE_KEY = 'favorites'

export const getFavorites = async (): Promise<FavoriteItemType[]> => {
    if (!chrome?.storage?.local) {
        console.warn('chrome.storage not available')
        return []
    }

    const data = await chrome.storage.local.get(STORAGE_KEY)
    const value = data[STORAGE_KEY]
    return Array.isArray(value) ? (value as FavoriteItemType[]) : []
}

export const saveFavorites = async (items: FavoriteItemType[]) => {
    await chrome.storage.local.set({ [STORAGE_KEY]: items })
}

export const addFavorite = async (item: FavoriteItemType) => {
    const items = await getFavorites()
    const filtered = items.filter(i => i.id !== item.id)
    const updated = [item, ...filtered]
    await saveFavorites(updated)
    return updated
}

export const removeFavorite = async (id: string) => {
    const items = await getFavorites()
    const updated = items.filter(i => i.id !== id)
    await saveFavorites(updated)
    return updated
}
