import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

const FooterData = [
  {
    name: "facebook",
    socialIcon: <AiFillFacebook />,
    link: "https://www.google.com/?client=safari",
    id: 1,
  },
  {
    name: "linkedin",
    socialIcon: <AiFillLinkedin />,
    link: "https://www.google.com/?client=safari",
    id: 2,
  },
  {
    name: "dev",
    socialIcon: <DiCss3 />,
    link: "https://www.google.com/?client=safari",
    id: 3,
  },
];

export default FooterData;
