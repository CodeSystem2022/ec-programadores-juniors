import React, { useState } from 'react'
import './Question.scss'
export default function Question({ question, answer }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <>
            <h4 className={`question ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>{question}</h4>
            {isExpanded && (
                <p className='answer'>
                    {answer}
                </p>
            )}
        </>
    )
}
