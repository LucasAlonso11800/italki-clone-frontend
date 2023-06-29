import { SVG } from "@/assets";
import { ROUTES } from "@/const";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeaderSideMenu } from ".";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<"login" | "signup" | null>>;
};

export default function Header({ setModal }: Props) {
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
          <div
            className="hidden p-2 mr-4 md:inline-block small-secondary cursor-pointer hover:text-gray2 text-gray3"
            onClick={() => setModal("login")}
          >
            Login
          </div>
          <div
            className="hidden p-2 md:inline-block small-secondary cursor-pointer hover:text-gray2 text-gray3"
            onClick={() => setModal("signup")}
          >
            Sign Up
          </div>

          <div className="md:hidden">
            <div className="flex items-center md:hidden">
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

              <HeaderSideMenu setModal={setModal}/>
            </div>
          </div>

          <div className="small-secondary hidden md:block hover:text-gray2 text-gray3"></div>
        </div>
      </div>
    </header>
  );
}
