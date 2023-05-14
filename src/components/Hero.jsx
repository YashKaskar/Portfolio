import { motion } from 'framer-motion';
import { styles } from '../styles';
import ComputersCanvas from './canvas/Computers';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>  
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 mt-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>   
          <div className=' w-5 h-5 rounded-xl bg-[#D4ADFC]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>   
          <h1 className= {`${styles.heroHeadText}  text-white`}>  
            Hello, I'm <span className='text-[#E76161]'>YASH</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
          Within my portfolio, you will find a collection of my best work,<br  className='sm:block hidden'/> ranging from different projects . I am confident that these projects will demonstrate my creativity, problem-solving skills, and attention to detail.
        </p>
        </div>
      </div>
      <ComputersCanvas/>
   </section>
  );
};

export default Hero;
