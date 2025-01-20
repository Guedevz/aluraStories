import { useContext } from "react";
import { PostContext } from "../../context";
import { IoHeartSharp } from "react-icons/io5";
import Layout from "../../components/Layout";

const Favorites = () => {
    const { postFavorites, setPostFavorites } = useContext(PostContext);

    // Función para eliminar un post de favoritos
    const removeFavorite = (e, post) => {
        e.stopPropagation(); // Evitar que el clic en el botón dispare el evento de la tarjeta

        // Filtramos el post seleccionado para eliminarlo de los favoritos
        const updatedFavorites = postFavorites.filter(favPost => favPost.id !== post.id);
        setPostFavorites(updatedFavorites);
    };

    return (
        <Layout>
            <div className='flex flex-col justify-center items-center gap-6 px-5 text-center'>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold"}}>Favorites</h2>
            </div>
            <div className="container__card">
                {postFavorites.length > 0 ? (
                    postFavorites.map((data, index) => (
                        <div key={index} className="card">
                            <div className="bg-white cursor-pointer rounded-lg shadow-gray-200 shadow-xl">
                                <figure className="relative">
                                    <img
                                        className="rounded-tl-2xl rounded-tr-2xl w-full object-contain"
                                        src={data.image}
                                        alt={data.title}
                                    />
                                    <button
                                        className={`text-4xl absolute top-0 right-0 flex justify-center items-center bg-white border-solid border border-gray-200 w-12 h-12 rounded-full m-6 p-2
                                        ${postFavorites.includes(data) ? "text-red-500" : "text-gray-400"}`}
                                        onClick={(e) => removeFavorite(e, data)}
                                        aria-label="Remove from favorites"
                                    >
                                        <IoHeartSharp />
                                    </button>
                                </figure>
                                <div className="p-8">
                                    <div className="flex flex-col justify-center gap-5">
                                        <span className="font-semibold text-indigo-500">
                                            {data.tag}
                                        </span>
                                        <h2>{data.title}</h2>
                                        <p className="text-gray-500">
                                            {data.description}
                                        </p>
                                    </div>
                                    <p className="mt-14 text-base flex justify-between text-gray-700">
                                        <span>{data.date}</span>
                                        <span>{data.read}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No favorites added yet.</p>
                )}
            </div>
        </Layout>
    );
};

export default Favorites;
