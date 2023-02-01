import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "../utils/api";
const Home: NextPage = () => {
  const getAllItems = api.getItem.getItems.useQuery();
  const deletedItem = api.deleteItem.deleteItem.useMutation();
  const handleEdit = (id: string) => {
    console.log(id);
  };
  const callRefetch = async () => {
    await getAllItems.refetch();
  };
  const handleDelete = (id: string) => {
    const res = deletedItem.mutateAsync(id);
    res
      .then(() => callRefetch())
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Head>
        <title>Shopping List</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto my-10 max-w-2xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold"> Shopping List</h2>
          <Link
            className="rounded-md bg-violet-500 p-3 transition hover:bg-violet-50"
            href="/addItem"
          >
            Add Shopping Item
          </Link>
        </div>
        <div>
          {getAllItems.data?.map((item, index) => {
            return (
              <div key={index} className=" flex justify-between">
                <h3 className="m-auto"> {item.name}</h3>
                <button
                  className="m-4 rounded-md bg-gray-600 p-3 "
                  type="button"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="m-4 rounded-md bg-red-400 p-3"
                  onClick={() => handleDelete(item.id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
