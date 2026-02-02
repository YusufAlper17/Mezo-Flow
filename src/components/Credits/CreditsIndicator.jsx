import { Sparkles } from 'lucide-react'
import './CreditsIndicator.css'

function CreditsIndicator() {
    const credits = 1000 // 1K

    const formatCredits = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K'
        }
        return num.toString()
    }

    return (
        <div className="credits-indicator">
            <button className="credits-btn">
                <Sparkles size={12} className="credits-icon" />
                <span className="credits-value">{formatCredits(credits)}</span>
            </button>
        </div>
    )
}

export default CreditsIndicator
