

export default function About() {
  return (
    <>
      <section id="apropos" className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 px-2 md:px-0">
        <div className="flex flex-col justify-center">
          <div className="flex justify-start items-center mb-5">
            <figure>
              <img src="images/star.svg" alt="" className="h-10 w-10" />
            </figure>
            <h2 className="text-3xl font-bold">A-propos</h2>
          </div>
          <h2 className="md:text-6xl capitalize font-bold mb-8">
            Que sommes nous ?
          </h2>
          <p className="text-lg">
            Nous sommes une agence de communication digitale avec une approche
            unique centrée sur la croissance et l'humain.
          </p>
          <div className="mt-5 flex items-center">
            <div className="p-3 text-center text-lg bg-blue-600 text-white rounded-lg w-max mr-8">
              <a href="" className="block">
                En savoir plus
              </a>
            </div>
            <a href="#" className="underline underline-offset-2">
              Nos services
            </a>
          </div>
        </div>
        <div className="h-96 w-full rounded-xl ">
          <img
            src="./images/afro4.jpg"
            className="h-full w-full object-cover object-top rounded-xl"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
