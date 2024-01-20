import Table from "cli-table3";
import getDBPages from "./getDB.js";
import 'dotenv/config';
import scoreList from "./scoreList.js";

const data = await getDBPages(process.env.NOTION_KEY , process.env.NOTION_PAGE_ID);

const tableHead = new Table({
  head: ['Name', 'Score', 'Week'],
  colWidths: [50, 10, 10],
  style: {'padding-left': 1, "padding-right": 1}
});


const tableTotal = new Table({
  colWidths: [50, 10, 10],
  style: {'padding-left': 1, "padding-right": 1}
});

const tableHabits = new Table({
  colWidths: [50, 10, 10],
  style: {'padding-left': 1, "padding-right": 1}
});

let habits = [];
let total = [];

Object.entries(data).forEach(([key, values]) => {

  total = (total.length === 0 ? values.slice() : total.map((element, index) => element + values[index]));

  const habitData = calData(values);

  habits.push({ key, ...habitData });
});

let roundTotal = total.map((x) => Math.round(x * 10) / 100);

const totalData = calData(roundTotal);

tableTotal.push(["Total", totalData.score + '%', totalData.improveWeek + '%']);

habits.sort((a, b) => b.score - a.score);

habits.forEach(({ key, score, improveWeek }) => {
  tableHabits.push([key, score + '%', improveWeek + '%']);
});

console.log(tableHead.toString());
console.log(tableTotal.toString());
console.log(tableHabits.toString());



function calData(vals) {
  const scores = scoreList(vals);
  const roundScores = scores.map(x => Math.round(x * 100));
  const score = roundScores[roundScores.length - 2];
  const lastWeek = roundScores[roundScores.length - 2 - 7];
  const diff = score - lastWeek;
  const improveWeek = (diff >= 0 ? "+ " : "- ") + Math.abs(diff);

  return { score, improveWeek };
}
