import React, { useState, useEffect } from "react";
import Achats from "./Achats";
import Facture from "./Facture";
const clients = [
  { numero: "1", nom: "N1", prenom: "P1" }
];
const produits = [
  { codeProduit: "1", intitule: "Produit1", prix: 10 },
  { codeProduit: "2", intitule: "Produit2", prix: 20 },
  { codeProduit: "3", intitule: "Produit3", prix: 30 }
];
const achatsInitial = [
  { numero: "1", codeProduit: "1", qte: 5 }
];
function App() {
  const [achats, setAchats] = useState(achatsInitial);
  const [filtre, setFiltre] = useState("");
  const [page, setPage] = useState("achats");
  //a : changer le titre //
  useEffect(() => {
    document.title = "Nombre d'achats : " + achats.length;
  }, [achats]);
  function ajouterAchat(achat) {
    setAchats([...achats, achat]);
  }
  function supprimerAchat(index) {
    setAchats(achats.filter((a, i) => i !== index));
  }
  const achatsFiltres = achats.filter(
    (a) => filtre === "" || a.numero === filtre
  );
  return (
    <div>
      <h1>Gestion des achats</h1>
      



      <button onClick={() => setPage("achats")}>
        Achats
      </button>
      <button onClick={() => setPage("facture")}>
        Facture
      </button>
      {page === "achats" && (
        <div>
          <Achats
            produits={produits}
            ajouterAchat={ajouterAchat}
          />
          <h2>Liste des achats</h2>
          <input
            placeholder="Numero client"
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
          />
          <button>Filtrer</button>
          <table border="1">
            <thead>
              <tr>
                <th>Numero</th>
                <th>Produit</th>
                <th>Quantite</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {achatsFiltres.map((a, index) => (
                <tr key={index}>
                  <td>{a.numero}</td>
                  <td>{a.codeProduit}</td>
                  <td>{a.qte}</td>
                  <td>
                    <button onClick={() => supprimerAchat(index)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {page === "facture" && (
        <Facture
          clients={clients}
          produits={produits}
          achats={achats}
        />
      )}
    </div>
  );
}
export default App;