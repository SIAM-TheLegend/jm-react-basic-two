import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);
  return (
    <div>
      <h3>Total Users: {users.length}</h3>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </div>
  );
}

export default Users;
