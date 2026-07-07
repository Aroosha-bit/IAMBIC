import img1 from "../../public/images/img1.svg";
import img2 from "../../public/images/img2.svg";
import img3 from "../../public/images/img3.svg";
import img4 from "../../public/images/img4.svg";
import img5 from "../../public/images/img5.svg";
import img6 from "../../public/images/img6.svg";
import img7 from "../../public/images/img7.svg";

import testImg from "../../public/images/testImg.svg";
export interface workData {
  label: string;
  img: any;
  title: string;
  desc: string;
}

export const workData: workData[] = [
  {
    label: "01",
    img: img1,
    title: "Scan",
    desc: "After placing your order, you’ll use our smartphone-based foot scan by taking 3 pictures of each foot and answering questions. IAMBIC Concierge experts then work with you to craft your precision-fit shoes. ",
  },
  {
    label: "02",
    img: img2,
    title: "Wear",
    desc: "In 4-6 weeks, receive your shoes guaranteed for perfect fit. If you don’t love the feel, our Concierge team offers unlimited refits until they are your best-feeling shoe.",
  },
  {
    label: "03",
    img: img3,
    title: "Evolve",
    desc: "Each pair is precision-fitted from your scan and grows more personalized over time. Upload photos of your wear patterns with our Sole Print™ system to perfect each future pair. Welcome to true personalization.",
  },
];

export interface testimonialData {
  img: any;
  desc: string;
  name: string;
}

export const testimonialData: testimonialData[] = [
  {
    img: testImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esse cillum dolore eu fugiat nulla culpa qui officia deserunt.",
    name: "John Doe",
  },
  {
    img: testImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esse cillum dolore eu fugiat nulla culpa qui officia deserunt.",
    name: "John Doe",
  },
  {
    img: testImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esse cillum dolore eu fugiat nulla culpa qui officia deserunt.",
    name: "John Doe",
  },
  {
    img: testImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esse cillum dolore eu fugiat nulla culpa qui officia deserunt.",
    name: "John Doe",
  },
  {
    img: testImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esse cillum dolore eu fugiat nulla culpa qui officia deserunt.",
    name: "John Doe",
  },
  {
    img: testImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esse cillum dolore eu fugiat nulla culpa qui officia deserunt.",
    name: "John Doe",
  },
];

export interface articleData {
  desc: string[];
}
export const articleData: articleData[] = [
  {
    desc: [
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
    ],
  },
   {
    desc: [
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
    ],
  },
   {
    desc: [
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
      "IAMBIC   IS   BUILT   TO   BE   BETTER",
    ],
  },
];


export interface followData {
  img: any;
}
export const followData: followData[] = [
  {
    img : img4
  },
   {
    img : img5
  },
   {
    img : img6
  },
   {
    img : img7
  },
  {
    img : img4
  },
   {
    img : img5
  },
   {
    img : img6
  },
   {
    img : img7
  },
]