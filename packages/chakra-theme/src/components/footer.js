import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect, decode } from "frontity";
import Link from "./link";
import tags from "./../data/tags.json";

import ReactPixel from "react-facebook-pixel";

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
  const advancedMatching = { em: "moataz.mohammady@gmail.com" }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init("2887412331587526", advancedMatching, options);

  ReactPixel.pageView(); // For tracking page view
  ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
  ReactPixel.trackSingle("PixelId", event, data); // For tracking default events.
  ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
  ReactPixel.trackSingleCustom("PixelId", event, data); // For tracking custom events.

  return (
    <FooterSection alignSelf="flex-end">
      <FooterSectionItem>
        {tags.sort().map((tag) => (
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
                color: "youtube.50",
              }}
            >
              <Link link={`/tag/${tag.replace(" ", "-")}`}>
                {tag.replace("tag", "").replace(/\//g, "").toUpperCase()}
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
        Made with{" "}
        <Link target="_blank" link="https://frontity.org/">
          Frontity
        </Link>
      </FooterSectionItem>
    </FooterSection>
  );
};
export default connect(Footer);
