"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { ProjectModal } from "@/components/ui/project-modal";

const projects = [
  {
    title: "Mana.AI: AI Meeting Assistant",
    description:
      "AI-powered Chrome extension for Google Meet with real-time summarization, emotion detection, and transcription.",
    fullDescription: [
      "Mana.AI is a sophisticated AI meeting assistant engineered for Google Meet that provides real-time meeting analysis, emotion detection, and transcription capabilities. Built as a low-latency Chrome extension with integrated back-end services, it transforms how teams capture and analyze meeting insights.",
      "The system combines multiple AI technologies to deliver comprehensive meeting analysis: AssemblyAI handles fast and accurate speech-to-text conversion with speaker labeling, Hume provides in-depth emotion and sentiment analysis of audio segments, and Groq's language models generate structured mind maps and professional meeting minutes from conversation data.",
      "Key features include automated transcription with speaker identification, real-time emotion analysis to gauge participant engagement, mind map creation for visual overview of discussion topics, automatic meeting minutes generation, task extraction with person assignment, and direct Trello integration for workflow management. The system also supports multiple audio formats through dynamic conversion capabilities.",
      "The architecture includes a React-based frontend with Tailwind CSS styling, a Python Flask backend with comprehensive API endpoints, Chrome extension for Google Meet integration, and cloud storage via Supabase. The solution seamlessly integrates into existing workflows, making it perfect for teams looking to enhance their meeting productivity and ensure no important details or action items are missed.",
    ],
    image: "/projects/mana-ai-screenshot.png",
    technologies: [
      "Chrome Extension",
      "AI/ML",
      "NestJS",
      "WebSockets",
      "Real-time",
    ],
    github: "https://github.com/saaivignesh20/mana.ai",
    demo: null,
    featured: true,
    category: "Full-Stack AI Application",
  },
  {
    title: "Tinker: Smart Document Summarizer",
    description:
      "🏆 2nd Runner Up Award Winner - ChatGPT-4o powered conversational summarizer for PDFs, Excel, and Word documents.",
    fullDescription: [
      "TinkerPad is a powerful ChatGPT-4o powered conversational document summarizer designed to process PDFs, Excel files, and Word documents. Built as an end-to-end system during the Luddy Hackathon 2024, this intelligent tool transforms the way users interact with and understand document content.",
      "The system leverages Groq's lightning-fast inference API and Google's Gemma 2 language model to provide rapid document analysis. Users can upload various document formats and engage in natural language conversations about the content, receiving concise summaries and intelligent follow-up questions that help explore the document more deeply.",
      "Key features include multi-format document support (PDF, Excel, Word, images), OCR capabilities for image-based text extraction, conversational memory for contextual follow-up questions, and a user-friendly Streamlit interface. Additionally, the project includes a Chrome extension called \"OverTinker\" that extends document summarization capabilities directly to web browsing.",
      "Perfect for students analyzing research papers, professionals reviewing lengthy documents, researchers processing multiple texts, and anyone looking to quickly grasp document contents. The award-winning solution demonstrates advanced integration of multiple AI technologies to solve real-world document processing challenges.",
    ],
    image: "/projects/tinker-screenshot.jpg",
    technologies: ["Python", "ChatGPT-4o", "Groq API", "Streamlit", "NLP"],
    github: "https://github.com/saaivignesh20/tinker",
    demo: null,
    featured: true,
    category: "AI-Powered Tool",
  },
  {
    title: "Ramix: Cloud ESL Tags Platform",
    description:
      "Advanced cloud solution for managing Electronic Shelf Tags with an intuitive interface for retail operations.",
    fullDescription: [
      "Ramix is an innovative platform designed to streamline the management of Electronic Shelf Labels (ESLs) and enhance retail operations. It provides users with intuitive tools to efficiently handle the linking, organization, and administration of ESLs, ensuring flexibility and ease of use. The platform ensures secure access through advanced mechanisms and offers insightful analytics tailored to user needs.",
      "Built with a robust tech stack, Ramix uses React, Material UI, and Tailwind CSS for the frontend, while the backend leverages NestJS and Prisma ORM. The database is powered by PostgreSQL, and the solution is deployed on AWS for scalability and reliability. Authentication and Role-Based Access Control (RBAC) are implemented using Auth0, ensuring secure and seamless access management. Ramix is designed with responsive principles to ensure a seamless experience across devices and browsers. As a Progressive Web Application (PWA), it combines the convenience of installable apps with the reach of the web, enhancing user accessibility.",
      "Ramix is supported on all major platforms and major web browsers. It is also a progressive web application (PWA) that can be installed seamlessly. The highlighted feature is that it encompasses a custom-developed ZXing-based QR/barcode scanner that helps manage devices, products and gateways easily when using handheld devices such as a tablet or a mobile phone.",
      "The platform also features a custom-tailored open-source QR code scanner, ensuring seamless functionality across all major platforms and browsers to simplify the management of ESLs, devices, and gateways.",
    ],
    image: "/projects/thumb-ramix.jpg",
    technologies: ["Angular", "Node.js", "MongoDB", "AWS", "IoT"],
    github: null,
    demo: null,
    featured: true,
    category: "Full-Stack Development",
  },
  {
    title: "ConSource: E2E Procurement Software",
    description:
      "End-to-end digital procurement platform for managing demands, RFPs, contracts, and performance analytics.",
    fullDescription: [
      "ConSource is a cloud-based digital procurement platform designed to optimize consulting project management and investment strategies. The platform provides an end-to-end solution for managing the entire project lifecycle, offering access to a network of over 4,000 consulting firms and advanced supplier matching capabilities.",
      "Users can follow step-by-step guided sourcing, complete with pre-filled templates, collaborate on contract negotiations, and access market intelligence such as pricing benchmarks and performance ratings. With multi-language support (English, French, and Brazilian Portuguese) and robust security features, including AWS hosting, SSO with SAML, and MFA, the platform ensures a seamless and secure experience. Additional tools include an extensive template library for documents, on-demand expert consulting support, and specialized modules for supplier management and aligning financial strategies.",
      "The tech stack includes Angular 12 and Material UI for the front-end, providing a responsive and intuitive user interface. On the back-end, ExpressJS powers the API, enabling scalable and efficient communication between components. MongoDB Atlas Managed DB is used for flexible data storage, while Auth0 provides secure user authentication. The platform is deployed on AWS, ensuring scalability, security, and reliable performance.",
      "This is a workplace project where I led a team of five developers in the co-development of the platform. Together, we successfully built and deployed a scalable, secure, and user-friendly solution to meet the needs of clients in the procurement space.",
    ],
    image: "/projects/thumb-consource.jpg",
    technologies: ["React", "NestJS", "PostgreSQL", "AWS", "Analytics"],
    github: null,
    demo: null,
    featured: false,
    category: "Full-Stack Development",
  },
  {
    title: "Improveo: Consulting Search Engine",
    description:
      "Professional network platform for discovering consulting firms, blending digital and human interactions.",
    fullDescription: [
      "Improveo is a professional community platform designed to bridge the gap between businesses and consulting expertise through a comprehensive digital ecosystem. The platform serves as a centralized hub for accessing thought leadership content, including publications, case studies, and industry insights from consultants and academics across various sectors such as supply chain, innovation, healthcare, and financial services.",
      "Built with a modern tech stack, it utilizes Angular for its dynamic frontend, NestJS for backend services, and MongoDB for flexible data storage. The platform operates on AWS EC2 infrastructure to ensure scalability and reliability, integrating essential tools such as Auth0 for secure authentication, Mailgun for communication services, and Socket.io for real-time interactions, providing a seamless and secure user experience.",
      "The tech stack includes Angular 12 and Material UI for the front-end, providing a responsive and intuitive user interface. On the back-end, ExpressJS powers the API, enabling scalable and efficient communication between components. MongoDB Atlas Managed DB is used for flexible data storage, while Auth0 provides secure user authentication. The platform is deployed on AWS, ensuring scalability, security, and reliable performance.",
      "This is a workplace project where I led a team of three developers to build the platform and also co-developed key features, including real-time chat. I managed sprints, ensured proper project documentation, adherence to guidelines, worked closely with the client team to gather requirements and facilitated cross-functional collaboration between UI/UX, development, and testing teams to ensure alignment throughout the development process.",
    ],
    image: "/projects/thumb-improveo.jpg",
    technologies: ["Angular", "Node.js", "MongoDB", "Search", "Network"],
    github: null,
    demo: null,
    featured: false,
    category: "Full-Stack Development",
  },
  {
    title: "RSquare: Scalable IoT Tracker Platform",
    description:
      "Cloud-based IoT solution for device connectivity and alerts management with MQTT protocol support.",
    fullDescription: [
      "RSquare is a cloud-based IoT solution architected to address modern device connectivity and alerts management. The system design focuses on scalability, flexibility, and ease of use, allowing seamless integration of remote sensor nodes. The architecture ensures that users can effortlessly monitor and configure their devices, with real-time SMS and push notifications providing critical alerts and event updates to keep users informed.",
      "The solution utilizes a robust tech stack, with AWS IoT Core at the heart of device communication. AWS Lambda and Serverless (Node.js) are used for scalable, event-driven backend processing, while PostgreSQL ensures reliable and efficient data storage. Twilio and Mailgun handle SMS and email notifications, and Auth0 provides secure user authentication. The system leverages AWS CloudWatch for monitoring and logging, ensuring full visibility into operations.",
      "The proposed architecture incorporates a hybrid protocol strategy, combining CoAP, MQTT, and REST to optimize communication between edge devices. This approach maximizes energy efficiency, ensuring long-lasting battery life while communicating over LTE networks.",
      "The entire architecture was validated through several small proof of concept projects to confirm its reliability and performance under real-world conditions. Following this validation, the architecture was thoroughly documented to ensure clear implementation and provide a reference for future development and scalability.",
    ],
    image: "/projects/thumb-rsquare.jpg",
    technologies: ["Node.js", "MongoDB", "AWS IoT", "MQTT", "Microservices"],
    github: null,
    demo: null,
    featured: false,
    category: "Architecture",
  },
  {
    title: "SV Microwave Oven Care: Business Site",
    description:
      "Responsive single-page website with accessible design for microwave oven repair services.",
    fullDescription: [
      "SV Microwave Oven Care is a service provider specializing in maintenance and care for microwave ovens, offering solutions that ensure the longevity and efficient performance of their clients' appliances. Their previous website needed improvements in performance, accessibility, and user experience.",
      "As a freelance developer, I created a new website that builds upon the existing platform by improving accessibility and incorporating responsive design. The solution prioritizes performance, utilizing web fundamentals without relying on heavy frameworks or libraries. The architecture follows a clean separation of concerns, with semantic HTML5 for content structure, modular CSS for responsive styling, and vanilla JavaScript for essential interactive elements. This approach reduced the payload size, eliminated unnecessary dependencies, and ensured fast load times.",
      "I implemented a responsive design using modern CSS features like Flexbox and CSS Grid, along with media queries for fluid layouts across various devices. The deployment stack uses Apache HTTP Server for optimal performance, with caching headers and compression enabled. Technical improvements include better SEO through enhanced semantic structure, reduced Time to First Contentful Paint (FCP), and improved Web Content Accessibility Guidelines (WCAG) compliance via ARIA attributes and keyboard navigation support. These changes led to faster load times and better Core Web Vitals metrics.",
    ],
    image: "/projects/thumb-landingpage.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    github: null,
    demo: null,
    featured: false,
    category: "Website Design",
  },
  {
    title: "SVMC CusPro: Custom CRM Software",
    description:
      "Custom CRM with PWA capabilities for microwave oven repair services management.",
    fullDescription: [
      "SVMC CusPro is a custom-built Customer Relationship Management (CRM) system developed as a freelance project for SV Microwave Oven Care, a company specializing in microwave oven repair services. The platform was designed to streamline repair workflows and improve customer relationship management, providing an efficient and user-friendly solution for handling daily operations.",
      "The CRM includes key features such as Customer Management for organizing service histories and contact details, Dynamic Invoice Generation to create professional invoices automatically, and Workflow Management to oversee the entire repair process from start to finish. The system is built with Progressive Web App (PWA) capabilities, enabling users to access it like a native app across devices, and its Responsive Layout ensures a seamless experience on desktops, tablets, and mobile phones.",
      "Developed with a modern tech stack comprising HTML, CSS, JavaScript, PHP, MySQL, and Apache, the application also integrates DOMPDF for dynamic PDF generation. By digitalizing operations, improving accessibility, and optimizing for different devices, the CRM has enhanced efficiency, provided instant access to critical data, and enabled SV Microwave Oven Care to deliver better service while running its business more effectively.",
    ],
    image: "/projects/thumb-cuspro.jpg",
    technologies: ["Angular", "Node.js", "MongoDB", "PWA", "Firebase"],
    github: null,
    demo: null,
    featured: false,
    category: "Full-Stack Development",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary font-medium">
            SELECTED_WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects demonstrating full-stack development
            capabilities across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => handleProjectClick(project)}>
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.github && (
                    <div className="absolute bottom-4 right-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary transition-all shadow-sm"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-mono font-semibold rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}
                  {project.category && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary border border-border text-secondary-foreground text-xs font-mono font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary border border-border rounded-full text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                {project.demo && (
                  <CardFooter>
                    <Button
                      size="sm"
                      className="w-full"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
