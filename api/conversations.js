const
  express = require('express'),
  router = express.Router();

let messages = require('../mockup/messages');

router
  .route('/')
    .get((request, response) => {

      response.json({
        affected: [
          {
            id: 1,
            name: 'Octadesk'
          },
          {
            id: 2,
            name: 'Ajuda'
          },
          {
            id: 3,
            name: 'Indicações'
          },
          {
            id: 4,
            name: 'Geral'
          }
        ].map(conversation => {
          let conversationMessages = messages.filter(message => message.conversationId === conversation.id);

          return {
            ...conversation,
            unreadMessages: conversationMessages.filter(message => message.isUnread).length,
            lastMessage: conversationMessages.length ? conversationMessages[conversationMessages.length - 1].body : '...'
          };
        })
      });
    });

module.exports = router;
