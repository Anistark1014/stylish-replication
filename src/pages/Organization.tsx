import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users, Trophy, FileText, Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Organization = () => {
  const [activeTab, setActiveTab] = useState('feed');

  const posts = [
    {
      id: 1,
      author: 'MIT Administration',
      time: '2h',
      content: 'Welcome to the new academic year! We are excited to announce new research opportunities and scholarships available for students.',
      likes: 124,
      comments: 23,
      shares: 8
    },
    {
      id: 2,
      author: 'Computer Science Dept',
      time: '5h',
      content: 'New AI/ML course starting next semester. Limited seats available. Apply now!',
      likes: 89,
      comments: 15,
      shares: 12
    }
  ];

  const clubs = [
    { name: 'Robotics Club', members: 156, category: 'Technology' },
    { name: 'Debate Society', members: 89, category: 'Literary' },
    { name: 'Music Club', members: 234, category: 'Arts' },
    { name: 'Photography Club', members: 178, category: 'Arts' }
  ];

  const highlights = [
    { title: 'Annual Tech Fest 2024', date: 'March 15-17', type: 'Event' },
    { title: 'Research Paper Awards', date: 'Feb 28', type: 'Achievement' },
    { title: 'New Laboratory Opening', date: 'March 1', type: 'Infrastructure' }
  ];

  const articles = [
    { title: 'AI in Healthcare: Student Research', author: 'Dr. Smith', readTime: '5 min' },
    { title: 'Sustainable Campus Initiative', author: 'Green Committee', readTime: '3 min' },
    { title: 'Innovation Lab Success Stories', author: 'Innovation Team', readTime: '7 min' }
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">MIT</span>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">Massachusetts Institute of Technology</h1>
              <p className="text-muted-foreground mb-3">Premier institution for technology and innovation</p>
              <div className="flex gap-4 text-sm">
                <span className="text-foreground"><strong>25,847</strong> Students</span>
                <span className="text-foreground"><strong>1,045</strong> Faculty</span>
                <span className="text-foreground"><strong>156</strong> Programs</span>
              </div>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Follow
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-card border border-border">
            <TabsTrigger value="feed" className="data-[state=active]:bg-secondary">Feed</TabsTrigger>
            <TabsTrigger value="notes" className="data-[state=active]:bg-secondary">
              <Link to="/notes" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Notes
              </Link>
            </TabsTrigger>
            <TabsTrigger value="clubs" className="data-[state=active]:bg-secondary">Clubs</TabsTrigger>
            <TabsTrigger value="highlights" className="data-[state=active]:bg-secondary">Highlights</TabsTrigger>
            <TabsTrigger value="articles" className="data-[state=active]:bg-secondary">Articles</TabsTrigger>
          </TabsList>

          {/* Feed Tab */}
          <TabsContent value="feed" className="mt-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-6">
                {posts.map((post) => (
                  <Card key={post.id} className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-primary-foreground">
                              {post.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{post.author}</p>
                            <p className="text-sm text-muted-foreground">{post.time}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-4">{post.content}</p>
                      <div className="flex items-center gap-6 pt-3 border-t border-border">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <Heart className="w-4 h-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <Share className="w-4 h-4 mr-2" />
                          {post.shares}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Students</span>
                      <span className="text-foreground font-medium">24,156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Online Now</span>
                      <span className="text-foreground font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">New Posts Today</span>
                      <span className="text-foreground font-medium">89</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Clubs Tab */}
          <TabsContent value="clubs" className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              {clubs.map((club, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-foreground">{club.name}</CardTitle>
                      <Badge variant="secondary">{club.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{club.members} members</p>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Join Club
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Highlights Tab */}
          <TabsContent value="highlights" className="mt-6">
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.date}</p>
                      </div>
                      <Badge variant="outline">{highlight.type}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Articles Tab */}
          <TabsContent value="articles" className="mt-6">
            <div className="space-y-4">
              {articles.map((article, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{article.title}</h3>
                        <p className="text-muted-foreground">by {article.author}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{article.readTime}</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Organization;