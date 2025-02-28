
import { useEffect, useState } from 'react';
import AddBlogList from './component/AddBlogList'
import BlogList from './component/BlogList'

// Redux is a standalone state management library. it can be used with any frontend framework.




function App() {
  
  const [isAdded, setIsAdded] = useState(false);


  return (
  
      <div className='m-3 pt-5 px-1 bg-white text-black h-screen'>
        <h1 className='flex py-5 font-bold italic'>My Blog</h1>
        <div className='m-5 p-5 absolute top-5 end-0'>
        <button onClick={()=> setIsAdded(!isAdded)} className='bg-amber-600  size-16 rounded-[100%] flex justify-center items-center shadow-sm hover:shadow-lg hover:border-2 border-amber-700'>Add</button>
        </div>
        {isAdded ? <AddBlogList/> : null}
        <BlogList setIsAdded={setIsAdded}/>
      </div>
  
  )
}

export default App
