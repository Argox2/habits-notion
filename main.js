import getDBPages from "./getDB.js";
import 'dotenv/config';

import Table from "cli-table";
import scoreList from "./scoreList.js";

const data = await getDBPages(process.env.NOTION_KEY , process.env.NOTION_PAGE_ID);

const table = new Table({
  head: ['Name', 'Score'], 
  colWidths: [50, 10],
  style: {'padding-left': 1, "padding-right": 1}
}); 

data.map((item) => {
  const key = item.key.replace(/'/g, '');
  const score = scoreList(item.values, item.max);

  table.push([key, score + '%']);
});

console.log(table.toString());
