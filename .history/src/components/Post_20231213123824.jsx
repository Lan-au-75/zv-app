import { Space } from 'antd'
import CheckableTag from 'antd/es/tag/CheckableTag'
import { useState } from 'react'

const tagsData = ['Movies', 'Books', 'Music', 'Sports']

// eslint-disable-next-line react/prop-types
function Post({ posts, comments, users }) {
    const [selectedTags, setSelectedTags] = useState(['Books'])

    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag)
        console.log('You are interested in: ', nextSelectedTags)
        setSelectedTags(nextSelectedTags)
    }

    const getPostsById = async (postIds) => {
        // eslint-disable-next-line react/prop-types
        const result = posts?.filter((post) => postIds.includes(post.id))

        return result
    }

    const getComments = async () => {
        // eslint-disable-next-line react/prop-types
        const postIds = comments?.map((comment) => comment.postId)

        const posts = await getPostsById(postIds)

        const data = {
            posts,
            comments,
        }

        console.log(data)

        return data
    }

    getComments()

    return (
        <main className='p-4'>
            <h1 className='flex items-center justify-center'>Post 1</h1>
            <div className='flex items-center justify-between mx-3'>
                {/* author */}
                <div>
                    <h3>author</h3>
                    <span className='mt-2'>created at: </span>
                </div>
                {/* search keyword */}
                <div>
                    <Space size={[0, 8]} wrap>
                        {tagsData.map((tag) => (
                            <CheckableTag
                                key={tag}
                                checked={selectedTags.includes(tag)}
                                onChange={(checked) => handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        ))}
                    </Space>
                </div>
            </div>
            {/* desc */}
            <p></p>
        </main>
    )
}

export default Post
