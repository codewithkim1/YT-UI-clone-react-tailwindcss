import React, { useState } from 'react';
import { Menu, Search, Mic, Video, Bell, User, Home, Compass, PlaySquare, Clock, ThumbsUp, ChevronRight } from 'lucide-react';

const categories = [
  "All", "JavaScript", "Podcasts", "Music", "Development", "Security", "Media", "History", 
  "Gaming", "Live", "News", "Sports", "Education", "Crypto", "AI", "Machine Learning"
];

const videos = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/400/225",
    duration: "18:48",
    title: "Building Modern Web Applications 2024",
    channel: "TechMaster Pro",
    avatar: "https://picsum.photos/40/40",
    views: "335K",
    timestamp: "1 day ago"
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/400/225",
    duration: "12:24",
    title: "The Future of AI Development",
    channel: "AI Insights",
    avatar: "https://picsum.photos/40/40",
    views: "1.1M",
    timestamp: "5 months ago"
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/400/225",
    duration: "24:15",
    title: "Advanced JavaScript Patterns",
    channel: "CodePro",
    avatar: "https://picsum.photos/40/40",
    views: "560K",
    timestamp: "2 days ago"
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/400/225",
    duration: "15:30",
    title: "Understanding Quantum Computing",
    channel: "Science Plus",
    avatar: "https://picsum.photos/40/40",
    views: "890K",
    timestamp: "1 week ago"
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/400/225",
    duration: "21:42",
    title: "Web Security Best Practices",
    channel: "SecurityHub",
    avatar: "https://picsum.photos/40/40",
    views: "445K",
    timestamp: "3 days ago"
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/400/225",
    duration: "08:55",
    title: "React Performance Optimization",
    channel: "ReactMasters",
    avatar: "https://picsum.photos/40/40",
    views: "225K",
    timestamp: "6 days ago"
  }
];

const Sidebar = ({ isOpen }) => (
  <div className={`fixed left-0 top-14 h-full bg-gray-900 text-white transition-all duration-300 z-20 
    ${isOpen ? 'w-64' : 'w-16'}`}>
    <div className="flex flex-col p-2">
      <SidebarItem icon={<Home size={20} />} text="Home" isOpen={isOpen} />
      <SidebarItem icon={<Compass size={20} />} text="Explore" isOpen={isOpen} />
      <SidebarItem icon={<PlaySquare size={20} />} text="Subscriptions" isOpen={isOpen} />
      <SidebarItem icon={<Clock size={20} />} text="History" isOpen={isOpen} />
      <SidebarItem icon={<ThumbsUp size={20} />} text="Liked videos" isOpen={isOpen} />
    </div>
  </div>
);

const SidebarItem = ({ icon, text, isOpen }) => (
  <div className="flex items-center p-3 hover:bg-gray-800 rounded-lg cursor-pointer">
    <span className="mr-4">{icon}</span>
    {isOpen && <span className="text-sm">{text}</span>}
  </div>
);

const VideoCard = ({ video }) => (
  <div className="flex flex-col cursor-pointer group">
    <div className="relative">
      <img 
        src={video.thumbnail} 
        alt={video.title}
        className="w-full rounded-xl object-cover group-hover:rounded-none transition-all duration-200"
      />
      <span className="absolute bottom-2 right-2 bg-black px-2 py-1 text-xs rounded">
        {video.duration}
      </span>
    </div>
    <div className="flex mt-3 px-1">
      <img 
        src={video.avatar}
        alt={video.channel}
        className="w-9 h-9 rounded-full mr-3"
      />
      <div>
        <h3 className="font-medium text-white mb-1 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-400 text-sm">{video.channel}</p>
        <div className="text-gray-400 text-sm">
          {video.views} views • {video.timestamp}
        </div>
      </div>
    </div>
  </div>
);

export default function YouTubeClone() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-gray-900 flex items-center justify-between px-4 z-30 border-b border-gray-800">
        <div className="flex items-center">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded-full"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center ml-4 cursor-pointer">
            <span className="text-xl font-bold">VideoHub</span>
          </div>
        </div>
        
        <div className="flex items-center flex-grow justify-center max-w-2xl">
          <div className="flex items-center w-full">
            <div className="flex items-center flex-grow">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-full focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-gray-700 border border-l-0 border-gray-700 rounded-r-full hover:bg-gray-600">
                <Search size={20} />
              </button>
            </div>
            <button className="ml-4 p-2 hover:bg-gray-800 rounded-full">
              <Mic size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Video size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <User size={20} />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <main className={`pt-14 ${sidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
        {/* Categories */}
        <div className="sticky top-14 bg-gray-900 z-20 pb-4">
          <div className="flex items-center space-x-3 overflow-x-auto px-4 pt-3 pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-lg whitespace-nowrap text-sm font-medium
                  ${selectedCategory === category 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>
    </div>
  );
}