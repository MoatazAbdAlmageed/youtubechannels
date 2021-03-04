import React from "react";
import { Box } from "@chakra-ui/react";

/**
 * A Box with accented top border
 * @param {React.ComponentProps<typeof Box>} props
 */
const BorderBox = (props) => (
  <Box
    p="40px"
    bg="youtube.50"
    borderTop="4px solid"
    borderColor="youtube.400"
    {...props}
  />
);

export default BorderBox;
