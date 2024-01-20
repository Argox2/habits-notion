import getScore from "./getScore.js"

export default function scoreList(values) {

  let scoreList = [];
  let score = 0;

  values.forEach(value => {
    score = getScore(score, value);
    scoreList.push(score);
  })

  // return Math.round(scoreList.length - 2) * 100
  return scoreList;
}

// let test = [];

// for (let i = 0; i < 101; i++) {
//     test.push(1);
// }

// const list = scoreList(test)
// console.log(list);
