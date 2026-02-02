import { ChevronDown } from 'lucide-react'
import './TopBar.css'

function TopBar() {
    return (
        <aside className="workstation-top-aside">
            {/* Project Menu Button */}
            <div className="top-bar-section">
                <button className="top-bar-btn logo-btn">
                    <div className="logo-wrapper">
                        {/* Placeholder for Flora Logo */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <ChevronDown size={14} className="chevron" />
                    </div>
                </button>
            </div>

            {/* Project Info */}
            <div className="top-bar-info">
                <div className="project-name-wrapper">
                    <span className="project-name">Untitled</span>
                </div>
                <div className="workspace-breadcrumb">
                    <span>Yusuf Alper Ilhan's workspace</span>
                </div>
            </div>
        </aside>
    )
}

export default TopBar
