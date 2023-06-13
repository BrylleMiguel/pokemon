import './App.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

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
			return <div key={pokemon.id}>
				{pokemon.name}</div>
		})}</div>
	)
}

export default App
