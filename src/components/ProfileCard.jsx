function ProfileCard({ data }) {
  return (
    <div>
      {data.map((el, index) => {
        return (
          <ul key={index}>
            <li>Name: {el.name}</li>
            <li>Age: {el.age}</li>
            <li>Skill: {el.skill}</li>
            <li>Email: {el.email}</li>
            <li>Description: {el.description}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default ProfileCard;
