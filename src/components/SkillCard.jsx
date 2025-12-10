import React from 'react'

const SkillCard = ({ title, items }) => {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-neon transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-lg font-semibold mb-4 text-neon">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillCard