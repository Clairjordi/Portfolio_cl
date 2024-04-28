import img_project1 from '../imgs/transcendence.png'
import img_project2 from '../imgs/IRC.png'
import img_project3 from '../imgs/LR.png'

const ProjectsList = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center">
            <section className="grid grid-cols-1 lg:grid-cols-3 py-16 gap-16 lg:py-24 xl:gap-56">

                <a href="https://github.com/Clairjordi/7.Transcendence" target="_blank" className="shadow-xl shadow-orange-400 hover:shadow-none relative overflow-hidden w-[270px] h-96 xl:w-[300px] xl:h-[400px] rounded-3xl cursor-pointer text-2xl font-bold bg-neutral-900">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-orange-400/80 transition-all duration-500"></div>
                    <div className="absolute flex flex-col text-lg text-center items-end px-8 justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full peer-hover:text-neutral-900 text-neutral-900/0 -bottom-32 -right-16 w-36 h-44 rounded-full bg-orange-600/70 transition-all duration-300">
                        Creation of a full stack website in SPA whose aim is to be able to exchange or play with other users
                    </div>
                    <div className="w-full h-full flex flex-col items-center gap-6">
                        <h1 className="text-orange-500 pt-12 uppercase">Transcendence</h1>
                        <img className="w-56 h-56 xl:w-60 xl:h-60 object-cover rounded-xl border border-orange-500 opacity-0 transition-opacity duration-1000" 
                            src={img_project1}
                            onLoad={(e) => e.target.classList.remove('opacity-0')}
                            alt="projects1" />
                    </div>
                </a>

                <a href="https://github.com/Clairjordi/6.IRC" target="_blank" className="shadow-xl shadow-orange-400 hover:shadow-none relative overflow-hidden w-[270px] h-96 xl:w-[300px] xl:h-[400px] rounded-3xl cursor-pointer text-2xl font-bold bg-neutral-900">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-orange-400/80 transition-all duration-500"></div>
                    <div className="absolute flex flex-col text-lg text-center items-end px-8 justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full peer-hover:text-neutral-900 text-neutral-900/0 -bottom-32 -right-16 w-36 h-44 rounded-full bg-orange-600/70 transition-all duration-300">
                        Create an IRC chat [Internet Relay Chat : TCP/IP protocol for message communication on the Internet] with the following basic commands like USER, JOIN etc.
                    </div>
                    <div className="w-full h-full flex flex-col items-center gap-4">
                        <h1 className="text-orange-500 pt-12 uppercase">IRC</h1>

                        <img className="w-56 h-56 xl:w-60 xl:h-60 object-cover rounded-xl border border-orange-500 opacity-0 transition-opacity duration-1000" 
                            src={img_project2}
                            onLoad={(e) => e.target.classList.remove('opacity-0')}
                            alt="projects2" />
                    </div>
                </a>

                <a href="https://github.com/Clairjordi/Ft_linear_regression/" target="_blank" className="shadow-xl shadow-orange-400 hover:shadow-none relative overflow-hidden w-[270px] h-96 xl:w-[300px] xl:h-[400px] rounded-3xl cursor-pointer text-2xl font-bold bg-neutral-900">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-orange-400/80 transition-all duration-500"></div>
                    <div className="absolute flex flex-col text-lg text-center items-end px-8 justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full peer-hover:text-neutral-900 text-neutral-900/0 -bottom-32 -right-16 w-36 h-44 rounded-full bg-orange-600/70 transition-all duration-300">
                        Objective: Implement a linear regression to predict the price of a car in relation to its mileage.
                    </div>
                    <div className="w-full h-full flex flex-col items-center gap-4">
                        <h1 className="text-orange-500 pt-6 uppercase">FT_linear<br />regression</h1>
                        <img className="w-56 h-56 xl:w-60 xl:h-60 object-cover rounded-xl border border-orange-500 opacity-0 transition-opacity duration-1000" 
                            src={img_project3}
                            onLoad={(e) => e.target.classList.remove('opacity-0')}
                            alt="projects3" />
                    </div>
                </a>


            </section>
        </div>
    );
}


export default ProjectsList