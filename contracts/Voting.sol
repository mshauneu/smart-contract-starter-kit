// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.8.1;

contract Voting {
  
    int256 alpha;
    int256 beta;

    event Vote(address indexed from, int256 value);

    constructor() {
        alpha = 0;
        beta = 0;
    }

    function getTotalVotesAlpha() public view returns (int256) {
        return alpha;
    }

    function getTotalVotesBeta() public view returns (int256) {
        return beta;
    }

    function voteAlpha() public {
        alpha = alpha + 1;
        emit Vote(msg.sender, alpha);
    }

    function voteBeta() public {
        beta = beta + 1;
        emit Vote(msg.sender, beta);
    }
}
