import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api/userListRequest";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

type User = {
  id: number;
  name: string;
};

const UserList: React.FC = () => {
  const { data, isLoading, isError, error, status } = useQuery(
    "users",
    fetchUsers,
    // {
    //   cacheTime: 5000,
    // }
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  // if (isError && error) {
  //   return <span>Error: {error.message}</span>;
  // }

  return (
    <>
      {data.map((user: User) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export const UserQueryPage: React.FC = () => {
  const [show, setShow] = useState(true);
  // useEffect(() => {
  //   fetchUsers().then((data: Users) => {
  //     setUsers(data);
  //   });
  // }, []);

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        <button onClick={() => setShow(!show)}>切り替え</button>
      </div>
      <div>{show && <UserList />}</div>
    </div>
  );
};
