import axios from 'axios';

export default class Search {

	constructor(query) {
		this.query = query;
	}

	async getResults(){

		const key = '93db9d971dfc3cba53de3d000c19d2ca';
		try{
			const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
			this.result = res.data.recipes;
			//console.log(this.result);
		}catch(error){
			alert(error);
		}
	}

}