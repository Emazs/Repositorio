import { useState, useEffect } from 'react'

export const UseFetch = (url) => {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch(url)
      .then(function (response) {
        if (response.ok) {
          return response.json()
        }
      })
      .catch((error) => console.error('Error:', error))
      .then(data => setData(data))
  }, [url])

  return data
}
