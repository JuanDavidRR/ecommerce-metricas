import React, { lazy, useContext, useState } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import '../styles/Loading.scss'

import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import addedToCartImage from '../assets/icons/bt_added_to_cart.svg'

import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDetail = lazy(()=> import('../containers/ProductDetail'))


const ProductItem = ({ product }) => {
	const [ toggleProduct, setToggleProduct ] = useState(false);
	const { state, addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		if(state.cart.includes(item)) {
			return;
		} else {
			addToCart(item);
		}
	}

	const verifyAdded = (item) => {
		if(state.cart.includes(item)) {
			return addedToCartImage;
		} else {
			return addToCartImage;
		}
	}

	return (
		<div className="ProductItem">
			<LazyLoadImage
				src={product.productData.imageUrl}
				alt={product.productData.name} className="productImage skeleton header-img"
				onClick={() => setToggleProduct(!toggleProduct)}
			/>
			<div className="product-info">
				<div>
					<p>${product.productData.price}</p>
					<p>{product.productData.name}</p>
				</div>
				<figure
					onClick={() => handleClick(product)}
				>
					<LazyLoadImage alt={product.productData.name} src={verifyAdded(product)}/>
				</figure>
			</div>
			{toggleProduct && <ProductDetail
				product={product}
				setToggleProduct={setToggleProduct}
				handleClick={handleClick}
			/>}
		</div>
	);
}

export default ProductItem;