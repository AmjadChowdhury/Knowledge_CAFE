import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,markAsRead}) => {
    return (
        <div className='md:w-1/3 mt-2 mr-4'>
            
            <div className='bg-gray-200 p-4 rounded-lg'>
                <h3 className='text-3xl text-purple-950 font-extrabold p-3 bg-orange-200 rounded-lg'>Reading Time : {markAsRead} min</h3>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    markAsRead: PropTypes.number
}

export default Bookmarks;