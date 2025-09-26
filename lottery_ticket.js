function bingo(ticket, win) {
    const miniWins = ticket.reduce((count, [str, num]) => {
        return str.split('').some(char => char.charCodeAt(0) === num) ?
               count + 1 : count;
    }, 0);

    return miniWins >= win ? 'Winner!' : 'Loser!';
}