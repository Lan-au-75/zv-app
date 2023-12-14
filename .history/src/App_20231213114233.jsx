import { useEffect, useState } from 'react'
import Header from './components/Header'
import Post from './components/Post'

export default function App() {
    const [posts, setPosts] = useState()

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setPosts(data)
        }

        const fetchComments = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await res.json()
            setPosts(data)
        }

        const fetchUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setPosts(data)
        }

        fetchPosts()
        fetchComments()
        fetchUsers()
    }, [])

    return (
        <div>
            <Header></Header>
            <Post data={posts}></Post>
        </div>
    )
}
