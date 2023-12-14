import { FaUser } from 'react-icons/fa'
export default function App() {
    return (
        <header className='bg-blue-500 h-10'>
            <div className='flex items-center justify-between mx-3 '>
                <div className='w-10 h-10 '>
                    <img
                        src='https://cdn.pixabay.com/photo/2020/07/21/02/07/facebook-5424833_960_720.png'
                        alt='facebook'
                    />
                </div>
                <div>Blogs</div>
                <div className='flex gap-3 items-center'>
                    <FaUser />
                    <div>Adam</div>
                </div>
            </div>
        </header>
    )
}
