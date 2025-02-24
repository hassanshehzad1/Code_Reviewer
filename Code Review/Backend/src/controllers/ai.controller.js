const aiService = require("../services/ai.services");

module.exports.getAiResponse = async (req, res) => {
  console.log(req);
  const prompt = req.body.code;
  if (!prompt) {
    return res.status(400).send("Error: Prompt required");
  }

  const response = await aiService(prompt);
  res.send(response);
};
