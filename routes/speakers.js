const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, response) => response.send('Speaker List'));

  router.use('/:shortname ', (request, response) => response.send(`Detail page of  ${request.params.shortname}`));

  return router;
};
