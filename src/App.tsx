import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Text } from '@chakra-ui/layout'

import ReactApexChart from 'react-apexcharts'
import { Button } from '@chakra-ui/button'
import { MdDonutLarge } from 'react-icons/md'
import { SiElement } from 'react-icons/si'
import { Box, Center, Container, Flex, HStack, Heading, Icon, Spacer, Tooltip } from '@chakra-ui/react'

function App() {
	const MAX_OFFSET = 1280
	const { data: pokemons, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ['pokemons'],
		queryFn: fetchPokemons,
		getNextPageParam: (lastPage, pages) => lastPage.offset + 10
	})

	return (
		<Container bg='red.100' maxW='2xl'>
			{pokemons?.pages.map((pokemon: any) => {
				const { fetchedPokemons } = pokemon
				return fetchedPokemons.map((pokemon: any) => {
					const { stats } = pokemon
					const base_stat = stats?.map((stat: any) => stat.base_stat)
					const label_name = stats?.map((stat: any) => stat.stat.name)

					// chart related
					const chart = {
						series: base_stat,
						labels: label_name,
						options: {
							chart: { type: 'donut' }, responsive: [{
								breakpoint: 480,
								options: {
									chart: {
										width: 200
									},
									legend: {
										position: 'bottom'
									}
								}
							}]
						},
						colors: ['#E53935', '#FDD835', '#7CB342', '#039BE5', '#8E24AA', '#FF7043']

					}

					return <div key={pokemon.id}>
						<img src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} avatar`} width={75} />
						<Box>
							<Text>
								{pokemon.name}
							</Text>


							<Icon as={MdDonutLarge} color='blue.500' boxSize={6} />

							<Icon as={SiElement} color='red.500' boxSize={6} />
						</Box>
						<Spacer />
						<ReactApexChart type='donut' options={chart} labels={chart.labels} series={chart.series} width={300} />
					</div>

				})
			})}
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
