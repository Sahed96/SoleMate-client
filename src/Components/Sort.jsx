/* eslint-disable react/prop-types */
const Sort = ({ handleSort }) => {
  return (
    <div className="lg:mr-4 mr-0">
      <select
        onChange={(e) => handleSort(e.target.value)}
        name="sort"
        id="sort"
        className="select select-accent w-full  max-w-xs"
      >
        <option>sort by</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
        <option value="date">Newest first</option>
      </select>
    </div>
  );
};

export default Sort;
