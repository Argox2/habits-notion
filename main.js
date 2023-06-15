import getNotionDB from "./getDBTest.js";
import Table from "cli-table";
import scoreList from "./scoreList.js";

const data = await getNotionDB();

const table = new Table({
  head: ['Name', 'Score'], 
  colWidths: [20, 10],
  style: {'padding-left': 1, "padding-right": 1}
}); 

data.map((item) => {
  const key = item.key.replace(/'/g, '');
  const score = scoreList(item.values.reverse());

  table.push([key, score + '%']);
});

console.log(table.toString());
