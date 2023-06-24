import { Button } from "@chakra-ui/react";
import { Paper, TextInput } from "@mantine/core";
import { TbPokeball } from "react-icons/tb";

export default function SearchPokemon(props: any) {
    const { searchPokemon, setSearchPokemon, refetch } = props;
    return <Paper shadow="xl" sx={{ position: 'sticky', top: 0, zIndex: 1 }} >
        <TextInput placeholder="e.g. charizard" value={searchPokemon} onChange={({ target: { value } }) =>
            setSearchPokemon(value)} icon={<TbPokeball />} size="xs" bg="white" px="sm" pb="xs" />
        <Button onClick={() => refetch()}>search</Button>
    </Paper>

}