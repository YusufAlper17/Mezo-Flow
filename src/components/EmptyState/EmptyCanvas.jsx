import { MousePointerClick, MessageCircle, Merge, Image, Blocks, MoreHorizontal } from 'lucide-react'
import './EmptyCanvas.css'

function EmptyCanvas({ onAddNode }) {
    const quickActions = [
        { icon: MessageCircle, label: 'Describe an Image', action: () => onAddNode('textNode') },
        { icon: Merge, label: 'Combine ideas', action: () => onAddNode('textNode') },
        { icon: Image, label: 'Make a video from image', action: () => onAddNode('imageNode') },
        { icon: Blocks, label: 'Explore Flows', action: () => { } },
        { icon: MoreHorizontal, label: '', action: () => { } },
    ]

    return (
        <div className="empty-canvas">
            <div className="empty-content">
                <p className="empty-hint">
                    <span className="double-click-badge">
                        <MousePointerClick size={14} />
                        Double-click
                    </span>
                    anywhere to create a new Block, or start with...
                </p>

                <div className="quick-actions">
                    {quickActions.map((action, index) => (
                        <button
                            key={index}
                            className={`quick-action-btn ${!action.label ? 'icon-only' : ''}`}
                            onClick={action.action}
                        >
                            <action.icon size={18} />
                            {action.label && <span>{action.label}</span>}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmptyCanvas
