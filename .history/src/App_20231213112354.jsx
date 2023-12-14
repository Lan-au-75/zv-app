import { useEffect, useState } from 'react'
import Header from './components/Header'
import Post from './components/Post'

export default function App() {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchDataPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setData(data)
        }

        fetchDataPosts()
    }, [])

    return (
        <div>
            <Header></Header>
            <Post data={data}></Post>
        </div>
    )
}
