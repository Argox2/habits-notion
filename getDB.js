import { Client } from "@notionhq/client";
import 'dotenv/config';

export default async function getDBPages(notionKey, databaseId) {

  const notion = new Client({
    auth: notionKey
  });

  const propertyArrays = {};
  let hasMore = true;
  let startCursor;

  try {
    while(hasMore) {
      const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [{property: "Created", direction: "ascending"}],
        start_cursor: startCursor,
      });

      response.results.forEach(page => {

        for (const [key, value] of Object.entries(page.properties)) {
          if (value.type === 'status') {
            if (!propertyArrays[key]) {
              propertyArrays[key] = [];
            }

            const numVal = parseFloat(value.status.name) || 0;
            propertyArrays[key].push(numVal);
          }
        }
      });

      hasMore = response.has_more;
      startCursor = response.next_cursor;
    }


    return propertyArrays;

  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

