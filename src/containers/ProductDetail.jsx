import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';


const ProductDetail = ({ product, setToggleProduct, handleClick }) => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close" onClick={() => setToggleProduct(false)}>
			<i className="fa-solid fa-xmark"></i>			</div>
			<ProductInfo
				product={product}
				setToggleProduct={setToggleProduct}
				handleClick={handleClick}
			/>
		</aside>
	);
}

export default ProductDetail;