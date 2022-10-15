import React from "react";
import { Helmet } from "react-helmet";
import ProductList from "../containers/ProductList";
import "../styles/Products.scss";

const Products = () => {
  return (
    <section className="Products">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Productos | Tienda Perrona</title>
        <meta
          name="description"
          content="La tienda ideal para todos los desarrolladores"
        />
      </Helmet>
      <h1>Descubre la magia</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        architecto dolores consequatur minima autem exercitationem facere
        debitis nihil ut, soluta, quasi harum recusandae nobis fugiat quibusdam
        illo laudantium aliquid rem!
      </p>
      <ProductList infinityScroll={true} search={true} />
    </section>
  );
};

export default Products;
