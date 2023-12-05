import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  let goToProfile = () => {
    let profileId = document.querySelector("select").value;
    console.log(profileId);
    navigate("/profile/" + profileId);
  };

  return (
    <div>
      <h1>Home</h1>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <button
        onClick={() => {
          goToProfile();
        }}
      >
        Go to profile
      </button>
    </div>
  );
};

export default Home;
