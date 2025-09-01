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
    <div className="flex items-center gap-4 p-3 sm:p-6 bg-card border-b border-border overflow-x-auto scrollbar-hide">
      {/* Add Story */}
      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        <Button
          size="lg"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-muted hover:bg-social-hover border-2 border-dashed border-border"
          variant="ghost"
        >
          <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
        </Button>
        <span className="text-xs text-muted-foreground whitespace-nowrap">Add story</span>
      </div>

      {/* Stories */}
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0">
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-story-gradient rounded-full p-0.5">
              <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-xl sm:text-2xl hover:bg-social-hover transition-colors">
                {story.avatar}
              </div>
            </div>
          </div>
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StoriesBar;