const helpers = {
    reduceText,
    handleNetworkError,
}

function reduceText(text: string, length: number) {
    return text.slice(0, length) + (text.length > length ? '...' : '')
}

function handleNetworkError() {
    alert(
        "Something went wrong. Please, try it again",
    )
}

export default helpers
