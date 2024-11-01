import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingtime] = useState(0);

  const handleAddBookmark = blog =>{
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
  }

  const handleMarkasRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingtime(newReadingTime);
    // removing mark as read blogs
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkasRead={handleMarkasRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
