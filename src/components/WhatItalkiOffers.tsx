import React from "react";
import WhatItalkiOffersItem from "./WhatItalkiOffersItem";
import { ROUTES } from "@/const";

export default function WhatItalkiOffers() {
  return (
    <div className="flex flex-col items-center justify-center bg-bg1 py-5 mx-auto md:py-18 bg-white">
      <h2 className="w-full pb-6 text-lg leading-7 md:leading-10 md:text-2xl font-bold text-gray1 md:text-center md:pb-18 pl-4 md:ml-0">
        See what italki offers
      </h2>
      <div className="w-full px-4 flex md:justify-center overflow-hidden AgardHPBelow_HideScrollBar__AMORC">
        <div className="flex m-auto w-auto flex-nowrap md:max-w-grid-12 -mx-6">
          <WhatItalkiOffersItem
            title="1-on-1 lessons"
            text="Find teachers from all over the world sharing their languages,
          dialects, and cultures."
            linkText="Find my teacher"
            href={ROUTES.teachers.english}
            image="https://scdn.italki.com/ng/static/image/asgardhp/offers_01.png"
          />
          <WhatItalkiOffersItem
            title="Group Class"
            text="Fun and engaging online group classes designed and led by expert teachers."
            linkText="View all classes"
            href={ROUTES.group_classes.english}
            image="https://scdn.italki.com/ng/static/image/asgardhp/offers_02.png"
          />
          <WhatItalkiOffersItem
            title="Practice for free"
            text="Meet and share experiences with millions of language learners from more than 190 countries."
            linkText="Explore the community"
            href={ROUTES.resources.community}
            image="https://scdn.italki.com/ng/static/image/asgardhp/offers_03.png"
          />
        </div>
      </div>
    </div>
  );
}
