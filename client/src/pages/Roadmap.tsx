import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { studyPlans } from "@/lib/resourcesData";
import { CheckCircle2, Circle } from "lucide-react";
import InteractiveRoadmap from "@/components/InteractiveRoadmap";

export default function Roadmap() {
  const [activeTab, setActiveTab] = useState("fullstack");

  const interactiveRoadmapData = [
    {
      title: "Full-Stack Development",
      color: "bg-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      nodes: [
        {
          id: "fs-1",
          title: "HTML Basics",
          status: "completed" as const,
          description: "Learn HTML fundamentals, semantic markup, and document structure",
          icon: "📄"
        },
        {
          id: "fs-2",
          title: "CSS Fundamentals",
          status: "completed" as const,
          description: "Master CSS selectors, box model, Flexbox, and Grid layouts",
          icon: "🎨"
        },
        {
          id: "fs-3",
          title: "JavaScript Basics",
          status: "in-progress" as const,
          description: "Learn variables, functions, DOM manipulation, and async programming",
          icon: "⚡"
        },
        {
          id: "fs-4",
          title: "React.js",
          status: "available" as const,
          description: "Master components, hooks, state management, and routing",
          icon: "⚛️"
        },
        {
          id: "fs-5",
          title: "Node.js & Express",
          status: "locked" as const,
          description: "Learn server-side JavaScript, APIs, and middleware",
          icon: "🖥️"
        }
      ]
    },
    {
      title: "DevOps",
      color: "bg-green-600",
      bgColor: "bg-green-100 dark:bg-green-900",
      nodes: [
        {
          id: "do-1",
          title: "Linux Basics",
          status: "available" as const,
          description: "Learn Linux fundamentals, shell commands, and system administration",
          icon: "🐧"
        },
        {
          id: "do-2",
          title: "Git & Version Control",
          status: "available" as const,
          description: "Master Git workflows, branching, and collaborative development",
          icon: "🔀"
        },
        {
          id: "do-3",
          title: "Docker",
          status: "locked" as const,
          description: "Learn containerization, Docker Compose, and image management",
          icon: "🐳"
        },
        {
          id: "do-4",
          title: "CI/CD Pipelines",
          status: "locked" as const,
          description: "Implement Jenkins, GitHub Actions, and automated testing",
          icon: "🔄"
        },
        {
          id: "do-5",
          title: "Kubernetes",
          status: "locked" as const,
          description: "Master container orchestration, deployments, and scaling",
          icon: "☸️"
        }
      ]
    },
    {
      title: "AI/ML",
      color: "bg-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      nodes: [
        {
          id: "ml-1",
          title: "Python Basics",
          status: "available" as const,
          description: "Learn Python fundamentals for data science and ML",
          icon: "🐍"
        },
        {
          id: "ml-2",
          title: "Data Science",
          status: "available" as const,
          description: "Master NumPy, Pandas, and data visualization",
          icon: "📊"
        },
        {
          id: "ml-3",
          title: "Machine Learning",
          status: "locked" as const,
          description: "Learn supervised/unsupervised learning and model evaluation",
          icon: "🤖"
        },
        {
          id: "ml-4",
          title: "Deep Learning",
          status: "locked" as const,
          description: "Master neural networks, TensorFlow, and PyTorch",
          icon: "🧠"
        },
        {
          id: "ml-5",
          title: "Advanced AI",
          status: "locked" as const,
          description: "Explore LLMs, transformers, and cutting-edge AI techniques",
          icon: "✨"
        }
      ]
    }
  ];

  const roadmapItems = {
    fullstack: [
      { title: "HTML Basics", status: "completed" },
      { title: "CSS Basics", status: "completed" },
      { title: "JavaScript Basics", status: "in-progress" },
      { title: "Responsive Design", status: "available" },
      { title: "React.js", status: "available" },
      { title: "Angular", status: "locked" },
      { title: "Node.js", status: "locked" },
      { title: "Express.js", status: "locked" },
      { title: "Databases", status: "locked" },
      { title: "Full-Stack Project", status: "locked" }
    ],
    devops: [
      { title: "Linux Basics", status: "available" },
      { title: "Git & Version Control", status: "available" },
      { title: "Docker", status: "locked" },
      { title: "Kubernetes", status: "locked" },
      { title: "CI/CD Pipelines", status: "locked" },
      { title: "Terraform", status: "locked" },
      { title: "Ansible", status: "locked" },
      { title: "Monitoring & Logging", status: "locked" }
    ],
    aiml: [
      { title: "Python Basics", status: "available" },
      { title: "Data Science Libraries", status: "available" },
      { title: "Statistics & Probability", status: "locked" },
      { title: "Machine Learning Basics", status: "locked" },
      { title: "Supervised Learning", status: "locked" },
      { title: "Unsupervised Learning", status: "locked" },
      { title: "Deep Learning", status: "locked" },
      { title: "Neural Networks", status: "locked" }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "in-progress":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      case "available":
        return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200";
      case "locked":
        return "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400";
      default:
        return "";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "available":
        return "Available";
      case "locked":
        return "Locked";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Your Learning Roadmap</h1>
            <p className="text-lg text-muted-foreground">
              Follow a structured path to master Full-Stack Development, DevOps, and AI/ML
            </p>
          </div>

          {/* Interactive Visual Roadmap */}
          <Card className="mb-12 p-8">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">Interactive Learning Roadmap</CardTitle>
              <CardDescription>Click on any node to see details and unlock new topics</CardDescription>
            </CardHeader>
            <CardContent>
              <InteractiveRoadmap tracks={interactiveRoadmapData} />
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="fullstack">Full-Stack</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="aiml">AI/ML</TabsTrigger>
            </TabsList>

            {Object.entries(roadmapItems).map(([key, items]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                {/* Study Plan Overview */}
                {studyPlans.find(plan => plan.id === key) && (
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border-2">
                    <CardHeader>
                      <CardTitle className="text-2xl">{studyPlans.find(plan => plan.id === key)?.title}</CardTitle>
                      <CardDescription className="text-base">
                        Duration: {studyPlans.find(plan => plan.id === key)?.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6">{studyPlans.find(plan => plan.id === key)?.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {studyPlans.find(plan => plan.id === key)?.modules.map((module, idx) => (
                          <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">{module.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{module.duration}</p>
                            <div className="space-y-1">
                              {module.topics.map((topic, topicIdx) => (
                                <p key={topicIdx} className="text-sm">• {topic}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Roadmap Items */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Learning Path</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, idx) => (
                      <Card key={idx} className={`${getStatusColor(item.status)} border-2`}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3">
                            {item.status === "completed" ? (
                              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                            ) : (
                              <Circle className="h-6 w-6 flex-shrink-0 mt-1" />
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-sm opacity-75 mt-1">{getStatusLabel(item.status)}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <Card className="bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Legend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        <span className="text-sm">Completed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                        <span className="text-sm">In Progress</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                        <span className="text-sm">Available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                        <span className="text-sm">Locked</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
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

