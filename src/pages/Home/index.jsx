import { useContext } from "react";
import { PostContext } from '../../context';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Filters from "../../components/Filters";
import PostDetail from "../../components/PostDetail";

const Home = () => {

const context = useContext(PostContext);

    return (
        <Layout>
            <div className='flex flex-col justify-center items-center gap-6 px-5 text-center'>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold"}}>Hello and welcome to my blog!</h2>
                <p style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", fontWeight: "bold"}} className='text-3xl font-medium text-gray-500'>
                    Stay updated with the latest posts about technology.
                </p>
            </div>
            <input type="text" placeholder="Search a post" className='rounded-lg border-2 border-indigo-400 w-[30rem] p-4 mt-28 focus:outline-none'/>
            <Filters />
            <div className="container__card">
                {
                    context.items?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            <PostDetail />
        </Layout>
    );
};

export default Home;
