import React from "react";
import { IMAGES } from '@/const';
import { EXTERNAL_LINKS, ROUTES } from "@/const";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sm:pt-8 sm:pb-4">
      <div className="sm:px-4">
        <div className="container md:flex md:m-auto md:px-4 md:py-10">
          <div className="md:w-1/5 sm:hidden md:flex md:flex-col">
            <h6 className="text-secondary1 font-bold text-base leading-6 mb-4">
              Language teachers
            </h6>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.english}
            >
              English teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.spanish}
            >
              Spanish teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.french}
            >
              French teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.japanese}
            >
              Japanese teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.german}
            >
              German teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.chinese}
            >
              Chinese teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.korean}
            >
              Korean teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.italian}
            >
              Italian teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.russian}
            >
              Russian teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.portuguese}
            >
              Portuguese teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.arabic}
            >
              Arabic teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.hindi}
            >
              Hindi teachers
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.all}
            >
              All teachers
            </Link>
          </div>
          <div className="md:w-1/5 md:flex md:flex-col sm:mb-2">
            <h6 className="text-secondary1 font-bold text-base leading-6 mb-4">
              Learn a language
            </h6>
            <div className="flex md:flex-col sm:flex-row sm:flex-wrap">
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.english}
              >
                Learn English
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.spanish}
              >
                Learn Spanish
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.french}
              >
                Learn French
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.japanese}
              >
                Learn Japanese
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.german}
              >
                Learn German
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.chinese}
              >
                Learn Chinese
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.korean}
              >
                Learn Korean
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.italian}
              >
                Learn Italian
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.russian}
              >
                Learn Russian
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.portuguese}
              >
                Learn Portuguese
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.arabic}
              >
                Learn Arabic
              </Link>
              <Link
                className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
                href={ROUTES.learn.hindi}
              >
                Learn Hindi
              </Link>
            </div>
          </div>
          <div className="md:w-1/5 sm:w-full flex flex-col">
            <h6 className="text-secondary1 font-bold text-base leading-6 mb-4">
              Lessons
            </h6>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.teachers.english}
            >
              1-on-1 Lessons
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.group_classes.english}
            >
              Group class
            </Link>
            <div className="text-secondary1 font-bold text-base leading-6 mb-4">
              Teaching
            </div>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.learn.arabic}
            >
              Become a teacher
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.learn.hindi}
            >
              Teaching Code of Conduct
            </Link>
            <h6 className="text-secondary1 font-bold text-base leading-6 mb-4">
              Learning resources
            </h6>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.resources.test}
            >
              Italki Language Test
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.resources.challenge}
            >
              Italki Language Challenge
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.resources.podcasts}
            >
              Italki Podcasts
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.resources.quiz}
            >
              Italki Quiz
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href={ROUTES.resources.community}
            >
              Italki Community
            </Link>
          </div>
          <div className="md:w-1/5 sm:w-full flex flex-col">
            <h6 className="text-secondary1 font-bold text-base leading-6 mb-4">
              Promotions
            </h6>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="#"
            >
              Refer a friend and get $10
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="#"
            >
              Buy a gift card
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="#"
            >
              Italki business
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="#"
            >
              Afiliate Program
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="#"
            >
              Partnership Program
            </Link>
            <h6 className="text-secondary1 font-bold text-base leading-6 mb-4">
              More
            </h6>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="#"
            >
              FAQ
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="#"
            >
              Italki Blog
            </Link>
            <Link
              className="text-secondary2 font-medium text-tiny md:mb-2 sm:mr-6 sm:mb-4 mr-1"
              href="#"
            >
              Download APP
            </Link>
          </div>
        </div>
      </div>

      {/* Separation */}
      <div
        className="hidden md:block"
        style={{ borderTop: "1px solid #E5E8ED" }}
      ></div>

      {/* Bottom section */}
      <div className="sm:mt-6">
        <div className="container md:m-auto md:flex md:justify-between md:items-center md:py-8 md:px-4">
          {/* Mobile links */}
          <div
            className="md:hidden py-4 flex justify-center px-8"
            style={{
              borderTop: "1px solid #E5E8ED",
              borderBottom: "1px solid #E5E8ED",
            }}
          >
            <div className="flex space-x-6">
              <Link href={EXTERNAL_LINKS.facebook} target="_blank">
                <img
                  src={IMAGES.Facebook}
                  alt="Facebook"
                />
              </Link>
              <Link href={EXTERNAL_LINKS.twitter} target="_blank">
                <img
                  src={IMAGES.Twitter}
                  alt="Twitter"
                />
              </Link>
              <Link href={EXTERNAL_LINKS.instagram} target="_blank">
                <img
                  src={IMAGES.Instagram}
                  alt="Instagram"
                />
              </Link>
              <Link href={EXTERNAL_LINKS.youtube} target="_blank">
                <img
                  src={IMAGES.Youtube}
                  alt="Youtube"
                />
              </Link>
              <Link href={EXTERNAL_LINKS.vk} target="_blank">
                <img src={IMAGES.VK} alt="VK" />
              </Link>
              <Link href={EXTERNAL_LINKS.weibo} target="_blank">
                <img
                  src={IMAGES.Weibo}
                  alt="Weibo"
                />
              </Link>
            </div>
          </div>

          <div className="flex false sm:flex-col-reverse sm:items-center sm:justify-center sm:px-6 sm:pt-6">
            <div className="text-secondary2 font-normal text-tiny flex items-center">
              <div className=" text-center">
                <span>© 2023 italki HK Limited.</span>
              </div>
            </div>
            <div className="md:mx-8 sm:mb-4 flex flex-wrap space-x-6 items-center justify-center flex-shrink-0">
              <a
                className="text-secondary2 font-normal text-tiny"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://company.italki.com"
              >
                Sobre nosotros
              </a>
              <a
                className="text-secondary2 font-normal text-tiny"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://company.italki.com/careers"
              >
                Oportunidades profesionales
              </a>
              <a
                className="text-secondary2 font-normal text-tiny"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://company.italki.com/newsroom"
              >
                Prensa
              </a>
              <a
                className="text-secondary2 font-normal text-tiny"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="/es/signin/sso?return_to=https://support.italki.com/"
              >
                Asistencia
              </a>
              <a
                className="text-secondary2 font-normal text-tiny"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="/es/tos"
              >
                Información legal
              </a>
              <a
                className="text-secondary2 font-normal text-tiny"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="/es/privacy"
              >
                Privacidad
              </a>
              <a
                className="text-secondary2 font-normal text-tiny"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://company.italki.com/contact"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:block">
            <div className="flex space-x-6">
              <Link href={EXTERNAL_LINKS.facebook} target="_blank">
                <img
                  src={IMAGES.Facebook}
                  alt="Facebook"
                />
              </Link>
              <Link href={EXTERNAL_LINKS.twitter} target="_blank">
                <img
                  src={IMAGES.Twitter}
                  alt="Twitter"
                />
              </Link>
              <Link href={EXTERNAL_LINKS.instagram} target="_blank">
                <img
                  src={IMAGES.Instagram}
                  alt="Instagram"
                />
              </Link>
              <Link href={EXTERNAL_LINKS.youtube} target="_blank">
                <img
                  src={IMAGES.Youtube}
                  alt="Youtube"
                />
              </Link>
              <Link href={EXTERNAL_LINKS.vk} target="_blank">
                <img src={IMAGES.VK} alt="VK" />
              </Link>
              <Link href={EXTERNAL_LINKS.weibo} target="_blank">
                <img
                  src={IMAGES.Weibo}
                  alt="Weibo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
