export default function Header( props ) {
	const { countCartItems } = props;
	return (
		<header className={'row block center'}>
			<div>
				
				<a href="#"><h1>Alışveriş Sepeti Uygulaması</h1></a>
			</div>
			<div>
				<a href="#">
					Sepetim {' '} {countCartItems ? (
					<button className={'badge'}>{countCartItems}</button> ) : ''}
				</a> <a href="#">Kayıt Ol</a>
			</div>
		</header> )
}