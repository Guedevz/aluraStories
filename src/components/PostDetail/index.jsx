import { IoClose } from "react-icons/io5";

const PostDetail = () => {
    return (
        <aside className='w-[360px] top-[85px] h-[calc(100vh-85px)] flex flex-col fixed right-0 border border-black bg-indigo-100'>
            <div className='flex justify-between items-center p-8'>
                <div className='flex gap-6'>
                    <button className='py-4 px-10 text-2xl rounded-lg text-white  bg-indigo-400'>Edit</button>
                    <button className='py-4 px-10 text-2xl rounded-lg text-white  bg-red-500'>Delete</button>
                </div>
                    <button className='p-2 bg-indigo-500 text-3xl text-white rounded-full'>
                        <IoClose />
                    </button>
            </div>
        </aside>

    )
}

export default PostDetail