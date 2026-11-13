import ProfileCard from "./components/ProfileCard";
const myResumeData = [
  {
    name: "Moslem",
    age: "24",
    skill: "Front-End developer",
    email: "Bazgi513@gmail.com",
    description: "This is My resume passed via props!",
  },
];

function App() {
  return (
    <div className="name">
      <h1>Hello React!</h1>
      <ProfileCard data={myResumeData} />
    </div>
  );
}

export default App;
