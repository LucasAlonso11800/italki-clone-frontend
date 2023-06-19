import React, { useState } from "react";

type Props = {
  items: {
    name: string;
    link?: string;
  }[];
  classes?: string;
  childClasses?: string;
  selected?: string;
  setSelected?: React.Dispatch<React.SetStateAction<string>>;
};

export default function List(props: Props) {
  const { items, classes, childClasses } = props;

  const [selected, setSelected] = useState(items[0].name);

  const value = props.selected !== undefined ? props.selected : selected;
  const setter = props.setSelected ? props.setSelected : setSelected;

  const handleClick = (item: string) => () => setter(item);

  return (
    <div className={`flex items-center flex-auto ${classes}`}>
      {items.map((item) => (
        <div
          key={item.name}
          className={`cursor-pointer mx-1 relative transition-all ${
            value === item.name ? "font-bold text-gray1" : "text-sm text-gray3"
          } ${childClasses}`}
          onClick={handleClick(item.name)}
        >
          <div
            className={`absolute bottom-0 left-[50%] w-[32px] h-[4px] rounded-lg ${
              value !== item.name && "hidden"
            }`}
            style={{
              backgroundColor: "#ff4438",
              transform: "translate(-50%)",
              content: "",
            }}
          ></div>
          {item.name}
        </div>
      ))}
    </div>
  );
}
