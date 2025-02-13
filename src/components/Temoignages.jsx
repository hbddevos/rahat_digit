import TCard from "./parts/TCard";


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

    <section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
    <div className="max-w-6xl px-2 mx-auto bg-gray-100 md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase" data-primary="indigo-500">Nos Clients apprécient nos services</p>
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Témoignages</h2>
                <p className="my-6 text-lg text-gray-600">
                  Nos Travaux parlent d'eux mêmes et nos clients nous font confiance.
                </p>
                <a href="#_" className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10" data-primary="indigo-600" data-rounded="rounded-md">View Case Studies</a>
            </div>
            <div className="w-full lg:w-1/2">
                <TCard imageLinks="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />

                <TCard imageLinks="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aauto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />

                <TCard imageLinks="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aauto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
                
            </div>
        </div>
    </div>
</section>

  );
}
