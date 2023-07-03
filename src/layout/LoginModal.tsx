import { SVG } from "@/assets";
import { API_BASE_URL, API_ROUTES, EMAIL_REGEX, ROUTES } from "@/const";
import { useTokenHandler } from "@/hooks";
import { Alert, Modal } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
  open: boolean;
  setModal: React.Dispatch<React.SetStateAction<"login" | "signup" | null>>;
};

export default function LoginModal({ open, setModal }: Props) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({
    field: "email",
    message: "Please enter your email.",
  });

  const router = useRouter();
  const { setTokens } = useTokenHandler();
  const toggleIcon = () => setShowPassword(!showPassword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateFields = (): boolean => {
    if (!values.email.trim().length) {
      setError({ field: "email", message: "Email required" });
      return false;
    }
    if (!EMAIL_REGEX.test(values.email)) {
      setError({ field: "email", message: "Invalid email" });
      return false;
    }
    if (values.email.length > 40) {
      setError({ field: "email", message: "Email too long" });
      return false;
    }
    if (!values.password.trim().length) {
      setError({ field: "password", message: "Password required" });
      return false;
    }
    if (values.password.length < 8) {
      setError({ field: "password", message: "Password must be at least 8 characters long" });
      return false;
    }
    if (values.password.length > 40) {
      setError({ field: "password", message: "Password too long" });
      return false;
    }
    setError({ field: "", message: "" });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!validateFields()) return;

      setLoading(true);
      const url = `${API_BASE_URL}/${API_ROUTES.signin.student}`;
      const response = await (await axios.post(url, values)).data;
      if (response.data.code === 1) {
        setTokens(
          response.headers.access_token,
          response.headers.refresh_token
        );
        router.push(ROUTES.user.dashboard);
      }
    } catch (err: any) {
      console.log(err);
      setError({ field: "server", message: err.response.data.errmsg });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!open) setError({ field: "", message: "" });
  }, [open]);

  return (
    <Modal
      open={open}
      centered
      closeIcon={
        <Image src={SVG.CloseMenu} alt="Close" onClick={() => setModal(null)} />
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
        {error.field === "server" && (
          <Alert
            type="error"
            message={error.message}
            style={{ marginBottom: "16px" }}
          />
        )}
        <form
          id="login"
          className="ant-form ant-form-horizontal"
          onSubmit={handleSubmit}
        >
          <div className="ant-form-item">
            <div className="ant-form-item-control">
              <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                  <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    className={`ant-input ${
                      error.field === "email" && "border-red"
                    }`}
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
              {error.field === "email" && (
                <div className="mt-1 text-red1 text-xs">{error.message}</div>
              )}
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
                      className={`ant-input ${
                        error.field === "password" && "border-red"
                      }`}
                      name="password"
                      onChange={handleChange}
                      disabled={loading}
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
              {error.field === "password" && (
                <div className="mt-1 text-red1 text-xs">{error.message}</div>
              )}
            </div>
          </div>

          <div className="flex justify-end items-center mb-4">
            <Link className="small-secondary text-gray3" href="/resetpassword">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="block w-full mb-6 rounded-lg tracking-wider font-bold py-2.5 px-4 transition-all cursor-pointer text-white bg-red2 hover:bg-red1 mt-auto"
          >
            <span>Log In</span>
          </button>
        </form>
      </div>

      <div className="toggle pb-10">
        <div className="toggle-hint small-secondary text-center">
          <span className="text-gray3">No account yet?</span>
          <span
            className="text-gray2 ml-2 cursor-pointer font-medium hover:text-gray1"
            onClick={() => setModal("signup")}
          >
            Sign up
          </span>
        </div>
      </div>
    </Modal>
  );
}
