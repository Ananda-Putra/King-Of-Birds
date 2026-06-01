import authController from "./src/controllers/authController.js";
import eventsController from "./src/controllers/eventsController.js";
import birdsController from "./src/controllers/birdsController.js";
import registrationsController from "./src/controllers/registrationsController.js";

console.log('authController.login:', typeof authController?.login);
console.log('eventsController.getAll:', typeof eventsController?.getAll);
console.log('eventsController.getById:', typeof eventsController?.getById);
console.log('eventsController.create:', typeof eventsController?.create);
console.log('eventsController.update:', typeof eventsController?.update);
console.log('eventsController.destroy:', typeof eventsController?.destroy);

console.log('birdsController.getAll:', typeof birdsController?.getAll);
console.log('birdsController.destroy:', typeof birdsController?.destroy);

console.log('registrationsController.getAll:', typeof registrationsController?.getAll);
console.log('registrationsController.destroy:', typeof registrationsController?.destroy);