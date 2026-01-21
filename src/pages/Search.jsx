import { useSearchParams } from "react-router-dom";

const products = [
  { id: 1, name: "Mobile Phone" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Smart Watch" },
  { id: 5, name: "Camera" },
];

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for: "{query}"</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {filteredProducts.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
