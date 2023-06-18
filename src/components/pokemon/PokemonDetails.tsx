import { Text, Box, Image, Center } from "@chakra-ui/react"
import GenericChart from "../chart/GenericChart"
import PokemonTypeIcon from "../icon/PokemonTypeIcon"
import { BsFire } from 'react-icons/bs'

export default function PokemonDetails({ fetchedPokemons }: { fetchedPokemons: any }) {
    return fetchedPokemons.map((pokemon: any) => {
        const { id, name, sprites: { front_default }, stats, types, } = pokemon

        const base_stat = stats.map((stat: any) => stat.base_stat)
        const label_names = stats.map((stat: any) => stat.stat.name)

        const pokemonTypes = types.map((i: any) => i.type.name)

        return <Center>
            <Box key={id} boxShadow='xl' p='8'>
                <PokemonTypeIcon pokemonTypes={pokemonTypes} />
                <Image src={front_default} alt={`${pokemon.name} avatar`} boxSize='100px' objectFit='contain' />
                <Text>
                    {name}
                </Text>
            </Box>
        </Center>
    })
}