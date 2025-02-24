export default function Vision() {
  return (
    <section id="vision" className="px-2 py-8 bg-white md:px-0">
      <div className="container items-center max-w-7xl px-2 mx-auto">
        <div className="flex flex-wrap items-center gap-y-8 sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3 order-2">
            <div className="flex flex-col items-center md:items-center pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Notre vision</span>
                {/* <span className="block text-indigo-600 xl:inline" data-primary="indigo-600">Tell Your Story!</span> */}
              </h1>
              <p className="mx-auto text-base text-center  text-gray-700 sm:max-w-md lg:text-xl md:max-w-3xl">
                Notre vision c'est de bâtir une référence en communication
                digitale.
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href="#_"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto"
                  data-primary="indigo-600"
                  data-rounded="rounded-md"
                >
                  Reserver un dévis
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1 feather feather-arrow-right"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                {/* <a
                  href="#_"
                  className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  data-rounded="rounded-md"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1">
            <div
              className="w-full h-auto overflow-hidden rounded-md  sm:rounded-xl"
              data-rounded="rounded-xl"
              data-rounded-max="rounded-full"
            >
              {/* <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" /> */}
              <img src="images/vision.png" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
