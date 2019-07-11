import axios from 'axios';


async function getResults(query){

	const key = '93db9d971dfc3cba53de3d000c19d2ca';
	try{
		const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
		const recipes = res.data.recipes;

		console.log(recipes);
	}catch(error){
		alert(error);
	}
}

getResults('pizza');
