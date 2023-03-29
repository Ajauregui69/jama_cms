module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
    },
  });

  module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_aVzyyWj69VVSl23bOFb9OA54f4bm/mObdLz4goE",
        apiToken: "5RkN2mjzGzRDiIQgeEOd56AG",
        appFilter: "jama_strapi",
        teamFilter: "",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });