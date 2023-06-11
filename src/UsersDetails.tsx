import { useParams } from "react-router-dom";
const UsersDetails = () => {
  const { userId } = useParams();
  return <div>Details About User {userId} </div>;
};

export default UsersDetails;
