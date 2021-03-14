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
  </Box>
);

export default PostHeader;
