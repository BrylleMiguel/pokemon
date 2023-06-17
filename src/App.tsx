import { useInfiniteQuery } from '@tanstack/react-query'
import { Button } from '@chakra-ui/button'
import { MdDonutLarge } from 'react-icons/md'
import { SiElement } from 'react-icons/si'
import { Box, Center, Container, Flex, HStack, Heading, Icon, Modal, ModalBody, ModalContent, Popover, PopoverBody, PopoverContent, PopoverTrigger, Spacer, Tooltip, useDisclosure } from '@chakra-ui/react'
import PokemonDetails from './components/pokemon/PokemonDetails'
import { fetchPokemons } from './api/apis'

function App() {
	const MAX_OFFSET = 1280
	const { data: pokemons, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ['pokemons'],
		queryFn: fetchPokemons,
		getNextPageParam: (lastPage, pages) => lastPage.offset + 10
	})

	console.log(pokemons?.pages.fetchedPokemons)

	return (
		<Container bg='red.100' maxW='3xl'>
			<Box>
				{pokemons?.pages.map((pokemon: any, index) => {
					const { fetchedPokemons } = pokemon
					return <PokemonDetails fetchedPokemons={fetchedPokemons} key={index} />
				})}
			</Box>
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
