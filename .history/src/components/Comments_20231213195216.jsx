/* eslint-disable react/prop-types */
function Comments({ comments }) {
    // console.log(comment)
    return (
        <div>
            <span className='bg-slate-400'>replies</span>
            <hr />

            {comments.map((comment) => (
                <div key={comment.id} className='p-4'>
                    {console.log(comment)}
                    <img src='' alt='' />
                    <div className='flex flex-col items-center gap-3'>
                        <span className='text-gray-500 text-sm'>{comment.name}</span>
                        <p className='text-base'> {comment.body} </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comments
