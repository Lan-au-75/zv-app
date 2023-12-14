import { Space } from 'antd'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import CheckableTag from 'antd/es/tag/CheckableTag'
import Post from './components/Post'

const tagsData = ['Movies', 'Books', 'Music', 'Sports']

export default function App() {
    const [selectedTags, setSelectedTags] = useState(['Books'])
    const [data, setData] = useState()

    useEffect(() => {
        const fetchDataPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setData(data)
        }

        fetchDataPosts()
    }, [])
    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag)
        console.log('You are interested in: ', nextSelectedTags)
        setSelectedTags(nextSelectedTags)
    }

    return (
        <div>
            <Header></Header>
            <Post></Post>
        </div>
    )
}
