/* eslint-disable react/prop-types */
import { Space } from 'antd'
import CheckableTag from 'antd/es/tag/CheckableTag'
import { useState } from 'react'
import Comments from './Comments'

const tagsData = ['facere ', 'esse']

function Post({ item: post, comments }) {
    const [selectedTags, setSelectedTags] = useState(['Books'])

    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag)
        console.log('You are interested in: ', nextSelectedTags)
        setSelectedTags(nextSelectedTags)
    }

    return (
        <>
            <main className='p-4'>
                <h1 className='flex items-center justify-center'>{post.title}</h1>
                <div className='flex items-center justify-between mx-3'>
                    {/* author */}
                    <div>
                        <h3>author : {post.name} </h3>
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

                <p className='p-4 text-sm'>{post.body}</p>

                {comments?.map((item) => (
                    <Comments key={item.id} item={item} />
                ))}
            </main>
        </>
    )
}

export default Post
