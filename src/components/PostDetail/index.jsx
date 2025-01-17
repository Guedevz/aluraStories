import { useContext } from "react";
import { PostContext } from '../../context'
import { IoClose } from "react-icons/io5";

const PostDetail = () => {

    const context = useContext(PostContext)

    return (
        <aside className={`${context.isPostDetailOpen ? 'flex' : 'hidden'}
        fixed inset-0 z-40 items-center justify-center bg-black/50 backdrop-blur-sm`}>
            <div className='relative w-full md:w-1/2 flex flex-col gap-12 bg-white rounded-lg shadow-lg p-8 overflow-y-auto' style={{ maxHeight: "90vh" }} >
                <div className='flex justify-between items-center pb-8'>
                    <div className='flex gap-6'>
                        <button className='py-4 px-10 text-2xl rounded-lg text-white  bg-indigo-400'>Edit</button>
                        <button className='py-4 px-10 text-2xl rounded-lg text-white  bg-red-500'>Delete</button>
                    </div>
                        <button className='p-2 bg-indigo-500 text-3xl text-white rounded-full' onClick={()=> context.closePostDetail()}>
                            <IoClose />
                        </button>
                </div>
                <figure>
                    <img className='w-full h-full rounded-lg' src={context.postToShow.image} alt="image" />
                </figure>
                <p style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold"}}>{context.postToShow.title}</p>
                <p className='flex gap-8 text-gray-400 font-medium'>
                    <span>{context.postToShow.date}</span>
                    <span>{context.postToShow.read}</span>
                </p>
                <p className='text-gray-700'>{context.postToShow.info}</p>
            </div>
        </aside>

    )
}

export default PostDetail