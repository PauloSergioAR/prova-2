const { createBill, getBill, deleteBill } = require('./store/store');

function createBillController(req, res){
  const {amount, product, paymentMethod, customer} = req.body;

  if(!amount || !product || !paymentMethod || !customer){
    res.status(400).json({message: 'Invalid payload format.'});
  } else {
    createBill(amount, product, paymentMethod, customer);
    res.sendStatus(201);
  }
}

function getBillController(req, res){
  const { customer } = req.query;

  if(!customer){
    res.status(400).json({message: 'Missing customer query parameter.'});
  } else {
    let bill = getBill(customer);
    if(!bill){
      res.status(404).json({message: 'No bills found for customer.'});
    } else {
      res.status(200).json({bill})
    }
  }
}

function deleteBillController(req, res){
  const {id} = req.params;

  if(!id){
    res.status(400).json({message: 'Invalid bill id.'});
  } else {
    let deletedBill = deleteBill(id);

    if(deletedBill){
      res.sendStatus(204);
    } else {
      res.status(404).json({message: 'Bill not found.'})
    }
  }
}

function baseController(_, res){
  res.send("Controller works");
}

module.exports = {
  baseController,
  createBillController,
  getBillController,
  deleteBillController,
}