import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    // Post Detail | Open - Close
    const [isPostDetailOpen, setIsPostDetailOpen] = useState(false);
    const openPostDetail = () => setIsPostDetailOpen(true);
    const closePostDetail = () => setIsPostDetailOpen(false);

    // Post Detail | Show Post
    const [postToShow, setPostToShow] = useState({});

    // Favorites Posts | Add Post to favorites
    const [postFavorites, setPostFavorites] = useState([]);

    // Cargar los favoritos desde el almacenamiento local si existen
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('postFavorites')) || [];
        setPostFavorites(storedFavorites);
    }, []);

    // Guardar los favoritos en el almacenamiento local cada vez que cambien
    useEffect(() => {
        if (postFavorites.length > 0) {
            localStorage.setItem('postFavorites', JSON.stringify(postFavorites));
        }
    }, [postFavorites]);

    // Función para agregar o eliminar de favoritos
    const toggleFavorite = (post) => {
        const isAlreadyFavorite = postFavorites.some((favorite) => favorite.id === post.id);

        if (isAlreadyFavorite) {
            // Eliminar de favoritos
            const updatedFavorites = postFavorites.filter((favorite) => favorite.id !== post.id);
            setPostFavorites(updatedFavorites);
        } else {
            // Agregar a favoritos
            setPostFavorites([...postFavorites, post]);
        }
    };

    //Get Posts
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    //Get posts by Title
    const [searchByTitle, setSearchByTitle] = useState(null);

    //Get posts by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch("https://6787dbc8c4a42c9161088673.mockapi.io/api/v1/posts")
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        console.log('items: ', items)
        return items?.filter(item => item.tag.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }

    }

    useEffect(() => {
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);

    console.log('filteredItems: ', filteredItems)

    return (
        <PostContext.Provider
            value={{
                openPostDetail,
                closePostDetail,
                isPostDetailOpen,
                postToShow,
                setPostToShow,
                postFavorites,
                setPostFavorites,
                toggleFavorite,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

PostProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

