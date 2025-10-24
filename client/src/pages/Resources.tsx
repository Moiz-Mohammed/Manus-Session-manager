import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/lib/resourcesData";
import { ExternalLink, BookOpen, Code, Layers } from "lucide-react";

export default function Resources() {
  const [activeTab, setActiveTab] = useState("fullstack");

  const resourceCategories = {
    fullstack: [
      {
        name: "HTML",
        description: "Learn HTML fundamentals and semantic markup",
        icon: Code,
        color: "text-orange-600",
        resources: [
          { title: "MDN Web Docs: HTML", type: "documentation", link: "#" },
          { title: "HTML & CSS Course", type: "course", link: "#" },
          { title: "HTML Best Practices", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "CSS",
        description: "Master styling, layouts, and responsive design",
        icon: Layers,
        color: "text-blue-600",
        resources: [
          { title: "CSS-Tricks", type: "documentation", link: "#" },
          { title: "Flexbox Guide", type: "tutorial", link: "#" },
          { title: "CSS Grid Tutorial", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "JavaScript",
        description: "JavaScript fundamentals and advanced concepts",
        icon: Code,
        color: "text-yellow-600",
        resources: [
          { title: "MDN JavaScript", type: "documentation", link: "#" },
          { title: "JavaScript.info", type: "tutorial", link: "#" },
          { title: "Eloquent JavaScript", type: "course", link: "#" }
        ]
      },
      {
        name: "React.js",
        description: "Component-based architecture and state management",
        icon: Code,
        color: "text-cyan-600",
        resources: [
          { title: "React Official Docs", type: "documentation", link: "#" },
          { title: "React Hooks Guide", type: "tutorial", link: "#" },
          { title: "React Router", type: "documentation", link: "#" }
        ]
      },
      {
        name: "Node.js",
        description: "Server-side JavaScript and API development",
        icon: Code,
        color: "text-green-600",
        resources: [
          { title: "Node.js Official Docs", type: "documentation", link: "#" },
          { title: "Express.js Guide", type: "tutorial", link: "#" },
          { title: "RESTful API Design", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "Databases",
        description: "SQL, NoSQL, and database design patterns",
        icon: Layers,
        color: "text-purple-600",
        resources: [
          { title: "PostgreSQL Docs", type: "documentation", link: "#" },
          { title: "MongoDB Guide", type: "tutorial", link: "#" },
          { title: "Database Design", type: "course", link: "#" }
        ]
      }
    ],
    devops: [
      {
        name: "Docker",
        description: "Containerization and Docker best practices",
        icon: Layers,
        color: "text-blue-600",
        resources: [
          { title: "Docker Documentation", type: "documentation", link: "#" },
          { title: "Docker Tutorial", type: "tutorial", link: "#" },
          { title: "Docker Compose Guide", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "Kubernetes",
        description: "Container orchestration and deployment",
        icon: Layers,
        color: "text-blue-700",
        resources: [
          { title: "Kubernetes Docs", type: "documentation", link: "#" },
          { title: "K8s Tutorial", type: "tutorial", link: "#" },
          { title: "Helm Charts", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "CI/CD",
        description: "Continuous integration and deployment pipelines",
        icon: Code,
        color: "text-green-600",
        resources: [
          { title: "Jenkins Documentation", type: "documentation", link: "#" },
          { title: "GitHub Actions Guide", type: "tutorial", link: "#" },
          { title: "GitLab CI Tutorial", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "Infrastructure as Code",
        description: "Terraform and Ansible for infrastructure automation",
        icon: Code,
        color: "text-purple-600",
        resources: [
          { title: "Terraform Docs", type: "documentation", link: "#" },
          { title: "Ansible Guide", type: "tutorial", link: "#" },
          { title: "IaC Best Practices", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "Monitoring",
        description: "Prometheus, Grafana, and logging solutions",
        icon: Layers,
        color: "text-red-600",
        resources: [
          { title: "Prometheus Docs", type: "documentation", link: "#" },
          { title: "Grafana Tutorial", type: "tutorial", link: "#" },
          { title: "ELK Stack Guide", type: "tutorial", link: "#" }
        ]
      }
    ],
    aiml: [
      {
        name: "Python",
        description: "Python for data science and machine learning",
        icon: Code,
        color: "text-blue-600",
        resources: [
          { title: "Python Docs", type: "documentation", link: "#" },
          { title: "Python for Data Science", type: "course", link: "#" },
          { title: "NumPy & Pandas", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "Machine Learning",
        description: "ML algorithms and model development",
        icon: Layers,
        color: "text-purple-600",
        resources: [
          { title: "Scikit-learn Docs", type: "documentation", link: "#" },
          { title: "ML Crash Course", type: "course", link: "#" },
          { title: "ML Algorithms", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "Deep Learning",
        description: "Neural networks, TensorFlow, and PyTorch",
        icon: Code,
        color: "text-orange-600",
        resources: [
          { title: "TensorFlow Docs", type: "documentation", link: "#" },
          { title: "PyTorch Tutorial", type: "tutorial", link: "#" },
          { title: "Deep Learning Book", type: "course", link: "#" }
        ]
      },
      {
        name: "Data Science",
        description: "Data analysis, visualization, and preprocessing",
        icon: Layers,
        color: "text-green-600",
        resources: [
          { title: "Pandas Documentation", type: "documentation", link: "#" },
          { title: "Data Visualization", type: "tutorial", link: "#" },
          { title: "Data Preprocessing", type: "tutorial", link: "#" }
        ]
      },
      {
        name: "Research Papers",
        description: "Latest AI/ML research and publications",
        icon: BookOpen,
        color: "text-indigo-600",
        resources: [
          { title: "arXiv.org", type: "research", link: "#" },
          { title: "Papers with Code", type: "research", link: "#" },
          { title: "Google Scholar", type: "research", link: "#" }
        ]
      }
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "documentation":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      case "tutorial":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "course":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
      case "research":
        return "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200";
      default:
        return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive documentation, tutorials, and courses for mastering Full-Stack Development, DevOps, and AI/ML
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="fullstack">Full-Stack</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="aiml">AI/ML</TabsTrigger>
            </TabsList>

            {Object.entries(resourceCategories).map(([key, categories]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                      <Card key={idx} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Icon className={`h-8 w-8 ${category.color}`} />
                          </div>
                          <CardTitle>{category.name}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {category.resources.map((resource, resourceIdx) => (
                              <div key={resourceIdx} className="space-y-2">
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1">
                                    <p className="font-medium text-sm">{resource.title}</p>
                                    <span className={`inline-block mt-1 px-2 py-1 rounded text-xs font-medium ${getTypeColor(resource.type)}`}>
                                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                    </span>
                                  </div>
                                  <a href={resource.link} className="text-muted-foreground hover:text-foreground transition-colors">
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
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

