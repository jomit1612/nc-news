import { useEffect, useState } from "react";
import { getUsers } from "../Utils/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data.users);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (error) if (isLoading) return <h1 className="loading">Users loading!</h1>;
  return (
    <section className="Ma">
      <ul className="Users">
        {users.map((user) => {
          return (
            <li key={user.userName} className="usersCard">
              <img
                className="userImage"
                src={user.avatar_url}
                alt={user.name}
              />
              <h3>{user.name}</h3>
              <h3>User:{user.username}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Users;
