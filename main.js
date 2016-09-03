import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App.jsx';
import ItemBox from './src/components/ItemBox.jsx'; 
import SellingBox from './src/components/SellingBox.jsx';

var data = [
				{
					id: 1,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus scelerisque eros, vel vulputate justo tristique sed. Nullam vel facilisis quam. Ut ut nisl risus. Nunc erat dui, ultricies id accumsan vitae, malesuada vitae nunc. Quisque a placerat libero. Quisque ligula ante, tincidunt vitae ante a, molestie vulputate odio. Aliquam consectetur iaculis metus. Mauris mauris nisl, porttitor a eros sed, sagittis laoreet enim. In elementum nibh massa, non dapibus mi scelerisque ut. Mauris luctus sem tortor.',
					imageURL: 'https://img0.etsystatic.com/115/1/5997489/il_570xN.867990908_d9uc.jpg',
					price: 3.2,
					posted: 'Jul 16',
					location: 'i23oi',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing e',
					trade: true,
					bid: true,
					buyNow: true
				},
				{
					id: 2,
					description: 'description 11',
					imageURL: 'https://img0.etsystatic.com/053/0/5997489/il_570xN.748102848_rkjw.jpg',
					price: 42,
					posted: 'Jul 17',
					location: 'i23oi',
					title: 'title 2',
					trade: true,
					bid: true,
					buyNow: true
				},
				{
					id: 3,
					description: 'description 11',
					imageURL: 'https://img0.etsystatic.com/053/0/5997489/il_570xN.748102848_rkjw.jpg',
					price: 0,
					posted: 'Jul 17',
					location: 'i23oi',
					title: 'title 2',
					trade: true,
					bid: true,
					buyNow: true
				}
			];

ReactDOM.render(<App data={data}/>, document.getElementById('app'));




