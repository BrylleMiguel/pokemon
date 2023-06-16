import { Text, Box } from "@chakra-ui/react"
import ReactApexChart from "react-apexcharts"
import { MdDonutLarge } from "react-icons/md"
import HoverIconButton from "../icon/HoverIconButton"
import { SiElement } from "react-icons/si"
import { chart } from "../../utility/chart"

export default function PokemonDetails({ fetchedPokemons }: { fetchedPokemons: any }) {
    return fetchedPokemons.map((pokemon: any) => {
        const { stats } = pokemon
        const base_stat = stats.map((stat: any) => stat.base_stat)
        const label_names = stats.map((stat: any) => stat.stat.name)

        return <div key={pokemon.id}>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} avatar`} width={75} />
            <Box>
                <HoverIconButton color='blue' icon={MdDonutLarge} label="view: statistics" placement={'top'} size={6} />
                <HoverIconButton color='red' icon={SiElement} label="view: moves" placement={'top'} size={6} />
                <Text>
                    {pokemon.name}
                </Text>
                <ReactApexChart type='donut' options={chart} labels={label_names} series={base_stat} width={400} />
            </Box>
        </div>
    })
}