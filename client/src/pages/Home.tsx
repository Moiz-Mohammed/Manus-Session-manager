import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { progressData, challenges } from "@/lib/resourcesData";
import { Code, Server, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master Full-Stack Development, DevOps, and AI/ML
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your personalized learning journey to become a proficient developer capable of building, deploying, and managing applications with AI integration.
            </p>
            <div className="flex gap-4">
              <Link href="/roadmap">
                <a>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    View Your Roadmap
                  </Button>
                </a>
              </Link>
              <Link href="/challenges">
                <a>
                  <Button size="lg" variant="outline">
                    Today's Challenge
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Your Learning Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Full-Stack */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Code className="h-8 w-8 text-blue-600" />
                  <CardTitle>Full-Stack Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${progressData.fullstack}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{progressData.fullstack}% Complete</p>
                </div>
              </CardContent>
            </Card>

            {/* DevOps */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Server className="h-8 w-8 text-green-600" />
                  <CardTitle>DevOps</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all"
                      style={{ width: `${progressData.devops}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{progressData.devops}% Complete</p>
                </div>
              </CardContent>
            </Card>

            {/* AI/ML */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="h-8 w-8 text-purple-600" />
                  <CardTitle>AI/ML</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${progressData.aiml}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{progressData.aiml}% Complete</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Today's Challenge Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Today's Challenge</h2>
          {challenges.length > 0 && (
            <Card className="border-2 border-orange-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                        Coding
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        Beginner
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{challenges[0].title}</CardTitle>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-orange-600">{challenges[0].points}</p>
                    <p className="text-sm text-muted-foreground">points</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{challenges[0].description}</p>
                <Button className="bg-orange-600 hover:bg-orange-700">Start Challenge</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Learning Resources Preview */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>HTML Resources</CardTitle>
                <CardDescription>Comprehensive documentation, tutorials, and examples for HTML.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/resources?category=html">
                  <a>
                    <Button variant="outline" className="w-full">View Resources</Button>
                  </a>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>CSS Resources</CardTitle>
                <CardDescription>Styling guides, responsive design patterns, and CSS frameworks.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/resources?category=css">
                  <a>
                    <Button variant="outline" className="w-full">View Resources</Button>
                  </a>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>JavaScript Resources</CardTitle>
                <CardDescription>JavaScript fundamentals, ES6 features, and advanced concepts.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/resources?category=javascript">
                  <a>
                    <Button variant="outline" className="w-full">View Resources</Button>
                  </a>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/resources">
              <a>
                <Button size="lg" variant="outline">View All Resources</Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Challenges */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Learning Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.slice(0, 6).map((challenge) => (
              <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        challenge.type === 'coding' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                        challenge.type === 'quiz' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                        'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      }`}>
                        {challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        challenge.difficulty === 'beginner' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        challenge.difficulty === 'intermediate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                        'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                      }`}>
                        {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-muted-foreground">{challenge.points}pts</span>
                  </div>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{challenge.description}</p>
                  <Button variant="outline" className="w-full">Start Challenge</Button>
                </CardContent>
              </Card>
            ))}
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

