import ChatSidebar from '@/components/chat/ChatSidebar';
import ChatList from '@/components/chat/ChatList';
import ChatMain from '@/components/chat/ChatMain';
import ChatMembers from '@/components/chat/ChatMembers';

const Chat = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left Navigation Sidebar */}
      <ChatSidebar />
      
      {/* Chat List */}
      <ChatList />
      
      {/* Main Chat Area */}
      <div className="flex-1 flex">
        <ChatMain />
        <ChatMembers />
      </div>
    </div>
  );
};

export default Chat;