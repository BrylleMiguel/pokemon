import { Avatar, AvatarGroup, Box, Code, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { FiHexagon } from 'react-icons/fi'
import { BsFire } from "react-icons/bs";
import { MdDarkMode, MdGrass, MdWaterDrop } from 'react-icons/md'
import { GiElectric, GiFairyWings, GiFluffyWing, GiGroundSprout, GiLibertyWing, GiPoison, GiPunch, GiSeaDragon, GiStonePile } from 'react-icons/gi'
import { TbSnowflake, TbTriangleInvertedFilled } from 'react-icons/tb'
import { SiGhost, SiCockroachlabs } from "react-icons/si";
import { ImEye } from 'react-icons/im'
import { TbGhost2Filled } from 'react-icons/tb'

export default function PokemonTypeIcon(props: any) {
    const { pokemonTypes } = props

    const typeIcons: any = {
        normal: { icon: FiHexagon, color: `yellow.400` },
        fire: { icon: BsFire, color: `red.400` },
        dark: { icon: MdDarkMode, color: `gray.600` },
        water: { icon: MdWaterDrop, color: `blue.500` },
        electric: { icon: GiElectric, color: `yellow.500` },
        ice: { icon: TbSnowflake, color: `cyan.500` },
        poison: { icon: GiPoison, color: `purple.500` },
        fighting: { icon: GiPunch, color: `red.500` },
        rock: { icon: GiStonePile, color: `gray.500` },
        ground: { icon: GiGroundSprout, color: `yellow.700` },
        flying: { icon: GiFluffyWing, color: `purple.700` },
        fairy: { icon: GiFairyWings, color: `pink.500` },
        psychic: { icon: ImEye, color: `red.600` },
        bug: { icon: SiCockroachlabs, color: `green.700` },
        ghost: { icon: TbGhost2Filled, color: `blue.700` },
        dragon: { icon: GiSeaDragon, color: `purple.900` },
        steel: { icon: TbTriangleInvertedFilled, color: `gray.500` },
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