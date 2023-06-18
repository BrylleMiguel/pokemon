import axios from "axios";

export async function fetchPokemons({ pageParam: offset = 0 }) {
	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=100`);
	const data = await response.data;

	return {
		offset, fetchedPokemons: await Promise.all(data.results.map(async (pokemon: any) => {
			const response = await axios.get(pokemon.url)
			return await response.data
		})).then(data => { return data })
	}
}