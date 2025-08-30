import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Phone, Video, Settings, Paperclip, Send, Smile } from 'lucide-react';

const ChatMain = () => {
  const messages = [
    {
      id: 1,
      user: 'Richard Wilson',
      content: 'added You',
      time: '6:15 pm',
      type: 'system',
      date: '9 Sep 2024'
    },
    {
      id: 2,
      user: 'Conner Garcia',
      content: 'Hey guys! Don\'t forget about our meeting next week! I\'ll be waiting for you at the "Cozy Corner" cafe at 6:00 PM. Don\'t be late!',
      time: '6:25 pm',
      type: 'message',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png'
    },
    {
      id: 3,
      user: 'Richard Wilson',
      content: 'Absolutely, I\'ll be there! Looking forward to catching up and discussing everything.',
      time: '6:26 pm',
      type: 'message',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png'
    },
    {
      id: 4,
      user: 'Lawrence Patterson',
      content: '@wilson @parker I have a new game plan',
      time: '6:25 pm',
      type: 'message',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png',
      date: '10 Sep 2024'
    },
    {
      id: 5,
      user: 'Jaden Parker',
      content: 'Let\'s discuss this tomorrow',
      time: '6:25 pm',
      type: 'message',
      avatar: '/lovable-uploads/bc318f1a-3929-4902-a0d5-ad42870646c9.png'
    },
    {
      id: 6,
      user: 'Richard Wilson',
      content: 'started a video call',
      time: '',
      type: 'call',
      showJoin: true
    }
  ];

  return (
    <div className="flex-1 bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="h-12 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <h3 className="text-white font-semibold">ICG chat</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Phone className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Video className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            {message.date && (
              <div className="flex justify-center mb-4">
                <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                  {message.date}
                </span>
              </div>
            )}
            
            {message.type === 'system' && (
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-white font-medium">{message.user}</span>
                <span>{message.content}</span>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
            )}
            
            {message.type === 'message' && (
              <div className="flex items-start gap-3">
                <Avatar className="w-8 h-8 mt-0.5">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback className="bg-gray-600 text-white text-xs">
                    {message.user.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium text-sm">{message.user}</span>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{message.content}</p>
                </div>
              </div>
            )}
            
            {message.type === 'call' && (
              <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">{message.user} {message.content}</span>
                </div>
                {message.showJoin && (
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                    Join
                  </Button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Paperclip className="w-4 h-4" />
          </Button>
          <div className="flex-1 relative">
            <Input
              placeholder="Write a message..."
              className="bg-gray-700 border-0 text-white placeholder-gray-400 focus-visible:ring-1 focus-visible:ring-blue-500 pr-20"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white h-6 w-6 p-0">
                <Smile className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white h-6 w-6 p-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;