import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-blue-400 p-4 my-2 rounded-lg'>
            <h3 className='text-3xl text-white'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object
}

export default Bookmark;