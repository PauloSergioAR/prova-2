const express = require('express');
const router = express.Router();
const { 
  getBillController,
  createBillController,
  deleteBillController,
  baseController,
} = require('./controller')

router.get("/test", baseController);

router.get("/api/v1/bills", getBillController);
router.delete("/api/v1/bills/:id", deleteBillController);
router.post("/api/v1/bills", createBillController);

module.exports = router;