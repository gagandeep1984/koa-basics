const KoaRouter = require('koa-router');
const router = new KoaRouter({ prefix: '/events' });

const EventController = require("./controllers/events.controller");

router.get("/list", EventController.fetchEvents)
router.get("/:id", EventController.fetchEventById);
router.post("/", EventController.createEvent);
router.put("/", EventController.updateEvent);
router.delete("/:id", EventController.deleteEvent)

module.exports = router
