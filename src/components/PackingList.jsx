/* eslint-disable react/prop-types */
import Item from "./Item";

export default function PackingList({
  addNewItem,
  handleDelete,
  handleUpdate,
  setAddNewItem
}) {  
      const handleClear = ()=>{   
       const confirmed =  confirm("Are you sure you want to clear the list?");
       if (confirmed) setAddNewItem([])
      }
          
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
      <div className="actions">
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
}
