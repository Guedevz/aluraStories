import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";


const Card = (data) => {

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className='card'>
            <div className='bg-white cursor-pointer rounded-lg shadow-gray-200 shadow-xl'>
                <figure className='relative'>
                    <img className='rounded-tl-2xl rounded-tr-2xl w-full object-contain' src={data.data.image} />
                    <button className={`text-4xl absolute top-0 right-0 flex justify-center items-center bg-white border-solid border border-gray-200 w-12 h-12 rounded-full m-6 p-2
                    ${isFavorite ? 'text-red-500' : 'text-gray-400'}`} onClick={() => setIsFavorite(!isFavorite)} aria-label="Toggle favorite">
                        {isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
                    </button>
                </figure>
                <div className='p-8'>
                    <div className='flex flex-col justify-center gap-5'>
                        <span className='font-semibold text-indigo-500'>{data.data.tag}</span>
                        <h2>{data.data.title}</h2>
                        <p className='text-gray-500'>{data.data.description}</p>
                    </div>
                    <p className='mt-14 text-base flex justify-between text-gray-700'>
                        <span>{data.data.date}</span>
                        <span>{data.data.read}</span>
                        <span>{data.data.views}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card