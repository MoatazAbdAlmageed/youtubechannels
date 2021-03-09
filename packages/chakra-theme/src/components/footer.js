import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect, decode } from "frontity";
import Link from "./link";
import tags from "./../data/tags.json";

const FooterSection = (props) => (
  <Box
    as="footer"
    pos="relative"
    bg="youtube.900"
    py={{ base: "32px", lg: "40px" }}
    {...props}
  />
);

const FooterSectionItem = (props) => (
  <Box padding="24px" color="white" textAlign="center" {...props} />
);

const Footer = ({ state }) => {
  return (
    <FooterSection alignSelf="flex-end">
      <FooterSectionItem fontWeight="bold" fontFamily="heading">
        Tags
      </FooterSectionItem>
      <FooterSectionItem fontWeight="bold" fontFamily="heading">
        {tags.map((tag) => (
          <>
            <Box
              margin="5px"
              transition="background-color ease 0.25s"
              px="5px"
              border="2px solid"
              borderColor="youtube.400"
              fontFamily="heading"
              fontWeight="medium"
              display="inline-block"
              _hover={{
                bg: "youtube.400",
              }}
            >
              <Link link={`/${tag}`}>
                {decode(
                  tag.replace("tag", "").replace("/", "").replace("/", "")
                )}
              </Link>
            </Box>
          </>
        ))}
      </FooterSectionItem>

      <FooterSectionItem borderColor="youtube.400">
        <SocialMenu
          ml="0"
          justifyContent="center"
          menu={state.theme.socialLinks}
        />
      </FooterSectionItem>

      <FooterSectionItem fontWeight="bold" fontFamily="heading">
        Made with a{" "}
        <Link target="_blank" link="https:/frontity.org/">
          Frontity
        </Link>
      </FooterSectionItem>
    </FooterSection>
  );
};
export default connect(Footer);
