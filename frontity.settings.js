const settings = {
  name: "arabicyoutubechannels",
  state: {
    frontity: {
      url: "https://moatazdiary.herokuapp.com/",
      title: "قنوات يوتيوب عربي",
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
            ["Arabic", "/category/Arabic/"],
            ["English", "/category/English/"],
            ["PHP", "/category/php/"],
            ["مش برمجة", "/category/مش-برمجة/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
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
