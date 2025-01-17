import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PostContext = createContext();

export const PostProvider = ({children}) => {

    // Post Detail | Open - Close
    const [isPostDetailOpen, setIsPostDetailOpen] = useState(false)
    const openPostDetail = () => setIsPostDetailOpen(true)
    const closePostDetail = () => setIsPostDetailOpen(false)

    // Post Detail | Show Post
    const [postToShow, setPostToShow] = useState({})


    return (
        <PostContext.Provider value={{
            openPostDetail,
            closePostDetail,
            isPostDetailOpen,
            postToShow,
            setPostToShow
        }}>
            {children}
        </PostContext.Provider>
    )
}

PostProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

