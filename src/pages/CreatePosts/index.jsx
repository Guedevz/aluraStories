import Layout from "../../components/Layout"


const CreatePosts = () => {
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center gap-6 px-5 text-center'>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold"}}>Create your new post!</h2>
                <p style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", fontWeight: "bold"}} className='text-3xl font-medium text-gray-500'>
                    Explore the future, share your innovation—your next big tech post is here!.
                </p>
            </div>
        </Layout>
    )
}

export default CreatePosts