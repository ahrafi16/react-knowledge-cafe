import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddBookmark, handleMarkasRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 mt-2">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBookmark={handleAddBookmark} handleMarkasRead={handleMarkasRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark : PropTypes.func,
    handleMarkasRead : PropTypes.func
}

export default Blogs;