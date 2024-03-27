import img from "/assets/images/Image-1.png";
import img2 from "/assets/images/Image-2.png";
import img3 from "/assets/images/Image-3.png";
import img4 from "/assets/images/Image-4.png";
import img5 from "/assets/images/Image-5.png";
import img6 from "/assets/images/Image-6.png";

export const earPhoneImg = img;
export const earPhoneImg2 = img2;
export const earPhoneImg3 = img3;
export const earPhoneImg4 = img4;
export const earPhoneImg5 = img5;
export const earPhoneImg6 = img6;

import vk from "/assets/icons/VK.svg";
import telegram from "/assets/icons/Telegram.svg";
import Whatsapp from "/assets/icons/Whatsapp.svg";

export const socials = [
  {
    id: 1,
    icon: vk,
    link: "https://vk.com",
  },
  {
    id: 2,
    icon: telegram,
    link: "https://telegram.com",
  },
  {
    id: 3,
    icon: Whatsapp,
    link: "https://whatsapp.com",
  },
];

export type TProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  amount: number;
};

export const products: TProduct[] = [
  {
    id: 1,
    name: "Apple BYZ S852I",
    image: earPhoneImg,
    price: 2927,
    originalPrice: 3527,
    rating: 4.7,
    amount: 1,
  },
  {
    id: 2,
    name: "Apple AirPods",
    image: earPhoneImg2,
    price: 2327,
    rating: 4.5,
    amount: 1,
  },
  {
    id: 3,
    name: "Apple AirPods",
    image: earPhoneImg3,
    price: 2327,
    rating: 4.5,
    amount: 1,
  },
  {
    id: 4,
    name: "Apple BYZ S852I",
    image: earPhoneImg,
    price: 2927,
    rating: 4.7,
    amount: 1,
  },
  {
    id: 5,
    name: "Apple AirPods",
    image: earPhoneImg2,
    price: 2327,
    rating: 4.5,
    amount: 1,
  },
  {
    id: 6,
    name: "Apple AirPods",
    image: earPhoneImg3,
    price: 2327,
    rating: 4.5,
    amount: 1,
  },
  {
    id: 7,
    name: "Apple AirPods",
    image: earPhoneImg4,
    price: 9527,
    rating: 4.7,
    amount: 1,
  },
  {
    id: 8,
    name: "GERLAX GH-04",
    image: earPhoneImg5,
    price: 6527,
    rating: 4.7,
    amount: 1,
  },
  {
    id: 9,
    name: "BOROFONE BO4",
    image: earPhoneImg6,
    price: 7527,
    rating: 4.7,
    amount: 1,
  },
];
