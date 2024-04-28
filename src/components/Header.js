
export default function Header() {

  return (
    <header className="bg-sky-900/50"> 
      <nav className=" mx-auto flex max-w-7xl lg:max-w-full items-center justify-between px-8 md:text-lg py-5" aria-label="Global">
        <div className="flex lg:pl-16 ">
          <div className="-m-1.5 md:p-1.5">
            <span className="text-neutral-200 text-lg md:text-2xl font-semibold italic">Claire Lorcery</span>
          </div>
        </div>
        <div className="md:flex md:flex-1 md:justify-end">
          <a href="https://github.com/Clairjordi" className=" leading-6 text-neutral-900 pb-1 md:pb-0 px-3 flex items-center hover:scale-110">
            <img className="inline-block h-6 w-6 rounded-full"  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub"/>
            <span className="text-neutral-200 pl-1.5">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/claire-l-96761a267/" className=" leading-6 text-neutral-900 pt-1 md:pt-0 px-3 flex items-center hover:scale-110">
            <img className="inline-block h-6 w-6 rounded-lg" src="https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png" alt="Linkedin"/>
            <span className="text-neutral-200 pl-1.5">LinkedIn</span>
          </a>
        </div>
        <div className="flex pl-5 lg:pr-16">
          <a href="mailto:claire.lorcery@yahoo.fr" className="text-center text-neutral-200 border-orange-500 border-2 p-2 md:px-3 md:py-2 bg-neutral-900 hover:border-orange-300  rounded-xl 
          hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-orange-300 hover:font-semibold to-orange-600 hover:scale-95  md:hover:scale-110 ">
            Contact me
          </a>

        </div>
      </nav>
     </header>
  )
}
