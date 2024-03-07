module.exports = {
  root: true,
  extends: ["custom"],
  overrides: [
    {
      files: ["src/shared/api/**/*"],
      rules: {
        "no-unused-vars": "off",
      },
    },
  ],
};
