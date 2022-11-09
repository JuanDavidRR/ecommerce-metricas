import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext';
import close from '../assets/icons/icon_close.png';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.productData.imageUrl} alt={product.productData.name} />
			</figure>
			<p>{product.productData.name}</p>
			<p>${product.productData.price}</p>
			<i className="fa-solid fa-xmark" onClick={() => handleRemove(product)}></i>
		</div>
	);
}

export default OrderItem;