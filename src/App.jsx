import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [markAsRead,setMarkAsRead] = useState(0)

  const handleAddToBookMark = blog => {
    const newBookMarks = [...bookmarks,blog]
    setBookmarks(newBookMarks)
  }

  const handleMarkAsRead = time => {
     const newTime = markAsRead + time
     setMarkAsRead(newTime)
  }

  return (
    <> 
        <Header></Header>
        <div className='md:flex'>
          <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
        </div>      
    </>
  )
}

export default App
