module.exports = app => {
    const registered_emotions = require("../controllers/registered_emotion.controller");
    var router = require("express").Router();
  
    router.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    app.use('/users', router);
  
    // Register new emotion
    router.post("/registerEmotion", registered_emotions.registerEmotion);
    //find register for a given user
    router.get("/registeredEmotions/:userId", registered_emotions.findRegisters);
    // Update a register
    router.put("/updateRegister", registered_emotions.updateRegister);
    //Find the last emotion a user has registered 
    router.get("/getLastEmotion/:userId", registered_emotions.queryEmotions);
  };
  