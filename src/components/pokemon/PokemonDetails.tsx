import { Text, Box, Image, Center, Flex } from "@chakra-ui/react"
import GenericChart from "../chart/GenericChart"
import PokemonTypeIcon from "../icon/PokemonTypeIcon"
import { map, words, upperFirst, truncate } from "lodash"

export default function PokemonDetails({ pokemon }: { pokemon: any }) {

    if (pokemon.fetchedPokemons.length === 0) {
        return <Center>

            <h1>pokemon/s not found...</h1>

            <h1>try to fetch more pokemon!</h1>
        </Center>
    }

    return pokemon.fetchedPokemons?.map((data: any) => {
        const { id, name, sprites: { front_default }, types, } = data || {}

        const pokemonTypes = types.map((i: any) => i.type.name)
        const formattedName = truncate(map(words(name), (word) => upperFirst(word)).join(' '), { length: 14 });
        return <Center key={id} filter="grayscale(100%)" _hover={{ transform: "scale(1.1)", filter: "grayscale(0%)" }}
            transition="transform 0.1s ease-out" zIndex="0" >
            <Box key={id} boxShadow='xl' p='3' cursor="pointer" minWidth={150}>
                <Center>
                    <Image src={front_default} alt={`${name} avatar`} boxSize='100px' objectFit='contain'
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