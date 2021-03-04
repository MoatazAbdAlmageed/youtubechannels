const settings = {
  name: "arabicyoutubechannels",
  state: {
    frontity: {
      url: "https://moatazdiary.herokuapp.com/",
      title: "قنوات برمجة على اليوتيوب",
      description: "",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["كله", "/"],
            ["عربي", "/category/Arabic/"],
            ["اجنبي", "/category/English/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://arabicyoutubechannels.wordpress.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
