import { Box, Icon } from "@chakra-ui/react";
import { BsFire } from "react-icons/bs";
import { MdDarkMode, MdGrass, MdWaterDrop } from 'react-icons/md'
import { FaCircle } from 'react-icons/fa'
import { GiElectric, GiFairyWings, GiFluffyWing, GiGroundSprout, GiPoison, GiPunch, GiSeaDragon, GiStonePile } from 'react-icons/gi'
import { TbSnowflake, TbTriangleInvertedFilled } from 'react-icons/tb'
import { SiGhost } from "react-icons/si";
import { ImEye } from 'react-icons/im'
import { IoMdBug } from 'react-icons/io'

export default function PokemonTypeIcon(props: any) {
    const { type: pokemonType, icon, size, color } = props

    const typeIcons = {
        normal: FaCircle,
        fire: BsFire,
        dark: MdDarkMode,
        water: MdWaterDrop,
        electric: GiElectric,
        ice: TbSnowflake,
        poison: GiPoison,
        fighter: GiPunch,
        rock: GiStonePile,
        ground: GiGroundSprout,
        flying: GiFluffyWing,
        fairy: GiFairyWings,
        psychic: ImEye,
        bug: IoMdBug,
        ghost: SiGhost,
        dragon: GiSeaDragon,
        steel: TbTriangleInvertedFilled,
    }

    console.log(typeIcons)

    if (pokemonType.first_type && (pokemonType.secondType !== null)) {
        return <Box>
            {/* {pokemonType.first_type && <Icon as={ } size={size} color={color} />} */}
            {/* {pokemonType.second_type && <Icon as={} size={size} color={color} />} */}
        </Box>
    }
}