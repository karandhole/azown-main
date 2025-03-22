const express = require("express");
const HandlerCotroller = require('../controller/HandlerController')
const router = express.Router();

const fetchuser = require('../middleware/fetchuser')

router.post('/create-handler-req',fetchuser,HandlerCotroller.createHandlerRequest)
router.get('/handling-req/:type',fetchuser,HandlerCotroller.handlingRequests)

router.get('/handledprops',fetchuser,HandlerCotroller.handledproperties)
router.get('/handler-req/:id',fetchuser,HandlerCotroller.handlerRequests)
router.put('/update-handler-stage/:_id/:stage',fetchuser, HandlerCotroller.updateHandlerStage)
router.get("/handreqwithid/:id", fetchuser,HandlerCotroller.handlerwithid );
router.put("/remove-handler/:uid/:pid/:ptype", fetchuser,HandlerCotroller.removeHandler)


module.exports = router;
