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
routes.post("/sessions", celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8)
    })
}),SessionController.create);

// Get ONGs
routes.get("/ongs", OngController.index);

// Post ONGs
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string().required().min(10).max(14),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

// Get Profile
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required().length(8)
    }).unknown()
  }),
  ProfileController.index
);

// Get Incidents
routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),IncidentController.index);

// Post Incident
routes.post("/incidents", celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required().length(8)
    }).unknown()
}),IncidentController.create);

// Delete Incident
routes.delete("/incidents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required().length(8)
    }).unknown() 
}),IncidentController.delete);

module.exports = routes;
