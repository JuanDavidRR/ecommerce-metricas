import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (infiniteScroll, API) => {
  let limit = 0;
  let limitProducts = 5
  const [products, setProducts] = useState([]);

  const getNewProducts = async () => {
    if (infiniteScroll) {
      const newProducts = [];
      axios
        .get(`https://api.escuelajs.co/api/v1/products?limit=${limitProducts}&offset=${limit}`)
        .then(({ data }) => {
          //añadiendo los personajes al array
          data.map((c) => newProducts.push(c));
          //Guardando los personajes nuevos y antiguos en characters
          setProducts((product) => [...product, ...newProducts]);
      
        });
      limit+=5
      console.log(limit);
    } else {
      const response = await axios(API);
      setProducts(response.data);
    }
  };

  //Método para leer que llegamos abajo en el scroll
  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    //Si nuestra posicion del scroll es mayor a la altura del scroll
    //Ejecuta nuevamente la función de getCharacters
    if (currentHeight + 1 >= scrollHeight) {
      getNewProducts();
    }
  };

  useEffect(() => {
    getNewProducts();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return products;
};

export default useGetProducts;
