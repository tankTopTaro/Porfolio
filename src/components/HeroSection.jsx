import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {

  return (
     <section className="h-screen mx-auto px-3 py-36" id="home">
        <div className="flex items-center justify-center">
          <div className="p-2">
            <h1 className="text-9xl dark:text-white">Kevin <span className="font-bold text-[#bd6507]">Balmores</span></h1>
            <hr className="w-1/3 border-4" />
            <div className='dark:text-white'>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'I am a Programmer',
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  'I am a Web Developer',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="p-2">
            <img className='w-10/12' src="https://res.cloudinary.com/delgya5vj/image/upload/w_1000,h_1000,c_limit/v1677062074/profile_pyzs83.png" alt="profile_img" loading="lazy" />
          </div>
          <div className="flex flex-col items-center w-1.5 dark:text-white mt-9">
            <div className='rotate-90 whitespace-nowrap text-s font-semibold uppercase tracking-widest'>
              <span >follow me </span>
            </div>
            <div className='flex-col py-10 text-3xl gap-4' >
              <a className='hover:text-[#bd6507]' href="https://github.com/tankTopTaro" target="_blank"><i className="fa-brands fa-github"></i></a>
              <a className='hover:text-[#bd6507]' href="https://linkedin.com/in/kevin-balmores-6549b9200" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
     </section>
  )
}
