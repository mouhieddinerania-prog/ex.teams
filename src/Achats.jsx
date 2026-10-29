import { useState } from "react";
function Achats({ produits, ajouterAchat }) {
  const [numero, setNumero] = useState("");
  const [codeProduit, setCodeProduit] = useState("");
  const [qte, setQte] = useState(1);
  function ajouter() {
    ajouterAchat({ numero, codeProduit, qte });
  }
  return (
    <div>
      <h2>Ajouter un achat</h2>
      <input
        placeholder="Numero client"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <select
        value={codeProduit}
        onChange={(e) => setCodeProduit(e.target.value)}
      >
        <option value="">Choisir un produit</option>
        {produits.map((p) => (
          <option key={p.codeProduit} value={p.codeProduit}>
            {p.intitule}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={qte}
        onChange={(e) => setQte(e.target.value)}
      />
      <button onClick={ajouter}>Ajouter</button>
    </div>
  );
}
export default Achats;
         
