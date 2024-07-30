import AboutImg from "../assets/about.png"; 

export default function About() {
    return <section className="flex  flex-col md:flex-row bg-primary px-5">
        <div className=" py-5 md:w-1/2">
            <img src={AboutImg}/>
        </div>
        <div className="md:w-1/2 text-white flex justify-center">
        <div className="flex flex-col justify-center">
        <h1 className="text-4xl border-b-4 mb-5 w-[170px] font-bold">About Me</h1>
        <p>I specialize in front-end development with a solid foundation in back-end technologies. My expertise spans HTML, CSS, JavaScript, React, .NET Core, C#, and SQL Server.</p>
        <p>I am passionate about creating efficient, user-friendly web applications and continuously enhancing my skill set to stay ahead in the ever-evolving tech landscape.</p>
        </div>
        </div>
    </section>
}