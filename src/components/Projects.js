import websiteImg1 from "../assets/ecommerce-websites.jpg";
import wesiteImg2 from "../assets/food-ecommerce.jpg";
import websiteImg3 from "../assets/website-blog.jpg";

export default function Projects() {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-secondary">
      <div className="w-1/2 text-black">
        <div className="flex justify-center">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative">
            <img className="h-[200px] w=[500px]" src={websiteImg1}/>
            <div className="project-desc">
              <p className="text-center text-white px-5 py-5">A Ecommerce website build with React JS</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={wesiteImg2}/>
            <div className="project-desc">
              <p className="text-center text-white px-5 py-5">Food Ecommerce website build with React JS</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] wx-[500px]" src={websiteImg3}/>
            <div className="project-desc">
              <p className="text-center text-white px-5 py-5">Basic blog website build in React JS and Node JS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
