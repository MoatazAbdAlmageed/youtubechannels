const settings = {
  name: "moataz-diary",
  state: {
    frontity: {
      url: "https://moatazdiary.herokuapp.com/",
      title: "يوميات معتز",
      description: "بعدين .. بعدين",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["كله", "/"],
            ["برمجة", "/category/برمجة/"],
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
          url: "https://moatazdiary.wordpress.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
