const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;
  router.get('/', async (req, response) => {
    const speakers = await speakerService.getList();
    return response.json(speakers);
  });

  router.use('/:shortname ', (request, response) =>
    response.send(`Detail page of  ${request.params.shortname}`)
  );

  return router;
};
