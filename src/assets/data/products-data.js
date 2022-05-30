import mcafee from "../imgs/products/McAfee.png";
import mcafeeLogo from "../imgs/logos/McAfee-Logo.png";
import totalav from "../imgs/products/totalav.png";
import totalavLogo from "../imgs/logos/totalav-logo.png";
import norton from "../imgs/products/norton.jpg";
import nortonLogo from "../imgs/logos/norton-logo.png";

export const productsData = [
  {
    id: "123",
    image: { mcafee },
    logo: { mcafeeLogo },
    extraInfo: [
      "Limited Time Only: Get 72% Off!",
      "Secure VPN and password manager",
      "Identity theft & safe browsing",
      "100% virus removal guarantee",
    ],
    score: "9.8",
    compatability: ["ios", "apple", "android", "windows"],
    company: "McAfee - Award Winning Antivirus Protection",
    rating: 5,
    isEditorsChoice: true,
    isLiked: true,
    reviews: 10826,
  },
  {
    id: "456",
    image: { totalav },
    logo: { totalavLogo },
    extraInfo: [
      "AV test top products awaard 2022",
      "30-Day-Money-Back guarantee",
      "Procides complete online protection",
    ],
    score: "9.4",
    compatability: ["ios", "apple", "android", "windows"],
    company: "TotalAv",
    rating: 4.5,
    isEditorsChoice: false,
    isLiked: false,
    reviews: 4243,
  },
  {
    id: "789",
    image: { norton },
    logo: { nortonLogo },
    extraInfo: [
      "60-Day-Money-Back guarantee",
      "Dark web monitoring",
      "Secure VPN & Real-Time Cyber Protection",
    ],
    score: "9.0",
    compatability: ["ios", "windows"],
    company: "Norton",
    rating: 4.5,
    isEditorsChoice: false,
    isLiked: false,
    reviews: 4541,
  },
];
