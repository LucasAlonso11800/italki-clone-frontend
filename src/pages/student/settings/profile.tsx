import { LanguageLevel } from "@/components";
import { IMAGES } from "@/const";
import { Layout } from "@/layout";
import React from "react";

export default function StudentProfile() {
  return (
    <Layout>
      <main className="italki-app-container flex-container pt-6 min-h-[80px]">
        <div className="bg-white pt-6 -mt-6">
          <div className="max-w-grid-8 mx-auto md:px-3">
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
                      <img src={IMAGES.AvatarPlaceholder} alt="Avatar" />
                    </span>
                  </div>
                  <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                    <div className="flex flex-col justify-between h-full py-4">
                      <div className="mb-2">
                        <div className="small-secondary text-gray3 mb-2 hidden md:block">
                          <span>
                            This will be displayed to other users when they view
                            your profile or posts. Max size: 2MB
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
                          Lucas Alonso
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
                            <span>Sin rellenar</span>
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
                          <span>Sin especificar</span>
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
                          Other, Argentina
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

              <div className="md:pb-4 md:pt-6 border-b-gray">
                <div className="flex justify-between pl-4 pr-2 pt-3 md:py-3 md:pt-0">
                  <div className="ant-col ant-col-xs-20 ant-col-sm-22 ant-col-md-22">
                    <div className="h6 md:text-xl mb-1 md:mb-0">
                      <span>Languages</span>
                    </div>
                  </div>
                  <div className="ant-col flex items-center justify-end ant-col-xs-4 ant-col-sm-2 ant-col-md-2">
                    <img
                      src={IMAGES.Edit}
                      alt="Edit"
                      className="edit-icon cursor-pointer"
                    />
                  </div>
                </div>
                <div className="ant-row pl-4 pr-2 pb-3 md:pt-3 md:flex">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div className="ant-col h6 mb-1 md:mb-0 hidden md:block md:w-[30%]">
                        <span>Hablados</span>
                      </div>
                      <div className="ant-col md:pl-4 ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                        <div className="flex flex-wrap">
                          <div className="flex items-center regular-body text-gray3 mr-3">
                            <span>Español</span>
                            <LanguageLevel code="C1" name="Advanced" />
                          </div>
                          <div className="flex items-center  regular-body text-gray3 mr-3">
                            <span>Inglés</span>
                            <LanguageLevel code="C1" name="Advanced" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ant-row pl-4 pr-2 pb-3 md:pt-3 md:flex hidden">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div className="ant-col h6 mb-1 md:mb-0 hidden md:block md:w-[30%]">
                        <span>Aprendiendo</span>
                      </div>
                      <div className="ant-col md:pl-4 ant-col-xs-24 ant-col-sm-24 ant-col-md-17">
                        <div className="flex flex-wrap">
                          <div className="flex items-center regular-body text-gray3 mr-3">
                            <span>German</span>
                            <LanguageLevel code="B1" name="Intermediate" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
