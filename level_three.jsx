// Création de composant
function App() {
  const personne = {
    name: "Charly",
    age: 66,
    job: {
      name: "Styliste",
      since: "29 Avril 2020",
    },
  };

  const panierDeCourses = [
    {
      name: "Concombre",
      type: "Legume",
    },
    {
      name: "Courgette",
      type: "Legume",
    },
    {
      name: "Endive",
      type: "Beurk",
    },
    {
      name: "Steak",
      type: "Frais",
    },
    {
      name: "Jack Daniels",
      type: null,
    },
  ];

  const series = catalogueSeries();

  return (
    <div>
      <h3>personne </h3>
      <article>
        <p>
          Nom : {personne.name} - {personne.age} Ans
        </p>
        <p>
          Job : {personne.job.name} - Depuis : {personne.job.since}
        </p>
      </article>

      <h3>Panier de courses habituel</h3>
      <article>
        {panierDeCourses.map((item) => (
          <p key={item.name}>
            {item.name} - {item.type == null ? "Non renseigné" : item.type}
          </p>
        ))}
      </article>
      <h3>Séries préferées</h3>
      <article>
        {catalogueSeries().map((item) => (
          <ul key={item.name}>
            <li>Titre : {item.name}</li>
            <li>Episodes : {item.episodes}</li>
            <li>Note : {item.note}</li>
          </ul>
        ))}
      </article>
      <p>Cliquez pour valider</p>
      <p>
        {validateButton()} {cancelButton()}
      </p>
    </div>
  );
}

/**
 * Cette méthode renvoie un bouton Annuler au format JSX
 */
function cancelButton() {
  return <button>Annuler</button>;
}

/**
 * Cette méthode renvoie un bouton Valider au format JSX
 */
function validateButton() {
  return <button>Valider</button>;
}

/*
 * Cette méthode renvoie une liste des séries
 * */
function catalogueSeries() {
  return [
    {
      name: "One Sheep",
      episodes: 999999,
      note: 5,
    },
    {
      name: "Vikongs",
      episodes: 5,
      note: 19,
    },
    {
      name: "Spartakis, au bon lait de brebis",
      episodes: 15,
      note: 12,
    },
  ];
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
