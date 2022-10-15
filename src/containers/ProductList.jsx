import React, { lazy, useState } from "react";
import "../styles/ProductList.scss";
import useGetProducts from "../hooks/useGetProducts";

const ProductItem = lazy(()=> import('../components/ProductItem'))

const ProductList = ({ limit = 25, search = false, customURL, infinityScroll, category}) => {
  let API = `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=1`;
  const products = useGetProducts(infinityScroll, customURL ? customURL : API);


  const [query, setQuery] = useState("");


  const onChangeQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const searchUsers = (item) => {
    return item.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
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
          <main className="ProductList">
            {searchUsers(products).map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </main>
        </section>
      ) : (
        <div className="ProductList">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
