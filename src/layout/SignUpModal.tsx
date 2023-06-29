import { SVG } from "@/assets";
import { API_BASE_URL, API_ROUTES } from "@/const";
import { CountryType } from "@/types";
import { Alert, DatePicker, Form, Modal, Select } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

type Props = {
  open: boolean;
  setModal: React.Dispatch<React.SetStateAction<"login" | "signup" | null>>;
};

export default function SignUpModal({ open, setModal }: Props) {
  const initialValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthdate: "2000-01-01",
    gender: "M",
    country: 0,
  };
  const genders = [
    {
      value: "M",
      label: "Male",
    },
    {
      value: "F",
      label: "Female",
    },
    {
      value: "X",
      label: "Other",
    },
  ];
  const [values, setValues] = useState(initialValues);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({
    field: "email",
    message: "Please enter your email.",
  });
  const [step, setStep] = useState<number>(3);

  const toggleIcon = () => setShowPassword(!showPassword);

  const cleanErrors = () => setError({ field: "", message: "" });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateStepOne = () => {
    if (values.email.length > 40) {
      setError({ field: "email", message: "Email too long" });
      return false;
    }
    if (values.password.length < 8) {
      setError({ field: "password", message: "Password too short" });
      return false;
    }
    if (values.password.length > 40) {
      setError({ field: "password", message: "Password too long" });
      return false;
    }
    cleanErrors();
    return true;
  };

  const validateStepTwo = () => {
    if (!values.first_name.trim().length) {
      setError({ field: "first_name", message: "First name required" });
      return false;
    }
    if (!values.last_name.trim().length) {
      setError({ field: "last_name", message: "Last name required" });
      return false;
    }
    cleanErrors();
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (step === 1) {
        if (!validateStepOne()) return;
        setStep(2);
      }
      if (step === 2) {
        if (!validateStepTwo()) return;
        setStep(3);
      }
      if (step === 3) {
        setStep(4);
      }
      if (step === 4) {
        setLoading(true);
        const url = `${API_BASE_URL}/${API_ROUTES.signup.student}`;
        const response = await (await axios.post(url, values)).data;
        console.log(response);
      }
    } catch (err: any) {
      console.log(err);
      setError({ field: "server", message: err.response.data.errmsg });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open && !countries.length) {
      countryGet();
    }
    if (!open) {
      cleanErrors();
      setValues({ ...initialValues, country: countries[0].country_id });
      setStep(1);
    }
  }, [open]);

  const countryGet = async () => {
    try {
      const url = `${API_BASE_URL}/${API_ROUTES.services}`;
      const { result } = await (
        await axios.post(url, {
          procedure: "CountryGet",
          params: {},
        })
      ).data;
      setCountries(result);
      setValues({ ...values, country: result[0].country_id });
    } catch (err: any) {
      console.log(err);
      setError({ field: "server", message: err.response.data.errmsg });
    }
  };
  console.log(values)
  const Inputs = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <>
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

            <div className="ant-form-item">
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
          </>
        );
      case 2:
        return (
          <>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                    <input
                      placeholder="John"
                      type="text"
                      id="first_name"
                      className={`ant-input ${
                        error.field === "first_name" && "border-red"
                      }`}
                      value={values.first_name}
                      name="first_name"
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                </div>
                {error.field === "first_name" && (
                  <div className="mt-1 text-red1 text-xs">{error.message}</div>
                )}
              </div>
            </div>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                    <input
                      placeholder="Doe"
                      type="text"
                      id="last_name"
                      className={`ant-input ${
                        error.field === "last_name" && "border-red"
                      }`}
                      value={values.last_name}
                      name="last_name"
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                </div>
                {error.field === "last_name" && (
                  <div className="mt-1 text-red1 text-xs">{error.message}</div>
                )}
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <div className="ant-form-item-control-input">
                  <Select
                    options={countries.map((c) => ({
                      value: c.country_id,
                      label: c.country_name,
                    }))}
                    className="w-full"
                    onChange={(value) =>
                      handleChange({
                        target: { name: "country", value },
                      } as any)
                    }
                  />
                </div>
                {error.field === "country" && (
                  <div className="mt-1 text-red1 text-xs">{error.message}</div>
                )}
              </div>
            </div>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <div className="ant-form-item-control-input">
                  <Select
                    options={genders}
                    className="w-full"
                    onChange={(value) =>
                      handleChange({
                        target: { name: "gender", value },
                      } as any)
                    }
                  />
                </div>
                {error.field === "gender" && (
                  <div className="mt-1 text-red1 text-xs">{error.message}</div>
                )}
              </div>
            </div>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <div className="ant-form-item-control-input">
                  <DatePicker
                    name="birthdate"
                    className="w-full"
                    onChange={(value) =>
                      handleChange({
                        target: { name: "birthdate", value: value?.toISOString().substring(0, 10) },
                      } as any)
                    }
                  />
                </div>
                {error.field === "birthdate" && (
                  <div className="mt-1 text-red1 text-xs">{error.message}</div>
                )}
              </div>
            </div>
          </>
        );
      default:
        return <></>;
    }
  }, [step, values, error, countries]);

  // Birthdate and gender
  // Country

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
          id="signup"
          className="ant-form ant-form-horizontal"
          onSubmit={handleSubmit}
        >
          {Inputs}

          <button
            type="submit"
            className="block w-full mb-6 rounded-lg tracking-wider font-bold py-2.5 px-4 transition-all cursor-pointer text-white bg-red2 hover:bg-red1 mt-auto"
          >
            <span>{step === 4 ? "Sign Up" : "Continue"}</span>
          </button>
        </form>
      </div>

      <div className="toggle pb-10">
        <div className="toggle-hint small-secondary text-center">
          <span className="text-gray3">Already have an account?</span>
          <span
            className="text-gray2 ml-2 cursor-pointer font-medium hover:text-gray1"
            onClick={() => setModal("login")}
          >
            Log In
          </span>
        </div>
      </div>
    </Modal>
  );
}
