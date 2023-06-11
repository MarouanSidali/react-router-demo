import { Link, useSearchParams } from "react-router-dom";
const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <Link to="1">User 1</Link>
      <Link to="2">User 2</Link>
      <Link to="3">User 3</Link>
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? "Showing Active Users" : "Showing All Users"}
    </>
  );
};

export default Users;
