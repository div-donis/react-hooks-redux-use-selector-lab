import React from "react";
import { useSelector } from 'react-redux'

function Users() {

  const users = useSelector((state) => state.users)

  return (
    <div>
      <ul>
        Users!
        {users.map((user) => user.username)}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
