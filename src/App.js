//App.jsremove-button

import React, { useState } from 'react';
import './App.css';
// import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {
	const [products, setproducts] = useState([
		{ id: 1, 
		name: 'T-shirt', 
		price: 499, 
		image: 
'https://i.ibb.co/kKdVZVQ/TSHIRT.jpg'
		},
		{ id: 2, 
		name: 'Jeans', 
		price: 1699, 
		image: 
'https://i.ibb.co/3zPwm2S/jeans.webp'
		},
		{ id: 3, 
		name: 'Shoes', 
		price: 7999, 
		image: 
'https://i.ibb.co/9HcxW5S/shoes.jpg'
		}
	]);

	const [cartproducts, setCartproducts] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (course) => {
		const alreadyproducts = cartproducts
							.find(item => item.product.id === course.id);
		if (alreadyproducts) {
			const latestCartUpdate = cartproducts.map(item =>
				item.product.id === course.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartproducts(latestCartUpdate);
		} else {
			setCartproducts([...cartproducts, {product: course, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (course) => {
		const updatedCart = cartproducts
							.filter(item => item.product.id !== course.id);
		setCartproducts(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartproducts
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const productsearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = products.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
      {/* search component */}
			<SearchComponent searchCourse={searchCourse} 
							productsearchUserFunction=
								{productsearchUserFunction} />


			<main className="App-main">

        {/* showCourse Component */}
				<ShowCourseComponent
					products={products}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

{/* userCartComponent */}
				<UserCartComponent
					cartproducts={cartproducts}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartproducts={setCartproducts}
				/>
			</main>
		</div>
	);
}

export default App;
