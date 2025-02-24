const express =  require("express");
const router =  express.Router();
const aiController =  require("../controllers/ai.controller");
router.post('/get-response',aiController.getAiResponse);

module.exports = router