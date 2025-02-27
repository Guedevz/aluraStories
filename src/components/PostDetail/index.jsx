import { useContext, useState, useEffect } from "react";
import { PostContext } from '../../context'
import { IoClose } from "react-icons/io5";

const PostDetail = () => {

    const context = useContext(PostContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedPost, setEditedPost] = useState(null);

    useEffect(() => {
        if (context.postToShow) {
            setEditedPost({ ...context.postToShow });
        }
    }, [context.postToShow]);

    const handleDeletePost = async () => {
        try {
            const response = await fetch(`https://6787dbc8c4a42c9161088673.mockapi.io/api/v1/posts/${context.postToShow.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Eliminar el post de la lista local después de que se haya borrado de la API
                context.deletePost(context.postToShow.id);
                alert('Post deleted successfully!');
            } else {
                alert('Error deleting the post');
            }
        } catch (error) {
            console.error('Error deleting the post:', error);
            alert('There was an error deleting the post');
        }
    };

    const handleEditPost = async () => {
        try {
            const response = await fetch(`https://6787dbc8c4a42c9161088673.mockapi.io/api/v1/posts/${context.postToShow.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedPost),
            });

            if (response.ok) {
                context.updatePost(editedPost);  // Actualizar el estado en el contexto
                alert('Post updated successfully!');
                setIsEditing(false);  // Cerrar el formulario de edición
            } else {
                alert('Error updating the post');
            }
        } catch (error) {
            console.error('Error updating the post:', error);
            alert('There was an error updating the post');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <aside className={`${context.isPostDetailOpen ? 'flex' : 'hidden'}
        fixed inset-0 z-40 items-center justify-center bg-black/50 backdrop-blur-sm`}>
            <div className='relative w-full md:w-1/2 flex flex-col gap-12 bg-white rounded-lg shadow-lg p-8 overflow-y-auto' style={{ maxHeight: "90vh" }}>
                <div className='flex justify-between items-center pb-8'>
                    <div className='flex gap-6'>
                        {!isEditing && (
                            <>
                                <button className='edit py-4 px-10 text-2xl rounded-lg text-white bg-indigo-400' onClick={() => setIsEditing(true)}>Edit</button>
                                <button className='delete py-4 px-10 text-2xl rounded-lg text-white bg-red-500' onClick={handleDeletePost}>Delete</button>
                            </>
                        )}
                        {isEditing && (
                            <>
                                <button className='save py-4 px-10 text-2xl rounded-lg text-white bg-green-500' onClick={handleEditPost}>Save Changes</button>
                                <button className='delete py-4 px-10 text-2xl rounded-lg text-white bg-red-500' onClick={handleDeletePost}>Delete</button>
                            </>
                        )}
                    </div>
                    <button className='p-2 bg-indigo-500 text-3xl text-white rounded-full' onClick={() => context.closePostDetail()}>
                        <IoClose />
                    </button>
                </div>
                {isEditing ? (
                    <div>
                        {/* Form for editing the post */}
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={editedPost.title || ''}
                            onChange={handleChange}
                            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                        />
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={editedPost.description || ''}
                            onChange={handleChange}
                            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                        />
                        <label htmlFor="info">Information:</label>
                        <textarea
                            name="info"
                            value={editedPost.info || ''}
                            onChange={handleChange}
                            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                        />
                        <label htmlFor="date">Date:</label>
                        <input
                            type="text"
                            name="date"
                            value={editedPost.date || ''}
                            onChange={handleChange}
                            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                        />
                        <label htmlFor="read">Reading time:</label>
                        <input
                            type="text"
                            name="read"
                            value={editedPost.read || ''}
                            onChange={handleChange}
                            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                        />
                        <label htmlFor="image">Image:</label>
                        <input
                            type="text"
                            name="image"
                            value={editedPost.image || ''}
                            onChange={handleChange}
                            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                        />
                    </div>
                ) : (
                    <div className='grid gap-12'>
                        <figure>
                            <img className='w-full h-full rounded-lg' src={context.postToShow.image} alt="image" />
                        </figure>
                        <div className='flex flex-col gap-4'>
                            <p style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold" }}>{context.postToShow.title}</p>
                            <p className='flex gap-8 text-gray-400 font-medium'>
                                <span>{context.postToShow.date}</span>
                                <span>{context.postToShow.read}</span>
                            </p>
                            <p className='text-gray-700'>{context.postToShow.info}</p>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}

export default PostDetail;
