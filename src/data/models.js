// AI Model Providers and Models
export const modelProviders = {
    anthropic: {
        name: 'Anthropic',
        icon: 'A',
        models: [
            { id: 'claude-opus-4.5', name: 'Claude Opus 4.5', credits: 10, time: '25s', type: 'text', description: "Anthropic's most capable model." },
            { id: 'claude-sonnet-4.5', name: 'Claude Sonnet 4.5', credits: 8, time: '8s', type: 'text', description: 'Balanced speed and intelligence.' },
            { id: 'claude-haiku-3.5', name: 'Claude Haiku 3.5', credits: 2, time: '2s', type: 'text', description: 'Fast and efficient.' },
        ]
    },
    openai: {
        name: 'OpenAI',
        icon: 'O',
        models: [
            { id: 'gpt-5.2', name: 'GPT-5.2', credits: 12, time: '30s', type: 'text', description: 'Most advanced reasoning.' },
            { id: 'gpt-4o', name: 'GPT-4o', credits: 6, time: '5s', type: 'text', description: 'Fast multimodal model.' },
            { id: 'gpt-4o-mini', name: 'GPT-4o Mini', credits: 2, time: '2s', type: 'text', description: 'Efficient and affordable.' },
            { id: 'dall-e-4', name: 'DALL-E 4', credits: 8, time: '15s', type: 'image', description: 'Advanced image generation.' },
        ]
    },
    google: {
        name: 'Google',
        icon: 'G',
        models: [
            { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', credits: 10, time: '20s', type: 'text', description: 'Google\'s flagship model.' },
            { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', credits: 4, time: '3s', type: 'text', description: 'Ultra-fast responses.' },
            { id: 'veo-3.1-fast', name: 'Veo 3.1 (Fast)', credits: 18, time: '2m', type: 'video', description: 'Veo 3.1 quality at lower cost.' },
            { id: 'veo-3.1', name: 'Veo 3.1', credits: 43, time: '4m', type: 'video', description: 'Google\'s best: audio, 1080p, up to 60s clips.' },
            { id: 'veo-3.1-frames', name: 'Veo 3.1 Frames', credits: 43, time: '6m', type: 'video', description: 'Animate between start and end frames.' },
            { id: 'veo-3.1-frames-fast', name: 'Veo 3.1 Frames (Fast)', credits: 18, time: '2m', type: 'video', description: 'Fast frame-to-frame animation.' },
            { id: 'veo-3.1-ingredients', name: 'Veo 3.1 Ingredients', credits: 43, time: '4m', type: 'video', description: 'Combine reference images into video.' },
            { id: 'veo-3', name: 'Veo 3', credits: 30, time: '4m', type: 'video', description: 'Native audio with cinematic quality.' },
            { id: 'veo-2', name: 'Veo 2', credits: 12, time: '3m', type: 'video', description: 'Good balance of quality and speed.' },
            { id: 'imagen-3', name: 'Imagen 3', credits: 6, time: '10s', type: 'image', description: 'High-quality image generation.' },
        ]
    },
    bytedance: {
        name: 'Bytedance',
        icon: 'B',
        models: [
            { id: 'seedance-1.5', name: 'Seedance 1.5', credits: 15, time: '90s', type: 'video', description: 'Advanced video synthesis.' },
            { id: 'seedance-1.5-pro', name: 'Seedance 1.5 Pro', credits: 25, time: '2m', type: 'video', description: 'Professional quality videos.' },
        ]
    },
    alibaba: {
        name: 'Alibaba',
        icon: 'A',
        models: [
            { id: 'qwen-vl-max', name: 'Qwen VL Max', credits: 8, time: '15s', type: 'text', description: 'Vision-language model.' },
            { id: 'wan-2.1', name: 'Wan 2.1', credits: 20, time: '3m', type: 'video', description: 'High quality video generation.' },
        ]
    },
    kling: {
        name: 'Kling',
        icon: 'K',
        models: [
            { id: 'kling-2.0', name: 'Kling 2.0', credits: 22, time: '2m', type: 'video', description: 'Cinematic video AI.' },
            { id: 'kling-1.6', name: 'Kling 1.6', credits: 15, time: '90s', type: 'video', description: 'Fast video generation.' },
        ]
    },
    lightricks: {
        name: 'Lightricks',
        icon: 'L',
        models: [
            { id: 'ltx-video', name: 'LTX Video', credits: 18, time: '2m', type: 'video', description: 'Creative video effects.' },
        ]
    },
    luma: {
        name: 'Luma',
        icon: 'L',
        models: [
            { id: 'dream-machine-2', name: 'Dream Machine 2', credits: 20, time: '2m', type: 'video', description: 'Dreamlike video generation.' },
            { id: 'ray-2', name: 'Ray 2', credits: 25, time: '3m', type: 'video', description: 'Photorealistic videos.' },
        ]
    },
    flux: {
        name: 'Flux',
        icon: 'F',
        models: [
            { id: 'flux-2', name: 'Flux 2', credits: 5, time: '8s', type: 'image', description: 'Fast image generation.' },
            { id: 'flux-1.1-pro', name: 'Flux 1.1 Pro', credits: 8, time: '12s', type: 'image', description: 'Professional quality images.' },
        ]
    }
}

// Aspect Ratios
export const aspectRatios = {
    horizontal: [
        { id: '16:9', label: '16:9', icon: '▬' },
    ],
    vertical: [
        { id: '9:16', label: '9:16', icon: '▮' },
    ],
    square: [
        { id: '1:1', label: '1:1', icon: '■' },
    ]
}

// Style Presets
export const stylePresets = [
    { id: 'none', name: 'None', icon: null },
    { id: 'vector', name: 'Vector', icon: '🎨' },
    { id: 'fisheye', name: 'Fisheye', icon: '🐟' },
    { id: 'x-ray', name: 'X-ray', icon: '☢️' },
    { id: '3d', name: '3D', icon: '🧊' },
    { id: 'cinematic', name: 'Cinematic', icon: '🎬' },
    { id: 'anime', name: 'Anime', icon: '🎌' },
    { id: 'watercolor', name: 'Watercolor', icon: '🖌️' },
]

// Resolution Options
export const resolutions = [
    { id: '480p', label: '480p' },
    { id: '720p', label: '720p' },
    { id: '1080p', label: '1080p' },
    { id: '4k', label: '4K' },
]

// Duration Options (for video)
export const durations = [
    { id: '5s', label: '5 seconds' },
    { id: '6s', label: '6 seconds' },
    { id: '10s', label: '10 seconds' },
    { id: '15s', label: '15 seconds' },
    { id: '30s', label: '30 seconds' },
    { id: '60s', label: '60 seconds' },
]

// Helper to get models by type
export const getModelsByType = (type) => {
    const result = []
    Object.entries(modelProviders).forEach(([providerId, provider]) => {
        const filteredModels = provider.models.filter(m => m.type === type)
        if (filteredModels.length > 0) {
            result.push({
                providerId,
                providerName: provider.name,
                providerIcon: provider.icon,
                models: filteredModels
            })
        }
    })
    return result
}

// Get all models flat
export const getAllModels = () => {
    const result = []
    Object.entries(modelProviders).forEach(([providerId, provider]) => {
        provider.models.forEach(model => {
            result.push({
                ...model,
                providerId,
                providerName: provider.name
            })
        })
    })
    return result
}

// Get model by ID
export const getModelById = (modelId) => {
    for (const provider of Object.values(modelProviders)) {
        const model = provider.models.find(m => m.id === modelId)
        if (model) return model
    }
    return null
}
