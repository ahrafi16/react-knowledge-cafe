import PropTypes from "prop-types";
import Bookmark from "../Boolmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 ml-4 mt-2 p-2 rounded-2xl">
            <div className="bg-[#6047EC1A] rounded-lg p-4 border border-[#6047EC]">
                <h3 className="text-xl text-[#6047EC] font-bold text-center">Spent time on read : {readingTime} min</h3>
            </div>
            <h2 className="tetx-3xl font-bold text-center mt-2">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;