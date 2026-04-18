import { SocialLink } from "@/types";
import github from "@/assets/socialIcon/github.png";
import linkedin from "@/assets/socialIcon/linkedin.png";
import instagram from "@/assets/socialIcon/instagram.png";
import twitter from "@/assets/socialIcon/twitter.png";
import youtube from "@/assets/socialIcon/youtube.png";
import leetcode from "@/assets/socialIcon/leetcode1.png";
import facebook from "@/assets/socialIcon/facebook.png";

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: github,
    title: "GitHub",
    subtitle: "indkshitij",
    href: "https://github.com/indkshitij",
  },
  {
    icon: linkedin,
    title: "LinkedIn",
    subtitle: "kshitijsingh07",
    href: "https://linkedin.com/in/kshitijsingh07",
  },
  {
    icon: leetcode,
    title: "LeetCode",
    subtitle: "1kshitij",
    href: "https://leetcode.com/u/1kshitij",
  },
  {
    icon: instagram,
    title: "Instagram",
    subtitle: "@kkkshitij", // update later
    href: "https://instagram.com/yourusername",
  },
  {
    icon: twitter,
    title: "X (Twitter)",
    subtitle: "@ind_kshitij", // update later
    href: "https://x.com/ind_kshitij",
  },
  {
    icon: facebook,
    title: "Facebook",
    subtitle: "Kshitij Singh", // optional
    href: "https://www.facebook.com/profile.php?id=100092386129471",
  },

  // {
  //   icon: youtube,
  //   title: "YouTube",
  //   subtitle: "@yourchannel", // update later
  //   href: "https://www.youtube.com/@yourchannel",
  // },
];
export default SOCIAL_LINKS;