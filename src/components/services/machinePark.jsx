import React from "react";

export function MachinePark() {
  return (
    <div className="bg-gray-50 text-gray-800 p-6">
      {/* Titre principal */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-blue-600 mb-6">
        Notre Parc de Machines : Puissance et Précision
      </h1>

      {/* Section Parc de Machines */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Nos équipements à la pointe de la technologie :</h2>
        <ul className="space-y-2">
          <li>1 LASER FIBRE DE 4 kW : Idéal pour vos projets standards.</li>
          <li>1 LASER FIBRE DE 6 kW : Pour des découpes rapides et efficaces.</li>
          <li>1 LASER FIBRE DE 8 kW : Capable de traiter les matériaux les plus exigeants.</li>
        </ul>
        <p className="mt-4">
          💡 <strong>Tous nos lasers</strong> sont équipés de <strong>tables de découpe de 4000x2000 mm</strong>, vous garantissant une grande capacité de production et une flexibilité optimale.
        </p>
        <p>
          🔍 <strong>Capacité de découpe :</strong> Jusqu’à <strong>25 mm</strong> pour l’acier, l’inox et l’aluminium.
        </p>
      </section>

      {/* Section Stock important */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Un Stock Important pour une Réactivité Maximale</h2>
        <p>
          Nous maintenons en permanence un stock de tôles, nous permettant de répondre rapidement à chaque commande.
        </p>
        <h3 className="text-xl font-semibold mt-4">Matériaux disponibles :</h3>
        <ul className="space-y-2 mt-2">
          <li><strong>Acier :</strong> S235JR+N, S355j2+n, S355K2+N, P275NL1, S690QL, P265GH</li>
          <li><strong>Inox :</strong> 304L, 316L, GRAIN 220, Inox spéciaux (nous consulter)</li>
          <li><strong>Aluminium, Cuivre, Laiton</strong></li>
          <li><strong>Tôles larmées / Damier :</strong> toutes nuances disponibles</li>
        </ul>
        <p className="mt-4">
          💬 <strong>Besoin d’un matériau spécifique ?</strong> Nous sommes à votre écoute pour toute demande sur mesure.  
        </p>
        <p className="mt-2">
          ✉️ <strong>CCPU (Certificat de Conformité)</strong> fourni avec chaque livraison.
        </p>
      </section>

      {/* Section Services et Travaux spécifiques */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Services et Travaux Spécifiques</h2>
        <p>
          Nous offrons une large gamme de services complémentaires, réalisés en interne ou en partenariat avec des experts du secteur.
        </p>
        <ul className="space-y-2 mt-4">
          <li><strong>Planage :</strong> Toutes les pièces sont livrées planées</li>
          <li><strong>Blanchardage, Sablage</strong></li>
          <li><strong>Pliage, Usinage</strong></li>
          <li><strong>Peinture, Galvanisation</strong></li>
        </ul>
        <p className="mt-4">
          Chaque service est effectué dans le respect des plus hauts standards de qualité, pour vous fournir des pièces prêtes à l’emploi.
        </p>
      </section>

      {/* Section Expédition */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Expédition : Livraison Rapide et Soignée</h2>
        <p>
          🚛 <strong>Livraison express par camion plateau</strong>, adaptée à vos besoins. Nous mettons à votre service notre propre transport.
        </p>
        <p className="mt-4">
          📦 Commandes soigneusement <strong>emballées</strong> et <strong>palettisées</strong> pour garantir une réception en parfait état.
        </p>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Pourquoi choisir nos services ?</h2>
        <ul className="space-y-2 mt-4">
          <li>🌟 <strong>Fiabilité :</strong> Machines performantes, matériaux de qualité, délais respectés.</li>
          <li>🚀 <strong>Réactivité :</strong> Stock permanent pour répondre rapidement à vos commandes.</li>
          <li>🤝 <strong>Proximité :</strong> Une équipe dédiée à vos besoins spécifiques.</li>
          <li>📋 <strong>Flexibilité :</strong> Solutions sur mesure pour tous vos projets métallurgiques.</li>
        </ul>
        <p className="mt-4">
          📞 <strong>Contactez-nous dès aujourd’hui</strong> pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner dans vos projets.
        </p>
      </section>
    </div>
  );
}
