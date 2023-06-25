import { Button } from "@chakra-ui/react";
import { Paper, TextInput } from "@mantine/core";
import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { TbPokeball } from "react-icons/tb";

export default function SearchPokemon(props: any) {
    const { searchPokemon, setSearchPokemon, refetch } = props;
    const [inputValue, setInputValue] = useState<string>(searchPokemon);

    useEffect(() => {
        const handler = debounce(() => {
            setSearchPokemon(inputValue);
        }, 500);

        handler();

        return () => {
            handler.cancel();
        };
    }, [inputValue, setSearchPokemon]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    };

    return (
        <Paper shadow="xl" sx={{ position: 'sticky', top: 0, zIndex: 1 }} >
            <TextInput placeholder="e.g. charizard" value={inputValue} onChange={handleOnChange} icon={<TbPokeball />} size="xs" bg="white" px="sm" pb="xs" />
            <Button onClick={refetch}>search</Button>
        </Paper>
    );
}
