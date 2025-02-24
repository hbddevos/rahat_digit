import TCard from "./parts/TCard";
import {motion} from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 4 } },
};

export default function Temoignages() {
  return (
    // <section className="mb-24">
    // <h3 className="my-8">Témoignages</h3>
    // <h4>Ce que les clients disent de nous !!</h4>
    //   <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //     <img src="./images/afro1.jpg" className="w-96 h-full object-cover" alt="" />
    //     <img src="./images/afro5.jpg" className="w-96 h-full object-cover" alt="" />
    //     <img src="./images/afro6.jpg" className="w-96 h-full object-cover" alt="" />
    //     <img src="./images/afro2.jpg" className="w-96 h-full object-cover" alt="" />
    //   </div>
    // </section>

    <motion.section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen"
    initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1 , transition: { duration: 1, delay: 0.2 }, y: 0 }}
      variants={variants}
    >
    <div className="max-w-6xl px-2 mx-auto bg-gray-100 md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full px-8 mb-10 lg:mb-0 lg:w-1/2">
                <p className="mb-2 text-base font-semibold tracking-tight text-blue-500 uppercase" data-primary="blue-500">Nos Clients apprécient nos services</p>
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Témoignages</h2>
                <p className="my-6 text-lg text-gray-600">
                  Nos Travaux parlent d&apos;eux mêmes et nos clients nous font confiance.
                </p>
                <a href="#_" className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue md:py-4 md:text-lg md:px-10 uppercase" data-primary="blue-600" data-rounded="rounded-md">Voir nos projets</a>
            </div>
            <div className="w-full lg:w-1/2">
                <TCard imageLinks="images/test1.png" />
                <TCard imageLinks="images/test2.png" />
                <TCard imageLinks="images/test3.png" />
                
            </div>
        </div>
    </div>
</motion.section>

  );
}
