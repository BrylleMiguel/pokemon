import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Text } from '@chakra-ui/layout'

import ReactApexChart from 'react-apexcharts'
import { Button } from '@chakra-ui/button'
import { MdDonutLarge } from 'react-icons/md'
import { SiElement } from 'react-icons/si'
import { Box, Center, Container, Flex, HStack, Heading, Icon, Modal, ModalBody, ModalContent, Popover, PopoverBody, PopoverContent, PopoverTrigger, Spacer, Tooltip, useDisclosure } from '@chakra-ui/react'
import HoverIconButton from './components/icon/HoverIconButton'
import PokemonDetails from './components/pokemon/PokemonDetails'

function App() {
	const MAX_OFFSET = 1280
	const { data: pokemons, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ['pokemons'],
		queryFn: fetchPokemons,
		getNextPageParam: (lastPage, pages) => lastPage.offset + 10
	})

	return (
		<Container bg='red.100' maxW='3xl'>
			<Box>
				{pokemons?.pages.map((pokemon: any) => {
					const { fetchedPokemons } = pokemon
					return <PokemonDetails fetchedPokemons={fetchedPokemons} />
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

	async function fetchPokemons({ pageParam: offset = 0 }) {
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`);
		const data = await response.data;

		return {
			offset, fetchedPokemons: await Promise.all(data.results.map(async (pokemon: any) => {
				const response = await axios.get(pokemon.url)
				return await response.data
			})).then(data => { return data })
		}
	}
}

export default App
