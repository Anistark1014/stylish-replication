import ChatSidebar from '@/components/chat/ChatSidebar';
import ChatList from '@/components/chat/ChatList';
import ChatMain from '@/components/chat/ChatMain';
import ChatMembers from '@/components/chat/ChatMembers';

const Chat = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left Navigation Sidebar */}
      <div className="hidden sm:block">
        <ChatSidebar />
      </div>
      
      {/* Chat List */}
      <div className="hidden md:block">
        <ChatList />
      </div>
      
      {/* Main Chat Area */}
      <div className="flex-1 flex min-w-0">
        <ChatMain />
        <div className="hidden lg:block">
          <ChatMembers />
        </div>
      </div>
    </div>
  );
};

export default Chat;