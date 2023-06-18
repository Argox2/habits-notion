import {score} from "./score.js";

export default function scoreList(values, max) {

  let scoreList = [];
  
  const firstDate = new Date('2023-05-30'); 
  const currentDate = new Date(firstDate);
  const today = new Date().setHours(0, 0, 0, 0);
  const daysToFirstTrue = values.findIndex(num => num !== 0);  
  const fromDate = new Date(firstDate);
  fromDate.setDate(fromDate.getDate() + daysToFirstTrue);

  let index = 0;

  while (currentDate <= today) {
    if (currentDate < fromDate) { // If the timestamp given happens before the fisrt repetition of the, returns a score with value zero.
      scoreList.push(0.0); 
      currentDate.setDate(currentDate.getDate() + 1); 
      index++; 
    } else {
      scoreList.push(score(scoreList.length === 0 ? 0.0 : scoreList[scoreList.length - 1], values[index] / max));       
      currentDate.setDate(currentDate.getDate() + 1);
      index++;
    }
  }
  
  const todayScore = Math.round(scoreList[scoreList.length - 1] * 100);

  return todayScore;
}

