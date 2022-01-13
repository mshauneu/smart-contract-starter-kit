// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TatooineCoin is ERC20 {
    constructor() ERC20("TatooineCoin", "TC") {
        _mint(msg.sender, 100000000000000000000000000);
    }
}