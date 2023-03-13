// Création de composant
function App() {
  const personne = {
    firstname: "Ella",
    lastname: "De Bonzieux",
    age: 15,
  };

  const notes = [0, 4, 10, 20, 15];

  const actionsList = (
    <div>
      <button>Valider</button>
      <button>Annuler</button>
    </div>
  );

  return (
    <div>
      <a href="https://fr.reactjs.org/docs/lists-and-keys.html">
        Documentation sur l'affichage des listes
      </a>

      <p></p>
      <p></p>
      <p></p>
      <p>Notes</p>
      <div></div>
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
