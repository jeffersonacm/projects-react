const { products } = require('./data/products.json');

const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	const products = getProductsByIds(ids, productsList);

	const promotion = getPromotion(products);

	const prices = getPricesProducts(products, promotion);

	return {
		products: products.map(({ name, category }) => ({ name, category })),
		promotion: promotion,
		totalPrice: parseFloat(prices.totalPrice).toFixed(2),
		discountValue: parseFloat(prices.discountValue).toFixed(2),
		discount: percentDiference(prices.totalPrice + prices.discountValue, prices.totalPrice) + '%'
	};
}

function getProductsByIds(ids, productsList) {
	return productsList.filter(product => ids.includes(product.id));
}

function getPromotion(products) {
	const categories = products.map( product => product.category );
	const countCategories = categories.filter( (value, index, arr) =>  arr.indexOf(value) == index).length;

	return promotions[countCategories - 1];
}

function getPricesProducts(productsList, promotion) {
	return productsList.reduce((tot, value) => {
		let valuePromo = value.promotions.reduce((tot, value) => {
			if (value.looks.includes(promotion)) {
				tot = value.price;
			}

			return tot;
		}, 0);

		if (valuePromo) {
			tot.totalPrice += valuePromo;
			tot.discountValue += value.regularPrice - valuePromo;
		} else {
			tot.totalPrice = tot.totalPrice + value.regularPrice;
		}

		return tot;

	}, { totalPrice: 0, discountValue: 0});
}

function percentDiference(n1, n2) {
	return (((n1 - n2) * 100) / n1).toFixed(2);
}

module.exports = { getShoppingCart };
