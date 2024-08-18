import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Discover Your Perfect Pair at{" "}
        <span className="text-blue-500">SoleMate</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 text-center">
        Where comfort meets style, and every step tells a story. Explore our
        latest collection to find shoes that are just as unique as you are.
      </p>
      <Link
        to="/products"
        className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Explore Our Collection
      </Link>
    </div>
  );
};

export default Home;
