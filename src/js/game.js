const firstTurn = Math.round(Math.random());

export const game = {
    turnIndex: firstTurn,
    resetTurnIndex: function () {
        this.turnIndex = firstTurn;
    },
    playerSign: firstTurn ? 'x' : 'o',
    computerSign: firstTurn ? 'o' : 'x',
    getPlayerClassName: function () {
        return firstTurn ? 'cross' : 'nought';
    },
    getComputerClassName: function () {
        return firstTurn ? 'nought' : 'cross';
    },
    playerScores: 0,
    computerScores: 0,
    resetScores: function () {
        this.playerScores = 0;
        this.computerScores = 0;
    },
    playerPositions: [],
    computerPositions: [],
    resetPositions: function () {
        this.playerPositions = [];
        this.computerPositions = [];
    }
};

export const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
