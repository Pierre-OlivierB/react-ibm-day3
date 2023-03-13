// Création de composant en créant des classes
function App() {
  const song = "Chachacha";
  const numberOfVotes = 150;
  const Button = <button>Vote</button>;
  const disabledButton = <button disabled>Vote</button>;

  return (
    // Ceci est ce qui va s'afficher.
    <div>
      <a href="https://thinkster.io/tutorials/rendering-variables-in-react">
        Documentation sur le rendu des variables en JSX
      </a>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
