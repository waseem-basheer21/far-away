/* eslint-disable react/prop-types */
export default function Stats({ addNewItem }) {
  if (addNewItem.length === 0) {
    return (
      <footer className="stats">
        Start adding items to your packing list🚀
      </footer>
    );
  }
  const numItems = addNewItem.length;
  const numPacked = addNewItem.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything packed! Ready to go✈️"
          : `You have ${numItems} items on your list,and you already packed${" "}
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
