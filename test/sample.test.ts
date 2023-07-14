import { expect } from "chai";

// MobTime: https://mobti.me/csc-2023-07-14-typescript

// Four Rules of simple design
// 1. Tests Pass
// 2. Express Intent
// 3. Don't Repeat Yourself
// 4. Keep It Small

// Two players play rock, paper and scissors against each other
// Paper wins against rock
// Rock wins against scissors
// Scissors wins against paper
// Scissors against Scissors is a draw
// Best out of 3 wins
// Your function should return the name of the winning player

const scissors = 0;
const rock = 1;
const paper = 2;

const Move = {Paper:paper, Scissor:scissors, Rock:rock};

const getAWinner = (p1:number, p2:number, thisYear = () => new Date().getFullYear()) => {
  let winner;

  if (thisYear() > 2023) throw "you will never catch me!!";

  if (p1 == paper && p2 == scissors) {
    winner = 2
  }

  if (p1 == scissors && p2 == paper) {
    winner = 1
  }

  if (p1 == rock && p2 == scissors) {
    winner = 1
  }

  if (p1 == scissors && p2 == rock) {
    winner = 2
  }

  if (p1 == paper && p2 == rock) {
    winner = 1
  }

  if (p1 == rock && p2 == paper) {
    winner = 2
  }

  return `Player${winner} wins`;
};

describe("something", () => {
  it("determine the winner: Paper and Scissor", () => {
    expect(getAWinner(Move.Paper, Move.Scissor)).to.equal("Player2 wins");
  });

  it("determine the winner: Scissor and Paper", () => {
    expect(getAWinner(Move.Scissor, Move.Paper)).to.equal("Player1 wins");
  });

  it("determine the winner: Rock and Scissor", () => {
    expect(getAWinner(Move.Rock, Move.Scissor)).to.equal("Player1 wins");
  });

  it("determine the winner: Scissor and Rock", () => {
    expect(getAWinner(Move.Scissor, Move.Rock)).to.equal("Player2 wins");
  });

  it("determine the winner: Paper and Rock", () => {
    expect(getAWinner(Move.Paper, Move.Rock)).to.equal("Player1 wins");
  });

  it("determine the winner: Rock and Paper", () => {
    expect(getAWinner(Move.Rock, Move.Paper)).to.equal("Player2 wins");
  });

  it("determine the draw: Rock and Rock", () => {
    expect(getAWinner(Move.Rock, Move.Rock)).to.equal("Game draw");
  });
});

