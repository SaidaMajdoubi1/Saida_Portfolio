
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import SkillCard from './components/SkillCard.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ContactForm from './components/ContactForm.jsx'
import About from './components/About.jsx'
import Linkedin_n8n_automation from "./assets/images/Linkedin_n8n_automation.jpg"
import GetJobes from "./assets/images/GetJobes.png"
import TaskFlow from "./assets/images/TaskFlow.png"
import MyApp from "./assets/images/MyApp.png"
// ✅ Define projects data
const projects = [
  {
    title: "Job Finder – Web App Automation Integration",
    description:
      "A modern job search interface that displays real-time job offers scraped automatically from LinkedIn. The system fetches, analyzes, and updates job listings dynamically through a custom automation workflow. Users can view job details or instantly apply with a single click.",
    tags: ["React.js", "TailwindCSS", "n8n", "Apify", "Webhooks", "Automation"],
    imageUrl: Linkedin_n8n_automation,
    githubUrl: "https://github.com/SaidaMajdoubi1/jobs_search_linkedin",
  },

  {
    title: "GetJobs – Professional Networking & Job Matching Platform",
    description: "A modern web platform inspired by LinkedIn, designed to connect job seekers with recruiters and companies. Users can create professional profiles, explore job opportunities, and apply directly through a simplified and intuitive interface. The platform includes account creation, job discovery, messaging, and a personalized dashboard that enhances the hiring experience for both candidates and employers.",
    tags: ["React.js", "Laravel", "MySQL", "JWT Auth"],
    imageUrl: GetJobes,
    githubUrl: "https://github.com/SaidaMajdoubi1/Frentend-Getjobs",
  },
  {
    title: "TaskFlow – Project & Sprint Management Dashboard",
    description: "A responsive project management dashboard built with Flutter Web, enabling teams to track tasks, collaborate efficiently, and monitor sprint progress visually. The platform includes task categorization, progress analytics, team member activity, notifications, and a modern dark UI that enhances productivity and workflow transparency.",
    tags: ["Flutter", "Dart", "Web App"],
    imageUrl: TaskFlow,
    githubUrl: "https://github.com/SaidaMajdoubi1/Management-Dashboard"

  },

  {
    title: "MyApp – Community Blog CRUD Platform",
    description: "A clean and responsive blogging web application that allows users to create, read, update, and delete posts easily. Featuring user authentication, interactive post cards with images and metadata, pagination, and a modern UI design built for a seamless content-sharing experience.",
    tags: [ "Laravel ", "TypeScript", "PHP", "JavaScript"],
    imageUrl: MyApp,
    githubUrl: "https://github.com/SaidaMajdoubi1/MyApp",
    
  },

  // ... rest of your projects
]



// ✅ Remove unused imports (useEffect, useRef)
const App = () => {
  return (
    <div className="min-h-screen bg-dark text-gray-200">
      <Hero />

      <About />

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard title="Front-End Development" items={["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design"]} />
          <SkillCard title="Back-End & Infrastructure" items={["PHP", "Laravel", "Node.js", "RESTful APIs", "Git", "MySQL"]} />
          <SkillCard title="AI & Automation" items={["Python", "AI-Powered Workflows", "API Integrations", "Task Automation", "Data Processing Pipelines"]} />
        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </Section>



      <Section id="contact" title="Contact Me">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-lg">
            Whether you need a scalable web application, an AI-powered automation solution, or a technical partner who ships clean, efficient code—I’d love to collaborate.
          </p>
        </div>
        <ContactForm />
      </Section>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800 mt-16">
        &copy; {new Date().getFullYear()} Saida. Built with React & Tailwind CSS.
      </footer>
    </div>
  )
}

export default App