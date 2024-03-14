import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const {cover,title,author,author_img,reading_time,posted_date,hashtags} = blog
    console.log(blog)
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-20 h-20 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <h3>{posted_date}</h3>
                    </div>
                </div>
                <div>
                    <span>Reading time {reading_time}</span>
                </div>
            </div>
            <h2 className='text-3xl font-bold '>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;