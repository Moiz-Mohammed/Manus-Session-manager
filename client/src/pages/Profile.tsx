import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { userProfile } from "@/lib/resourcesData";
import { Flame, Trophy, Clock, BookOpen } from "lucide-react";

export default function Profile() {
  const badges = [
    { id: 1, name: "HTML Master", icon: "🏆" },
    { id: 2, name: "CSS Stylist", icon: "🎨" },
    { id: 3, name: "7-Day Streak", icon: "🔥" },
    { id: 4, name: "Challenge Seeker", icon: "⚡" },
    { id: 5, name: "React Developer", icon: "⚛️" },
    { id: 6, name: "Backend Wizard", icon: "🧙" },
    { id: 7, name: "DevOps Hero", icon: "🚀" },
    { id: 8, name: "ML Enthusiast", icon: "🤖" },
    { id: 9, name: "Code Reviewer", icon: "👀" },
    { id: 10, name: "Team Player", icon: "👥" },
    { id: 11, name: "Night Owl", icon: "🌙" },
    { id: 12, name: "Speed Coder", icon: "⚡" }
  ];

  const recentActivity = [
    { action: "Completed CSS Flexbox Challenge", time: "2 hours ago" },
    { action: "Earned CSS Stylist Badge", time: "1 day ago" },
    { action: "Started JavaScript Basics", time: "2 days ago" },
    { action: "Completed HTML Fundamentals", time: "3 days ago" },
    { action: "Joined DevLearn Hub", time: "1 week ago" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="py-16">
        <div className="container">
          {/* Profile Header */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border-2">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl">
                  👤
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2">{userProfile.name}</h1>
                  <p className="text-lg text-muted-foreground mb-6">{userProfile.title}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-red-600 flex items-center gap-2">
                        <Flame className="h-6 w-6" />
                        {userProfile.streak}
                      </p>
                      <p className="text-sm text-muted-foreground">day streak</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-600 flex items-center gap-2">
                        <Trophy className="h-6 w-6" />
                        {userProfile.points}
                      </p>
                      <p className="text-sm text-muted-foreground">points</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{userProfile.badges}</p>
                      <p className="text-sm text-muted-foreground">badges</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{userProfile.topicsMastered}</p>
                      <p className="text-sm text-muted-foreground">topics mastered</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Learning Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Learning Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Completed Challenges</h4>
                      <span className="text-2xl font-bold text-blue-600">{userProfile.completedChallenges}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">You've completed {userProfile.completedChallenges} challenges so far!</p>
                  </div>
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Hours Spent Learning</h4>
                      <span className="text-2xl font-bold text-green-600 flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        {userProfile.hoursSpent}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Keep up the great work! You're making excellent progress.</p>
                  </div>
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Topics Mastered</h4>
                      <span className="text-2xl font-bold text-purple-600">{userProfile.topicsMastered}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">You've mastered {userProfile.topicsMastered} topics. Excellent!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest achievements and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-b-0 last:pb-0">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Your Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Your Badges ({userProfile.badges})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {badges.map((badge) => (
                      <div
                        key={badge.id}
                        className="flex flex-col items-center justify-center p-3 bg-secondary rounded-lg hover:shadow-md transition-shadow"
                        title={badge.name}
                      >
                        <span className="text-3xl mb-1">{badge.icon}</span>
                        <p className="text-xs text-center text-muted-foreground truncate">{badge.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Completion Rate</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Consistency</span>
                      <span className="font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Challenge Success</span>
                      <span className="font-semibold">78%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12 mt-auto">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 DevLearn Hub. Your personalized learning platform for Full-Stack Development, DevOps, and AI/ML.</p>
        </div>
      </footer>
    </div>
  );
}

