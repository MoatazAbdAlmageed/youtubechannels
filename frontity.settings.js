const title = "YouTube Channels";
const settings = {
  name: "youtubechannelsdirectory",
  state: {
    frontity: {
      url: "https://youtubechannelsdirectory.vercel.app/",
      title,
      description: "v1",
    },
  },
  packages: [
    {
      name: "chakra-theme",
      state: {
        theme: {
          // The logo can be a text or an image url
          logo: title,
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: true,
          // the top-level navigation labels and links
          menu: [
            // ["Home", "/"],
            // ["Arabic", "/category/arabic/"],
            // ["English", "/category/english/"],
            ["Favorites", "/category/Favorites/"],

            ["CS", "/tag/CS/"],
            ["Back-end", "/tag/Back-end/"],
            ["Front-end", "/tag/Front-end/"],
            ["Devops", "/tag/Devops/"],
            // ["English", "/tag/english/"],
            // ["WordPress", "/tag/wordpress/"],
            // ["Freelancing", "/tag/freelancing/"],
            // // ["CS50", "/tag/cs50/"],
            // ["JS", "/tag/js/"],
            // // ["NodeJs", "/tag/nodeJs/"],
            // // ["MongoDB", "/tag/mongodb/"],
            // ["PHP", "/tag/php/"],
            // ["CS", "/tag/cs/"],
            // ["React", "/tag/react/"],
          ],
          // the social links
          socialLinks: [
            ["github", "https://github.com/MoatazAbdAlmageed/youtubechannels"],
            ["linkedin", "https://www.linkedin.com/in/moatazabdelmageed/"],
          ],
          // color shades to use in the blog
          colors: {
            primary: {
              50: "#7e7e7e",
              100: "#d4dcd9",
              200: "#bbc3be",
              300: "#a1aba5",
              400: "#87938b",
              500: "#6d7972",
              600: "#555f58",
              700: "#323c34",
              800: "#232924",
              900: "#272727",
            },
            accent: {
              50: "#ede4d3",
              100: "#fbe3b2",
              200: "#f6d086",
              300: "#f1be58",
              400: "#eca419",
              500: "#d49212",
              600: "#a5710b",
              700: "#775105",
              800: "#483100",
              900: "#1d0f00",
            },
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://youtubechannelsdirectory.wordpress.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
