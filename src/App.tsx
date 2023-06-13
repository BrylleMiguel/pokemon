import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function App() {
	const ENDPOINT: string = 'https://pokeapi.co/api/v2/pokemon?limit=10'

	const { data } = useQuery({
		queryKey: ['pokemons'],
		queryFn:
			async () => {
				const response = await axios.get(ENDPOINT);
				const data = await response.data.results;
				return Promise.all(
					data.map(async (pokemon: any) => {
						const response = await axios.get(pokemon.url);
						return response.data;
					})
				);
			}
	})

	return (
		<div>{data?.map((pokemon: any) => {
			return <h1 className='text-3xl font-bold underline' key={pokemon.id}>
				{pokemon.name}</h1>
		})}</div>
	)
}

export default App
