import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white p-4 m-4 rounded-2xl">
            <h3 className="text-lg">{title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark:PropTypes.object
}

export default Bookmark;