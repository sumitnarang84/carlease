pragma solidity ^0.4.2;

import './zeppelin/lifecycle/Killable.sol';

contract Authentication is Killable {
  struct User {
    bytes32 name;
    bytes32 password;
    bytes32 membershipType;
  }

  
  mapping (address => User) public users;

  uint private id; // Stores user id temporarily
  

  
  modifier onlyExistingUser {
    // Check if user exists or terminate

    require(!(users[msg.sender].name == 0x0));
    _;
  }

  modifier onlyValidName(bytes32 name) {
    // Only valid names allowed

    require(!(name == 0x0));
    _;
  }


  function login(bytes32 name, bytes32 password) constant
  public
  onlyExistingUser
  returns (bytes32) {
    if (users[msg.sender].name == name && users[msg.sender].password == password) 
    {
      return (users[msg.sender].membershipType);
    }
  }

  function signup(bytes32 name, bytes32 password, bytes32 membershipType)
  public
  payable
  onlyValidName(name)
  returns (bytes32) {
    // Check if user exists.
    // If yes, return user name.
    // If no, check if name was sent.
    // If yes, create and return user.

    if (users[msg.sender].name == 0x0)
    {
        users[msg.sender].name = name;
        users[msg.sender].password = password;
        users[msg.sender].membershipType = membershipType;

        return (users[msg.sender].name);
    }

    return (users[msg.sender].name);
  }

  function update(bytes32 name)
  public
  payable
  onlyValidName(name)
  onlyExistingUser
  returns (bytes32) {
    // Update user name.

    if (users[msg.sender].name != 0x0)
    {
        users[msg.sender].name = name;

        return (users[msg.sender].name);
    }
  }
}
