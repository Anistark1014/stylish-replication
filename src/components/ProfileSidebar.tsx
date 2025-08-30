import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, MessageCircle, Bell, Settings, MoreHorizontal } from 'lucide-react';
import profileImage from '@/assets/profile-jessica.jpg';

const ProfileSidebar = () => {
  const [activeNav, setActiveNav] = useState('Feed');

  const navigationItems = [
    { name: 'Feed', icon: Home },
    { name: 'Messages', icon: MessageCircle },
    { name: 'Notifications', icon: Bell, hasNotification: true },
    { name: 'Settings', icon: Settings },
  ];

  const contacts = [
    { name: 'Jak Lozano', status: 'liked you story', time: '3h', hasStory: true },
    { name: 'Vanessa Mccann', status: 'who you might know', time: '24m', isOnline: true },
    { name: 'Abbie and 109 others', status: 'liked you post', time: '2h' },
    { name: 'Samson Clay', status: 'Started following you', time: '1d', isOnline: true },
  ];

  return (
    <div className="w-80 bg-card border-r border-border h-screen flex flex-col">
      {/* Profile Section */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src={profileImage}
              alt="Jessica Cambridge"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-foreground">Jessica Cambridge</h2>
              <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20">
                ✓
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">College Doctor</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Guiding the next generation through the journey of health and knowledge!
        </p>

        <div className="flex gap-6 text-center">
          <div>
            <p className="font-semibold text-foreground">368</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">184.3K</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">1.04M</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-3 mb-6">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.name}
              variant={activeNav === item.name ? "secondary" : "ghost"}
              className={`w-full justify-start mb-2 relative h-12 ${
                activeNav === item.name 
                  ? "bg-secondary text-secondary-foreground font-medium" 
                  : "text-muted-foreground hover:text-foreground hover:bg-social-hover"
              }`}
              onClick={() => setActiveNav(item.name)}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
              {item.hasNotification && (
                <div className="absolute right-3 w-2 h-2 bg-social-notification rounded-full"></div>
              )}
            </Button>
          );
        })}
      </div>

      {/* Contacts Section */}
      <div className="flex-1 px-3 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-foreground">Contacts</h3>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-social-hover cursor-pointer transition-colors">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium">
                  {contact.name.charAt(0)}
                </div>
                {contact.isOnline && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></div>
                )}
                {contact.hasStory && (
                  <div className="absolute -inset-0.5 bg-story-gradient rounded-full -z-10"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate">{contact.name}</p>
                <p className="text-xs text-muted-foreground truncate">{contact.status}</p>
              </div>
              <span className="text-xs text-muted-foreground">{contact.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;