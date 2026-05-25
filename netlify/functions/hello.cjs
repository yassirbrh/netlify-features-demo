exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Bonjour depuis une Netlify Function",
      concept: "Serverless Function",
      success: true,
      date: new Date().toLocaleString("fr-FR"),
    }),
  };
};
