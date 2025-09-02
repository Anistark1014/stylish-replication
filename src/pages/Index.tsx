import Layout from '@/components/Layout';
import StoriesBar from '@/components/StoriesBar';
import PostFeed from '@/components/PostFeed';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="flex-1 flex flex-col min-w-0">
        {/* Authentication prompt for guests */}
        {!user && (
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border p-4">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Welcome to CampusMate</h2>
                <p className="text-sm text-muted-foreground">Join the community to access all features</p>
              </div>
              <Button asChild>
                <Link to="/auth">Sign Up / Sign In</Link>
              </Button>
            </div>
          </div>
        )}
        
        {/* Stories Bar - only for authenticated users */}
        {user && <StoriesBar />}
        
        {/* Main Feed */}
        <div className="flex-1 p-3 sm:p-6 overflow-y-auto">
          <PostFeed />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
