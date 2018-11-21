const express = require('express');


const app = express();
const parcels  = [
	
	{id:1 , name: 'box'},
	{id:2 , name: 'TV'},
	{id:3 , name: 'computer'},
];



app.get('/parcels', (req , res) =>{
	parcels.push({id: 4, name: 'iPhone'});
res.send(parcels); 
});

// // app.get('/api/parcels', (req,res) => {
// // 	res.send(parcels);
// // });

// // app.get('/api/parcels/:id', (req,res) => {
// // 	// let name = 'caleb';
// // 	// let myArr = [1,2,3];

// // 	// let myFunc = () => {
// // 	// 	return 2
// // 	// }

// // 	// let random = myFunc();

// // 	const temparcels = parcels.find(c => c.id === Number.parseInt(req.params.id));
// // 		if(!temparcels) res.status(404).send('No Parcels found');
// // 		res.send(temparcels);


// });
const port = process.env.PORT || 3900;

app.listen(port, () => console.log(`listening on port ${port}...`));


  

