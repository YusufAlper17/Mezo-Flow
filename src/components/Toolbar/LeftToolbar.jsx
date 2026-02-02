import { useState } from 'react'
import {
    Plus,
    Shapes,
    History,
    Group,
    Paintbrush,
    MessageCircle,
    CircleHelp,
    Text,
    Image,
    Video,
    Upload,
    X,
    Search,
    Grid3X3,
    Sparkles
} from 'lucide-react'
import './LeftToolbar.css'

function LeftToolbar() {
    const [activePopup, setActivePopup] = useState(null)
    const [isCommenting, setIsCommenting] = useState(false)

    const togglePopup = (name) => {
        setActivePopup(activePopup === name ? null : name)
    }

    const handleAddNode = (type = 'textNode') => {
        if (window.addFlowNode) {
            window.addFlowNode(type)
        }
        setActivePopup(null)
    }

    const toggleCommentMode = () => {
        const newState = !isCommenting
        setIsCommenting(newState)
        if (window.toggleCommenting) {
            window.toggleCommenting()
        }
    }

    const toolbarItems = [
        { icon: Shapes, label: 'Assets', id: 'assets' },
        { icon: History, label: 'History', id: 'history' },
        { icon: Group, label: 'Groups', id: 'groups' },
        { icon: Paintbrush, label: 'Styles', id: 'styles' },
    ]

    const blockTypes = [
        { icon: Text, label: 'Text', shortcut: 'T', type: 'textNode' },
        { icon: Image, label: 'Image', shortcut: 'I', type: 'imageNode' },
        { icon: Video, label: 'Video', shortcut: 'V', type: 'videoNode' },
    ]

    const groupTemplates = [
        { name: 'Style Extractor', nodes: 4, icon: Sparkles },
        { name: 'Color Palette Extractor', nodes: 5, icon: Sparkles },
        { name: 'Image to Video Camera Movements', nodes: 10, icon: Sparkles },
        { name: 'Sketch to Render', nodes: 16, icon: Sparkles },
        { name: 'Image Model Comparisons', nodes: 17, icon: Sparkles },
        { name: '3D Fashion Workflow', nodes: 8, icon: Sparkles },
    ]

    const stylePresets = [
        { name: 'Vector', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=100&h=100&fit=crop' },
        { name: 'Fisheye', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=100&h=100&fit=crop' },
        { name: 'Vintage', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=100&h=100&fit=crop' },
        { name: 'Neon', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=100&h=100&fit=crop' },
        { name: 'Minimal', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=100&h=100&fit=crop' },
        { name: 'Abstract', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop' },
    ]

    return (
        <aside className="left-toolbar">
            {/* Add Node Button */}
            <button
                className={`toolbar-add-btn ${activePopup === 'addBlock' ? 'active' : ''}`}
                onClick={() => togglePopup('addBlock')}
                title="Add Block"
            >
                <Plus size={20} />
            </button>

            <div className="toolbar-group">
                {/* Apps / Assets / History / Groups / Styles */}
                {toolbarItems.map((item) => (
                    <button
                        key={item.id}
                        className={`toolbar-item ${activePopup === item.id ? 'active' : ''}`}
                        onClick={() => togglePopup(item.id)}
                        title={item.label}
                    >
                        <item.icon size={20} />
                    </button>
                ))}
            </div>

            {/* Comment Button */}
            <button
                className={`toolbar-item ${isCommenting ? 'active commenting' : ''}`}
                title="Comments"
                onClick={toggleCommentMode}
            >
                <MessageCircle size={20} />
            </button>

            {/* Help Button */}
            <button className="toolbar-item" title="Help">
                <CircleHelp size={20} />
            </button>

            {/* Separator */}
            <div className="toolbar-separator" />

            {/* Profile Button */}
            <button className="toolbar-profile-btn">
                <span className="profile-img-wrapper">
                    <img
                        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18zN1gwN0hSNXVHYTQxQlFBU1VXZWpTV2hsbDcifQ"
                        alt="Profile"
                    />
                </span>
            </button>


            {/* ---------------- POPUPS ---------------- */}

            {/* Add Block Popup */}
            {activePopup === 'addBlock' && (
                <div className="toolbar-popup add-block-popup">
                    <div className="popup-section">
                        <span className="popup-section-title">Add Block</span>
                        {blockTypes.map((block) => (
                            <button
                                key={block.type}
                                className="popup-block-item"
                                onClick={() => handleAddNode(block.type)}
                            >
                                <block.icon size={16} />
                                <span>{block.label}</span>
                                <span className="shortcut">{block.shortcut}</span>
                            </button>
                        ))}
                    </div>
                    <div className="popup-divider"></div>
                    <div className="popup-section">
                        <span className="popup-section-title">Add Source</span>
                        <button className="popup-block-item" onClick={() => { }}>
                            <Upload size={16} />
                            <span>Upload</span>
                            <span className="shortcut">U</span>
                        </button>
                    </div>
                    <div className="popup-divider"></div>
                    <div className="popup-footer">
                        <span className="footer-hint">↕ Navigate</span>
                        <span className="footer-hint">✓ Select</span>
                    </div>
                    <button className="popup-learn-more">
                        <CircleHelp size={14} />
                        Learn about Blocks
                    </button>
                </div>
            )}

            {/* Assets Popup */}
            {activePopup === 'assets' && (
                <div className="toolbar-popup assets-popup">
                    <div className="popup-header">
                        <div className="popup-search">
                            <Search size={14} />
                            <input type="text" placeholder="Search Assets..." />
                        </div>
                        <button className="popup-header-btn"><Grid3X3 size={14} /></button>
                        <button className="popup-close-btn" onClick={() => setActivePopup(null)}>
                            <X size={14} />
                        </button>
                    </div>
                    <div className="popup-tabs">
                        <button className="popup-tab active">My Files</button>
                        <button className="popup-tab">Saved Blocks</button>
                        <button className="popup-tab">Unsplash</button>
                    </div>
                    <div className="assets-grid">
                        <button className="upload-area">
                            <Plus size={16} />
                            <span>Upload</span>
                        </button>
                    </div>
                </div>
            )}

            {/* History Popup */}
            {activePopup === 'history' && (
                <div className="toolbar-popup">
                    <div className="popup-header simple">
                        <h3>History</h3>
                        <button className="popup-close-btn" onClick={() => setActivePopup(null)}>
                            <X size={14} />
                        </button>
                    </div>
                    <p className="popup-empty">No history yet</p>
                </div>
            )}

            {/* Groups Popup */}
            {activePopup === 'groups' && (
                <div className="toolbar-popup groups-popup">
                    <div className="popup-header">
                        <div className="popup-search">
                            <Search size={14} />
                            <input type="text" placeholder="Search Groups..." />
                        </div>
                        <button className="popup-header-btn"><Grid3X3 size={14} /></button>
                        <button className="popup-close-btn" onClick={() => setActivePopup(null)}>
                            <X size={14} />
                        </button>
                    </div>
                    <div className="popup-tabs">
                        <button className="popup-tab active">Featured</button>
                        <button className="popup-tab">My Groups</button>
                    </div>
                    <div className="groups-list">
                        {groupTemplates.map((group, index) => (
                            <button key={index} className="group-item">
                                <Sparkles size={16} className="group-icon" />
                                <div className="group-info">
                                    <span className="group-name">{group.name}</span>
                                    <span className="group-nodes">{group.nodes} Nodes</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Styles Popup */}
            {activePopup === 'styles' && (
                <div className="toolbar-popup styles-popup">
                    <div className="popup-header">
                        <div className="popup-search">
                            <Search size={14} />
                            <input type="text" placeholder="Search Styles..." />
                        </div>
                        <button className="popup-header-btn"><Grid3X3 size={14} /></button>
                        <button className="popup-close-btn" onClick={() => setActivePopup(null)}>
                            <X size={14} />
                        </button>
                    </div>
                    <div className="popup-tabs">
                        <button className="popup-tab active">All</button>
                        <button className="popup-tab">My Styles</button>
                        <button className="popup-new-style">+ New Style</button>
                    </div>
                    <div className="styles-grid">
                        {stylePresets.map((style, index) => (
                            <div key={index} className="style-item">
                                <img src={style.image} alt={style.name} />
                                <span className="style-name">{style.name}</span>
                            </div>
                        ))}
                    </div>
                    <button className="popup-learn-more">
                        <CircleHelp size={14} />
                        Learn about Styles
                    </button>
                </div>
            )}
        </aside>
    )
}

export default LeftToolbar
