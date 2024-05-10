import Header from './components/Header';
import SkillsList from './components/Skills';
import ProjectsList from './components/Projects';
import img_portrait from './imgs/portrait_crop.png'

function App() {
  return (    
    <div class="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1b537b] via-[#112840] to-[#0d141f]">
      <Header />
      <div className="grid grid-rows-3 lg:gap-6">
        <section className="pt-72 lg:p-0 flex flex-col lg:flex-row items-center gap-48 lg:gap-0">
          {/* Picture */}
          <div className="text-center lg:pt-10  lg:flex-1 lg:pb-32">
            <img className="inline-block w-56 h-56 object-cover rounded-full border-2 border-orange-500/70 opacity-0 transition-opacity duration-1000" src={img_portrait} 
            onLoad={(e) => e.target.classList.remove('opacity-0')}
            alt="portrait"/>
          </div>
          {/* About */}
          <div className="About text-center lg:flex-1 lg:pt-32">
            <div className="card w-80 md:w-[600px] lg:w-9/12 hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-neutral-900 to-neutral-950 hover:from-neutral-800 hover:to-neutral-950 border-r-2 border-t-2 border-neutral-700 hover:border-r-2 hover:border-t-2 hover:border-orange-500 rounded-3xl overflow-hidden relative">
              <div className="px-8 py-10">
                <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
                <h1 className="uppercase pb-2 font-bold text-2xl text-orange-400 italic">
                  ABOUT
                </h1>
                <p className="text-neutral-200 mt-2">
                  For me, programming is an environment where I like to explore new fields and technologies. Having versatile skills such as autonomy, adaptability and even curiosity, I am an asset for companies. 
                  During my studies at Ecole 42, I improved my knowledge of programming, my peer learning but also my desire to take on new challenges.
                </p>
              </div>
              <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
              <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
            </div>
          </div>
        </section>

        <section className="Skills ">
          <h1 className="text-orange-500 text-6xl font-bold text-center bg-neutral-900">SKILLS</h1>
          <SkillsList />
        </section>
        <section className="Projects">
          <h1 className="text-orange-500 text-6xl font-bold text-center bg-neutral-900">PROJECTS</h1>
          <ProjectsList />
        </section>
      </div>
    </div>
  );
}

export default App;
