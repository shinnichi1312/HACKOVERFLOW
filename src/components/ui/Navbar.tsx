

const Navbar = () => {
  return (
    <div className='bg-black'>

      <nav className="relative flex w-full flex-wrap items-center justify-between  py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 bg-black lg:flex-wrap lg:justify-start lg:py-4" data-twe-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ms-2">
            {/* <a className="text-xl text-white" href="#">HackOverflow</a> */}
            <img src="src\components\img2.png" alt="" className="h-24"/>
          </div>
          <button className="block border-0 bg-transparent px-2  hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 text-neutral-200 lg:hidden" type="button" data-twe-collapse-init data-twe-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded='true' aria-label="Toggle navigation" >
            <span className="[&>svg]:w-7 [&>svg]:stroke-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </span>
          </button>

          <div className="hidden mt-2 lg:flex lg:items-center" id="navbarSupportedContent2" data-twe-collapse-item>
            <ul className="list-none m-0 p-0 flex flex-col lg:flex-row" data-twe-navbar-nav-ref>
              <li className="my-4 lg:my-0 lg:mr-4">
                <a className="text-white lg:px-2" aria-current="page" href="/" data-twe-nav-link-ref>Home</a>
              </li>
              <li className="my-4 lg:my-0 lg:mr-4">
                <a className=" transition duration-200 text-white/60 hover:text-white/80 lg:px-2" href="/Register" data-twe-nav-link-ref>Register</a>
              </li>
              <li className="my-4 lg:my-0 lg:mr-4">
                <a className=" transition duration-200 text-white/60 hover:text-white/80 lg:px-2" href="/AI" data-twe-nav-link-ref>AI</a>
              </li>
              <li className="my-4 lg:my-0 lg:mr-4">
                <a className=" transition duration-200 text-white/60 hover:text-white/80 lg:px-2" href="/Fullstack" data-twe-nav-link-ref>Full Stack</a>
              </li>
              <li className="my-4 lg:my-0 lg:mr-4">
                <a className=" transition duration-200 text-white/60 hover:text-white/80 lg:px-2" href="/Web3" data-twe-nav-link-ref>Web 3</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
