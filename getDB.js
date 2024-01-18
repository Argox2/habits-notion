import { Client } from "@notionhq/client";
import 'dotenv/config';

export default async function getDBPages(notionKey, databaseId) {

  const notion = new Client({
    auth: notionKey
  });

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Created",
          direction: "descending"
        }
      ],
      page_size: 3,
    });

    response.results.forEach(page => {const habits = {};

      for (const [key, value] of Object.entries(page.properties)) {
        if (value.type === 'status') {
          habits[key] = value.status.name;
        }
      }

      console.log(`Page ID: ${page.id}`);
      console.log(habits);
    });

  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

getDBPages(process.env.NOTION_KEY , process.env.NOTION_PAGE_ID);
