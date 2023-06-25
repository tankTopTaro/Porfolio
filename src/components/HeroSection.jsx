import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {

  return (
     <section className="h-screen">
        <div className="flex items-center">
          <div className="p-2">
            <h1 className="text-8xl dark:text-white">Kevin <span className="font-bold text-[#bd6507]">Balmores</span></h1>
            <hr className="w-1/3 border-4" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am a Programmer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I am a Web Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
        </div>
     </section>
  )
}
