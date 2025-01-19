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
            Home
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
