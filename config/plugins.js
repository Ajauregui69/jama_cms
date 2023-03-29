module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_hEyLooatomHTptqcq4imIzPZsghx/rxViIpqmEY",
        apiToken: "3ERI1XIbPbSuW7b3zqaGJ8eP",
        appFilter: "jama-strapi",
        teamFilter: "",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });