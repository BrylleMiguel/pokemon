import { Tooltip, IconButton, Icon, Box } from "@chakra-ui/react";
import { useState } from "react";

const HoverIconButton = ({ icon, label, color, size, placement }: { icon: any, label: any, color: any, size: any, placement: any }) => {

    return (
        <Tooltip hasArrow placement={placement} label={label}>
            <Box
                as="span"
                _hover={{ cursor: 'pointer' }}
            >
                <Icon
                    boxSize={size}
                    as={icon}
                    aria-label={`${icon} ${label}`}
                    color={`${color}.500`}
                />
            </Box>
        </Tooltip >
    );
};

export default HoverIconButton






