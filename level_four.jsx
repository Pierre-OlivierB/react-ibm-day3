// Création de composant en créant des classes
class App extends React.Component {
  render() {
    const chat = "Ronron";

    const personnes = [
      {
        name: "Charly",
        age: 66,
        job: {
          name: "Styliste",
          since: "29 Avril 2020",
        },
      },
      {
        name: "Charly",
        age: 25,
        job: {
          name: "Barman",
          since: "29 Avril 5050",
        },
      },
    ];

    const panierDeCourses = [
      {
        name: "Concombre",
        type: "Legume",
        magasin: {
          name: "MisterEpices",
          taille: "petit",
        },
      },
      {
        name: "Courgette",
        type: "Legume",
        magasin: {
          name: "MisterEpices",
          taille: "petit",
        },
      },
      {
        name: "Endive",
        type: "Beurk",
        magasin: {
          name: "Parking Souterrain",
          taille: "Grand",
        },
      },
      {
        name: "Steak",
        type: "Frais",
      },
      {
        name: "Sanglier",
        type: null,
        magasin: null,
      },
    ];

    return (
      <div className="container">
        <div>
          <h2>Chat</h2>
          <p>{chat}</p>
        </div>

        <h2>Personnes</h2>
        <ul>
          {personnes.map((people) => (
            <li key={people.age}>
              {people.name}
              <br />
              {people.job.name}
              <br />
              {people.job.since}
              <br />
              {people.age > 50 ? "senior" : people.age + "ans"}
            </li>
          ))}
        </ul>

        <h2>Panier de Courses</h2>
        <table>
          <thead>
            <tr className="tr">
              <th span="2">Article</th>
              <th span="2">Type</th>
              <th span="2">Magasin</th>
            </tr>
          </thead>
          <tbody>
            {panierDeCourses.map((item) => (
              <tr className="tr" key={item.name}>
                <td span="2">{item.name}</td>
                <td span="2">{item.type != "" ? item.type : null}</td>
                <td span="2">
                  {item.magasin == undefined || item.magasin.name == null
                    ? ""
                    : item.magasin.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
