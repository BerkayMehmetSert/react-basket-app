import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';


function App() {
	const { products } = data;
	const [ cartItems, setCartItems ] = useState( [] );
	
	const onAdd = ( product ) => {
		const search = cartItems.find( ( item ) => item.id === product.id );
		if ( search ) {
			setCartItems( cartItems.map( item => item.id === product.id ? {
				...search,
				quantity: search.quantity + 1
			} : item ) )
		} else {
			setCartItems( [ ...cartItems, { ...product, quantity: 1 } ] );
		}
	}
	
	const onRemove = ( product ) => {
		const search = cartItems.find( ( item ) => item.id === product.id );
		if ( search.quantity === 1 ) {
			setCartItems( cartItems.filter( item => item.id !== product.id ) );
		} else {
			setCartItems( cartItems.map( item => item.id === product.id ? {
				...search,
				quantity: search.quantity - 1
			} : item ) )
		}
	}
	
	return (
		<div className="App">
			<Header countCartItems={cartItems.length}/>
			<div className={'row'}>
				<Main onAdd={onAdd} products={products}/>
				<Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
			
			</div>
		</div>
	);
}

export default App;
