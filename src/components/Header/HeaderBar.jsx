import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './HeaderBar.css'

function HeaderBar({ projectName, onProjectNameChange }) {
    const [isEditing, setIsEditing] = useState(false)

    const handleNameClick = () => {
        setIsEditing(true)
    }

    const handleNameBlur = () => {
        setIsEditing(false)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false)
        }
    }

    return (
        <header className="header-bar">
            <div className="header-left">
                {/* Logo Menu */}
                <button className="logo-menu-btn">
                    <div className="logo-small">M</div>
                    <ChevronDown size={14} />
                </button>

                {/* Project Info */}
                <div className="project-info">
                    {isEditing ? (
                        <input
                            type="text"
                            className="project-name-input"
                            value={projectName}
                            onChange={(e) => onProjectNameChange(e.target.value)}
                            onBlur={handleNameBlur}
                            onKeyDown={handleKeyDown}
                            autoFocus
                        />
                    ) : (
                        <span className="project-name" onClick={handleNameClick}>
                            {projectName}
                        </span>
                    )}
                    <button className="breadcrumb-btn">
                        <span>Personal Workspace</span>
                    </button>
                </div>
            </div>

            <div className="header-right">
                <button className="share-btn">Share</button>
            </div>
        </header>
    )
}

export default HeaderBar
