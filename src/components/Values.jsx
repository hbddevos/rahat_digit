import Value from "./parts/Value";

export default function Values() {
  return (
    <section id="valeurs" className="py-20 bg-gray-50">
      <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div className="flex flex-wrap items-center">
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md  space-y-6">
              <h2 className=" text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                Nos Valeurs
              </h2>
              <p className="mb-4 font-medium tracking-tight text-gray-700 xl:mb-6 text-lg md:text-xl">
                Notre travail s'organise autour de trois valeurs que nous
                respoectons et qui font notre identité.
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Value text="Inspirer">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                </Value>
                <Value text="Impacter">
                  <div>
                    <svg
                      className="w-8 h-8 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                  </div>
                </Value>
                <Value text="Influancer">
                  <div>
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                </Value>
                
              </ul>
            </div>
          </div>
          <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <img
              className="mx-auto sm:max-w-sm lg:max-w-full"
              src="/images/value.png"
              alt="feature image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
