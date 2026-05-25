exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      success: true,
      message: "Bonjour depuis une Netlify Function",
      concept: "Serverless Function",
      date: new Date().toLocaleString("fr-FR"),
    }),
  };
};
