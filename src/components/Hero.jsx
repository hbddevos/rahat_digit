import Links from "./Links";
import AutoCarousel from "./Slider";

export default function Hero() {
  return (
    <header className="h-full text-start grid grid-cols-1 md:grid-cols-2 px-2 md:px-0 gap-y-6">
      <div className="space-y-8">
        <div className="flex justify-between ">
          <figure>
            <img src="images/star.svg" alt="" className="h-10 w-10" />
          </figure>
          {/* <div className="md:hidden">
            <Links />
          </div> */}
        </div>
        <h3 className="text-xl font-extrabold tracking-widest">
          Bienvenu sur notre portal de création
        </h3>
        <h1 className="text-[35.2px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-none font-bold">
          Rahat Digit - Votre Domination Digitale Commence Ici
        </h1>
        <p className="text-[1.35rem] sm:text-[1.38rem] md:text-[1.42rem] lg:text-[1.46rem] xl:text-[1.5rem]">
          Notre création est ce qu'il vous faut pour prendre <br /> soins de
          votre cure chevelu et le rendre soyeux
        </p>
        <div className="mt-10 w-44 h-16 flex justify-between items-center">
          <a
            href=""
            className="rounded-full bg-blue-500 inline-block w-full py-6 px-10 text-center"
          >
            Contact
          </a>
          <figure className="ml-3">
            <img src="images/star.svg" alt="" className="h-10 w-10" />
          </figure>
        </div>
      </div>
      <AutoCarousel />
      {/* <div className="">
        <img src="./imgs/blob.gif" className="object-center" alt="" />
      </div> */}
    </header>
  );
}
