import Head from "next/head";
import Works from "../components/Works";
import { Client } from "@notionhq/client";
import { useEffect } from "react";

type Props = {
  results: any;
};

export default function Home({ results }: Props) {
  useEffect(() => {
    console.log(results);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Works works={results} />
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseID = "1d8991e599c34471a4378d3da5a27225";
  const response = await notion.databases.query({
    database_id: databaseID,
  });

  return {
    props: {
      results: response.results,
    },
  };
}
