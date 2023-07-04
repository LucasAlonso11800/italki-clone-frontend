import { IMAGES } from '@/const';
import { API_BASE_URL, API_ROUTES, DATE_FORMAT, EMAIL_REGEX, ROUTES } from "@/const";
import { useTokenHandler } from "@/hooks";
import { CountryType } from "@/types";
import { Alert, DatePicker, Form, Modal, Select } from "antd";
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router"
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
    field: "",
    message: "",
  });
  const [step, setStep] = useState<number>(3);

  const router = useRouter();
  const { setTokens } = useTokenHandler();

  const toggleIcon = () => setShowPassword(!showPassword);
  const cleanErrors = () => setError({ field: "", message: "" });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateStepOne = (): boolean => {
    if (!values.email.length) {
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
    if (!values.password.length) {
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
    cleanErrors();
    return true;
  };

  const validateStepTwo = (): boolean => {
    if (!values.first_name.trim().length) {
      setError({ field: "first_name", message: "First name required" });
      return false;
    }
    if (values.first_name.trim().length > 40) {
      setError({
        field: "first_name",
        message: "First name longer than 40 characters",
      });
      return false;
    }
    if (!values.last_name.trim().length) {
      setError({ field: "last_name", message: "Last name required" });
      return false;
    }
    if (values.last_name.trim().length > 40) {
      setError({
        field: "first_name",
        message: "Last name longer than 40 characters",
      });
      return false;
    }
    cleanErrors();
    return true;
  };

  const validateStepThree = (): boolean => {
    if (!values.country) {
      setError({ field: "country", message: "Country required" });
      return false;
    }
    if (!values.gender.trim()) {
      setError({ field: "gender", message: "Gender required" });
      return false;
    }
    if (!values.birthdate.trim()) {
      setError({ field: "birthdate", message: "Birthdate required" });
      return false;
    }
    const minimumDate = new Date();
    minimumDate.setFullYear(minimumDate.getFullYear() - 18);
    if (new Date(values.birthdate) > minimumDate) {
      setError({ field: "birthdate", message: "Must be 18 years old or more" });
      return false;
    }
    cleanErrors();
    return true;
  };

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const url = `${API_BASE_URL}/${API_ROUTES.signup.student}`;
      const response = await axios.post(url, values);
      if (response.data.code === 1){
        setTokens(response.headers.access_token, response.headers.refresh_token);
        router.push(ROUTES.user.dashboard)
      }
    } catch (err: any) {
      console.log(err);
      setStep(1);
      setError({ field: "server", message: err.response.data.errmsg });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      if (!validateStepThree()) return;
      handleSignUp();
    }
  };

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

  useEffect(() => {
    if (open && !countries.length) {
      countryGet();
    }
    if (!open) {
      cleanErrors();
      setStep(1);
      if (countries.length) {
        setValues({ ...initialValues, country: countries[0].country_id });
      }
    }
  }, [open]);

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
                      <img
                        src={
                          showPassword
                            ? IMAGES.VisiblePassword
                            : IMAGES.InvisiblePassword
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
                      placeholder="First name"
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
                      placeholder="Last name"
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
                    placeholder="Country"
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
                    placeholder="Gender"
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
                    placeholder="Birthdate"
                    onChange={(value) =>
                      handleChange({
                        target: {
                          name: "birthdate",
                          value: value?.toISOString().substring(0, 10),
                        },
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
  }, [step, values, error, countries, showPassword]);

  return (
    <Modal
      open={open}
      centered
      closeIcon={
        <img src={IMAGES.CloseMenu} alt="Close" onClick={() => setModal(null)} />
      }
      width={520}
      cancelButtonProps={{ hidden: true }}
      okButtonProps={{ hidden: true }}
      bodyStyle={{
        margin: "-20px -24px",
        padding: "0 32px",
        position: "relative",
      }}
    >
      {step > 1 && (
        <img
          src={IMAGES.ArrowRight}
          className="rotate-180	absolute left-[17px] top-[14px] w-[32px] h-[32px] cursor-pointer"
          alt="Back"
          onClick={() => setStep(step - 1)}
        />
      )}
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
            <span>{step === 3 ? "Sign Up" : "Continue"}</span>
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
