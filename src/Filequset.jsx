import React, { useEffect, useState } from "react";
import axios from "axios";

const Filequsetion = () => {
  const [products, setProducts] = useState([]);       // All products
  const [searchTerm, setSearchTerm] = useState("");   // Search input
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered results

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/audio");
        setProducts(res.data);
        setFilteredProducts(res.data); // Initially show all
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, []);

  // Handle input change and filter products
  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchTerm(keyword);

    if (keyword.trim() === "") {
      setFilteredProducts(products); // If search is empty, show all
    } else {
      const filtered = products.filter((item) =>
        item.songname.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Love Song</h2>

      {/* Search Input */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search song name"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Display Filtered Results */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-4 mb-3" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.songname}</h5>
                  <p className="card-text">
                    <a href={product.Url} class="btn btn-primary">Song Play</a>

                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No song found.</p>
        )}
      </div>
    </div>
  );
};

export default Filequsetion;