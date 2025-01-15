import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const MasonryLayout = () => {
    return (
        <div className="masonry">
            <Card />
        </div>
    );
};

const Card = () => {

    const [isFavorite, setIsFavorite] = useState(false);

    return (

        <div className='bg-white cursor-pointer rounded-lg shadow-gray-200 shadow-xl'>
            <figure className='relative'>
                <img className='rounded-tl-2xl rounded-tr-2xl w-full object-contain' src="https://images.pexels.com/photos/28055253/pexels-photo-28055253/free-photo-of-diseno-de-cocina.jpeg" />
                <button className={`text-4xl absolute top-0 right-0 flex justify-center items-center bg-white border-solid border border-gray-200 w-12 h-12 rounded-full m-6 p-2
                ${isFavorite ? 'text-red-500' : 'text-gray-400'}`} onClick={() => setIsFavorite(!isFavorite)} aria-label="Toggle favorite">
                    {isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
                </button>
            </figure>
            <div className='p-8'>
                <div className='flex flex-col justify-center gap-5'>
                    <span className='font-semibold text-indigo-500'>Lifestyle</span>
                    <h2>Project Ideas Around the House</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, hic, aut quo odio possimus eligendi nisi ducimus quam repudiandae distinctio cumque repellat saepe libero eius inventore error tempora quae quidem!</p>
                </div>
                <p className='mt-14 text-base flex justify-between text-gray-700'>
                    <span>15 JANUARY</span>
                    <span>12 MINS READ</span>
                    <span>23K VIEWS</span>
                </p>
            </div>
        </div>
    )
}

export default MasonryLayout