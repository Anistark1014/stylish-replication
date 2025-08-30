import ProfileSidebar from '@/components/ProfileSidebar';
import StoriesBar from '@/components/StoriesBar';
import PostFeed from '@/components/PostFeed';
import MessagesSidebar from '@/components/MessagesSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar - Profile & Navigation */}
      <ProfileSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Stories Bar */}
        <StoriesBar />
        
        {/* Main Feed */}
        <div className="flex-1 p-6 overflow-y-auto">
          <PostFeed />
        </div>
      </div>
      
      {/* Right Sidebar - Messages */}
      <MessagesSidebar />
    </div>
  );
};

export default Index;
