import ProfileSidebar from '@/components/ProfileSidebar';
import MessagesSidebar from '@/components/MessagesSidebar';
import { useAuth } from '@/hooks/useAuth';

interface LayoutProps {
  children: React.ReactNode;
  showMessagesSidebar?: boolean;
}

const Layout = ({ children, showMessagesSidebar = true }: LayoutProps) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar - Profile & Navigation */}
      {user && (
        <div className="hidden lg:block">
          <ProfileSidebar />
        </div>
      )}
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
      
      {/* Right Sidebar - Messages */}
      {user && showMessagesSidebar && (
        <div className="hidden xl:block">
          <MessagesSidebar />
        </div>
      )}
    </div>
  );
};

export default Layout;