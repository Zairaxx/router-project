import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState(null);
  let params = useParams();

  useEffect(() => {
    let getData = async () => {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      let json = await response.json();
      console.log(json);
      setData(json);
    };
    getData();
  }, []);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Profile</h1>
      <h2>User ID: {params.id}</h2>
    </div>
  );
};

export default Profile;
