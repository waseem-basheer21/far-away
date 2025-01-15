/* eslint-disable react/prop-types */
export default function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        &nbsp;
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
