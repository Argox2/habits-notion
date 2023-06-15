import {score} from "./score.js";

export default function scoreList(values) {
  // fromTimestamp, toTimestamp
  // fromTimestamp is equal to the first true. 
  // toTimestamp is equal to today. 
  //
  // If the timestamp given happens before the fisrt repetition of the, returns a score with value zero. 

  let scoreList = [];
  
  const firstDate = new Date('2023-05-30'); // Here goes the first timestamp. 
  const currentDate = new Date(firstDate);
  const today = new Date().setHours(0, 0, 0, 0);
  const daysToFirstTrue = values.indexOf(true); //If the array doesn't contain true, the indexOf method will return -1.
  const fromDate = new Date(firstDate);
  fromDate.setDate(fromDate.getDate() + daysToFirstTrue);
  let index = 0;
  // If currentTimestamp is least of toTimestamp then the difference is postive. If is the same then is zero. If currentTimestamp is major of toTimestamp then the difference is negative. 
  // How works timeStamp?
  while (currentDate <= today) {
    if (currentDate < fromDate) {
      scoreList.push(0.0); 
      currentDate.setDate(currentDate.getDate() + 1); 
      index++; 
    } else {
      scoreList.push(score(scoreList.length === 0 ? 0.0 : scoreList[scoreList.length - 1], values[index] ? 1 : 0)); // How convert the values to true here? value ? 1 : 0
      currentDate.setDate(currentDate.getDate() + 1);
      index++;
    }
  }
  
  const todayScore = Math.round((scoreList[scoreList.length - 1] * 100)).toFixed(2);

  return todayScore;
}

