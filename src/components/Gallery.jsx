import React, {useState} from 'react'
import ProjectModal from './ProjectModal'

const projects = [
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739845/portfolio_projects/tea_lrpt9y.png', alt: 'tea'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739843/portfolio_projects/dogblog_ffgief.png', alt: 'dog'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739846/portfolio_projects/resume_ln4zl4.png', alt: 'resume'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739843/portfolio_projects/portfolio_tyijbt.png', alt: 'portfolio'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739846/portfolio_projects/weather_jzfyc0.png', alt: 'weather'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739846/portfolio_projects/wishlist_dadq3r.png', alt: 'wishlist'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739844/portfolio_projects/sort_fc0qss.png', alt: 'sort'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739847/portfolio_projects/mp2_ugrkr3.png', alt: 'mp2'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739842/portfolio_projects/capstone_dz6uxw.png', alt: 'capstone'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739842/portfolio_projects/counter_dvq5t9.png', alt: 'counter'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739844/portfolio_projects/timer_wuqrjo.png', alt: 'timer'},
    {src: 'https://res.cloudinary.com/delgya5vj/image/upload/v1687739845/portfolio_projects/todo_cv1qkq.png', alt: 'todo'},
]

const Gallery = () => {
    let [isOpen, setIsOpen] = useState(false)
    const [imgSrc, setImgSrc] = useState('')
    const [imgAlt, setImgAlt] = useState('')

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function openDetails(src, alt) {
        setImgSrc(src)
        setImgAlt(alt)
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
                                onClick={() => openDetails(project.src, project.alt)} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {isOpen && <ProjectModal isOpen={isOpen} closeModal={closeModal} src={imgSrc} alt={imgAlt} />}
        </section>
    )
}

export default Gallery
