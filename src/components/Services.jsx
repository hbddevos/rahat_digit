import Service from "./parts/Service";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    image: "images/target.svg",
    title: "Stratégie Digitale",
    text: "Analyse de votre marché, définition de vos objectifs, création de plans d'action personnalisés.",
  },
  {
    id: 2,
    image: "images/branding.svg",
    title: "Branding",
    text: "Développement de votre identité visuelle, création de votre logo, conception de votre charte graphique.",
  },
  {
    id: 3,
    image: "images/target.svg",
    title: "Gestion des Réseaux Sociaux & Création de Contenu",
    text: "Engagez votre audience et développez votre communauté !",
  },
  {
    id: 4,
    image: "images/seo.svg",
    title: "Développement Web & SEO",
    text: "Nous développons des sites web sur mesure, adaptés à vos besoins et à votre budget. De la conception à la mise en ligne, nous vous accompagnons à chaque étape tout en optimisant votre site pour la visibilité.",
  },
  {
    id: 5,
    image: "images/communication.svg",
    title: "Conmunication polittique & conseil startégique",
    text: "Nous vous aidons à élaborer des stratégies de communication efficaces pour influencer l'opinion publique, renforcer votre image de marque et atteindre vos objectifs politiques.",
  },
  {
    id: 1,
    image: "images/target.svg",
    title: "Formation & coaching",
    text: "Nous vous proposons des formations personnalisées et des séances de coaching individuelles pour vous aider à développer vos compétences, à atteindre vos objectifs professionnels et personnels, et à vous épanouir pleinement.",
  },
];
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 4 } },
};

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1 , transition: { duration: 1, delay: 0.2 }, y: 0 }}
      id="services"
      className="py-20 bg-white"
      variants={variants}
    >
      <div className="container max-w-7xl mx-auto">
        <motion.h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Nos services
        </motion.h2>
        <p className="mt-4 text-lg text-gray-700 md:text-xl">
          Voici un catalogue des services que nous vous proposons !
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0 mt-8">
          {/* <Service
            image="images/target.svg"
            title="Stratégie Digitale"
            text="Analyse de votre marché, définition de vos objectifs, création de plans d'action personnalisés."
          /> */}
          {/* <Service
            image="images/branding.svg"
            title="Branding"
            text="Développement de votre identité visuelle, création de votre logo, conception de votre charte graphique"
          /> */}
          {/* <Service
            image="images/target.svg"
            title="Gestion des Réseaux Sociaux & Création de Contenu"
            text="Engagez votre audience et développez votre communauté !"
          /> */}
          {/* <Service
            image="images/seo.svg"
            title="Développement Web & SEO"
            text="Nous développons des sites web sur mesure, adaptés à vos besoins et à votre budget. De la conception à la mise en ligne, nous vous accompagnons à chaque étape tout en optimisant votre site pour la visibilité."
          /> */}
          {/* <Service
            image="images/communication.svg"
            title="Conmunication polittique & conseil startégique"
            text="Nous vous aidons à élaborer des stratégies de communication efficaces pour influencer l'opinion publique, renforcer votre image de marque et atteindre vos objectifs politiques."
          /> */}

          {services.map((service) => (
            <Service
              key={service.id}
              text={service.text}
              title={service.title}
              image={service.image}
            />
          ))}

          {/* // <Service
          //   image="images/target.svg"
          //   title="formation & coaching"
          //   text="Nous vous proposons des formations personnalisées et des séances de coaching individuelles pour vous aider à développer vos compétences, à atteindre vos objectifs professionnels et personnels, et à vous épanouir pleinement."
          // /> */}
        </div>
      </div>
    </motion.div>
  );
}
