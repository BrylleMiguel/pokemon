import axios from "axios";

export async function fetchPokemons(filter: any, pageParam = 0) {
	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pageParam}&limit=200`);
	const data = await response.data;

	return {
		pageParam, fetchedPokemons: await Promise.all(data.results.map(async (pokemon: any) => {
			const response = await axios.get(pokemon.url)
			return await response.data
		})).then(data => {
			const filteredPokemons = data.filter((pokemon: any) => {
				return pokemon.name.includes(filter.toLowerCase())
			})

			return filteredPokemons;
		})
	}
}