import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export default function SearchPokemon(props: any) {
    const { searchPokemon, setSearchPokemon } = props;
    return <FormControl pos="sticky" top="0" bgColor="white" zIndex="1" boxShadow="2xl" p="2.5">
        <FormLabel>find pokemon </FormLabel>
        <Input type="text" value={searchPokemon} onChange={({ target: { value } }) => setSearchPokemon(value)} size="sm" />
        <FormHelperText>search for a specific pokemon, (looks for a pokemon name with included letters)</FormHelperText>
    </FormControl>
}