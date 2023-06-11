import React, { useState } from "react";
import { SVG } from "@/assets";
import { ROUTES } from "@/const";
import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  SearchOutlined,
  TeamOutlined,
  //   CommunityOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function HeaderSideMenu() {
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
              <Menu.Item>
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <SearchOutlined
                      style={{ fontSize: "24px", fill: "#313140" }}
                    />
                  </div>
                  <Link className="w-full text-gray1" href={ROUTES.teachers.english}>
                    Encontrar un profesor
                  </Link>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <TeamOutlined
                      style={{ fontSize: "24px", fill: "#313140" }}
                    />
                  </div>
                  <Link
                    className="w-full text-gray1"
                    href={ROUTES.group_classes.english}
                  >
                    Clase en grupo
                  </Link>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <TeamOutlined
                      style={{ fontSize: "24px", fill: "#313140" }}
                    />
                  </div>
                  <Link className="w-full text-gray1" href={ROUTES.resources.community}>
                    Comunidad
                  </Link>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <LoginOutlined
                      style={{ fontSize: "24px", fill: "#313140" }}
                    />
                  </div>
                  <span className="w-full text-gray1">Iniciar sesión</span>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="pl-2 flex items-center w-full">
                  <div className="flex items-center mr-4">
                    <UserOutlined
                      style={{ fontSize: "24px", fill: "#313140" }}
                    />
                  </div>
                  <span className="w-full text-gray1">Registrarse</span>
                </div>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
}
