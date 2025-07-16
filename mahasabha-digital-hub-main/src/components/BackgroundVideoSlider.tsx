import { useState, useEffect } from 'react';

interface BackgroundVideoSliderProps {
  videoSrc: string;
  fallbackImages: string[];
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const BackgroundVideoSlider = ({ 
  videoSrc, 
  fallbackImages, 
  autoPlay = true, 
  loop = true, 
  muted = true 
}: BackgroundVideoSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fallbackImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [fallbackImages.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Fallback Image Slider */}
      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
        videoLoaded ? 'opacity-0' : 'opacity-100'
      }`}>
        {fallbackImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hindu Janajagriti
            <span className="block text-orange-400">Mahasabha</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Serving the community with dedication and righteousness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              Join Our Mission
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideoSlider;