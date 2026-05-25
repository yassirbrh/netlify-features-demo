export default async (request, context) => {
  const country = context.geo?.country?.name || "Pays inconnu";
  const city = context.geo?.city || "Ville inconnue";

  return new Response(
    JSON.stringify({
      success: true,
      message: "Bonjour depuis Netlify Edge",
      concept: "Edge Function",
      country,
      city,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const config = {
  path: "/edge-info",
};
