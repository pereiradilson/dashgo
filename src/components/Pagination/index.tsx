import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="center"
    >
      <Box mb={isWideVersion ? "" : "5"}>
        Mostrando de 1 até 10 de 100 registros
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  );
}
