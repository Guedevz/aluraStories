import { createContext } from 'react';
import PropTypes from 'prop-types';

const FavoritesPostContext = createContext();

const FavoritesPostProvider = ({ children }) => {
    return (
        <FavoritesPostContext.Provider value={{}}>
            {children}
        </FavoritesPostContext.Provider>
    );
};

FavoritesPostProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FavoritesPostProvider;
