import { useState, useContext, useEffect } from "react";
import { PostContext } from '../../context';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const Card = (data) => {
    const context = useContext(PostContext);
    const [isFavorite, setIsFavorite] = useState(false);

    // Verifica si la tarjeta está en favoritos
    const checkFavoriteStatus = () => {
        return context.postFavorites.some(post => post.id === data.data.id);
    };

    // Mostrar los detalles del post
    const showPost = (PostDetail) => {
        context.openPostDetail();
        context.setPostToShow(PostDetail);
    };

    // Agregar o eliminar de favoritos
    const addPostFavorites = (e, PostFavoritesData) => {
        e.stopPropagation(); // Evita que el clic se propague al contenedor
        const isAlreadyFavorite = checkFavoriteStatus();

        if (isAlreadyFavorite) {
            // Eliminar de favoritos
            const updatedFavorites = context.postFavorites.filter(post => post.id !== PostFavoritesData.id);
            context.setPostFavorites(updatedFavorites);
            setIsFavorite(false);
        } else {
            // Agregar a favoritos
            context.setPostFavorites([...context.postFavorites, PostFavoritesData]);
            setIsFavorite(true);
        }

    };

    // Usamos useEffect para sincronizar el estado de favoritos con el contexto
    useEffect(() => {
        setIsFavorite(checkFavoriteStatus());
    }, [context.postFavorites, data.data.id]); // Solo se ejecuta cuando postFavorites o el id de la card cambia

    return (
        <div className="card" onClick={() => showPost(data.data)}>
            <div className="bg-white cursor-pointer rounded-lg shadow-gray-200 shadow-xl">
                <figure className="relative">
                    <img
                        className="rounded-tl-2xl rounded-tr-2xl w-full object-contain"
                        src={data.data.image}
                        alt={data.data.title}
                    />
                    <button
                        className={`text-4xl absolute top-0 right-0 flex justify-center items-center bg-white border-solid border border-gray-200 w-12 h-12 rounded-full m-6 p-2
                        ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
                        onClick={(e) => addPostFavorites(e, data.data)}
                        aria-label="Toggle favorite"
                    >
                        {isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
                    </button>
                </figure>
                <div className="p-8">
                    <div className="flex flex-col justify-center gap-5">
                        <span className="font-semibold text-indigo-500">{data.data.tag}</span>
                        <h2>{data.data.title}</h2>
                        <p className="text-gray-500">{data.data.description}</p>
                    </div>
                    <p className="mt-14 text-base flex justify-between text-gray-700">
                        <span>{data.data.date}</span>
                        <span>{data.data.read}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
