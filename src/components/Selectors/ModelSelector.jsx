import { useState, useRef, useEffect } from 'react'
import { ChevronRight, Search, Check } from 'lucide-react'
import { modelProviders, getModelsByType } from '../../data/models'
import './ModelSelector.css'

function ModelSelector({
    selectedModel,
    onModelSelect,
    nodeType = 'text',
    compact = false
}) {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [expandedProvider, setExpandedProvider] = useState(null)
    const [isAuto, setIsAuto] = useState(false)
    const dropdownRef = useRef(null)
    const triggerRef = useRef(null)

    // Filter models by node type
    const typeMap = {
        textNode: 'text',
        imageNode: 'image',
        videoNode: 'video'
    }
    const modelType = typeMap[nodeType] || 'text'
    const providers = getModelsByType(modelType)

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
                triggerRef.current && !triggerRef.current.contains(e.target)) {
                setIsOpen(false)
                setExpandedProvider(null)
                setSearchQuery('')
            }
        }

        if (isOpen) {
            // Use setTimeout to avoid immediate close on the same click
            setTimeout(() => {
                document.addEventListener('mousedown', handleClickOutside)
            }, 0)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    // Close on Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false)
                setExpandedProvider(null)
            }
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen])

    const handleProviderClick = (providerId) => {
        setExpandedProvider(expandedProvider === providerId ? null : providerId)
    }

    const handleModelClick = (model, providerId) => {
        onModelSelect({
            ...model,
            providerId,
            providerName: modelProviders[providerId]?.name
        })
        setIsOpen(false)
        setExpandedProvider(null)
        setSearchQuery('')
    }

    const handleToggle = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
        if (isOpen) {
            setExpandedProvider(null)
            setSearchQuery('')
        }
    }

    // Filter providers based on search
    const filteredProviders = providers.map(p => ({
        ...p,
        models: p.models.filter(m =>
            m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.description?.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(p => searchQuery ? p.models.length > 0 : true)

    return (
        <div className="model-selector">
            <button
                ref={triggerRef}
                className={`model-trigger ${compact ? 'compact' : ''} ${isOpen ? 'open' : ''}`}
                onClick={handleToggle}
            >
                <span className="model-name">{selectedModel?.name || 'Select Model'}</span>
                <ChevronRight size={14} className={`trigger-chevron ${isOpen ? 'rotated' : ''}`} />
            </button>

            {isOpen && (
                <div className="model-dropdown" ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
                    {/* Search */}
                    <div className="dropdown-search">
                        <Search size={14} />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus
                        />
                    </div>

                    {/* Auto Toggle */}
                    <div className="auto-toggle">
                        <span>Auto</span>
                        <button
                            className={`toggle-switch ${isAuto ? 'on' : ''}`}
                            onClick={(e) => { e.stopPropagation(); setIsAuto(!isAuto); }}
                        >
                            <span className="toggle-knob" />
                        </button>
                    </div>

                    <div className="dropdown-divider" />

                    {/* Pinned Models Section */}
                    <div className="dropdown-section">
                        <span className="section-label">PINNED MODELS</span>
                        <p className="section-hint">Models you favorite will appear here</p>
                    </div>

                    <div className="dropdown-divider" />

                    {/* Providers Section */}
                    <div className="dropdown-section">
                        <span className="section-label">PROVIDERS</span>
                    </div>

                    <div className="providers-list">
                        {filteredProviders.map((provider) => (
                            <div key={provider.providerId} className="provider-group">
                                <button
                                    className={`provider-item ${expandedProvider === provider.providerId ? 'expanded' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); handleProviderClick(provider.providerId); }}
                                >
                                    <span className="provider-icon">{provider.providerIcon}</span>
                                    <span className="provider-name">{provider.providerName}</span>
                                    {provider.models.some(m => m.id === selectedModel?.id) && (
                                        <span className="selected-model-badge">{selectedModel.name}</span>
                                    )}
                                    <ChevronRight size={14} className="provider-chevron" />
                                </button>

                                {/* Models Sub-menu */}
                                {expandedProvider === provider.providerId && (
                                    <div className="models-submenu" onClick={(e) => e.stopPropagation()}>
                                        {provider.models.map((model) => (
                                            <button
                                                key={model.id}
                                                className={`model-item ${selectedModel?.id === model.id ? 'selected' : ''}`}
                                                onClick={(e) => { e.stopPropagation(); handleModelClick(model, provider.providerId); }}
                                            >
                                                <div className="model-info">
                                                    <span className="model-item-name">{model.name}</span>
                                                    <div className="model-meta">
                                                        <span className="model-credits">⚡{model.credits}</span>
                                                        <span className="model-time">{model.time}</span>
                                                    </div>
                                                </div>
                                                {model.description && (
                                                    <p className="model-description">{model.description}</p>
                                                )}
                                                {selectedModel?.id === model.id && (
                                                    <Check size={14} className="selected-check" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModelSelector
