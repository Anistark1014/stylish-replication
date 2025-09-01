import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ExternalLink, Mic } from 'lucide-react';

const MessagesSidebar = () => {
  const [activeTab, setActiveTab] = useState('Primary');

  const tabs = ['Primary', 'General', 'Requests (3)'];

  const messages = [
    {
      name: 'Julie Mendez',
      location: 'Memphis, TN, US',
      time: '2m',
      unread: true,
    },
    {
      name: 'Johnathan Hartley',
      location: 'Newark, NJ, US',
      time: '5m',
      unread: true,
    },
    {
      name: 'Maximus McKay',
      location: 'Fort Worth, TX, US',
      time: '12m',
      unread: true,
    },
    {
      name: 'Jasmin Alvarez',
      location: 'Springfield, MA, US',
      time: '1h',
      unread: true,
    },
  ];

  const suggestions = [
    {
      name: 'Alex Bishop',
      description: 'Sweet, smile, repeat! 🎪✨',
      mutual: true,
    },
    {
      name: 'Bella Bean',
      description: '🍯 Savoring every flavor life...',
      mutual: true,
    },
    {
      name: 'Tyra Dhillon',
      description: 'Style is a way to express w...',
      mutual: true,
    },
    {
      name: 'Adam Hayes',
      description: '📚 Finding peace in the bea...',
      mutual: true,
    },
  ];

  return (
    <div className="w-72 xl:w-80 bg-card border-l border-border h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Messages</h2>
          <Button variant="ghost" size="sm">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10 pr-10 bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
          />
          <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Mic className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-2 border-b border-border">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "secondary" : "ghost"}
              size="sm"
              className={`${
                activeTab === tab 
                  ? "bg-secondary text-secondary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-social-hover cursor-pointer transition-colors"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                  {message.name.split(' ').map(n => n[0]).join('')}
                </div>
                {message.unread && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate">{message.name}</p>
                <p className="text-xs text-muted-foreground truncate">{message.location}</p>
              </div>
              <div className="text-xs text-muted-foreground">{message.time}</div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-foreground">Suggestions</h3>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              View All
            </Button>
          </div>

          <div className="space-y-3">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-social-hover cursor-pointer transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-medium">
                  {suggestion.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground truncate">{suggestion.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{suggestion.description}</p>
                </div>
                {suggestion.mutual && (
                  <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20">
                    👥
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="p-4 border-t border-border">
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <Button variant="link" className="text-xs p-0 h-auto justify-start">About</Button>
            <Button variant="link" className="text-xs p-0 h-auto justify-start">Accessibility</Button>
            <Button variant="link" className="text-xs p-0 h-auto justify-start">Help Center</Button>
            <Button variant="link" className="text-xs p-0 h-auto justify-start">Privacy and Terms</Button>
            <Button variant="link" className="text-xs p-0 h-auto justify-start">Advertising</Button>
            <Button variant="link" className="text-xs p-0 h-auto justify-start">Business Services</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesSidebar;