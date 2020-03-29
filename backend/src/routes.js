const express = require("express");
// Validation
const { celebrate, Segments, Joi } = require("celebrate");

// Controllers
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

// Routes
const routes = express.Router();

/* 

QUERY ??? PARAMS -> GET,  ( filters, pagination)
ROUTE //// PARAMS -> Identify :id
REQUEST BODY 

*/

// Login
routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),IncidentController.index);
routes.post("/incidents", IncidentController.create);

routes.delete("/incidents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required()
    }).unknown() 
}),IncidentController.delete);

module.exports = routes;
