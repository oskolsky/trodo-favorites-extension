import { FavoriteItemType } from '../types'
import { EmptyState } from './EmptyState'
import { FavoriteItem } from './FavoriteItem'

type FavoritesListProps = {
    items: FavoriteItemType[]
    onRemove: (id: string) => void
}

export const FavoritesList = ({ items, onRemove }: FavoritesListProps) => {
    if (items.length === 0) return <EmptyState />

    return (
        <div className="max-h-112.5 overflow-y-auto px-5">
            {items.map(item => (
                <FavoriteItem key={item.id} item={item} onRemove={onRemove} />
            ))}
        </div>
    )
}
