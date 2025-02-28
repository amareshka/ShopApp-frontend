import { useGetAllProductsQuery } from "../store/productsApi";

const Home = () => {
    useGetAllProductsQuery();

    return (<h2>Home</h2>)
}

export default Home;