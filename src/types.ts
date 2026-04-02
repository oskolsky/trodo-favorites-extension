export type FavoriteItemType = {
    id: string
    productId: string
    name: string
    imageUrl: string
    price: number
    oldPrice?: number
    discountPercent?: number
    currency: string
    url: string
}
