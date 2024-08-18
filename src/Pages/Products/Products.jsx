import { useState } from "react";
import Cards from "../../Components/Cards";
import Category from "../../Components/Category";
import Price from "../../Components/Price";
import Search from "../../Components/Search";
import Sort from "../../Components/Sort";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "../../Components/Pagination";

const Products = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [range, setRange] = useState("");
  const [page, setPage] = useState(1);

  const { data: productData = {} } = useQuery({
    queryKey: ["product", value, category, name, range, page],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/allProducts?value=${value}&category=${category}&search=${name}&range=${range}&page=${page}`
      );
      return res.data;
    },
  });

  const { products = [], totalPages } = productData;

  const handleSort = (sort) => {
    setValue(sort);
    setPage(1);
  };

  const handleChange = (categoryValue) => {
    setCategory(categoryValue);
    setPage(1);
  };

  const handleSearch = (searchValue) => {
    setName(searchValue);
    setPage(1);
  };

  const handlePrice = (priceRange) => {
    setRange(priceRange);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex">
      <div className="w-[20%] min-h-screen">
        <div className="max-h-56 bg-slate-200 px-8 pt-2 rounded-xl mx-5 mt-4">
          <Category handleChange={handleChange} />
        </div>
        <div className="max-h-56 bg-slate-200 px-8 pt-2 rounded-xl mx-5 mt-4">
          <Price handlePrice={handlePrice} />
        </div>
      </div>
      <div className="w-[80%] p-6">
        <div className="flex justify-between">
          <form>
            <Search handleSearch={handleSearch} />
          </form>
          <form>
            <Sort handleSort={handleSort} />
          </form>
        </div>
        <div>
          <Cards product={products} />
        </div>
        <div className="mt-10">
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
