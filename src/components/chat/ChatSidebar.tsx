import { Button } from '@/components/ui/button';
import { Plus, Settings } from 'lucide-react';

const ChatSidebar = () => {
  const servers = [
    { id: 'work', name: 'Work', color: 'bg-green-500', active: false },
    { id: 'icg', name: 'ICG', color: 'bg-purple-500', active: true },
    { id: 'sp', name: 'SP', color: 'bg-red-500', active: false },
    { id: 'bff', name: 'BFF', color: 'bg-blue-500', active: false },
    { id: 'mj', name: 'MJ', color: 'bg-yellow-500', active: false },
    { id: 'gi', name: 'GI', color: 'bg-pink-500', active: false },
  ];

  return (
    <div className="w-16 bg-gray-800 flex flex-col items-center py-3 space-y-2">
      {/* Logo */}
      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2">
        <span className="text-white font-bold text-sm">S</span>
      </div>
      
      <div className="w-8 h-0.5 bg-gray-600 rounded-full mb-2"></div>
      
      {/* Server Icons */}
      {servers.map((server) => (
        <div
          key={server.id}
          className={`relative group cursor-pointer ${
            server.active ? 'after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-8 after:bg-white after:rounded-l-full' : ''
          }`}
        >
          <div
            className={`w-10 h-10 ${server.color} ${
              server.active ? 'rounded-xl' : 'rounded-full hover:rounded-xl'
            } flex items-center justify-center text-white font-medium text-sm transition-all duration-200 group-hover:rounded-xl`}
          >
            {server.name}
          </div>
        </div>
      ))}
      
      {/* Add Server */}
      <Button
        variant="ghost"
        size="sm"
        className="w-10 h-10 p-0 rounded-full bg-gray-700 hover:bg-green-500 hover:rounded-xl transition-all duration-200 group"
      >
        <Plus className="w-5 h-5 text-green-500 group-hover:text-white" />
      </Button>
      
      <div className="flex-1"></div>
      
      {/* Settings */}
      <Button
        variant="ghost"
        size="sm"
        className="w-10 h-10 p-0 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
      >
        <Settings className="w-4 h-4 text-gray-400" />
      </Button>
    </div>
  );
};

export default ChatSidebar;