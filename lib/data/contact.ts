import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import type { ContactInfo, SocialLink } from "@/lib/types";

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "saaivigneshpremanand@gmail.com",
    href: "mailto:saaivigneshpremanand@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bloomington, IN",
    href: null,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/saaivignesh20",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/saai-vignesh-premanand/",
  },
];
