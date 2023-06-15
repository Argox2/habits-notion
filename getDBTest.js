import { Client } from "@notionhq/client";

export default async function getNotionDB() {
  const notion = new Client({
    auth: "secret_F8MHbzw9mRtfYdOw1P63OL7HjM3DPFeqNi5c5hI42Nj",
  });

  const res = await notion.databases.query({
    database_id: "374c4c2c62b14c9a98ef50402f9fc0a5",
  });

  const extractedValues = {};

  for (const result of res.results) {
    const response = await notion.pages.retrieve({ page_id: result.id });
    const properties = response.properties;

    Object.entries(properties).forEach(([key, value]) => {
      const formattedKey = `'${key}'`;

      if (value.type === 'checkbox') {
        if (!extractedValues[formattedKey]) {
          extractedValues[formattedKey] = []
        }
        extractedValues[formattedKey].push(value.checkbox ? 1 : 0);
      } else if (value.type === 'status') {
        if (!extractedValues[formattedKey]) {
          extractedValues[formattedKey] = []
        }
        extractedValues[formattedKey].push(Number(value.status.name));
      }
    });
  }

  const extractedLists = Object.entries(extractedValues).map(([key, value]) => {
    
    value.reverse();
    let max = Math.max(...value);

    return {
      key,
      values: value,
      max
    };
  });

  return extractedLists;
}

// Example usage:
// const data = await extractNotionData();
// console.log(data);
