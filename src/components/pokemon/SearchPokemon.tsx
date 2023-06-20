import { Paper, TextInput } from "@mantine/core";
import { TbPokeball } from "react-icons/tb";

export default function SearchPokemon(props: any) {
    // const { searchPokemon, setSearchPokemon } = props;
    return <Paper shadow="xl" sx={{ position: 'sticky', top: 0, zIndex: 1 }} >
        <TextInput placeholder="e.g. charizard"
            icon={<TbPokeball />} size="xs" bg="white" px="sm" pb="xs" />
    </Paper>

}