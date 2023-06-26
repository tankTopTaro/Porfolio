import { ChevronUpIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-scroll'

const BackToTop = () => {
    return (
        <Link
            to='top'
            smooth
            spy
            className='fixed bottom-4 right-4 bg-[#242a2f] dark:bg-white rounded-full p-2 shadow'>
            <ChevronUpIcon className='h-6 w-6 text-white dark:text-gray-600'/>
        </Link>
    )
}

export default BackToTop
