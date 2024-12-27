"use client";
import React, { useEffect, useState } from "react";

const Table = ({ data = [] }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setfilteredData] = useState(data);
  const [order, setOrder] = useState("asc");

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      const filteredUsersData = data?.filter(
        (user) =>
          user?.name?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
          user?.city?.toLowerCase()?.includes(searchValue?.toLowerCase())
      );
      setfilteredData(filteredUsersData);
    } else setfilteredData(data);
  }, [searchValue]);

  const handleSort = (sort) => {
    const sorted = [...filteredData].sort((a, b) => {
      return (
        a[sort].toString().localeCompare(b[sort].toString(), "en", {
          numeric: true,
        }) * (order === "asc" ? 1 : -1)
      );
    });

    setOrder((pre) => (pre == "asc" ? "dsc" : "asc"));

    setfilteredData(sorted);
  };

  return (
    <div>
      <p>Users Table</p>
      <input
        value={searchValue}
        onChange={handleSearchValue}
        className="m-2 border-2 p-1 rounded-md"
        placeholder="Search Users"
      />

      <table className="border-2">
        <thead className="border-2">
          <tr className="border-2">
            <th className="border-2" onClick={() => handleSort("name")}>
              Name
            </th>
            <th className="border-2" onClick={() => handleSort("age")}>
              Age
            </th>
            <th className="border-2" onClick={() => handleSort("city")}>
              City
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData?.length
            ? filteredData?.map((user) => (
                <tr key={user?.id} className="border-2">
                  <td className="border-2">{user?.name}</td>
                  <td className="border-2">{user?.age}</td>
                  <td className="border-2">{user?.city}</td>
                </tr>
              ))
            : "No Data"}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
