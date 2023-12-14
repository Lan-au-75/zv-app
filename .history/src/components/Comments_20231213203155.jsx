/* eslint-disable react/prop-types */
import { Collapse } from 'antd'
import { FaUser } from 'react-icons/fa'

function Comments({ comments }) {
    return (
        <div>
            <Collapse className='text-slate-400 cursor-pointer hover:text-red-500 '>
                {comments.length} replies
            </Collapse>
            <hr className='p-2 mt-3' />

            {comments.map((comment) => (
                <div key={comment.id} className='p-4 flex gap-5 items-center '>
                    <FaUser />
                    <div className='flex flex-col gap-3'>
                        <span className='text-gray-500 text-sm'>{comment.name}</span>
                        <p className='text-base'> {comment.body} </p>
                        <span>Rep to</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comments
