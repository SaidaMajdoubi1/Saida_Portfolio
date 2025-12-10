import React from 'react'

const About = () => {
  const aboutMeContent = {
    title: "About Me",
    description: "I'm a passionate full-stack developer with 4 years of experience building scalable web applications and intelligent automation systems. My journey in web development began with a curiosity about how digital solutions can solve real-world problems, and it has evolved into a career focused on creating efficient, user-centered experiences.",
    details: [
      "I specialize in creating robust back-end systems with Laravel and Node.js, while building responsive, modern front-ends with React and Tailwind CSS.",
      "My expertise extends to AI automation, where I develop custom solutions to streamline business processes and reduce manual workloads.",
      "I'm currently pursuing further education in Artificial Intelligence, focusing on innovative technological solutions that combine algorithmic rigor with user-centered design.",
      "When I'm not coding, you can find me exploring new AI tools, contributing to open-source projects, or mentoring other developers in the community."
    ],
    funFact: "I speak French and have a professional background in Morocco, bringing a global perspective to my work."
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-neon">{aboutMeContent.title}</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {aboutMeContent.description}
          </p>
          
          <div className="space-y-4 mb-8">
            {aboutMeContent.details.map((detail, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-neon rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">{detail}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <p className="text-neon font-medium">Fun Fact:</p>
            <p className="text-gray-300 mt-2">{aboutMeContent.funFact}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About