import { isProductPage, parseProduct } from './parser'

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GET_PRODUCT') {
        if (!isProductPage()) {
            sendResponse({ success: false })
            return
        }

        const product = parseProduct()

        sendResponse({
            success: true,
            product,
        })
    }
})
