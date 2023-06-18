import { useInfiniteQuery } from '@tanstack/react-query'
import { Button } from '@chakra-ui/button'
import { Box, Container, Flex, SimpleGrid, } from '@chakra-ui/react'
import PokemonDetails from './components/pokemon/PokemonDetails'
import { fetchPokemons } from './api/apis'

function App() {
	const MAX_OFFSET = 1280
	const { data: pokemons, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ['pokemons'],
		queryFn: fetchPokemons,
		getNextPageParam: (lastPage, pages) => lastPage.offset + 10
	})

	console.log(pokemons)

	return (
		<Container maxW='3xl'>
			<SimpleGrid columns={4} spacing={1}>
				{pokemons?.pages.map((pokemon: any, index) => {
					const { fetchedPokemons } = pokemon
					return (<PokemonDetails fetchedPokemons={fetchedPokemons} key={index} />
					)
				})}
			</SimpleGrid>
			<Button disabled={pokemons?.pages[pokemons?.pages.length - 1].offset === MAX_OFFSET}
				onClick={() => fetchNextPage()}
			>
				{isFetchingNextPage
					? 'Loading more...'
					: pokemons?.pages[pokemons?.pages.length - 1].offset === MAX_OFFSET
						? 'Nothing more to load'
						: 'Load More'
				}
			</Button>
		</Container>
	)
}

export default App
