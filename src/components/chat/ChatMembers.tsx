import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';

const ChatMembers = () => {
  const members = [
    {
      name: 'Richard Wilson',
      role: 'Admin',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: true
    },
    {
      name: 'You',
      role: '',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: true
    },
    {
      name: 'Jaden Parker',
      role: '',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false
    },
    {
      name: 'Conner Garcia',
      role: '',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false
    },
    {
      name: 'Lawrence Patterson',
      role: '',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false
    }
  ];

  const files = [
    {
      name: '115 photos',
      count: 115,
      type: 'photos'
    },
    {
      name: '208 files',
      count: 208,
      type: 'files'
    },
    {
      name: '47 shared links',
      count: 47,
      type: 'links'
    }
  ];

  return (
    <div className="w-72 bg-gray-850 border-l border-gray-700 flex flex-col">
      {/* Search */}
      <div className="p-4 border-b border-gray-700">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-800 border-none rounded-md px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="p-4 border-b border-gray-700">
        <div className="grid grid-cols-4 gap-2">
          <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <span className="text-white text-xs">📞</span>
          </button>
          <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <span className="text-white text-xs">📹</span>
          </button>
          <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <span className="text-white text-xs">🔗</span>
          </button>
          <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <span className="text-white text-xs">👥</span>
          </button>
        </div>
      </div>

      {/* Members */}
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-white font-semibold text-sm mb-3">Members</h3>
        <div className="space-y-3">
          {members.map((member, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="bg-gray-600 text-white text-xs">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {member.online && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-gray-850 rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm font-medium truncate">{member.name}</span>
                  {member.role && (
                    <Badge variant="secondary" className="text-xs px-1.5 py-0 bg-blue-600 text-white">
                      {member.role}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Files */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm mb-3">Files</h3>
        
        {/* File Preview */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png" 
                alt="File preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png" 
                alt="File preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between text-gray-400 hover:text-white cursor-pointer">
              <span className="text-sm">{file.name}</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMembers;