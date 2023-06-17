import { Text, Box, Image } from "@chakra-ui/react"
import GenericChart from "../chart/GenericChart"
import PokemonTypeIcon from "../icon/PokemonTypeIcon"
import { BsFire } from 'react-icons/bs'

export default function PokemonDetails({ fetchedPokemons }: { fetchedPokemons: any }) {
    return fetchedPokemons.map((pokemon: any) => {
        const { id, name, sprites: { other: { dream_world: { front_default } } }, stats, types, } = pokemon

        const pokemonType = {
            first_type: types[0].type.name,
            second_type: types[1]?.type.name || null
        }

        const base_stat = stats.map((stat: any) => stat.base_stat)
        const label_names = stats.map((stat: any) => stat.stat.name)

        return <Box key={id}>
            <Image src={front_default} alt={`${pokemon.name} avatar`} boxSize='100px' objectFit='cover' />
            <Text>
                {name}
            </Text>
            <PokemonTypeIcon type={pokemonType} icon={BsFire} />
            <GenericChart labels={label_names} series={base_stat} type='donut' />
        </Box>
    })
}