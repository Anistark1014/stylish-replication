import ProfileSidebar from '@/components/ProfileSidebar';
import MessagesSidebar from '@/components/MessagesSidebar';

interface LayoutProps {
  children: React.ReactNode;
  showMessagesSidebar?: boolean;
}

const Layout = ({ children, showMessagesSidebar = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar - Profile & Navigation */}
      <ProfileSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      
      {/* Right Sidebar - Messages */}
      {showMessagesSidebar && <MessagesSidebar />}
    </div>
  );
};

export default Layout;