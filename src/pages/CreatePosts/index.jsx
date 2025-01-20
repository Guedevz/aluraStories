import { useState } from 'react';
import Layout from "../../components/Layout"

const CreatePosts = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        info: '',
        tag: '',
        date: '',
        read: '',
        image: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const tags = [
        'Web Development',
        'Data Science',
        'Marketing',
        'Digital Content',
        'Blockchain and Web3',
        'Cybersecurity'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch('https://6787dbc8c4a42c9161088673.mockapi.io/api/v1/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error saving data');
            }

            const data = await response.json();
            setSuccess('Post successfully created!');
            console.log('Respuesta API:', data);

            // Resetear el formulario
            setFormData({
                title: '',
                description: '',
                info: '',
                tag: '',
                date: '',
                read: '',
                image: ''
            });
        } catch (error) {
            setError(error.message || 'There was an error saving the data');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <Layout>
            <div className='flex flex-col justify-center items-center gap-6 px-5 text-center'>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold"}}>Create your new post!</h2>
                <p style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", fontWeight: "bold"}} className='text-3xl font-medium text-gray-500'>
                    Explore the future, share your innovation—your next big tech post is here!.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className='form mt-20 mb-32 bg-white rounded-lg shadow-gray-200 shadow-xl w-[90%] lg:w-[50%] p-8 lg:p-24 flex flex-col gap-8 justify-center '>

                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="title">Title:</label>
                    <input
                        className='w-full rounded-lg border-2 border-indigo-400 p-4 focus:outline-none'
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter the title..."
                        required
                    />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="description">Description:</label>
                    <input
                        className='w-full rounded-lg border-2 border-indigo-400 p-4 focus:outline-none'
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter description..."
                        required
                    />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="info">Information:</label>
                    <textarea
                        className='w-full rounded-lg border-2 border-indigo-400 p-4 focus:outline-none h-72 scroll-auto'
                        id="info"
                        name="info"
                        value={formData.info}
                        onChange={handleInputChange}
                        placeholder="Write posts content..."
                        required
                    ></textarea>
                </div>
                <div className='flex flex-col gap-2 w-2/4'>
                    <label htmlFor="tag">Tags:</label>
                    <select
                        className='w-full rounded-lg border-2 border-indigo-400 p-4 focus:outline-none'
                        id="tag"
                        name="tag"
                        value={formData.tag}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select a tag</option>
                        {tags.map((tag, index) => (
                            <option key={index} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-2 w-2/4'>
                    <label htmlFor="date">Date:</label>
                    <input
                        className='w-full rounded-lg border-2 border-indigo-400 p-4 focus:outline-none'
                        type="text"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        placeholder="Type format: 5 JANUARY"
                        required
                    />
                </div>
                <div className='flex flex-col gap-2 w-2/4'>
                    <label htmlFor="read">Reading time:</label>
                    <input
                        className='w-full rounded-lg border-2 border-indigo-400 p-4 focus:outline-none'
                        type="text"
                        id="read"
                        name="read"
                        value={formData.read}
                        onChange={handleInputChange}
                        placeholder="Example: 5 MINS READ"
                        required
                    />
                </div>
                <div className='flex flex-col gap-2 w-full mb-16'>
                    <label htmlFor="image">Image:</label>
                    <input
                        className='w-full rounded-lg border-2 border-indigo-400 p-4 focus:outline-none'
                        type="url"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="Enter the URL of the image..."
                        required
                    />
                </div>
                <div className='w-full flex justify-center items-center'>
                    <button type="submit" disabled={isSubmitting} className='py-4 px-10 rounded-lg bg-indigo-400 text-white font-medium'>
                        {isSubmitting ? 'Creating...' : 'Create Post'}
                    </button>
                </div>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
            </form>
        </Layout>
    )
}

export default CreatePosts