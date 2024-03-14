import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({ blog,handleAddToBookMark,handleMarkAsRead }) => {
    const {cover,title,author,author_img,reading_time,posted_date,hashtags} = blog
    console.log(blog)
    return (
        <div className='mx-4 p-2 mb-12 space-y-3'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-20 h-20 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold text-blue-500'>{author}</h3>
                        <h3 className='font-semibold text-xl'>{posted_date}</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='text-green-700 font-bold mr-2'>{reading_time}</span><span className='font-bold'> minute read</span>
                    <button onClick={() => handleAddToBookMark(blog)} className='ml-4 text-3xl'><MdOutlineBookmarks></MdOutlineBookmarks></button> 
                </div>
            </div>
            <h2 className='text-3xl font-bold '>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span className='mr-2' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark : PropTypes.function,
    handleMarkAsRead : PropTypes.function
}

export default Blog;