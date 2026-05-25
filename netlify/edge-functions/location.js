export default async (request, context) => {
  const country = context.geo?.country?.name || "Pays inconnu";
  const city = context.geo?.city || "Ville inconnue";

  return new Response(
    JSON.stringify({
      message: "Bonjour depuis Netlify Edge",
      concept: "Edge Function",
      country,
      city,
      success: true,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const config = {
  path: "/edge-location",
};
