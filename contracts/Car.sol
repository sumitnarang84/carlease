pragma solidity ^0.4.2;

import "./Authentication.sol";

contract Car {
     string public V5cID;
     uint256 public VIN;
     string public make;
     string public model;
     string public colour;
     string public reg;
     address public owner;
     bool public scrapped; 
     uint8 public status;
     string public membershipType;

   //event cs(string _V5cID, uint256 _VIN);

    modifier canCreateCar {
        require(keccak256(membershipType) == keccak256('Regulator'));
        _;
    }

    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor(string memory _membershipType, string memory _V5cID, uint256 _VIN) {
        membershipType = _membershipType;
        owner = msg.sender;
        createCar(_V5cID, _VIN);
        
    }
    

    function createCar(string memory _V5cID, uint256 _VIN)  canCreateCar {
       // cs(_V5cID, _VIN);
        V5cID = _V5cID;
        VIN   = _VIN;
    }


    function setVIN(uint256 _VIN) {
        VIN = _VIN;
    }

    function setMake(string memory _make) {
        make = _make;
    } 

    function setModel(string memory _model) {
        model = _model;
    } 

    function setColour(string memory _colour) {
        colour = _colour;
    } 

    function setReg(string memory _reg) {
        reg = _reg;
    } 

    function scrap() {
        scrapped = true;
    }

    function transfer(address transferParty) isOwner() {
        owner = transferParty;
    }


}