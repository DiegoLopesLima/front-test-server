const
  express = require('express'),
  router = express.Router();

let messages = require('../mockup/messages');

router
  .route('/')
    .get((request, response) => {
      let messages = require('../mockup/messages');

      if (request.query.conversationId) {
        messages = messages.filter(message => message.conversationId === +request.query.conversationId);
      }

      response.json({
        affected: messages
      });
    })
    .post((request, response) => {
      let
        affected = request.body.map(item => ({
          ...item,
          id: Math.random(),
          creationDate:  (new Date).getTime(),
          isMine: true
        }));

      Array.prototype.push.apply(
        messages,
        affected
      );

      response.json({
        affected
      });
    });

module.exports = router;
