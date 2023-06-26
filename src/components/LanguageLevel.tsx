import { LanguageLevelCodeType } from "@/types";
import { Tooltip } from "antd";
import React, { useMemo, useState } from "react";

type Props = {
  code: LanguageLevelCodeType;
  name: string;
};

export default function LanguageLevel({ code, name }: Props) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleHover = () => setShowTooltip(!showTooltip);
  const languageLevelValue = useMemo(() => {
    switch (code) {
      case "A1":
        return (
          <div className="flex flex-row items-center h-[8px]">
            <span className="rounded-1 bg-success h-[8px] w-[2px] ml-0"></span>
            <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
            <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
            <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
            <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
            <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
          </div>
        );
      case "A2":
        return (
          <div className="self-center ml-1 h-[8px]">
            <div className="flex flex-row items-center h-[8px]">
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-0"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
            </div>
          </div>
        );
      case "B1":
        return (
          <div className="self-center ml-1 h-[8px]">
            <div className="flex flex-row items-center h-[8px]">
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-0"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
            </div>
          </div>
        );
      case "B2":
        return (
          <div className="self-center ml-1 h-[8px]">
            <div className="flex flex-row items-center h-[8px]">
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-0"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
            </div>
          </div>
        );
      case "C1":
        return (
          <div className="self-center ml-1 h-[8px]">
            <div className="flex flex-row items-center h-[8px]">
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-0"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
            </div>
          </div>
        );
      case "C2":
        return (
          <div className="self-center ml-1 h-[8px]">
            <div className="flex flex-row items-center h-[8px]">
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-0"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
              <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
            </div>
          </div>
        );
      default:
        return <div></div>;
    }
  }, [code]);

  return (
    <div
      className="self-center ml-1 h-[8px] relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {languageLevelValue}

      <Tooltip
        placement="topLeft"
        open={showTooltip}
        title={`${code}: ${name}`}
      />
    </div>
  );
}
