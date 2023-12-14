import { Space, Tag } from 'antd'
import Header from './components/Header'
export default function App() {

  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

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
            </main>
        </div>
    )
}
