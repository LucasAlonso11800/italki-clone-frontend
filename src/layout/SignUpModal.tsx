import { SVG } from "@/assets";
import { Form, Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
    open: boolean
    setModal: React.Dispatch<React.SetStateAction<'login' | 'signup' | null>>
};

export default function SignUpModal({open, setModal}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleIcon = () => setShowPassword(!showPassword);

  return (
    <Modal
      open={open}
      centered
      closeIcon={
        <Image
          src={SVG.CloseMenu}
          alt="Close"
          onClick={() => setModal(null)}
        />
      }
      width={520}
      cancelButtonProps={{ hidden: true }}
      okButtonProps={{ hidden: true }}
      bodyStyle={{ margin: "-20px -24px", padding: "0 32px" }}
    >
      <div className="text-gray1 text-2xl font-medium font-bold pt-14 pb-2">
        Welcome to italki!
      </div>
      <div className="tiny-caption text-gray3">
        <span>
          By logging in or creating an account, you agree to italki's{" "}
          <Link target="_blank" href="https://www.italki.com/tos">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link target="_blank" href={"https://www.italki.com/privacy"}>
            Privacy Policy.
          </Link>
        </span>
        <div className="px-6 py-4 shadow-panel bg-white bottom-0 left-0 right-0 hidden">
          <span className="servicePolicy">
            By logging in or creating an account, you agree to italki's{" "}
            <a target="_blank" href="https://www.italki.com/tos">
              Terms of Service
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://www.italki.com/privacy">
              Privacy Policy.
            </a>
          </span>
        </div>
      </div>
      <div className="content pt-4">
        <Form id="login" className="ant-form ant-form-horizontal">
          <div className="ant-form-item">
            <div className="ant-form-item-control">
              <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                  <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    className="ant-input"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="ant-form-item ant-form-item-has-success">
            <div className="ant-form-item-control">
              <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                  <span className="ant-input-password signinForm-input-password ant-input-affix-wrapper">
                    <input
                      placeholder="Password"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="ant-input"
                    />
                    <Image
                      src={
                        showPassword
                          ? SVG.VisiblePassword
                          : SVG.InvisiblePassword
                      }
                      alt="password"
                      className="cursor-pointer"
                      onClick={toggleIcon}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="block w-full mb-6 rounded-lg tracking-wider font-bold py-2.5 px-4 transition-all cursor-pointer text-white bg-red2 hover:bg-red1 mt-auto"
          >
            <span>Sign up</span>
          </button>
        </Form>
      </div>

      <div className="toggle pb-10">
        <div className="toggle-hint small-secondary text-center">
          <span className="text-gray3">Already have an account?</span>
          <span
            className="text-gray2 ml-2 cursor-pointer font-medium hover:text-gray1"
            onClick={() => setModal('login')}
          >
            Log In
          </span>
        </div>
      </div>
    </Modal>
  );
}
