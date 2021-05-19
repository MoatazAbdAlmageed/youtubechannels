import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData, splitPosts } from "../helpers";
import { Newsletter } from "../newsletter";
import ArchiveItem from "./archive-item";
import { PaginationButton } from "./pagination";
import { styled } from "frontity";

const HomepageArchive = ({ state, libraries }) => {
  const { next, previous } = state.source.get(state.router.link);
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  const [firstThreePosts, othersPosts] = splitPosts(state, data.items);

  return (
    <Box bg="youtube.50" as="section">
      <Iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fvn35tBVRIw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Iframe>

      <FeaturedPostSection
        data={firstThreePosts.map((post) => formatPostData(state, post))}
      />
      <Box
        py={{ base: "64px", md: "80px" }}
        px={{ base: "24px", md: "40px" }}
        width={{ base: "auto", lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
        <Heading
          textAlign="center"
          fontSize={{ base: "4xl", md: "6xl" }}
          color="youtube.400"
        >
          Latest Channels
        </Heading>

        <SimpleGrid
          minChildWidth="200px"
          mt={{ base: "64px", md: "80px" }}
          columns={{ base: 1, md: 2 }}
          spacing="40px"
        >
          {othersPosts.map(({ type, id }) => {
            const item = state.source[type][id];
            return <ArchiveItem key={item.id} item={item} />;
          })}
        </SimpleGrid>

        {next && (
          <PaginationButton mt="20px" link={next}>
            Older Channels
          </PaginationButton>
        )}
        {/* If there's a previous page, render this link */}
        {previous && (
          <PaginationButton mt="20px" link={previous}>
            Newer Channels
          </PaginationButton>
        )}
      </Box>

      {libraries.newsletter && (
        <Newsletter showPattern={state.theme.showBackgroundPattern} />
      )}
    </Box>
  );
};

export default connect(HomepageArchive);

const Iframe = styled.iframe`
  margin: auto;
`;
