import { useInfiniteQuery } from '@tanstack/react-query'
import { Button } from '@chakra-ui/button'
import { Box, Center, Container, Flex, Heading, SimpleGrid, } from '@chakra-ui/react'
import PokemonDetails from './components/pokemon/PokemonDetails'
import { fetchPokemons } from './api/apis'
import { useEffect, useState } from 'react'
import SearchPokemon from './components/pokemon/SearchPokemon'

function App() {
	const MAX_OFFSET = 1280

	const [searchPokemon, setSearchPokemon] = useState("")

	const { data: pokemons, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteQuery({
		queryKey: ['pokemons'],
		queryFn: ({ pageParam = 0 }) => fetchPokemons(searchPokemon, pageParam),
		getNextPageParam: (lastPage, pages) => lastPage.pageParam + 100
	})

	return (
		<Container maxW='6xl'>
			<Heading>Browse Pokemons</Heading>
			<SearchPokemon searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon} refetch={refetch} />
			<SimpleGrid columns={7}>
				{pokemons?.pages?.map((pokemon: any, index: any) => {
					return (<PokemonDetails pokemon={pokemon} key={index} />
					)
				})}
				<Center>
					<Button disabled={pokemons?.pages[pokemons?.pages.length - 1].pageParam === MAX_OFFSET}
						onClick={() => { fetchNextPage() }}	 >
						{isFetchingNextPage
							? 'Loading more...'
							: pokemons?.pages[pokemons?.pages.length - 1].pageParam === MAX_OFFSET
								? 'Nothing more to load'
								: 'Load More'
						}
					</Button>
				</Center>
			</SimpleGrid>
		</Container>
	)
}

export default App
