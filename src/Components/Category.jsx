/* eslint-disable react/prop-types */
const Category = ({ handleChange }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg">Category</h3>
      <form onChange={(e) => handleChange(e.target.value)} className="py-2">
        <div className="hover:bg-green-200 rounded-lg p-1 cursor-pointer">
          <input
            value="all"
            type="radio"
            className=""
            name="category"
            id="all"
          />
          <label className="ml-2 cursor-pointer" htmlFor="all">
            All
          </label>
        </div>
        <div className="hover:bg-green-200 rounded-lg p-1">
          <input value="Sneakers" type="radio" name="category" id="sneakers" />
          <label className="ml-2" htmlFor="sneakers">
            Sneakers
          </label>
        </div>
        <div className="hover:bg-green-200 rounded-lg p-1">
          <input value="Flats" type="radio" name="category" id="flats" />
          <label className="ml-2" htmlFor="flats">
            Flats
          </label>
        </div>
        <div className="hover:bg-green-200 rounded-lg p-1">
          <input value="Sandals" type="radio" name="category" id="sandals" />
          <label className="ml-2" htmlFor="sandals">
            Sandals
          </label>
        </div>
        <div className="hover:bg-green-200 rounded-lg p-1">
          <input value="Heels" type="radio" name="category" id="heels" />
          <label className="ml-2" htmlFor="heels">
            Heels
          </label>
        </div>
      </form>
    </div>
  );
};

export default Category;
