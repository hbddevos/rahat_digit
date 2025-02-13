import Service from "./parts/Service";

export default function Services() {
  return (
    // <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    //   <div className="">
    //     <h2 className="text-4xl font-bold mb-8">Nos services</h2>
    //     <p className="text-lg font-thin my-8">
    //       Nous fournissons de bons services a des prix imbattables
    //     </p>
    //     <div className="h-80 md:h-96 border rounded-lg">
    //       <img src="./images/afro2.jpg" alt="" className="h-full w-full object-cover rounded-lg" />
    //     </div>
    //   </div>
    //   <div className="grid my-auto lg:grid-cols-2 place-items-center justify-items-center gap-4">
    //     <Service />
    //     <Service />
    //     <Service />
    //     <Service />
    //   </div>
    // </section>

    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Nos services
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600">
          Voici un catalogue des services que nous vous proposons !
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
         <Service image="images/target.svg" title="Stratégie Digitale"text="Analyse de votre marché, définition de vos objectifs, création de plans d'action personnalisés." />
         <Service image="images/branding.svg" title="Branding"text="Développement de votre identité visuelle, création de votre logo, conception de votre charte graphique" />
         <Service image="images/target.svg" title="Gestion des Réseaux Sociaux & Création de Contenu" text="Engagez votre audience et développez votre communauté !" />
         <Service image="images/seo.svg" title="Développement Web & SEO" text="Nous développons des sites web sur mesure, adaptés à vos besoins et à votre budget. De la conception à la mise en ligne, nous vous accompagnons à chaque étape tout en optimisant votre site pour la visibilité." />
         <Service image="images/communication.svg" title="Conmunication polittique & conseil startégique" text="Nous vous aidons à élaborer des stratégies de communication efficaces pour influencer l'opinion publique, renforcer votre image de marque et atteindre vos objectifs politiques." />
         <Service image="images/target.svg" title="formation & coaching" text="Nous vous proposons des formations personnalisées et des séances de coaching individuelles pour vous aider à développer vos compétences, à atteindre vos objectifs professionnels et personnels, et à vous épanouir pleinement." />

        </div>
      </div>
    </section>
  );
}
