import { createContext } from 'react';
import PropTypes from 'prop-types';

const PostContext = createContext();

export const PostProvider = ({children}) => {
    return (
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    )
}

PostProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

