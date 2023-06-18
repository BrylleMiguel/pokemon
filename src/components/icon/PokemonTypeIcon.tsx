import { Avatar, AvatarGroup, Box, Code, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { FiHexagon } from 'react-icons/fi'
import { BsFire } from "react-icons/bs";
import { MdDarkMode, MdGrass, MdWaterDrop } from 'react-icons/md'
import { GiElectric, GiFairyWings, GiFluffyWing, GiGroundSprout, GiPoison, GiPunch, GiSeaDragon, GiStonePile } from 'react-icons/gi'
import { TbSnowflake, TbTriangleInvertedFilled } from 'react-icons/tb'
import { SiGhost, SiCockroachlabs } from "react-icons/si";
import { ImEye } from 'react-icons/im'

export default function PokemonTypeIcon(props: any) {
    const { pokemonTypes } = props

    const typeIcons: any = {
        normal: { icon: FiHexagon, color: `gray.500` },
        fire: { icon: BsFire, color: `red.500` },
        dark: { icon: MdDarkMode, color: `black.500` },
        water: { icon: MdWaterDrop, color: `blue.500` },
        electric: { icon: GiElectric, color: `yellow.500` },
        ice: { icon: TbSnowflake, color: `cyan.500` },
        poison: { icon: GiPoison, color: `purple.500` },
        fighting: { icon: GiPunch, color: `brown.500` },
        rock: { icon: GiStonePile, color: `black.300` },
        ground: { icon: GiGroundSprout, color: `brown.700` },
        flying: { icon: GiFluffyWing, color: `white.500` },
        fairy: { icon: GiFairyWings, color: `pink.500` },
        psychic: { icon: ImEye, color: `purple.300` },
        bug: { icon: SiCockroachlabs, color: `black.100` },
        ghost: { icon: SiGhost, color: `white.300` },
        dragon: { icon: GiSeaDragon, color: `black.700` },
        steel: { icon: TbTriangleInvertedFilled, color: `gray.100` },
        grass: { icon: MdGrass, color: `green.500` }
    }


    return (
        <Flex>
            <AvatarGroup spacing='-1.5'>
                <Avatar as={typeIcons[pokemonTypes[0]]?.icon} boxSize={5} bgColor={typeIcons[pokemonTypes[0]]?.color} />
                {pokemonTypes[1] !== undefined ? <Avatar as={typeIcons[pokemonTypes[1]]?.icon} boxSize={5} bgColor={typeIcons[pokemonTypes[1]]?.color} /> : ""}
            </AvatarGroup>
        </Flex>
    )

}