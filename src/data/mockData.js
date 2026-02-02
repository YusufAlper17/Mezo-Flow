// Mock generated content for simulation

export const mockTextOutputs = [
    {
        id: 'text-1',
        title: 'Arabadaki Kediler',
        content: `Arabanın içindeki kediler, camdan dışarıyı merakla izliyor. Biri ön koltukta künerilmiş, dikkatinin tamamı sokak peyzajına odaklanmış gibi. Diğeri arka koltukta kıvrılmış, güneş ışığının sıcaklığında mışıl mışıl uyukluyour. Üçüncüsü ise torpido gözünün üstünde, her geçen arabayı takip eden gözlerle pencereye yapışmış.

Kuyruklarını bazen heyecanla, bazen de tembelce sallıyorlar. Arabanın iç tüyleriyle kaplanmış, koltuklar artık onların krallığı olmuş. Motor çalışınca kulaklarını dikiyorlar, sanki bir maceraya çıkacaklarını biliyorlar.`,
        model: 'Claude Opus 4.5',
        prompt: 'arabanın içindeki kediler'
    },
    {
        id: 'text-2',
        title: 'Fütüristik Şehir',
        content: `2150 yılının Neo-Tokyo'su, gökyüzüne uzanan cam kulelerle dolu. Her bina, canlı hologramlarla süslenmiş; reklamlar havada dans ediyor. Yerden yüz metre yukarıda, manyetik raylar üzerinde sessiz trenler kayıyor.

Sokaklar artık yeraltında. İnsanlar, yapay güneş ışığıyla aydınlanan devasa mağaralarda yaşıyor. Robot hizmetkarlar, her köşede bekliyor. Doğa parkları, şeffaf kubbeler altında korunuyor - son kalan yeşil alanlar.`,
        model: 'GPT-5.2',
        prompt: 'fütüristik şehir'
    },
    {
        id: 'text-3',
        title: 'Gizem Ormanı',
        content: `Sisler arasından süzülen ay ışığı, kadim meşe ağaçlarının dallarında dans ediyordu. Her yaprak fısıldıyor, her gölge bir hikaye anlatıyordu. Ormanın derinliklerinde, unutulmuş bir tapınak yükseliyordu - zamanın ötesinden kalan bir tanık.

Yosun kaplı taşlar arasından kristal berraklığında bir dere akıyordu. Suyun şarkısı, gecenin sessizliğinde bir ninni gibiydi.`,
        model: 'Gemini 2.5 Pro',
        prompt: 'gizemli orman'
    }
]

export const mockImageOutputs = [
    {
        id: 'img-1',
        title: 'Kediler ve Araç',
        url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop',
        model: 'Flux 2',
        prompt: 'kediler ve araç'
    },
    {
        id: 'img-2',
        title: 'Çocuk Oyun Alanı',
        url: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=300&fit=crop',
        model: 'Flux 2',
        prompt: 'çocuk oyun alanı'
    },
    {
        id: 'img-3',
        title: 'Sunset Mountains',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        model: 'Imagen 3',
        prompt: 'sunset mountains'
    },
    {
        id: 'img-4',
        title: 'Cat in Car',
        url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=300&fit=crop',
        model: 'DALL-E 4',
        prompt: 'orange cat looking through car window'
    },
    {
        id: 'img-5',
        title: 'Toy Cars',
        url: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400&h=300&fit=crop',
        model: 'Flux 1.1 Pro',
        prompt: 'colorful toy cars on floor'
    }
]

export const mockVideoOutputs = [
    {
        id: 'vid-1',
        title: 'Çocuk Oyun Alanı (Fast)',
        url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=300&fit=crop',
        model: 'Veo 3.1 (Fast)',
        duration: '6s',
        prompt: 'çocuk oyun alanı'
    },
    {
        id: 'vid-2',
        title: 'Cat Journey',
        url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop',
        model: 'Seedance 1.5 Pro',
        duration: '10s',
        prompt: 'cat adventure'
    },
    {
        id: 'vid-3',
        title: 'City Timelapse',
        url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop',
        model: 'Veo 3',
        duration: '15s',
        prompt: 'futuristic city timelapse'
    }
]

// Simulate generation delay
export const simulateGeneration = (type, duration = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result
            switch (type) {
                case 'text':
                    result = mockTextOutputs[Math.floor(Math.random() * mockTextOutputs.length)]
                    break
                case 'image':
                    result = mockImageOutputs[Math.floor(Math.random() * mockImageOutputs.length)]
                    break
                case 'video':
                    result = mockVideoOutputs[Math.floor(Math.random() * mockVideoOutputs.length)]
                    break
                default:
                    result = null
            }
            resolve(result)
        }, duration)
    })
}

// Get random seed
export const generateSeed = () => {
    return Math.floor(Math.random() * 999999999).toString()
}
