import { useState } from "react";
import Cards from "../../Components/Cards";
import Category from "../../Components/Category";
import Price from "../../Components/Price";
import Search from "../../Components/Search";
import Sort from "../../Components/Sort";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [range, setRange] = useState("");

  const { data: product = [] } = useQuery({
    queryKey: ["product", value, category, name, range],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/allProducts?value=${value}&category=${category}&search=${name}&range=${range}`
      );
      return res.data;
    },
  });

  const handleSort = (sort) => {
    setValue(sort);
    console.log(sort, "handleSort", value);
  };

  const handleChange = (categoryValue) => {
    setCategory(categoryValue);
    console.log(categoryValue, "handleChange", category);
  };

  const handleSearch = (searchValue) => {
    setName(searchValue);
  };

  const handlePrice = (priceRange) => {
    setRange(priceRange);
    console.log(priceRange, "handlePrice", range);
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
          <Cards product={product}></Cards>
        </div>
      </div>
    </div>
  );
};

export default Products;
