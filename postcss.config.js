const { join } = require("path");
module.exports = {
  prefix: "tw-",
  plugins: {
    "postcss-import": {},
    tailwindcss: {
      config: join(__dirname, "tailwind.config.js"),
    },
    autoprefixer: {},
  }
};
