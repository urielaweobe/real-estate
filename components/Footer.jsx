import { Box } from "@chakra-ui/react";

const Year = new Date().getFullYear();

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    {Year} Real Estate, Inc.
  </Box>
);

export default Footer;
