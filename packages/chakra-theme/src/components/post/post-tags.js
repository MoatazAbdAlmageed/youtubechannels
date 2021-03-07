import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import { decode } from "frontity";

export const PostTag = (props) => (
  <Box
    transition="background-color ease 0.25s"
    px="5px"
    border="2px solid"
    borderColor="youtube.600"
    backgroundColor="youtube.900"
    fontFamily="heading"
    textTransform="uppercase"
    fontWeight="medium"
    display="inline-block"
    _hover={{
      bg: "youtube.400",
      color: props.color,
    }}
    {...props}
  />
);

export const PostTags = ({ tags, limit = 3, color = "white", ...props }) => {
  const limitTags =
    tags.length > limit ? tags.filter((_, idx) => idx < limit) : tags;

  return (
    <Flex flexWrap="wrap" mt="12px" {...props}>
      {limitTags.map((category) => (
        <PostTag color={color} key={category.id} mr="6px" mb="6px">
          <Link
            link={category.link}
            dangerouslySetInnerHTML={{ __html: decode(category.name) }}
          />
        </PostTag>
      ))}
    </Flex>
  );
};

export default PostTags;
