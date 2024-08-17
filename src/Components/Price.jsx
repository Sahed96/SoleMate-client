/* eslint-disable react/prop-types */
const Price = ({ handlePrice }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg">Price</h3>
      <form onChange={(e) => handlePrice(e.target.value)} className=" py-2">
        <div className="hover:bg-rose-200 rounded-lg p-1 cursor-pointer">
          <input
            value="all"
            type="radio"
            className=""
            name="price"
            id="price"
          />
          <label className="ml-2 cursor-pointer" htmlFor="price">
            All
          </label>
        </div>
        <div className="hover:bg-rose-200 rounded-lg p-1">
          <input
            value="lowest"
            className=""
            type="radio"
            name="price"
            id="price2"
          />
          <label className="ml-2" htmlFor="price2">
            $0-50
          </label>
        </div>
        <div className="hover:bg-green-200 rounded-lg p-1">
          <input value="middle" type="radio" name="price" id="price3" />
          <label className="ml-2" htmlFor="price3">
            $50-100
          </label>
        </div>
        <div className="hover:bg-green-200 rounded-lg p-1">
          <input value="highest" type="radio" name="price" id="price4" />
          <label className="ml-2" htmlFor="price4">
            $100-150
          </label>
        </div>
      </form>
    </div>
  );
};

export default Price;
