import { useContext } from "react";
import { PostContext } from '../../context'
import { IoClose } from "react-icons/io5";

const PostDetail = () => {

    const context = useContext(PostContext)
    console.log('PRODUCT TO SHOW:', context.postToShow)

    return (
        <aside className={`${context.isPostDetailOpen ? 'flex' : 'hidden'}
        w-[360px] top-[85px] h-[calc(100vh-85px)] flex-col fixed right-0 border border-black bg-indigo-100`}>
            <div className='flex justify-between items-center p-8'>
                <div className='flex gap-6'>
                    <button className='py-4 px-10 text-2xl rounded-lg text-white  bg-indigo-400'>Edit</button>
                    <button className='py-4 px-10 text-2xl rounded-lg text-white  bg-red-500'>Delete</button>
                </div>
                    <button className='p-2 bg-indigo-500 text-3xl text-white rounded-full'>
                        <IoClose />
                    </button>
            </div>
            <figure>
                <img className='w-full h-full' src={context.postToShow.image} alt="image" />
            </figure>
            <p>{context.postToShow.title}</p>
            <p>
                <span>{context.postToShow.date}</span>
                <span>{context.postToShow.read}</span>
            </p>
            <p>{context.postToShow.info}</p>
        </aside>

    )
}

export default PostDetail