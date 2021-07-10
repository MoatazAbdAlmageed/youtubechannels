import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Box, Stack } from "@chakra-ui/react";

export const PaginationButton = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  min-height: 60px;

  cursor: pointer;
  border: none;
  background: #333;
  color: #fff;

  &:hover {
    background-color: hsl(11deg 100% 62%);
    color: #fff;
  }

  &[aria-disabled="true"] {
    background-color: #7e7e7e;
    cursor: auto;
    color: #a0a0a0;
  }
`;

export const PrevLink = ({
  isDisabled,
  label = "See older channels",
  link,
  ...props
}) => (
  <Box width="100%" {...props}>
    <PaginationButton link={link} aria-label={label} aria-disabled={isDisabled}>
      <Box width="40px" height="auto" as={IoIosArrowRoundBack} />
      <span>Older Channels</span>
    </PaginationButton>
  </Box>
);

export const NextLink = ({
  isDisabled,
  label = "See newer channels",
  link,
  ...props
}) => (
  <Box width="100%" {...props}>
    <PaginationButton link={link} aria-label={label} aria-disabled={isDisabled}>
      <span>Newer Channels</span>
      <Box width="40px" height="auto" as={IoIosArrowRoundForward} />
    </PaginationButton>
  </Box>
);

const Pagination = ({ state, actions, libraries, ...props }) => {
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);

  const isThereNextPage = page > 1;
  const isTherePreviousPage = page < totalPages;

  const nextPageLink = libraries.source.stringify({
    path,
    page: page + 1,
    query,
  });

  const prevPageLink = libraries.source.stringify({
    path,
    page: page - 1,
    query,
  });

  // Fetch the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(nextPageLink);
  }, []);

  return (
    <Stack direction="row" spacing="40px" {...props}>
      <PrevLink link={nextPageLink} isDisabled={!isTherePreviousPage} />
      <NextLink link={prevPageLink} isDisabled={!isThereNextPage} />
    </Stack>
  );
};

export default connect(Pagination);
