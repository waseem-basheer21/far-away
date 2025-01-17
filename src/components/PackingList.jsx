/* eslint-disable react/prop-types */
import Item from "./Item";

export default function PackingList({
  addNewItem,
  handleDelete,
  handleUpdate,
}) {
  return (
    <div className="list">
      <ul className="">
        {addNewItem.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
}
