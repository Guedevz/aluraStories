import { useState, useEffect } from "react";
import Layout from '../../components/Layout';
import Card from '../../components/Card';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://6787dbc8c4a42c9161088673.mockapi.io/api/v1/posts")
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <Layout>
            Home
            <div className="container__card">
                {
                    items?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
        </Layout>
    );
};

export default Home;
