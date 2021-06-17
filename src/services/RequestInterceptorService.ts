import helpers from "../utils/helpers";

const interceptor = {
    async doRequest(url: string, body = null, method = 'GET', contentType = 'application/json', formData = false) {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': contentType,
                },
                body: body ? (formData ? body : JSON.stringify(body)) : null

            });

            const responseJson = await this.responseConvertToJson(response)
            return responseJson;

        } catch (error) {
            helpers.handleNetworkError()
        }
    },

    async responseConvertToJson(response: any) {
        const responseJson = await response.json()
        return (
            {
                isSuccess: (response.status >= 200 && response.status <= 299),
                data: responseJson
            }
        )
    }
}

export default interceptor;