import Header from './components/Header'
export default function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <div>
                    <h1>Post 1</h1>
                    <div>
                        <h3>author</h3>
                        <span className='mt-2'>created at: </span>
                    </div>
                </div>

                {/* search keyword */}
                <div></div>
            </main>
        </div>
    )
}
