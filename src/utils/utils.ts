export const getProductFromPage = async () => {
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
