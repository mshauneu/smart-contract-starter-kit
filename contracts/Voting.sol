// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.8.1;

contract Voting {
    int256 alpha;
    int256 beta;

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
    }

    function voteBeta() public {
        beta = beta + 1;
    }
}
