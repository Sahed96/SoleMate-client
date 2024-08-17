/* eslint-disable react/prop-types */

import Timestamp from "react-timestamp";
import Star from "./Star";

const Cards = ({ product }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {product.map((item, idx) => (
        <div
          key={idx}
          className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#b9e8f0]"
        >
          <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
              {/* love  */}
              <div className="flex bg-[#a2e7cb] items-center px-2 rounded-lg">
                {" "}
                <Star stars={item.ratings} />
              </div>
              <button className="rounded-xl bg-[#0095FF] px-2 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                {item.category}
              </button>
            </div>

            <img
              width={400}
              height={400}
              className="rounded-lg bg-black/40 object-cover"
              src={item.productImage}
              alt="card navigate ui"
            />
          </div>
          <div className="space-y-2 font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">
              {item.productName}
            </h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">
              {item.description}
            </p>
            <div className="flex justify-between">
              <p>${item.price}</p>
              <p>
                <Timestamp date={item.creationDateTime} />
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
            <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
              View Details
            </button>
            <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
