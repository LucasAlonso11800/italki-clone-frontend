import { SVG } from "@/assets";
import { ROUTES } from "@/const";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeaderSideMenu } from ".";

export default function Header() {
  // Todo
  // Handle login and signup
  return (
    <header className="bg-white border-b-gray">
      <div className="h-18 flex flex-row items-center px-4 py-4 md:px-10">
        <Link href="/">
          <Image src={SVG.Italki} alt="Italki" />
        </Link>
        <div className="flex flex-1 justify-end">
          <Link
            className="hidden p-2 mr-4 md:inline-block"
            href={ROUTES.teachers.english}
          >
            <div className="small-secondary text-gray3 hover:text-gray2 text-gray3">
              Find a Teacher
            </div>
          </Link>
          <Link
            className="hidden p-2 mr-4 md:inline-block"
            href={ROUTES.group_classes.english}
          >
            <div className="small-secondary relative hover:text-gray2 text-gray3">
              Group Class
            </div>
          </Link>
          <Link
            className="hidden p-2 mr-4 md:inline-block"
            href={ROUTES.resources.community}
          >
            <div className="small-secondary hover:text-gray2 text-gray3">
              Community
            </div>
          </Link>
          <div className="hidden p-2 mr-4 md:inline-block small-secondary cursor-pointer hover:text-gray2 text-gray3">
            Login
          </div>
          <div className="hidden p-2 md:inline-block small-secondary cursor-pointer hover:text-gray2 text-gray3">
            Sign Up
          </div>

          <div className="md:hidden">
            <div className="flex items-center md:hidden">
              {/* <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-5 callapp_callIcon___XoTu"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.75 17.5C8.75 17.0858 9.08579 16.75 9.5 16.75H14.5C14.9142 16.75 15.25 17.0858 15.25 17.5C15.25 17.9142 14.9142 18.25 14.5 18.25H9.5C9.08579 18.25 8.75 17.9142 8.75 17.5Z"
                  fill="#313140"
                ></path>
                <path
                  d="M4.75 4C4.75 3.30964 5.30964 2.75 6 2.75H18C18.6904 2.75 19.25 3.30964 19.25 4V20C19.25 20.6904 18.6904 21.25 18 21.25H6C5.30964 21.25 4.75 20.6904 4.75 20V4Z"
                  stroke="#313140"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                ></path>
              </svg> */}
              <button
                style={{ maxWidth: "120px" }}
                type="button"
                className="ant-btn mr-3 overflow-hidden callapp_callButton__c4j3j ant-btn-default ant-btn-sm"
              >
                <span
                  className="inline-block w-full whitespace-no-wrap overflow-hidden text-xs"
                  style={{ maxWidth: "156px", textOverflow: "ellipsis" }}
                >
                  Abrir en la app
                </span>
              </button>

              <HeaderSideMenu />
            </div>
          </div>

          <div className="small-secondary hidden md:block hover:text-gray2 text-gray3"></div>
        </div>
      </div>
    </header>
  );
}
