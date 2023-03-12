// const TABS = document.querySelectorAll('.tab__btn');
// const ALL_CONTENT = document.querySelectorAll('.content');

// TABS.forEach((tab, index) =>{
// 	tab.addEventListener('click', () =>{
// 		TABS.forEach(tab=>{tab.classList.remove('active')});
// 		tab.classList.add('active');
// 		ALL_CONTENT.forEach(content=>{content.classList.remove('active')});
// 		ALL_CONTENT[index].classList.add('active');
// 	})
// })



const TABS = document.querySelectorAll('#tab__btn');
const ALL_CONTENT = document.querySelectorAll('.content');

TABS.forEach((tab, index) =>{
	tab.addEventListener('click', () =>{
		TABS.forEach(tab=>{tab.classList.remove('active')});
		tab.classList.add('active');
		ALL_CONTENT.forEach(content=>{content.classList.remove('active')});
		ALL_CONTENT[index].classList.add('active');
	})
})





// const BURGER_MENU = document.querySelector('.burger_menu');
// const MOBILE_MENU = document.querySelector('.mobile__menu');
// const HEADER = document.querySelector('header');
// const MOBILE_MENU_LINKS = document.querySelectorAll('.mobile__menu a');

// const switchMobileMenu = () => {
// 	BURGER_MENU.classList.toggle('active');
// 	MOBILE_MENU.classList.toggle('active');
// 	HEADER.classList.toggle('active');
// };

// BURGER_MENU.addEventListener('click', () => {
// 	switchMobileMenu();
// })

// MOBILE_MENU_LINKS.forEach((link) => {
// 	link.addEventListener('click', () => {
// 		switchMobileMenu();
// 	})
// })

// // showelement on scroll
// document.addEventListener('scroll', () => {
// 	const ELEMENT = document.querySelector('.scroll-up');
// 	// display scroll up button after 100px
// 	if (window.scrollY > 20) {
// 		ELEMENT.classList.add('show');
// 	} else {
// 		ELEMENT.classList.remove('show');
// 	}

// })














// const FRUITS = [
// 	{
// 		id: 1,
// 		name: 'Apple',
// 		price: 500,
// 	},
// 	{
// 		id: 2,
// 		name: 'Orange',
// 		price: 200,
// 	},
// 	{
// 		id: 3,
// 		name: 'Banana',
// 		price: 300,
// 	}
// ];
// const ELECTRONICS = [
// 	{
// 		id: 1,
// 		name: 'Laptop',
// 		price: 1000,
// 	},
// 	{
// 		id: 2,
// 		name: 'Phone',
// 		price: 2000,
// 	},
// 	{
// 		id: 3,
// 		name: 'TV',
// 		price: 3000,
// 	}
// ];
// const PRODUCTS = [...ELECTRONICS, ...FRUITS];

// const TABS = document.querySelectorAll('.tabs__item');
// const CONTENT = document.querySelectorAll('.tabs__content');

// function showProductsOnPage(selector, array) {
// 	let html = '';
// 	array.forEach((item) => {
// 		html += `
// 	<div class="cards">
// 	<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
// 	   <div class="card-header">${item.id}</div>
// 	   <div class="card-body">
//       <h5 class="card-title">${item.name}</h5>
//       <p class="card-text">${item.price}</p>
//    </div>
// </div>
// 	  `
// 	});
// 	const TARGET = document.querySelector(selector);
// 	TARGET.innerHTML = html;
// }


// TABS.forEach((tab) => {
// 	tab.addEventListener('click', () => {
// 		TABS.forEach((tab) => {
// 			tab.classList.remove('selected');
// 		});
// 		tab.classList.add('selected');
// 		const DATA_ATTRIBUTE = tab.getAttribute('data-products');
// 		CONTENT.forEach((item) => {
// 			item.classList.add('d-none');
// 			if (item.getAttribute('data-products') == DATA_ATTRIBUTE) {
// 				item.classList.remove('d-none');
// 			}
// 		});
// 	})
// });

// document.addEventListener('DOMContentLoaded', () => {
// 	showProductsOnPage('#fruits', FRUITS);
// 	showProductsOnPage('#electronics', ELECTRONICS);
// 	showProductsOnPage('#all_products', PRODUCTS);
// })

// const ABS_BTN = document.querySelector('#abs');
// ABS_BTN.addEventListener('click', () => {
// 	const SELECTED_TAB = document.querySelector('.tabs__item.selected');
// 	const DATA_ATTRIBUTE = SELECTED_TAB.getAttribute('data-id');
// 	if (DATA_ATTRIBUTE == 'fruits') {
// 		FRUITS.sort((a, b) => {
// 			return a.price - b.price;
// 		});
// 		showProductsOnPage('#fruits', FRUITS);
// 	} else if (DATA_ATTRIBUTE == 'electronics') {
// 		ELECTRONICS.sort((a, b) => {
// 			return a.price - b.price;
// 		});
// 		showProductsOnPage('#electronics', ELECTRONICS);
// 	} else {
// 		PRODUCTS.sort((a, b) => {
// 			return a.price - b.price;
// 		});
// 		showProductsOnPage('#all_products', PRODUCTS);
// 	}
// });

// const DESC_BTN = document.querySelector('#desc');
// DESC_BTN.addEventListener('click', () => {
// 	const SELECTED_TAB = document.querySelector('.tabs__item.selected');
// 	const DATA_ATTRIBUTE = SELECTED_TAB.getAttribute('data-id');
// 	if (DATA_ATTRIBUTE == 'fruits') {
// 		FRUITS.sort((a, b) => {
// 			return b.price - a.price;
// 		});
// 		showProductsOnPage('#fruits', FRUITS);
// 	} else if (DATA_ATTRIBUTE == 'electronics') {
// 		ELECTRONICS.sort((a, b) => {
// 			return  b.price - a.price;
// 		});
// 		showProductsOnPage('#electronics', ELECTRONICS);
// 	} else {
// 		PRODUCTS.sort((a, b) => {
// 			return  b.price - a.price;
// 		});
// 		showProductsOnPage('#all_products', PRODUCTS);
// 	}
// });








