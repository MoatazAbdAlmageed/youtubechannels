import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import PostCategories from "./post-categories";
import PostTags from "./post-tags";
import { formatDate } from "../helpers";
import { decode } from "frontity";

const PostHeader = ({
  heading,
  tags,
  categories,
  description,
  author,
  date,
  isPage,
  ...props
}) => (
  <Box textAlign="center" {...props}>
    <Heading
      fontWeight="bold"
      size="2xl"
      mt="30px"
      mb={{ base: "20px", lg: "32px" }}
      dangerouslySetInnerHTML={{ __html: heading }}
    />

    {description && <Text mt={4}>{description}</Text>}

    {categories && (
      <PostCategories
        color="black"
        categories={categories}
        justifyContent="center"
      />
    )}

    {tags && <PostTags tags={tags} justifyContent="center" />}

    {/* Don't show the author if we're on a page type */}
    {/* TODO:add to setting like show author true , false */}
    {/* {!isPage && author && (
      <Text fontSize="lg">
        by{" "}
        <Link fontWeight="bold" color="youtube.400" link={author.link}>
          {decode(author.name)}
        </Link>
      </Text>
    )} */}
    {/* Don't show the date if we're on a page type */}
    {!isPage && date && (
      <Text fontSize="md" mt="12px">
        {formatDate(date)}
      </Text>
    )}
  </Box>
);

export default PostHeader;
