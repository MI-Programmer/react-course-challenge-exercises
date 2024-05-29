import { useState } from "react";
import ListItem from "./ListItem";

/* eslint-disable react/prop-types */
const PackingList = ({
  listData,
  handleToggleList,
  handleDeleteList,
  handleDeleteAll,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = listData;

  if (sortBy === "desc")
    sortedItems = [...listData].sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === "status")
    sortedItems = [...listData].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleToggleList={handleToggleList}
            handleDeleteList={handleDeleteList}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SHORT BY INPUT ORDER</option>
          <option value="desc">SHORT BY DESCRIPTION</option>
          <option value="status">SHORT BY PACKED STATUS</option>
        </select>
        <button onClick={handleDeleteAll}>CLEAR LIST</button>
      </div>
    </div>
  );
};

export default PackingList;
