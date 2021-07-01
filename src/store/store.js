let bills = [];

let idCount = 0;

function createBill(amount, product, paymentMethod, customer){
  let bill = {
    amount,
    product,
    paymentMethod,
    customer,
    id: idCount
  }

  idCount++;

  bills.push(bill);
  return bill;
}

function getBill(customer){
  let list = bills.filter(bill => bill.customer == customer)
  return list;
}

function deleteBill(id){
  let index = bills.findIndex(bill => bill.id == id);

  if(index != -1){
    bills.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

function debug(){
  console.log(bills);
  return bills;
}

module.exports = {
  createBill,
  getBill,
  deleteBill,
}