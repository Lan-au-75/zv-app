import { useEffect, useState } from 'react'
import Header from './components/Header'
import Post from './components/Post'

export default function App() {
    const [posts, setPosts] = useState()
    const [comments, setComments] = useState()
    const [users, setUsers] = useState()

    const [data, setData] = useState()

    const getUsersById = async (userIds) => {
        const result = posts?.filter((post) => userIds.includes(post.userId))

        return result
    }

    const getPostsById = async (postIds) => {
        const result = posts?.filter((post) => postIds.includes(post.id))

        return result
    }

    const getPosts = async () => {
        // eslint-disable-next-line react/prop-types
        const userIds = posts?.map((post) => post.userId)

        const user = await getUsersById(userIds)

        const result = {
            users: user,
            posts,
        }

        setData(result)
    }

    const getComments = async () => {
        // eslint-disable-next-line react/prop-types
        const postIds = comments?.map((comment) => comment.postId)

        const post = await getPostsById(postIds)

        const result = {
            posts: post,
            comments,
        }

        setData(result)
    }

    const format = data?.comments?.map((comment) => {
        const post = data?.posts?.find((post) => post.id === comment.postId)

        const user = users?.find((user) => user.id === post.userId)

        return {
            ...user,
            ...comment,
            ...post,
        }
    })

    useEffect(() => {
        getPosts()
        getComments()
    }, [posts])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const data = await res.json()
            setPosts(data)
        }

        const fetchComments = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            const data = await res.json()
            setComments(data)
        }

        const fetchUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
            const data = await res.json()
            setUsers(data)
        }

        fetchPosts()
        fetchComments()
        fetchUsers()
    }, [])

    return (
        <div>
            <Header></Header>
            {data?.posts?.map((post) => (
                <Post key={post.id} item={post} format={format}></Post>
            ))}
        </div>
    )
}
