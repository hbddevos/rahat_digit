export default function Vision2() {
  return (
    <section className="mt-8 border grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 rounded-xl bg-red-700">
      <div className="md:col-span-2 lg:col-span-3 relative bg-red-800 rounded-xl">
        <div className="px-10 overlay absolute inset-0 flex flex-col text-white justify-end bg-black bg-opacity-60 rounded-xl">
         
        </div>
        <img
          src="./imgs/test.jpg"
          alt=""
          className="w-full h-96 md:h-[500px] object-cover rounded-xl"
        />
      </div>
      <div className="md:col-span-1 lg:col-span-1 space-y-2 px-4 py-4   flex flex-col justify-start items-start">
        <figure className="flex justify-center">
          <img src="images/eye.svg" className="h-32" alt="" />
        </figure>
        <p>
          <h2 className="text-[clamp(1.75rem,1.75rem+((1vw-0.2rem)*0.3),2.5rem)] font-bold">
            Notre Vision
          </h2>
          <p className="text-[clamp(1.5rem,1rem+((1vw-0.2rem)*0.15),1.2rem)]">
            Notre vision c'est de bâtir une référence en communication digitale
          </p>
        </p>
        <div className="">
          <a href="" className="w-max p-4 block bg-blue-700 rounded-xl mt-10">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
