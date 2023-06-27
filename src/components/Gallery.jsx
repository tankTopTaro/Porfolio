import React, {useState} from 'react'
import ProjectModal from './ProjectModal'

const projects = [
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739845/portfolio_projects/tea_lrpt9y.png', 
        alt: 'tea', 
        href: 'https://tanktoptaro.github.io/teashop-landing-page/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739843/portfolio_projects/dogblog_ffgief.png', 
        alt: 'dog', 
        href: 'https://tanktoptaro.github.io/dog-photo-blog/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739846/portfolio_projects/resume_ln4zl4.png', 
        alt: 'resume' , 
        href: 'https://tanktoptaro.github.io/simple-resume/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739843/portfolio_projects/portfolio_tyijbt.png', 
        alt: 'portfolio', 
        href: 'https://tanktoptaro.github.io/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739846/portfolio_projects/weather_jzfyc0.png', 
        alt: 'weather', 
        href: 'https://weather-app-v2-rouge.vercel.app/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739846/portfolio_projects/wishlist_dadq3r.png', 
        alt: 'wishlist', 
        href: 'https://shop-wishlist.vercel.app/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739844/portfolio_projects/sort_fc0qss.png', 
        alt: 'sort', 
        href: 'https://shop-sort-search.vercel.app/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739847/portfolio_projects/mp2_ugrkr3.png', 
        alt: 'mp2', 
        href: 'https://marvelous-shortbread-f51d41.netlify.app/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739842/portfolio_projects/capstone_dz6uxw.png', 
        alt: 'capstone', 
        href: 'https://goshopfront.store/home'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739842/portfolio_projects/counter_dvq5t9.png', 
        alt: 'counter', 
        href: 'https://react-projects-flax.vercel.app/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739844/portfolio_projects/timer_wuqrjo.png', 
        alt: 'timer', 
        href: 'https://react-projects-nv9d.vercel.app/'
    },
    {
        src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739845/portfolio_projects/todo_cv1qkq.png', 
        alt: 'todo', 
        href: 'https://react-projects-welu.vercel.app/'
    },
]

const Gallery = () => {
    let [isOpen, setIsOpen] = useState(false)
    const [imgSrc, setImgSrc] = useState('')
    const [imgAlt, setImgAlt] = useState('')
    const [imgHref, setImgHref] = useState('')

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function openDetails(src, alt, href) {
        setImgSrc(src)
        setImgAlt(alt)
        setImgHref(href)
        openModal()
    }

    function chunkArray(array, size) {
        const result = []
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size))
        }
        return result
    }

    return (
        <section className="h-screen mx-auto px-9 py-16" id="projects">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {chunkArray(projects, 3).map((chunk, index) => (
                    <div key={index} className="grid gap-4 ">
                        {chunk.map((project, subIndex) => (
                            <div key={subIndex}>
                                <img 
                                className="h-auto max-w-full rounded-lg border border-gray-300 dark:border-white shadow-lg dark:drop-shadow-[0_10px_8px_rgba(255,255,255,0.25)]" 
                                src={project.src} alt={project.alt} 
                                onClick={() => openDetails(project.src, project.alt, project.href)} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {isOpen && <ProjectModal isOpen={isOpen} closeModal={closeModal} src={imgSrc} alt={imgAlt} href={imgHref} />}
        </section>
    )
}

export default Gallery
