import { FavoriteItemType } from '../types'

type FavoriteItemProps = {
    item: FavoriteItemType
    onRemove: (id: string) => void
}

export const FavoriteItem = ({ item, onRemove }: FavoriteItemProps) => {
    return (
        <div className="flex w-full gap-x-5 border-t border-gray-300 py-5 first:border-t-0 first:pt-0">
            <a
                href={`${item.url}?utm_source=favorites_extension`}
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
            >
                <img src={item.imageUrl} alt={item.name} className="size-15" />
            </a>

            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <a
                        href={`${item.url}?utm_source=favorites_extension`}
                        target="_blank"
                        rel="noreferrer"
                        className="line-clamp-1 text-sm font-medium hover:text-blue-600"
                    >
                        {item.name}
                    </a>
                    <div className="text-xs text-gray-400">ID: {item.productId}</div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        {item.currency} {item.price.toFixed(2)}
                    </div>
                    <div
                        className="cursor-pointer text-sm font-medium text-[#0077c7] hover:text-[#0078c3]"
                        onClick={() => onRemove(item.id)}
                    >
                        Remove
                    </div>
                </div>
            </div>
        </div>
    )
}
