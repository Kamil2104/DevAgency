import React from 'react'

import Title from './components/Title'
import Functionalities from './components/Functionalities'
import Video from './components/Video'

import { FunctionalityCard } from './interfaces/interfaces'

import './Solomon.css'

const Solomon: React.FC = () => {
  const functionalities: FunctionalityCard[] = [
    {
        icon: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 17.3903V8.39032H2.59961C2.03956 8.39032 1.75981 8.39032 1.5459 8.49931C1.35774 8.59519 1.20487 8.74818 1.10899 8.93634C1 9.15025 1 9.43024 1 9.9903V17.3903H7ZM7 17.3903H13M7 17.3903V2.9903C7 2.43024 7 2.15025 7.10899 1.93634C7.20487 1.74818 7.35774 1.59519 7.5459 1.49931C7.75981 1.39032 8.03956 1.39032 8.59961 1.39032H11.3996C11.9597 1.39032 12.2405 1.39032 12.4544 1.49931C12.6425 1.59519 12.7948 1.74818 12.8906 1.93634C12.9996 2.15025 13 2.43024 13 2.9903V17.3903M13 17.3903L19 17.3903V6.9903C19 6.43024 18.9996 6.15025 18.8906 5.93634C18.7948 5.74818 18.6425 5.59519 18.4544 5.49931C18.2405 5.39032 17.9601 5.39032 17.4 5.39032H13V17.3903Z" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
        title: 'Conduct risk analysis',
        description: 'Evaluate potential risks to guide decisions',
    },
    {
        icon: <svg width="20" height="19" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.65713 2.90488L8.65712 2.90489L8.65712 2.9049C7.99818 3.56383 7.66874 3.89328 7.5165 4.26082C7.31351 4.75087 7.31351 5.30153 7.5165 5.79158C7.66874 6.15913 7.99821 6.4886 8.65715 7.14754L8.65744 7.14782C9.31619 7.80657 9.64559 8.13597 10.0131 8.28819C10.5031 8.49118 11.0538 8.49118 11.5438 8.28819C11.9114 8.13595 12.2409 7.80648 12.8998 7.14754C13.5587 6.4886 13.8882 6.15913 14.0405 5.79158C14.2434 5.30153 14.2434 4.75087 14.0405 4.26082C13.8882 3.89333 13.5588 3.56393 12.9001 2.90517L12.8998 2.90489C12.2409 2.24595 11.9114 1.91648 11.5438 1.76424C11.0538 1.56125 10.5031 1.56125 10.0131 1.76424C9.64554 1.91648 9.31607 2.24595 8.65713 2.90488Z" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M2.29287 9.2689L2.29287 9.26891C1.63393 9.92785 1.30448 10.2573 1.15224 10.6248C0.949253 11.1149 0.949253 11.6655 1.15224 12.1556C1.30448 12.5231 1.63395 12.8526 2.29289 13.5116L2.29317 13.5118C2.95193 14.1706 3.28133 14.5 3.64882 14.6522C4.13888 14.8552 4.68953 14.8552 5.17958 14.6522C5.54713 14.5 5.8766 14.1705 6.53554 13.5116L6.53555 13.5115C7.19448 12.8526 7.52395 12.5231 7.67619 12.1556C7.87918 11.6655 7.87918 11.1149 7.67619 10.6248C7.52397 10.2573 7.19457 9.92794 6.53582 9.26919L6.53554 9.26891C5.8766 8.60997 5.54713 8.28049 5.17958 8.12825C4.68953 7.92527 4.13888 7.92527 3.64882 8.12825C3.28128 8.28049 2.95181 8.60996 2.29287 9.2689Z" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M15.0214 9.26889L15.0214 9.26891C14.3624 9.92785 14.033 10.2573 13.8808 10.6248C13.6778 11.1149 13.6778 11.6655 13.8808 12.1556C14.033 12.5231 14.3625 12.8526 15.0214 13.5116L15.0217 13.5118C15.6804 14.1706 16.0098 14.5 16.3773 14.6522C16.8674 14.8552 17.418 14.8552 17.9081 14.6522C18.2756 14.5 18.6051 14.1705 19.264 13.5116L19.2641 13.5116C19.923 12.8526 20.2525 12.5231 20.4047 12.1556C20.6077 11.6655 20.6077 11.1149 20.4047 10.6248C20.2525 10.2573 19.9231 9.92794 19.2643 9.26918L19.2641 9.26891L19.264 9.26889C18.6051 8.60996 18.2756 8.28049 17.9081 8.12825C17.418 7.92527 16.8674 7.92527 16.3773 8.12825C16.0098 8.28049 15.6803 8.60996 15.0214 9.26889Z" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8.65713 15.6329L8.65712 15.6329L8.65711 15.6329C7.99818 16.2919 7.66874 16.6213 7.5165 16.9888C7.31351 17.4789 7.31351 18.0296 7.5165 18.5196C7.66874 18.8872 7.99821 19.2166 8.65714 19.8756L8.65715 19.8756L8.65743 19.8758C9.31618 20.5346 9.64559 20.864 10.0131 21.0162C10.5031 21.2192 11.0538 21.2192 11.5438 21.0162C11.9114 20.864 12.2409 20.5345 12.8998 19.8756C13.5587 19.2166 13.8882 18.8872 14.0405 18.5196C14.2434 18.0296 14.2434 17.4789 14.0405 16.9888C13.8882 16.6214 13.5588 16.292 12.9001 15.6332L12.8998 15.6329C12.2409 14.974 11.9114 14.6445 11.5438 14.4923C11.0538 14.2893 10.5031 14.2893 10.0131 14.4923C9.64554 14.6445 9.31607 14.974 8.65713 15.6329Z" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
        title: 'Summarize documents',
        description: 'Condense texts into concise summaries',
    },
    {
        icon: <svg width="20" height="19" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.7071 12.4615C13.3166 12.071 12.6834 12.071 12.2929 12.4615C11.9024 12.8521 11.9024 13.4852 12.2929 13.8757L13.7071 12.4615ZM18.2929 19.8757C18.6834 20.2663 19.3166 20.2663 19.7071 19.8757C20.0976 19.4852 20.0976 18.8521 19.7071 18.4615L18.2929 19.8757ZM8 14.1686C4.68629 14.1686 2 11.4823 2 8.16864H0C0 12.5869 3.58172 16.1686 8 16.1686V14.1686ZM2 8.16864C2 4.85493 4.68629 2.16864 8 2.16864V0.16864C3.58172 0.16864 0 3.75036 0 8.16864H2ZM8 2.16864C11.3137 2.16864 14 4.85493 14 8.16864H16C16 3.75036 12.4183 0.16864 8 0.16864V2.16864ZM14 8.16864C14 11.4823 11.3137 14.1686 8 14.1686V16.1686C12.4183 16.1686 16 12.5869 16 8.16864H14ZM12.2929 13.8757L18.2929 19.8757L19.7071 18.4615L13.7071 12.4615L12.2929 13.8757Z" fill="#5E71FE"/> </svg>,
        title: 'Efficient pre-research',
        description: 'Quickly gather relevant legal information',
    },
    {
        icon: <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 6.46867V16.6687M10 6.46867C10 4.78851 10 3.94841 10.327 3.30668C10.6146 2.74219 11.0737 2.28322 11.6382 1.9956C12.2799 1.66862 13.1196 1.66862 14.7998 1.66862H17.3998C17.9599 1.66862 18.24 1.66862 18.4539 1.77761C18.6421 1.87348 18.7952 2.02648 18.8911 2.21464C19.0001 2.42855 19 2.70854 19 3.26859V12.0686C19 12.6286 19.0001 12.9087 18.8911 13.1226C18.7952 13.3108 18.6421 13.4637 18.4539 13.5596C18.24 13.6686 17.96 13.6686 17.4 13.6686H14.5688C13.6296 13.6686 13.1602 13.6686 12.7339 13.7981C12.3565 13.9127 12.0055 14.1006 11.7008 14.351C11.3567 14.6339 11.096 15.0246 10.575 15.8061L10 16.6687M10 6.46867C10 4.78851 9.99983 3.94841 9.67285 3.30668C9.38523 2.74219 8.92665 2.28322 8.36217 1.9956C7.72043 1.66862 6.88026 1.66862 5.2001 1.66862H2.6001C2.04005 1.66862 1.75981 1.66862 1.5459 1.77761C1.35774 1.87348 1.20487 2.02648 1.10899 2.21464C1 2.42855 1 2.70854 1 3.26859V12.0686C1 12.6286 1 12.9087 1.10899 13.1226C1.20487 13.3108 1.35774 13.4637 1.5459 13.5596C1.75981 13.6686 2.04005 13.6686 2.6001 13.6686H5.43122C6.37043 13.6686 6.83997 13.6686 7.26624 13.7981C7.64361 13.9127 7.99463 14.1006 8.29932 14.351C8.64348 14.6339 8.90382 15.0246 9.4248 15.8061L10 16.6687" stroke="#5E71FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>,
        title: 'Determine facts',
        description: 'Extract and verify essential information from various sources',
    }
  ]

  return (
    <section className='solomon'>
        <section className='solomonContent'>
            <section className='leftColumn'>
                <Title />
                <Functionalities functionalities={functionalities}/>
            </section>
            <section className='rightColumn'>
                <Video />
            </section>
        </section>
    </section>
  )
}

export default Solomon