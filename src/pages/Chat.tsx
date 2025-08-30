import Layout from '@/components/Layout';
import ChatList from '@/components/chat/ChatList';
import ChatMain from '@/components/chat/ChatMain';
import ChatMembers from '@/components/chat/ChatMembers';

const Chat = () => {
  return (
    <Layout showMessagesSidebar={false}>
      <div className="flex h-full">
        {/* Chat List */}
        <ChatList />
        
        {/* Main Chat Area */}
        <div className="flex-1 flex">
          <ChatMain />
          <ChatMembers />
        </div>
      </div>
    </Layout>
  );
};

export default Chat;