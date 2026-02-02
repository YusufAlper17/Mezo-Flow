import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import './QueuePanel.css'

function QueuePanel() {
    const [expanded, setExpanded] = useState(false)
    const [tasks] = useState([])

    const activeCount = tasks.filter(t => t.status === 'running').length

    return (
        <div className={`queue-panel ${expanded ? 'expanded' : ''}`}>
            <div
                className="queue-header"
                onClick={() => setExpanded(!expanded)}
            >
                <div
                    className="queue-progress"
                    style={{ width: '0%' }}
                />
                <div className="queue-info">
                    <span className="queue-label">Queue</span>
                    <span className="queue-count">{activeCount} active</span>
                </div>
                <ChevronRight
                    size={24}
                    className={`queue-chevron ${expanded ? 'rotated' : ''}`}
                />
            </div>

            {expanded && (
                <div className="queue-content">
                    {tasks.length === 0 ? (
                        <p className="queue-empty">No active tasks</p>
                    ) : (
                        <ul className="queue-list">
                            {tasks.map((task) => (
                                <li key={task.id} className="queue-item">
                                    <span className="task-name">{task.name}</span>
                                    <span className={`task-status ${task.status}`}>
                                        {task.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    )
}

export default QueuePanel
