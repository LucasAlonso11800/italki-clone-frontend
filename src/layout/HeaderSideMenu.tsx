import React, { useState } from "react";
import { SVG } from "@/assets";
import { ROUTES } from "@/const";
import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
type Props = {
  setModal: React.Dispatch<React.SetStateAction<"login" | "signup" | null>>;
};
export default function HeaderSideMenu({ setModal }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <div>
        <Image src={SVG.BurgerMenu} alt="Burger menu" onClick={handleOpen} />
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full"
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
          }}
        ></div>
      )}

      {/* Side menu */}
      {open && (
        <div
          className="fixed top-0 right-0 h-full w-[300px]"
          style={{ zIndex: 1100, transition: "all 200ms ease 0s" }}
        >
          <div className="h-full overflow-auto pt-12 bg-white">
            <div>
              <div className="absolute w-4 h-4 top-3.5 right-4">
                <Image src={SVG.CloseMenu} alt="close" onClick={handleOpen} />
              </div>
            </div>

            <Menu className="h-full" mode="vertical">
              <Menu.Item key="teacher">
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <Image
                      src={SVG.HeaderFindTeacher}
                      alt="Find a teacher"
                      height={24}
                      width={24}
                    />
                  </div>
                  <Link
                    className="w-full text-gray1 text-base"
                    href={ROUTES.teachers.english}
                  >
                    Find a teacher
                  </Link>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <Image
                      src={SVG.HeaderGroupClass}
                      alt="Group class"
                      height={24}
                      width={24}
                    />
                  </div>
                  <Link
                    className="w-full text-gray1 text-base"
                    href={ROUTES.group_classes.english}
                  >
                    Group Class
                  </Link>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <Image
                      src={SVG.HeaderCommunity}
                      alt="Community"
                      height={24}
                      width={24}
                    />
                  </div>
                  <Link
                    className="w-full text-gray1 text-base"
                    href={ROUTES.resources.community}
                  >
                    Comunnity
                  </Link>
                </div>
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  handleOpen();
                  setModal("login");
                }}
              >
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <Image
                      src={SVG.HeaderLogin}
                      alt="Login"
                      height={24}
                      width={24}
                    />
                  </div>
                  <span className="w-full text-gray1 text-base">Login</span>
                </div>
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  handleOpen();
                  setModal("signup");
                }}
              >
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <Image
                      src={SVG.HeaderSignup}
                      alt="Sign up"
                      height={24}
                      width={24}
                    />
                  </div>
                  <span className="w-full text-gray1 text-base">Sign Up</span>
                </div>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
}
