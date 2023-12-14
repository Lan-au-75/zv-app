import { useEffect, useState } from 'react'
import Header from './components/Header'
import Post from './components/Post'

export default function App() {
    const [posts, setPosts] = useState()
    const [comments, setComments] = useState()
    const [users, setUsers] = useState()

    const [data, setData] = useState()

    console.log(data)

    const getUsersById = async (userIds) => {
        const result = users?.filter((user) => userIds.includes(user.id))

        return result
    }

    const getPostsById = async (postIds) => {
        const result = posts?.filter((post) => postIds.includes(post.id))

        return result
    }

    const getComments = async () => {
        // eslint-disable-next-line react/prop-types
        const postIds = comments?.map((comment) => comment.postId)
        const userIds = posts?.map((post) => post.userId)

        const post = await getPostsById(postIds)
        const user = await getUsersById(userIds)

        const result = {
            posts: post,
            comments,
            users: user,
        }

        setData(result)
    }

    const formatComments = data?.comments?.map((comment) => {
        const post = data?.posts?.find((post) => post.id === comment.postId)

        return {
            ...post,
            ...comment,
        }
    })

    const formatPosts = data?.posts?.map((post) => {
        const user = users?.find((user) => user.id === post.userId)

        return {
            ...user,
            ...post,
        }
    })

    useEffect(() => {
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
            {formatPosts?.map((item) => (
                <Post key={item.id} item={item} comments={formatComments}></Post>
            ))}
        </div>
    )
}
