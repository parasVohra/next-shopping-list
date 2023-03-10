import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useState } from "react";

import { api } from "../utils/api";
export interface FormData {
  name: string;
}

const AddItem: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<FormData>({
    name: "",
  });
  const addItem = api.addItem.addItem.useMutation();
  const eventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ name: e.target.value });
  };
  return (
    <>
      <Head>
        <title>Shopping List</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto my-10 max-w-2xl">
        <Link href="/">Go Back</Link>
        <h2>Add Item</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const res = addItem.mutateAsync({
              name: data.name,
            });
            res.then(() => router.back()).catch((error) => console.log(error));
          }}
        >
          <input
            type="text"
            value={data.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => eventHandler(e)}
            placeholder="Enter Item Name"
            className="mr-4 border-b-2 p-2 focus:outline-none"
          ></input>
          <button type="submit" className="rounded-sm bg-gray-500 p-3">
            Add Item
          </button>
        </form>
      </main>
    </>
  );
};

export default AddItem;
