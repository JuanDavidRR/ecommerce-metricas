import React, { lazy, useState } from "react";
import "../styles/ProductList.scss";
import useGetProducts from "../hooks/useGetProducts";

const ProductItem = lazy(() => import("../components/ProductItem"));

const ProductList = ({
  limit = 25,
  search = false,
  customURL,
  infinityScroll,
}) => {
  let API = `http://localhost:3000/api/product/list`;
  const products = useGetProducts(infinityScroll, customURL ? customURL : API);

  const [query, setQuery] = useState("");
  const [clothes, setClothes] = useState(false);
  const [accesories, setAccesories] = useState(false);

  const onChangeQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
    setClothes(false);
    setAccesories(false);
  };

  const filterProducts = (item) => {
    if (clothes) {
      return item.filter((product) => product.categoryData.name === "ropa");
    } else if (accesories) {
      return item.filter(
        (product) => product.categoryData.name === "accesorios"
      );
    } else {
      return item.filter((product) =>
        product.productData.name.toLowerCase().includes(query)
      );
    }
  };

  const filterByCategory = (e) => {
    if (e.target.id === "clothes") {
      setClothes(true);
      setAccesories(false);
      setQuery("");
    } else if (e.target.id === "accesories") {
      setClothes(false);
      setAccesories(true);
      setQuery("");
    } else {
      setClothes(false);
      setAccesories(false);
    }
  };

  return (
    <section className="main-container">
      {search ? (
        <section>
          <input
            type="text"
            className="search"
            placeholder="search"
            onKeyUp={onChangeQuery}
          />
          <div className="search-button">
            <button id="all" onClick={filterByCategory} className="btn">
              Todos
            </button>
            <button id="clothes" onClick={filterByCategory} className="btn">
              Ropa
            </button>
            <button id="accesories" onClick={filterByCategory} className="btn ">
              Accesorios
            </button>
          </div>
          <main className="ProductList">
            {filterProducts(products).map((product) => (
              <ProductItem
                product={product}
                key={product.productId}
              />
            ))}
          </main>
        </section>
      ) : (
        <div className="ProductList">
          {products.slice(0, 4).map((product) => (
            <ProductItem
              product={product}
              key={product.productId}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
