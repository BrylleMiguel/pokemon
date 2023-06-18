import { Text, Box, Image, Center, Flex } from "@chakra-ui/react"
import GenericChart from "../chart/GenericChart"
import PokemonTypeIcon from "../icon/PokemonTypeIcon"
import { BsFire } from 'react-icons/bs'
import { capitalize, map, words, upperFirst } from "lodash"

export default function PokemonDetails({ fetchedPokemons }: { fetchedPokemons: any }) {
    return fetchedPokemons.map((pokemon: any) => {
        const { id, name, sprites: { front_default }, stats, types, } = pokemon

        const base_stat = stats.map((stat: any) => stat.base_stat)
        const label_names = stats.map((stat: any) => stat.stat.name)

        const pokemonTypes = types.map((i: any) => i.type.name)
        const formattedName = map(words(name), (word) => upperFirst(word)).join(' ');
        return <Center filter="grayscale(100%)" _hover={{ transform: "scale(1.1)", filter: "grayscale(0%)" }}
            transition="transform 0.1s ease-out" >
            <Box key={id} boxShadow='xl' p='3' cursor="pointer" minWidth={150}>
                <Center>
                    <Image src={front_default} alt={`${pokemon.name} avatar`} boxSize='100px' objectFit='contain'
                    />
                </Center>
                <Flex justifyContent='space-between'>
                    <Text fontSize='sm'>
                        {formattedName}
                    </Text>
                    <PokemonTypeIcon pokemonTypes={pokemonTypes} />
                </Flex>
            </Box>
        </Center >
    })
}