import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Mic, Image, Calendar } from 'lucide-react';
import postContent from '@/assets/post-content.jpg';

const PostFeed = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="flex-1 max-w-2xl">
      {/* Create Post */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
            JC
          </div>
          <input
            type="text"
            placeholder="What is happening?"
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Image className="w-4 h-4 mr-2" />
              Media Content
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Mic className="w-4 h-4 mr-2" />
              Hashtags
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            Post
          </Button>
        </div>
      </div>

      {/* Feed Filter */}
      <div className="mb-6">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>Sort by:</span>
          <Button variant="ghost" size="sm" className="text-foreground font-medium">
            Following ↓
          </Button>
        </div>
      </div>

      {/* Post */}
      <div className="bg-card rounded-xl border border-border overflow-hidden mb-6">
        {/* Post Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-medium">
                BM
              </div>
              <div>
                <h4 className="font-medium text-foreground">Brandon Morton</h4>
                <p className="text-sm text-muted-foreground">14 Aug at 4:21 PM</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Post Content */}
        <div className="px-6 pb-4">
          <img
            src={postContent}
            alt="Design Shot post content"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-foreground leading-relaxed mb-2">
            Design Shot is an invitation to ponder on design as a living entity, capable of embodying and 
            influencing the flow of thoughts and sensations in an ever-changing reality...{' '}
            <Button variant="link" className="p-0 h-auto text-primary">
              read more
            </Button>
          </p>
          <div className="flex gap-2 text-sm">
            <span className="text-primary">#blender</span>
            <span className="text-primary">#render</span>
            <span className="text-primary">#design</span>
          </div>
        </div>

        {/* Post Actions */}
        <div className="px-6 py-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                className={`gap-2 ${liked ? 'text-red-500' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                1.6k
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <MessageCircle className="w-4 h-4" />
                2.3k
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <Share className="w-4 h-4" />
                351
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className={`${bookmarked ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setBookmarked(!bookmarked)}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFeed;