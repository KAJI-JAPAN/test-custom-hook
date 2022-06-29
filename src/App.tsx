import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUsers = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUsers}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得は失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles?.map((user) => (
            <UserCard key={user.name} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
