import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Select, { DataType } from "../Select";

const people: DataType[] = [
  { name: "Wade Cooper", value: 1 },
  { name: "Arlene Mccoy", value: 2 },
  { name: "Devon Webb", value: 2 },
  { name: "Tom Cook", value: 2 },
  { name: "Tanya Fox", value: 2 },
  { name: "Hellen Schmidt", value: 2 },
];

const PeopleSelect = () => {
  const [sekected, setSelected] = useState(people[0]);
  const queryClint = useQueryClient();
  // useEffect(() => {
  //   axios.get('/people').then(({data}) => {
  //     console.log(data);
  //   })
  // },[])
  // queryClint.getQueryCache().
  const query = useQuery(["people-key"], () => axios.get(`/people`), {
    select: (data) => data.data.people,
    // refetchInterval: 1000 // 每1秒请求一次
  });

  if (query.status === "loading") return <>loading</>;
  if (query.status === "success") {
    return (
      <Select
        data={people}
        selected={sekected}
        onChange={(e) => setSelected(e)}
      />
    );
  }
  return <>error</>
};

export default PeopleSelect;
