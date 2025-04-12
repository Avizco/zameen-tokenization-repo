// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZameenToken is ERC20, Ownable {
    constructor() ERC20("ZameenToken", "ZMT") Ownable(msg.sender) {
    _mint(msg.sender, 100000 * 10 ** decimals());
}

    function distribute(address to, uint256 amount) public onlyOwner {
        _transfer(owner(), to, amount);
    }

    function distributeProfits() public payable onlyOwner {
        // Logic for future ETH/USDT distribution
    }
}