import { type NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { api } from "../utils/api";
export interface editProp extends ParsedUrlQuery {
  name: string;
  id: string;
}
const EditItem: NextPage = () => {
  const router = useRouter();
  const editData = router.query as editProp;
  const editItem = api.editItem.editItem.useMutation();
  const [data, setData] = useState<string>(editData.name);
  const eventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  console.log(data);
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-3">{}</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const res = editItem.mutateAsync({
              name: data,
              id: editData.id,
            });
            res.then(() => router.back()).catch((error) => console.log(error));
          }}
        >
          <input
            type="text"
            value={data}
            onChange={(e: ChangeEvent<HTMLInputElement>) => eventHandler(e)}
            placeholder="Enter Item Name"
            className="mr-4 border-b-2 p-2 focus:outline-none"
          ></input>
          <button type="submit" className="rounded-sm bg-gray-500 p-3">
            Update Item
          </button>
        </form>
      </div>
    </>
  );
};

export default EditItem;
