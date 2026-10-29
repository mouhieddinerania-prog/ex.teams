import { useState } from "react";
function Facture({ clients, produits, achats }) {
  const [numero, setNumero] = useState("");
  const client = clients.find(c => c.numero === numero);
  // chercher produit //
  function getProduitByCode(code) {
    return produits.find(p => p.codeProduit === code);
  }
  const achatsClient = achats.filter(a => a.numero === numero);
  // calcul total //
  const total = achatsClient.reduce((s, a) => {
    let p = getProduitByCode(a.codeProduit);
    if (p) {
      return s + p.prix * a.qte;
    }
    return s;
  }, 0);
  return (
    <div>
      <h2>Facture</h2>
      <input
        placeholder="Numero client"
        onChange={(e) => setNumero(e.target.value)}
      />
      {numero !== "" && !client && <p>Client n'existe pas</p>}
      {client && (
        <div>
          <h3>{client.nom} {client.prenom}</h3>
          <table border="1">
            <tr>
              <th>Code produit</th>
              <th>Intitule</th>
              <th>Quantite</th>
              <th>Prix</th>
              <th>Total</th>
            </tr>
            {achatsClient.map((a, i) => {
              const p = getProduitByCode(a.codeProduit);
              if (p) {
                return (
                  <tr key={i}>
                    <td>{p.codeProduit}</td>
                    <td>{p.intitule}</td>
                    <td>{a.qte}</td>
                    <td>{p.prix}</td>
                    <td>{p.prix * a.qte}</td>
                  </tr>
                );
              }
              return null;
            })}
          </table>
          <h3>Montant total: {total}DH</h3>
        </div>
      )}
    </div>
  );
}
export default Facture;