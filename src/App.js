import { useState } from "react";

function App() {
  //state
  const [or, setOr] = useState(9999);
  const [click, setClick] = useState(1);

  const [prixAmelioration, setPrix] = useState(10);
  const [nvAmelioration, setNvAmelioration] = useState(1);

  const [prixPassif, setPrixPassif] = useState(20);
  const [nvPassif, setNvPassif] = useState(1);

  //comportement
  const clickPrincipale = () => {
    setOr(+or + +click);
    console.log("prixAmelioration:" + prixAmelioration);
    console.log("or:" + or);
    console.log("click:" + click);
  };
  const orMoins = () => {
    if (or >= prixAmelioration) {
      setOr(or - prixAmelioration);
      setClick(click * 1.1);
      setPrix(prixAmelioration * 1.15);
      setNvAmelioration(nvAmelioration + 1);
    } else {
      alert("t pas assez riche");
      console.log("prixAmelioration:" + prixAmelioration);
      console.log("or:" + or);
    }
  };
  const passifPlus = () => {
    if (or >= prixPassif) {
      setNvPassif(nvPassif + 1);
      setPrixPassif(prixPassif * 1.15);
    } else {
      alert("t pas assez riche");
    }
  };

  //affichage
  return (
    <div>
      <button onClick={clickPrincipale}>clicker</button>
      <h1>compteur</h1>
      <h1>{or.toFixed(2)}</h1>
      <button onClick={orMoins}>
        nv:{nvAmelioration} ameliorer {prixAmelioration.toFixed(2)} or
      </button>
      <button onClick={passifPlus}>
        nv:{nvPassif}améliorer {prixPassif.toFixed(2)}
      </button>
    </div>
  );
}

export default App;
