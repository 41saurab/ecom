import Hero from "../components/Hero";
import Products from "../components/Products";
import CategoryList from "../components/CategoryList";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <Hero />
      <CategoryList />
      <Products />
    </div>
  );
};

export default Home;
