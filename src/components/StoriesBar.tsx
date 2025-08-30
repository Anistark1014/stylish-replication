import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const StoriesBar = () => {
  const stories = [
    { name: 'Stephen', avatar: '👨‍💼' },
    { name: 'Edgar', avatar: '👨‍🎓' },
    { name: 'Joyce', avatar: '👩‍💼' },
    { name: 'Minnie', avatar: '👩‍🦳' },
    { name: 'Leon', avatar: '👨‍🏫' },
    { name: 'Jordan', avatar: '👨‍🚀' },
  ];

  return (
    <div className="flex items-center gap-4 p-6 bg-card border-b border-border">
      {/* Add Story */}
      <div className="flex flex-col items-center gap-2">
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-muted hover:bg-social-hover border-2 border-dashed border-border"
          variant="ghost"
        >
          <Plus className="w-6 h-6 text-muted-foreground" />
        </Button>
        <span className="text-xs text-muted-foreground">Add story</span>
      </div>

      {/* Stories */}
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center gap-2 cursor-pointer group">
          <div className="relative">
            <div className="w-16 h-16 bg-story-gradient rounded-full p-0.5">
              <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-2xl hover:bg-social-hover transition-colors">
                {story.avatar}
              </div>
            </div>
          </div>
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StoriesBar;