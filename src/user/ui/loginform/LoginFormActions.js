import AuthenticationContract from '../../../../build/contracts/Authentication.json'
import { browserHistory } from 'react-router'
import store from '../../../store'

const contract = require('truffle-contract')
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser(name, password) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      // Using truffle-contract we create the authentication object.
      const authentication = contract(AuthenticationContract)
      authentication.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Authentication.
      var authenticationInstance;
     
      // Get current ethereum wallet.
      web3.eth.getAccounts((error, accounts) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }
        console.log(accounts[0]);
        authentication.deployed().then(function(instance) {
          authenticationInstance = instance

          // Attempt to sign up user.
          authenticationInstance.login.call(name, password, {from: accounts[0]})
          .then(function(result) {
            console.log(result);
            var membershipType = web3.toUtf8(result);
            if (membershipType === '') {
              alert("Login Failed");
              return; 
            }
           
            console.log(membershipType);
            dispatch(userLoggedIn({"name": name, "membershipType" : membershipType}))
            
            return browserHistory.push('/dashboard')
          })
          .catch(function(error) {
            console.error(error);
          })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
