import { ROUTES } from '@/const'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='sm:pt-8 sm:pb-4'>
      <div className="sm:px-4">
        <div className="container md:flex md:m-auto md:px-4 md:py-10">
          <div className="md:w-1/5 sm:hidden md:flex md:flex-col">
            <div className="text-secondary1 font-bold text-base leading-6 mb-4">Language teachers</div>
            <Link className='text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1' href={ROUTES.teachers.english}>English teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.spanish}>Spanish teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.french}>French teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.japanese}>Japanese teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.german}>German teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.chinese}>Chinese teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.korean}>Korean teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.italian}>Italian teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.russian}>Russian teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.portuguese}>Portuguese teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.arabic}>Arabic teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.hindi}>Hindi teachers</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.all}>All teachers</Link>
          </div>
          <div className="md:w-1/5 md:flex md:flex-col sm:mb-2">
            <div className="text-secondary1 font-bold text-base leading-6 mb-4">Learn a language</div>
            <div className="flex md:flex-col sm:flex-row sm:flex-wrap">
              <Link className='text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1' href={ROUTES.learn.english}>Learn English</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.spanish}>Learn Spanish</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.french}>Learn French</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.japanese}>Learn Japanese</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.german}>Learn German</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.chinese}>Learn Chinese</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.korean}>Learn Korean</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.italian}>Learn Italian</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.russian}>Learn Russian</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.portuguese}>Learn Portuguese</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.arabic}>Learn Arabic</Link>
              <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.hindi}>Learn Hindi</Link>
            </div>
          </div>
          <div className="md:w-1/5 sm:w-full flex flex-col">
            <div className="text-secondary1 font-bold text-base leading-6 mb-4">Lessons</div>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.teachers.english}>1-on-1 Lessons</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.group_classes.english}>Group class</Link>
            <div className="text-secondary1 font-bold text-base leading-6 mb-4">Teaching</div>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.arabic}>Become a teacher</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.learn.hindi}>Teaching Code of Conduct</Link>
            <div className="text-secondary1 font-bold text-base leading-6 mb-4">Learning resources</div>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.resources.test}>Italki Language Test</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.resources.challenge}>Italki Language Challenge</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.resources.podcasts}>Italki Podcasts</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.resources.quiz}>Italki Quiz</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href={ROUTES.resources.community}>Italki Community</Link>
          </div>
          <div className="md:w-1/5 sm:w-full flex flex-col">
            <div className="text-secondary1 font-bold text-base leading-6 mb-4">Promotions</div>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href='#'>Refer a friend and get $10</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href='#'>Buy a gift card</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href='#'>Italki business</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href='#'>Afiliate Program</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href='#'>Partnership Program</Link>
            <div className="text-secondary1 font-bold text-base leading-6 mb-4">More</div>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href='#'>FAQ</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href='#'>Italki Blog</Link>
            <Link className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1" href='#'>Download APP</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
