import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};
export default function CustomHead({ title = "italki - Best language learning app with certificated tutors" }: Props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>
        {title}
      </title>
      <meta
        name="description"
        content="Discover a world of languages with italki. Learn over 150 languages including English, Spanish, French, Chinese, etc. with professional online tutors."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta
        property="og:title"
        content="italki - Best language learning app with certificated tutors"
      />
      <meta property="og:site_name" content="italki" />
      <meta
        property="og:description"
        content="Discover a world of languages with italki. Learn over 150 languages including English, Spanish, French, Chinese, etc. with professional online tutors."
      />
      <meta
        property="og:image"
        content="https://scdn.italki.com/ng/static/image/share.png"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.italki.com/" />
      <meta property="twitter:site" content="italki" />
      <meta
        property="twitter:title"
        content="italki - Best language learning app with certificated tutors"
      />
      <meta
        property="twitter:description"
        content="Discover a world of languages with italki. Learn over 150 languages including English, Spanish, French, Chinese, etc. with professional online tutors."
      />
      <meta property="twitter:url" content="https://www.italki.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content="https://scdn.italki.com/ng/static/image/share.png"
      />
      <meta property="fb:app_id" content="125933737436344" />
      <link
        rel="preload"
        href="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w_1.5x.webp"
        as="image"
        media="(min-width: 768px)"
      />
      <meta name="next-head-count" content="18" />
      <link rel="dns-prefetch" href="https://scdn.italki.com" />
      <link rel="dns-prefetch" href="https://filemanager-static01.italki.com" />
      <link rel="alternate" href="https://www.italki.com" hrefLang="en" />
      <link
        rel="alternate"
        href="https://www.italki.com/zh-cn"
        hrefLang="zh-cn"
      />
      <link
        rel="alternate"
        href="https://www.italki.com/zh-tw"
        hrefLang="zh-tw"
      />
      <link rel="alternate" href="https://www.italki.com/es" hrefLang="es" />
      <link rel="alternate" href="https://www.italki.com/fr" hrefLang="fr" />
      <link rel="alternate" href="https://www.italki.com/pt" hrefLang="pt" />
      <link rel="alternate" href="https://www.italki.com/de" hrefLang="de" />
      <link rel="alternate" href="https://www.italki.com/ja" hrefLang="ja" />
      <link rel="alternate" href="https://www.italki.com/ko" hrefLang="ko" />
      <link rel="alternate" href="https://www.italki.com/it" hrefLang="it" />
      <link rel="alternate" href="https://www.italki.com/ru" hrefLang="ru" />
      <link rel="alternate" href="https://www.italki.com/ar" hrefLang="ar" />
      <link rel="alternate" href="https://www.italki.com/nl" hrefLang="nl" />
      <link rel="alternate" href="https://www.italki.com/pl" hrefLang="pl" />
      <link rel="alternate" href="https://www.italki.com/th" hrefLang="th" />
      <link rel="alternate" href="https://www.italki.com/tr" hrefLang="tr" />
      <link rel="alternate" href="https://www.italki.com/vi" hrefLang="vi" />
      <link
        rel="alternate"
        href="https://www.italki.com"
        hrefLang="x-default"
      />
      <link rel="canonical" href="https://www.italki.com" />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </Head>
  );
}
