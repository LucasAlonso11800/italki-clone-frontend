import { LanguageLevel } from "@/components";
import { API_BASE_URL, API_ROUTES, DATE_FORMAT, IMAGES } from "@/const";
import { useTokenHandler } from "@/hooks";
import { Layout } from "@/layout";
import { CountryType, StudentType } from "@/types";
import { authenticatedCall } from "@/utils";
import { Spin } from "antd";
import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  countries: CountryType[];
};

export default function StudentProfile({ countries }: Props) {
  const { accessToken, refreshToken, setTokens, clearTokens } =
    useTokenHandler();

  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<StudentType>();

  const fetchStudentProfile = useCallback(async () => {
    try {
      setLoading(true);
      const options: AxiosRequestConfig = {
        method: "POST",
        url: `${API_BASE_URL}/${API_ROUTES.services}`,
        data: {
          procedure: "StudentProfileGet",
          params: {},
        },
        headers: {
          authorization: accessToken,
          "refresh-token": refreshToken,
        },
      };
      const response = await authenticatedCall(
        options,
        setTokens,
        clearTokens
      );
      setProfile(response?.result[0]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [accessToken, authenticatedCall]);

  useEffect(() => {
    fetchStudentProfile();
  }, [fetchStudentProfile]);

  return (
    <Layout>
      <main className="italki-app-container flex-container pt-6 min-h-[80px]">
        <div className="bg-white pt-6 -mt-6">
          <div className="max-w-grid-8 mx-auto md:px-3">
            {loading && (
              <Spin
                size="large"
                style={{ margin: "auto", marginTop: "16px" }}
              />
            )}
            {!loading && profile && (
              <form className="ant-form ant-form-horizontal">
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
                            profile.student_image || IMAGES.AvatarPlaceholder
                          }
                          alt="Avatar"
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
                          <label>
                            <input
                              className="absolute -left-[9999px]"
                              type="file"
                            />
                            <button className="inline-block px-4 rounded border border-solid border-gray5 text-gray2  text-button uppercase cursor-pointer hover:border-black hover:text-black h-[40px]">
                              <span>Upload</span>
                            </button>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="userProfile-baseInfo border-0 md:pb-4 md:pt-6 md:border-gray6 md:border-b md:border-solid">
                  <div className="h5 mb-4 pl-4 hidden md:block">
                    <span>Basic Information</span>
                  </div>
                  <div className="flex border-b-gray md:border-b-0 pl-4 pr-2 py-3 md:pt-0">
                    <div className="ant-col md:pr-0 sm:w-[90%]">
                      <div className="flex items-center h-10">
                        <div className="md:w-[30%] h6 mb-1 md:mb-0">
                          <span>Display Name</span>
                        </div>
                        <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                          <div className="md:pl-4 regular-body text-gray3">
                            {profile.student_first_name}{" "}
                            {profile.student_last_name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col md:flex flex items-center justify-end ant-col-xs-4 sm:w-[10%]">
                      <img
                        src={IMAGES.Edit}
                        alt="Edit"
                        className="edit-icon cursor-pointer"
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
                    <div className="ant-col md:flex flex items-center justify-end ant-col-xs-4 sm:w-[10%]">
                      <img
                        src={IMAGES.Edit}
                        alt="Edit"
                        className="edit-icon cursor-pointer"
                      />
                    </div>
                  </div>
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
                      />
                    </div>
                  </div>
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
                      />
                    </div>
                  </div>
                </div>
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
    const url = `${API_BASE_URL}/${API_ROUTES.services}`;
    const { result } = await (
      await axios.post(url, {
        procedure: "CountryGet",
        params: {},
      })
    ).data;
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
