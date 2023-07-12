import React, { useState } from "react";
import { IMAGES } from "@/const";
import { ROUTES } from "@/const";
import { Menu } from "antd";
import Link from "next/link";
import { useTokenHandler } from "@/hooks";
import Router from "next/router";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<"login" | "signup" | null>>;
  image: string;
};

export default function HeaderSideMenu({ setModal, image }: Props) {
  const { accessToken, refreshToken, clearTokens } = useTokenHandler();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(!open);

  const handleLogout = () => {
    clearTokens();
    Router.push('/');
  }
  return (
    <div>
      <div>
        <img src={IMAGES.BurgerMenu} alt="Burger menu" onClick={handleOpen} />
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
                <img src={IMAGES.CloseMenu} alt="close" onClick={handleOpen} />
              </div>
            </div>

            <Menu className="h-full" mode="vertical">
              <Menu.Item key="teacher">
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <img
                      src={IMAGES.HeaderFindTeacher}
                      alt="Find a teacher"
                      className="w-[24px] h-[24px]"
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
                    <img
                      src={IMAGES.HeaderGroupClass}
                      alt="Group class"
                      className="h-[24px] w-[24px]"
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
                    <img
                      src={IMAGES.HeaderCommunity}
                      alt="Community"
                      className="h-[24px] w-[24px]"
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
              {accessToken || refreshToken ? (
                <>
                <Menu.Item>
                  <Link href={ROUTES.student.settings.profile}>
                    <div className="pl-2 flex items-center w-full">
                      <div className="flex items-center mr-4">
                        <img
                          src={image}
                          alt="Avatar"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <span className="w-full text-gray1 text-base">Profile</span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                    <div className="pl-2 flex items-center w-full" onClick={handleLogout}>
                      <div className="flex items-center mr-4 w-[24px] h-[24px]">
                      </div>
                      <span className="w-full text-gray1 text-base">Logout</span>
                    </div>
                </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item
                    onClick={() => {
                      handleOpen();
                      setModal("login");
                    }}
                  >
                    <div className="pl-2 flex items-center w-full">
                      <div className="flex items-center mr-4">
                        <img
                          src={IMAGES.HeaderLogin}
                          alt="Login"
                          className="h-[24px] w-[24px]"
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
                        <img
                          src={IMAGES.HeaderSignup}
                          alt="Sign up"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <span className="w-full text-gray1 text-base">
                        Sign Up
                      </span>
                    </div>
                  </Menu.Item>
                </>
              )}
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
}
