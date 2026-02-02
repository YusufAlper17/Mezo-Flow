import { useState, useCallback, memo, useRef, useEffect } from 'react'
import { Handle, Position, useReactFlow } from 'reactflow'
import {
    Info,
    CirclePlus,
    ChevronDown,
    Brush,
    Settings2,
    ImageIcon,
    Loader2,
    Upload
} from 'lucide-react'
import ModelSelector from '../../Selectors/ModelSelector'
import { aspectRatios, stylePresets } from '../../../data/models'
import { simulateGeneration, generateSeed } from '../../../data/mockData'
import './NodeStyles.css'

function ImageNode({ id, data, selected }) {
    const { setNodes, getNode, getEdges } = useReactFlow()

    const [prompt, setPrompt] = useState('')
    const [selectedModel, setSelectedModel] = useState({
        id: 'flux-2',
        name: 'Flux 2',
        credits: 5,
        time: '8s'
    })
    const [aspectRatio, setAspectRatio] = useState('16:9')
    const [selectedStyle, setSelectedStyle] = useState(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [generatedContent, setGeneratedContent] = useState(data.generatedContent || null)
    const [showAspectDropdown, setShowAspectDropdown] = useState(false)
    const [showStyleDropdown, setShowStyleDropdown] = useState(false)

    const aspectRef = useRef(null)
    const styleRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (aspectRef.current && !aspectRef.current.contains(e.target)) {
                setShowAspectDropdown(false)
            }
            if (styleRef.current && !styleRef.current.contains(e.target)) {
                setShowStyleDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const getNodeDimensions = () => {
        switch (aspectRatio) {
            case '9:16': return { width: 280, contentHeight: 320 }
            case '1:1': return { width: 320, contentHeight: 220 }
            default: return { width: 380, contentHeight: 180 }
        }
    }

    const dimensions = getNodeDimensions()

    const getConnectedInput = useCallback(() => {
        const edges = getEdges()
        const incomingEdge = edges.find(e => e.target === id)
        if (incomingEdge) {
            const sourceNode = getNode(incomingEdge.source)
            return sourceNode?.data?.generatedContent
        }
        return null
    }, [getEdges, getNode, id])

    const connectedInput = getConnectedInput()

    const handleGenerate = async () => {
        setIsGenerating(true)
        const result = await simulateGeneration('image', 2500)
        if (result) {
            const content = { ...result, prompt: prompt || 'Generated image', seed: generateSeed() }
            setGeneratedContent(content)
            setNodes(nodes => nodes.map(node =>
                node.id === id ? { ...node, data: { ...node.data, generatedContent: content } } : node
            ))
        }
        setIsGenerating(false)
    }

    const handleContentClick = () => {
        if (generatedContent && window.openFullscreen) {
            window.openFullscreen(generatedContent, 'image')
        }
    }

    return (
        <div className={`flora-node ${selected ? 'selected' : ''}`} style={{ width: dimensions.width }}>
            {/* Header Toolbar */}
            <div className="node-header-toolbar">
                <div className="toolbar-left">
                    <ModelSelector selectedModel={selectedModel} onModelSelect={setSelectedModel} nodeType="imageNode" compact />

                    <div className="aspect-selector" ref={aspectRef}>
                        <button className="aspect-trigger" onClick={() => setShowAspectDropdown(!showAspectDropdown)}>
                            <span>{aspectRatio}</span>
                            <ChevronDown size={12} />
                        </button>
                        {showAspectDropdown && (
                            <div className="aspect-dropdown">
                                {Object.entries(aspectRatios).map(([key, options]) => (
                                    <div className="aspect-section" key={key}>
                                        <span className="aspect-section-title">{key.toUpperCase()}</span>
                                        {options.map(ar => (
                                            <button key={ar.id} className={`aspect-option ${aspectRatio === ar.id ? 'selected' : ''}`}
                                                onClick={() => { setAspectRatio(ar.id); setShowAspectDropdown(false); }}>
                                                <span className="aspect-icon">{ar.icon}</span>
                                                <span>{ar.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="style-selector" ref={styleRef}>
                        <button className="style-trigger" onClick={() => setShowStyleDropdown(!showStyleDropdown)}>
                            <Brush size={14} />
                        </button>
                        {showStyleDropdown && (
                            <div className="style-dropdown">
                                <div className="style-options">
                                    {stylePresets.map(style => (
                                        <button key={style.id} className={`style-option ${selectedStyle === style.id ? 'selected' : ''}`}
                                            onClick={() => { setSelectedStyle(style.id); setShowStyleDropdown(false); }}>
                                            {style.icon && <span className="style-icon">{style.icon}</span>}
                                            <span>{style.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <button className="toolbar-icon-btn"><Settings2 size={14} /></button>
                </div>
                <div className="toolbar-right">
                    <span className="model-provider">{selectedModel.name}</span>
                </div>
            </div>

            {/* Node Label */}
            <div className="node-label-header">
                <div className="node-label-left">
                    <ImageIcon size={12} />
                    <span className="node-type-name">Image</span>
                </div>
                {connectedInput && <span className="connected-badge">Connected</span>}
            </div>

            {/* Node Container */}
            <div className="flora-node-container flora-node-image">
                <div className="node-info-hint">
                    <Info size={14} />
                    <span>Learn about Image Blocks</span>
                </div>
                <hr className="node-divider" />

                <div className="node-image-area" onClick={handleContentClick} style={{ height: dimensions.contentHeight }}>
                    {generatedContent ? (
                        <div className="image-preview">
                            <img src={generatedContent.url} alt={generatedContent.title} />
                        </div>
                    ) : (
                        <div className="image-dropzone">
                            <Upload size={24} />
                            <span>Drop image or click to upload</span>
                        </div>
                    )}
                </div>

                {/* Prompt with inline generate button */}
                <div className="node-prompt-section">
                    <div className="prompt-input-wrapper">
                        {!prompt && <span className="animated-placeholder">{data.placeholder || 'Try "A charming illustration"'}</span>}
                        <textarea className="prompt-textarea" value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={1} />
                    </div>
                    <button className={`generate-button-inline ${isGenerating ? 'generating' : ''}`} onClick={handleGenerate} disabled={isGenerating}>
                        {isGenerating ? <Loader2 size={18} className="spin" /> : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m16 12-4-4-4 4"></path>
                                <path d="M12 16V8"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Handles with CirclePlus icons */}
            <Handle type="target" position={Position.Left} id={`${id}-target`} className="flora-handle flora-handle-target">
                <div className="handle-icon"><CirclePlus size={24} /></div>
            </Handle>
            <Handle type="source" position={Position.Right} id={`${id}-source`} className="flora-handle flora-handle-source">
                <div className="handle-icon"><CirclePlus size={24} /></div>
            </Handle>
        </div>
    )
}

export default memo(ImageNode)
