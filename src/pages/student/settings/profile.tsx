import {
  API_BASE_URL,
  API_ROUTES,
  DATE_FORMAT,
  IMAGES,
  SERVICES_URL,
} from "@/const";
import { useTokenHandler } from "@/hooks";
import { Layout } from "@/layout";
import { CountryType, ServiceConfig, StudentType } from "@/types";
import { authenticatedCall } from "@/utils";
import { Alert, Spin } from "antd";
import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";
import Router from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  countries: CountryType[];
};

export default function StudentProfile({ countries }: Props) {
  const { accessToken, refreshToken, setTokens, clearTokens } =
    useTokenHandler();

  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<StudentType>();
  const [error, setError] = useState({
    field: "student_first_name",
    message: "First name required.",
  });
  const [fieldToEdit, setFieldToEdit] = useState<string>("");
  const [file, setFile] = useState<Blob | Uint8Array | ArrayBuffer | null>(
    null
  );

  const cleanErrors = () => setError({ field: "", message: "" });

  const fetchStudentProfile = useCallback(async () => {
    setLoading(true);
    setFile(null);
    const options: ServiceConfig = {
      method: "POST",
      url: SERVICES_URL,
      data: {
        procedure: "StudentProfileGet",
        params: {},
      },
      headers: {
        authorization: accessToken,
        "refresh-token": refreshToken,
      },
    };
    const response = await authenticatedCall(options, setTokens, clearTokens);
    if (response.code === 0 || response.result.length !== 1) {
      Router.push("/");
    } else {
      setProfile(response.result[0]);
    }
    cleanErrors();
    setLoading(false);
  }, [accessToken, authenticatedCall]);

  useEffect(() => {
    fetchStudentProfile();
  }, [fetchStudentProfile]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    } as StudentType);
  };

  const validateParams = (): boolean => {
    if (!profile?.student_first_name.trim().length) {
      setError({ field: "student_first_name", message: "First name required" });
      setFieldToEdit("student_first_name");
      return false;
    }
    if (profile?.student_first_name.trim().length > 40) {
      setError({
        field: "student_first_name",
        message: "First name longer than 40 characters",
      });
      setFieldToEdit("student_first_name");
      return false;
    }
    if (!profile?.student_last_name.trim().length) {
      setError({
        field: "student_last_name",
        message: "Last name required",
      });
      setFieldToEdit("student_last_name");
      return false;
    }
    if (profile?.student_last_name.trim().length > 40) {
      setError({
        field: "student_last_name",
        message: "Last name longer than 40 characters",
      });
      setFieldToEdit("student_last_name");
      return false;
    }
    if (!profile?.country_id) {
      setError({ field: "country_id", message: "Country required" });
      setFieldToEdit("country_id");
      return false;
    }
    if (!profile?.student_gender) {
      setError({ field: "student_gender", message: "Gender required" });
      setFieldToEdit("student_gender");
      return false;
    }
    if (!["M", "F", "X"].includes(profile?.student_gender)) {
      setError({ field: "student_gender", message: "Invalid gender" });
      setFieldToEdit("student_gender");
      return false;
    }
    cleanErrors();
    return true;
  };

  const updateStudentProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldToEdit("");
    if (!validateParams()) return;
    if (!profile) return;

    setLoading(true);
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `${API_BASE_URL}/${API_ROUTES.student.profile}`,
      data: {
        first_name: profile.student_first_name,
        last_name: profile.student_last_name,
        gender: profile.student_gender,
        image: profile.student_image,
        country_id: profile.country_id,
        email: profile.student_email,
      },
      headers: {
        authorization: accessToken,
        "refresh-token": refreshToken,
      },
    };
    const response = await authenticatedCall(options, setTokens, clearTokens);
    if (response.code === 0) {
      setError({ field: "server", message: response.errmsg });
    } else {
      await fetchStudentProfile();
    }
    setLoading(false);
  };

  const handleReaderLoaded = (readerEvt: any) => {
    const binaryString = readerEvt.target.result;
    setProfile({
      ...profile,
      student_image: btoa(binaryString),
    } as StudentType);
  };

  const handleImg = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const inputFile: any = useRef(null);
  const handleButtonClick = () => inputFile.current.click();

  return (
    <Layout>
      <main className="italki-app-container flex-container pt-6 min-h-[80px]">
        <div className="bg-white pt-6 -mt-6">
          <div className="max-w-grid-8 mx-auto md:px-3">
            {error.field === "server" && !loading && (
              <Alert
                type="error"
                message={error.message}
                style={{ marginBottom: "16px" }}
              />
            )}
            {loading && (
              <Spin
                size="large"
                style={{ margin: "auto", marginTop: "16px", display: "block" }}
              />
            )}
            {!loading && profile && (
              <form
                className="ant-form ant-form-horizontal"
                onSubmit={updateStudentProfile}
              >
                <div className="userprofile-avatar border-b-gray py-4 md:pb-8">
                  <div className="flex items-center">
                    <div className="ant-col ant-col-xs-20 ant-col-sm-22 ant-col-md-24">
                      <div className="h6 md:text-xl pl-4 leading-[30px]">
                        <span>Profile Photo</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 md:pl-3 mt-6 md:flex md:h-[160px] hidden">
                    <div className="md:pr-12 w-full md:w-[30%]">
                      <span
                        className="ant-avatar ant-avatar-circle w-[160px] h-[160px] text-lg block"
                        style={{
                          border: "4px solid white",
                        }}
                      >
                        <img
                          src={
                            file
                              ? `data:image/png;base64,${profile.student_image}`
                              : profile.student_image ||
                                IMAGES.AvatarPlaceholder
                          }
                          alt="Avatar"
                          onError={() => setProfile({...profile, student_image: ''})}
                        />
                      </span>
                    </div>
                    <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                      <div className="flex flex-col justify-between h-full py-4">
                        <div className="mb-2">
                          <div className="small-secondary text-gray3 mb-2 hidden md:block">
                            <span>
                              This will be displayed to other users when they
                              view your profile or posts. Max size: 2MB
                            </span>
                          </div>
                        </div>
                        <div>
                          <input
                            style={{ display: "none" }}
                            accept="image/png, image/jpeg, image/jpg"
                            ref={inputFile}
                            onChange={handleImg}
                            type="file"
                          />
                          <button
                            type="button"
                            onClick={handleButtonClick}
                            className="inline-block px-4 rounded border border-solid border-gray5 text-gray2  text-button uppercase cursor-pointer hover:border-black hover:text-black h-[40px]"
                          >
                            <span>Upload</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="userProfile-baseInfo border-0 md:pb-4 md:pt-6 md:border-gray6 md:border-b md:border-solid">
                  <div className="h5 mb-4 pl-4 hidden md:block">
                    <span>Basic Information</span>
                  </div>
                  {error.field === "student_first_name" && !loading && (
                    <Alert
                      type="error"
                      message={error.message}
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                  <div className="flex border-b-gray md:border-b-0 pl-4 pr-2 py-3 md:pt-0">
                    <div className="ant-col md:pr-0 sm:w-[90%]">
                      <div className="flex items-center h-10">
                        <div className="md:w-[30%] h6 mb-1 md:mb-0">
                          <span>First Name</span>
                        </div>
                        {fieldToEdit === "student_first_name" ? (
                          <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                            <div className="ant-form-item-control">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <input
                                    placeholder="First name"
                                    type="text"
                                    id="student_first_name"
                                    className={`ant-input ${
                                      error.field === "student_first_name" &&
                                      "border-red"
                                    }`}
                                    value={profile.student_first_name}
                                    name="student_first_name"
                                    onChange={handleChange}
                                    disabled={loading}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                            <div className="md:pl-4 regular-body text-gray3">
                              {profile.student_first_name}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="ant-col md:flex flex items-center justify-end ant-col-xs-4 sm:w-[10%]">
                      <img
                        src={IMAGES.Edit}
                        alt="Edit"
                        className="edit-icon cursor-pointer"
                        onClick={() => setFieldToEdit("student_first_name")}
                      />
                    </div>
                  </div>
                  {error.field === "student_last_name" && !loading && (
                    <Alert
                      type="error"
                      message={error.message}
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                  <div className="flex border-b-gray md:border-b-0 pl-4 pr-2 py-3 md:pt-0">
                    <div className="ant-col md:pr-0 sm:w-[90%]">
                      <div className="flex items-center h-10">
                        <div className="md:w-[30%] h6 mb-1 md:mb-0">
                          <span>Last Name</span>
                        </div>
                        {fieldToEdit === "student_last_name" ? (
                          <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                            <div className="ant-form-item-control">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <input
                                    placeholder="Last name"
                                    type="text"
                                    id="student_last_name"
                                    className={`ant-input ${
                                      error.field === "student_last_name" &&
                                      "border-red"
                                    }`}
                                    value={profile.student_last_name}
                                    name="student_last_name"
                                    onChange={handleChange}
                                    disabled={loading}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                            <div className="md:pl-4 regular-body text-gray3">
                              {profile.student_last_name}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="ant-col md:flex flex items-center justify-end ant-col-xs-4 sm:w-[10%]">
                      <img
                        src={IMAGES.Edit}
                        alt="Edit"
                        className="edit-icon cursor-pointer"
                        onClick={() => setFieldToEdit("student_last_name")}
                      />
                    </div>
                  </div>
                  <div className="flex border-b-gray md:border-b-0 pl-4 pr-2 py-3 md:pt-0">
                    <div className="ant-col md:pr-0 sm:w-[90%]">
                      <div className="flex items-center h-10">
                        <div className="md:w-[30%] h6 mb-1 md:mb-0">
                          <span>Date of Birth</span>
                        </div>
                        <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                          <div className="md:pl-4 regular-body text-gray3 profile_title__ZClxV">
                            <span className="text-gray4">
                              <span>
                                {moment(profile.student_birthdate).format(
                                  DATE_FORMAT
                                )}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-b-gray md:border-b-0 pl-4 pr-2 py-3 md:pt-0">
                    <div className="ant-col md:pr-0 sm:w-[90%]">
                      <div className="flex items-center h-10">
                        <div className="md:w-[30%] h6 mb-1 md:mb-0">
                          <span>Email</span>
                        </div>
                        <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                          <div className="md:pl-4 regular-body text-gray3 profile_title__ZClxV">
                            <span className="text-gray4">
                              <span>{profile.student_email}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {error.field === "student_gender" && !loading && (
                    <Alert
                      type="error"
                      message={error.message}
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                  <div className="flex border-b-gray md:border-b-0 pl-4 pr-2 py-3 md:pt-0">
                    <div className="ant-col md:pr-0 sm:w-[90%]">
                      <div className="flex items-center h-10">
                        <div className="md:w-[30%] h6 mb-1 md:mb-0">
                          <span>Gender</span>
                        </div>
                        <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                          <div className="md:pl-4 regular-body text-gray3 profile_title__ZClxV">
                            <span>
                              {profile.student_gender === "M"
                                ? "Male"
                                : profile.student_gender === "F"
                                ? "Female"
                                : "Non binary"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col md:flex flex items-center justify-end ant-col-xs-4 sm:w-[10%]">
                      <img
                        src={IMAGES.Edit}
                        alt="Edit"
                        className="edit-icon cursor-pointer"
                        onClick={() => setFieldToEdit("student_gender")}
                      />
                    </div>
                  </div>
                  {error.field === "country_id" && !loading && (
                    <Alert
                      type="error"
                      message={error.message}
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                  <div className="flex border-b-gray md:border-b-0 pl-4 pr-2 py-3 md:pt-0">
                    <div className="ant-col md:pr-0 sm:w-[90%]">
                      <div className="flex items-center h-10">
                        <div className="md:w-[30%] h6 mb-1 md:mb-0">
                          <span>From</span>
                        </div>
                        <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                          <div className="md:pl-4 regular-body text-gray3 profile_title__ZClxV">
                            {profile.country_name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col md:flex flex items-center justify-end ant-col-xs-4 sm:w-[10%]">
                      <img
                        src={IMAGES.Edit}
                        alt="Edit"
                        className="edit-icon cursor-pointer"
                        onClick={() => setFieldToEdit("country_id")}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-lg tracking-wider font-bold py-2.5 px-4 transition-all cursor-pointer text-white bg-red2 hover:bg-red1 mt-auto"
                >
                  <span>Update profile</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const options: ServiceConfig = {
      method: "POST",
      url: SERVICES_URL,
      data: {
        procedure: "CountryGet",
        params: {},
      },
    };
    const { result } = await (await axios(options)).data;
    return {
      props: {
        countries: result,
        revalidate: 60,
      },
    };
  } catch (err: any) {
    console.log(err);
    return {
      props: {
        countries: [],
        revalidate: 60,
      },
    };
  }
}
