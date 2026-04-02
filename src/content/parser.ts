export const isProductPage = () => {
    return Boolean(document.querySelector('.product-info h1'))
}

export const parsePrice = (text: string): number => {
    return parseFloat(text.replace(/[^\d.,]/g, '').replace(',', '.'))
}

const parsePriceWithCurrency = (text: string) => {
    const cleaned = text.trim()

    const currencyMatch = cleaned.match(/[€$£]/)
    const currency = currencyMatch ? currencyMatch[0] : ''

    const value = parseFloat(cleaned.replace(/[^\d.,]/g, '').replace(',', '.'))

    return {
        value,
        currency,
    }
}

export const parseProduct = () => {
    try {
        const name = document.querySelector('.product-info h1')?.textContent?.trim() ?? ''

        const imageUrl = document.querySelector('.product-img-block img')?.getAttribute('src') ?? ''

        const priceText = document.querySelector('.price-block .price')?.textContent ?? ''

        const { value: price, currency } = parsePriceWithCurrency(priceText)

        const oldPriceText = document.querySelector('.price-block .old-price')?.textContent ?? ''

        const oldPriceParsed = oldPriceText ? parsePriceWithCurrency(oldPriceText).value : undefined

        let discountPercent: number | undefined

        if (oldPriceParsed && oldPriceParsed > price) {
            discountPercent = Math.round(((oldPriceParsed - price) / oldPriceParsed) * 100)
        }

        const productIdText = document.querySelector('.product-id span')?.textContent ?? ''

        const productId = productIdText.replace('ID:', '').trim()

        return {
            id: productId,
            productId,
            name,
            imageUrl,
            price,
            oldPrice: oldPriceParsed,
            discountPercent,
            currency,
            url: window.location.href,
        }
    } catch (e) {
        console.error('Parse error', e)
        return null
    }
}
