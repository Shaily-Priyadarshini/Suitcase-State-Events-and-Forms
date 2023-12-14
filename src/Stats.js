export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding items to your packing List 🚀</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {packedPercentage !== 100 ? (
        <em>
          💼You have {numItems} items in your list, and you already packed{" "}
          {packedItems} ({packedPercentage}%)
        </em>
      ) : (
        <p> You have packed everything, You are ready to go ✈</p>
      )}
    </footer>
  );
}
