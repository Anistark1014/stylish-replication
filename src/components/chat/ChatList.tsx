import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ChatList = () => {
  const chats = [
    {
      name: 'Richard Wilson',
      message: 'I will add you to our team, we...',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: true,
      active: false
    },
    {
      name: 'ICG chat',
      message: 'Jaden: Let\'s discuss this tom...',
      avatar: '',
      initials: 'IC',
      online: false,
      active: true
    },
    {
      name: 'Sarah Parker',
      message: 'Your Ok, see you soon!',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: true,
      active: false
    },
    {
      name: 'Abubakar Campbell',
      message: 'Your Do you think we can do it?',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false,
      active: false
    },
    {
      name: 'Nathanael Jordan',
      message: 'I\'m busy',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false,
      active: false
    },
    {
      name: 'Conner Garcia',
      message: 'You: Hey, maybe we can meet...',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false,
      active: false
    },
    {
      name: 'Cynthia McKay',
      message: 'You: Maybe',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: true,
      active: false
    },
    {
      name: 'Cora Richards',
      message: 'Will you go play?',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false,
      active: false
    },
    {
      name: 'Lawrence Patterson',
      message: 'I\'ll ask the guys what they think',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false,
      active: false
    },
    {
      name: 'Lukas Mcgowan',
      message: 'You: We can try this strategy fo...',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false,
      active: false
    },
    {
      name: 'Alia Bonner',
      message: 'Had a great time yesterday',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false,
      active: false
    },
    {
      name: 'Fletcher Morse',
      message: 'You: I need to work sorry',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      online: false,
      active: false
    }
  ];

  return (
    <div className="w-80 bg-gray-850 border-r border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white font-semibold text-lg mb-3">ICG chat</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 border-none rounded-md px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-800 cursor-pointer transition-colors ${
              chat.active ? 'bg-gray-800' : ''
            }`}
          >
            <div className="relative">
              {chat.initials ? (
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {chat.initials}
                </div>
              ) : (
                <Avatar className="w-10 h-10">
                  <AvatarImage src={chat.avatar} />
                  <AvatarFallback className="bg-gray-600 text-white">
                    {chat.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              )}
              {chat.online && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-gray-850 rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm truncate">{chat.name}</p>
              <p className="text-gray-400 text-xs truncate">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;