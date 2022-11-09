import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import ProductList from "../containers/ProductList";
import axios from "axios";

import "../styles/Home.scss";

const Home = () => {

  return (

    <section className="Home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>La tienda más perrona | Tienda Perrona</title>
        <meta
          name="description"
          content="La tienda ideal para todos los desarrolladores"
        />
      </Helmet>
      <Header />
      <h1>Productos Perrones</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        sint rerum nisi quas minima nihil omnis. Quod, hic. Eos velit omnis
        molestiae veniam aut tenetur est qui eaque ullam unde?
      </p>
      <section className="banner">
        <div className="bannerBackground">
          <section className="bannerInfo">
            <h2>Shop the summer 2022 collection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
              ea dolorem ipsum porro. Dolorum odio dolore, officiis quisquam
              totam laboriosam iusto rem est debitis obcaecati aliquam? Illum,
              facere quo?
            </p>
          </section>
        </div>
      </section>
      <h2>Categoria perrona 1</h2>
      <ProductList infinityScroll={false} search={false} />

      <section className="banner2">

        <div className="bannerBackground">
          <section className="bannerInfo">
            <h2>Shop the summer 2022 collection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
              ea dolorem ipsum porro. Dolorum odio dolore, officiis quisquam
              totam laboriosam iusto rem est debitis obcaecati aliquam? Illum,
              facere quo?
            </p>
          </section>
        </div>
      </section>

      <h2>Categoria perrona 3</h2>

      <ProductList infinityScroll={false} search={false} />

    </section>
  );
};

export default Home;
