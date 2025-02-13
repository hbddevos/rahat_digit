export default function Product({image, prix, compositon}) {
  return (
    <div>
          <div className="relative">
            <a
              href=""
              className="absolute bottom-0 text-center w-full h-16 bg-black bg-opacity-0 hover:bg-opacity-45 transition"
            >
              Commander
            </a>

            <img
              src={image}
              alt=""
              className="h-60 w-full object-cover object-top"
            />
          </div>
          <div className="mt-6">
            <h3 className="mt-6 text-xl font-semibold">Prix : {prix}</h3>
            <h4 className="mt-6 text-lg">Composition : </h4>
            <p className="mt-4">Fait a partir de {compositon}</p>
          </div>
        </div>
  )
}
