/* eslint-disable react/prop-types */
const ListItem = ({ item, handleDeleteList, handleToggleList }) => {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleToggleList(item.id)}
      />
      <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteList(item.id)}>❌</button>
    </li>
  );
};

export default ListItem;
