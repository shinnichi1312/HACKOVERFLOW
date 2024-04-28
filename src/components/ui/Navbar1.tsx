import { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <nav className="bg-tranparent p-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            <div className="flex-shrink-0 ">
              <img
                className="h-32 w-40 mr-20"
                src="src\components\img2.png"
                alt="hackOverflow"
              />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-end rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className=" rounded-md px-3 py-2 text-lg font-medium text-white "
                >
                  Home
                </a>

                <button onClick={() => {
                  window.open("https://rns-hackoverflow-2.devfolio.co/?fbclid=PAZXh0bgNhZW0CMTEAAabvX_i3dA15wPORQ53MGxWRtbpYoZ-J4WNNUAWIpnLSsEcQZAmcWYZqmck_aem_AR36Cx7FuJ3I5bU1tecb5KsGOTIDzU0r68zhScPFM7X24WmMPtWeD5ti57jGch-n_efv-c5oh8wOn0adgLuNwQWy", "_blank")
                }} className="rounded-md px-3 py-2 text-lg font-medium text-gray-400  hover:text-white">
                  Register
                </button>

                <a
                  href="/AI"
                  className="rounded-md px-3 py-2 text-lg font-medium text-gray-400  hover:text-white"
                >
                  AI
                </a>
                <a
                  href="/Cy"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:text-white/80 hover:text-white"
                >
                  Cyber Seq
                </a>

                <a
                  href="/Fullstack"
                  className="rounded-md px-3 py-2 text-lg font-medium text-gray-400   hover:text-white"
                >
                  Full Stack
                </a>

                <a
                  href="/Web3"
                  className="rounded-md px-3 py-2 text-lg font-medium text-gray-400  hover:text-white"
                >
                  Web 3
                </a>
              </div>
            </div>


          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-white  hover:text-white/80"
              >
                Home
              </a>

              <button onClick={() => {
                window.location.href = "https://rns-hackoverflow-2.devfolio.co/?fbclid=PAZXh0bgNhZW0CMTEAAabvX_i3dA15wPORQ53MGxWRtbpYoZ-J4WNNUAWIpnLSsEcQZAmcWYZqmck_aem_AR36Cx7FuJ3I5bU1tecb5KsGOTIDzU0r68zhScPFM7X24WmMPtWeD5ti57jGch-n_efv-c5oh8wOn0adgLuNwQWy"
              }} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:text-white/80 hover:text-white">
                Register
              </button>

              <a
                href="/AI"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:text-white/80 hover:text-white"
              >
                AI
              </a>

              <a
                href="/Cy"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:text-white/80 hover:text-white"
              >
                Cyber Seq
              </a>

              <a
                href="/FullStack"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:text-white/80 hover:text-white"
              >
                Full Stack
              </a>

              <a
                href="/Web3"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:text-white/80 hover:text-white"
              >
                Web 3
              </a>

            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;