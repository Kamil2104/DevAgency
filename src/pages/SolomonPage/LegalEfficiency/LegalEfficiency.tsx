import React from "react"

import Title from "./components/Title"
import Enhancement from "./components/Enhancement"

import { LegalEfficiencyEnhancement } from "./interfaces/interfaces"

import './LegalEfficiency.css'
import './LegalEfficiencyResponsiveness.css'

const LegalEfficiency: React.FC = React.memo(() => {
    const enhancements: LegalEfficiencyEnhancement[] = [
        { name: 'Save Time & Boost Efficiency', description: 'Our app takes the hassle out of reviewing lengthy contracts and legal documents. It quickly pulls out key details, catches inconsistencies, and flags potential risks in just seconds. This frees up your team to focus on the important work, not the time-consuming manual grind.' },
        { name: 'Reduce Errors & Mitigate Risks', description: 'By leveraging advanced machine learning, the app identifies potential issues and inconsistencies with precision, minimizing the risk of human error – even under tight deadlines.   ' },
        { name: 'Enhance Your Company’s Image', description: 'Adopting cutting-edge technology positions your firm as a modern, innovative leader in the legal industry, helping you stand out in a competitive market.' },
        { name: 'Lower Operational Costs', description: 'By saving time on document reviews and other repetitive tasks, you’ll reduce operational expenses while maintaining – or even improving – the quality of your services.' },
        { name: 'Fast ROI', description: 'The application delivers immediate benefits, from streamlined workflows to cost savings, ensuring a quick return on your investment.' },
        { name: 'Smarter Organization', description: 'Centralized, secure storage ensures all your documents are in one place, with advanced search features making it easy to retrieve critical information when you need it.' },
    ]
    
    return (
        <section className="legalEfficiency">
            <Title />
            <div className="enhancements">
                {enhancements.map((enhancement) => (
                    <Enhancement key={enhancement.name} name={enhancement.name} description={enhancement.description} />
                ))}
            </div>
        </section>
    )
})

export default LegalEfficiency