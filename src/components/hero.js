import HeroImg from  '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineWhatsApp,AiOutlineLinkedin } from "react-icons/ai";



export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-evenly'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-black text-6xl font-hero-font'>Hi, <br/> Im Mohanraj M
        <p className='text-2xl'>Software Developer.</p>
        </h1>
        <div className='flex py-5'>
        <a href="#" className='pr-3 hover:text-white'><AiOutlineTwitter size={30}/></a>
        <a href="#" className='pr-3 hover:text-white'><AiOutlineWhatsApp size={30}/></a>
        <a href="#" className='hover:text-white'><AiOutlineLinkedin size={30}/></a>
        </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} />
      </section>
}


