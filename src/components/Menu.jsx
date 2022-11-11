import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Menu.scss';

const Menu = () => {
	const {
    state: { cart },
  } = useContext(AppContext);

	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/account">Mi Cuenta</a>
				</li>
				<li>
					<a href="/signup">Salir</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;