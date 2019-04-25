import CarContract from '../../../../build/contracts/Car.json'
import store from '../../../store'


const contract = require('truffle-contract')
const contractFactory = '';
// var handleReceipt = (error, receipt) => {
//     if (error != null) {
//   console.log(error);
//     } else {
//       console.log("here");
//      console.log(receipt);
//      var cont = web3.eth.contract(CarContract.abi, receipt.address);
//     }
 
// }

export  function createCar(V5cID, VIN) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
   
    return  function(dispatch) {
         web3.eth.getAccounts((error, accounts) =>  {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        // var contractI = web3.eth.contract(CarContract.abi, '0xf30493cbc94d004b722361a3bdecf152c96797f2');
        // contractI
        var version = web3.version.api; 
       
        
         contractFactory = web3.eth.contract(CarContract.abi);

        
         console.log(contractFactory);
         var contract = contractFactory.new({from : accounts[0],data: CarContract.bytecode,
          arguments: ["Regulator", V5cID, parseInt(VIN)], gas : 4000000}, 
          function (error, result) { 
            if (error != null) { console.log(error) } else { 
              console.log(result); 
               var cont = new web3.eth.contract(CarContract.abi, result.address);
 
            console.log(cont.methods); 
            cont.methods.VIN().call( function (v) { console.log(v) });
// cont.VIN.call().then(function (res) { console.log(res)});
          

     


       
         
    }
  });
  }); } } else {
    console.error('Web3 is not initialized.');
  }  

}

          
  