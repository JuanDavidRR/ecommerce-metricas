import React from 'react';
import '../styles/ProductInfo.scss';

import addToCart from '../assets/icons/bt_add_to_cart.svg';

const ProductInfo = ({ product, setToggleProduct, handleClick }) => {
	const addToCartAndClose = () => {
		handleClick(product);
		setToggleProduct(false);
	}

	return (
		<>
			<img src={product.productData.imageUrl} alt={product.productData.name} className="product"/>
			<div className="ProductInfo">
				<p>${product.productData.price}</p>
				<p>{product.productData.name}</p>
				<button
					className="primary-button add-to-cart-button"
					onClick={addToCartAndClose}
				>
					<img src={addToCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;