export default function Basket( props ) {
	const { cartItems, onAdd, onRemove } = props;
	
	const itemsPrice = cartItems.reduce( ( total, item ) => total + item.price * item.quantity, 0 );
	const taxPrice = itemsPrice * 0.18;
	const shippingPrice = itemsPrice > 10000 ? 0 : 50;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;
	
	return (
		<aside className={'block col-1'}>
			<h2>Sepetim</h2>
			<div>
				{cartItems.length === 0 && <div>Sepet boş</div>}
			</div>
			{cartItems.map( ( item ) => (
				<div key={item.id} className={'row'}>
					<div className={'col-2'}>{item.name}</div>
					<div className={'col-2'}>
						<button onClick={() => onAdd( item )} className={'add'}>+</button>
						<button onClick={() => onRemove( item )} className={'remove'}>-</button>
					</div>
					<div className={'col-2 text-right'}>
						{item.quantity} x ₺{item.price.toFixed( 2 )}
					</div>
				</div>
			) )}
			{cartItems.length !== 0 && (
				<>
					<hr/>
					<div className={'row'}>
						<div className={'col-2'}>Birim Fiyatı</div>
						<div className={'col-1 text-right'}>₺{itemsPrice.toFixed( 2 )}</div>
					</div>
					<div className={'row'}>
						<div className={'col-2'}>Vergi Tutarı</div>
						<div className={'col-1 text-right'}>₺{taxPrice.toFixed( 2 )}</div>
					</div>
					<div className={'row'}>
						<div className={'col-2'}>Kargo Tutarı</div>
						<div className={'col-1 text-right'}>${shippingPrice.toFixed( 2 )}</div>
					</div>
					<div className={'row'}>
						<div className={'col-2'}>
							<strong>Toplam</strong>
						</div>
						<div className={'col-1 text-right'}>
							<strong>₺{totalPrice.toFixed( 2 )}</strong>
						</div>
					</div>
					<hr/>
					<button  onClick={()=>alert('Ödeme başarıyla gerçekleşti!')}>Ödeme</button>
				
				</>
			)}
		</aside> )
}

