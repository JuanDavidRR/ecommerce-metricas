import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import Checkout from '../pages/Checkout';

import arrow from '../assets/icons/flechita.svg';
import { Link } from 'react-router-dom';

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	//const [ toggle, setToggle ] = useState(false);
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div
				className="title-container"
				onClick={() => setToggleOrders(!toggleOrders)}
			>
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product) => (
					<OrderItem
						product={product}
						key={`orderItem-${product.id}`}
					/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button" onClick={() => setToggleOrders(false)}>
					<Link to='/checkout'>Ir al pagar</Link>
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;