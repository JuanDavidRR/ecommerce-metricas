import React, { lazy, useEffect, useState } from "react";
import "../styles/ProductList.scss";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import '../styles/Home.scss'

const ProductItem = lazy(()=> import('../components/ProductItem'))


const Category = ({ limit = 25, infinityScroll }) => {
  const params = useParams();

  let API = `https://api.escuelajs.co/api/v1/categories/${params.id}/products?limit=25&offset=1`;

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const onChangeQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const searchUsers = (item) => {
    return item.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  };

  const getProductsByCategory = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProductsByCategory();
  }, [params.id]);

  return (
    <section className="Home">
      <Helmet>
        <meta charSet="utf-8" />
        <title> {`${products[0]?.category.name}`} | Tienda Perrona</title>
        <meta
          name="description"
          content="La tienda ideal para todos los desarrolladores"
        />
      </Helmet>
      <h1>{products[0]?.category.name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        et ipsam illo magnam, quia sit omnis? Maiores nemo consequuntur at
        officiis delectus in sequi autem tempore, iusto illo voluptatibus nihil.
      </p>
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
    </section>
  );
};

export default Category;
