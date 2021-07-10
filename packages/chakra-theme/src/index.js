import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import processors from "./components/styles/processors";

const chakraTheme = {
  name: "frontity-chakra-theme",
  roots: {
    // In Frontity, any package can add React components to the site.
    // We use roots for that, scoped to the "theme" namespace.
    theme: Theme,
  },
  state: {
    // State is where the packages store their default settings and other
    // relevant state. It is scoped to the "theme" namespace.
    theme: {
      /**
       * The logo can be a text or an image url
       * logo : "Frontity"
       * logo: "https://uploads-ssl.webflow.com/5be00771820599586e6bd032/5be0223588110a6dbcac2d05_image.svg",
       */
      logo: "Frontity",
      showBackgroundPattern: true,
      showSocialLinks: true,
      /**
       * socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"]
          ],
       */
      socialLinks: [],
      menu: [],
      featured: {
        showOnArchive: true,
        showOnPost: true,
      },

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
        youtube: {
          // todo add here
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#333333",
          300: "#6E6E6E",
          400: "hsl(11deg 100% 62%)",
          500: "#212121",
          600: "#6E6E6E",
          700: "#333333",
          800: "#6E6E6E",
          900: "#333333",
        },
      },
      isSearchModalOpen: false,
      isMobileMenuOpen: false,
      autoPreFetch: "all",
    },
  },
  // Actions are functions that modify the state or deal with other parts of
  // Frontity like libraries.
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image, ...processors],
    },
  },
};

export default chakraTheme;
