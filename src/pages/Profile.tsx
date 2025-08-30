import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Heart, MessageCircle, Share } from 'lucide-react';

const Profile = () => {
  const productions = [
    { title: 'Echoes of The Heart', artist: 'Maria Fernanda', duration: '2:24', listens: '45,48,256', color: 'bg-orange-500' },
    { title: 'Echoes of The Heart', artist: 'Maria Fernanda', duration: '2:24', listens: '45,48,256', color: 'bg-purple-500' },
    { title: 'Echoes of The Heart', artist: 'Maria Fernanda', duration: '2:24', listens: '45,48,256', color: 'bg-gray-500' }
  ];

  const collections = [
    { title: 'Stateful Symphony', artist: 'Berth Binary', image: '/assets/collection1.jpg', color: 'bg-yellow-400' },
    { title: 'React Rendezvous', artist: 'Ethan Byte', image: '/assets/collection2.jpg', color: 'bg-green-600' },
    { title: 'Functional Fury', artist: 'Berth Binary', image: '/assets/collection3.jpg', color: 'bg-blue-500' },
    { title: 'React Rendezvous', artist: 'Ethan Byte', image: '/assets/collection4.jpg', color: 'bg-cyan-400' },
    { title: 'Stateful Symphony', artist: 'Berth Binary', image: '/assets/collection5.jpg', color: 'bg-green-400' },
    { title: 'Async Awakenings', artist: 'Nina Nextcode', image: '/assets/collection6.jpg', color: 'bg-gray-600' }
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Profile</h1>
          <p className="text-muted-foreground">View all your saved details here.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                  <img 
                    src="/lovable-uploads/9422bf23-a7dd-4c57-8b25-083c1238594c.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Maria Fernanda</h2>
                <p className="text-sm text-muted-foreground mb-4">Premium User</p>
                
                {/* Social Media */}
                <div className="flex justify-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio & Details */}
          <Card className="bg-card border-border lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-foreground">Bio & other details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">My Role</p>
                  <p className="text-foreground font-medium">Beatmaker</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">My Experience Level</p>
                  <p className="text-foreground font-medium">Intermediate</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">My 3 Favorite Artists</p>
                  <p className="text-foreground font-medium">Ninho, Travis Scott, Metro Boomin</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">My Favorite Music Genre</p>
                  <p className="text-foreground font-medium">Trap</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">The Software or Equipment I Use</p>
                  <p className="text-foreground font-medium">Ableton</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">My Preferred Music Mood</p>
                  <p className="text-foreground font-medium">Melancholic</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">My City or Region</p>
                  <p className="text-foreground font-medium">California, USA</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Availability</p>
                  <Badge className="bg-green-600 text-white">Available for Collaboration</Badge>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Badges</p>
                <Badge variant="secondary" className="mr-2">Top Collaborator</Badge>
                
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">#Drill</Badge>
                    <Badge variant="outline">#Melancholic</Badge>
                    <Badge variant="outline">#Rap-US</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Productions */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">My Productions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {productions.map((production, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-social-hover transition-colors">
                  <div className={`w-12 h-12 ${production.color} rounded-lg flex items-center justify-center`}>
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{production.title}</h4>
                    <p className="text-sm text-muted-foreground">{production.artist}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{production.duration}</div>
                  <div className="text-sm text-muted-foreground">{production.listens}</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Collection */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">My Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {collections.map((item, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className={`aspect-square ${item.color} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                    <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{item.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;