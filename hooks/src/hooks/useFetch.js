import { useState, useEffect } from "react"

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        lading: false
    })

    useEffect(function() {
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setResponse({
                data: json,
                loading: false
            }))
    }, [url, method])

    return response
}