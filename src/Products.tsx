 import { Link , Outlet} from 'react-router-dom'

 const Products = () => {
	return (
			<>
				<input type="search" placeholder="search for products"/>
				<nav>
					<Link to='featured-products'>Featured</Link>
					<Link to='new-products'>New</Link>
				</nav>
				<Outlet />
			</>
		
	);
}
export default Products