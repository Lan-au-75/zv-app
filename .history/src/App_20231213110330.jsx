import { Space, Tag } from 'antd'
import Header from './components/Header'
export default function App() {
    return (
        <div>
            <Header></Header>
            <main className='p-4'>
                <h1 className='flex items-center justify-center'>Post 1</h1>
                <div className='flex items-center justify-between mx-3'>
                    <div>
                        <h3>author</h3>
                        <span className='mt-2'>created at: </span>
                    </div>
                    {/* search keyword */}
                    <div>
                        <Space size={[0, 8]} wrap>
                            <Tag color='#f50'>#f50</Tag>
                            <Tag color='#2db7f5'>#2db7f5</Tag>
                            <Tag color='#87d068'>#87d068</Tag>
                            <Tag color='#108ee9'>#108ee9</Tag>
                        </Space>
                    </div>
                </div>
            </main>
        </div>
    )
}
