module.exports = {
  variants: {
    float: ["responsive", "hover", "focus"],
  },
  theme: {
    maxHeight: {
      content: "max-content",
    },
    maxWidth: {
      content: "max-content",
    },
    extend: {
      colors: {
        primary: "rgb(22, 82, 240)",
      },
      inset: {
        0: 0,
        auto: "auto",
        hide: "-100%",
      },
    },
    container: {
      center: true,
    },
  },
};
