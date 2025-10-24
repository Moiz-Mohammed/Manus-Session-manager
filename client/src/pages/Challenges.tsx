import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { challenges } from "@/lib/resourcesData";
import { Filter } from "lucide-react";

export default function Challenges() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesDifficulty = !selectedDifficulty || challenge.difficulty === selectedDifficulty;
    const matchesType = !selectedType || challenge.type === selectedType;
    return matchesDifficulty && matchesType;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "fullstack":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      case "devops":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "aiml":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
      default:
        return "";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "intermediate":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
      case "advanced":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
      default:
        return "";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "coding":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      case "quiz":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
      case "project":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
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
            <h1 className="text-4xl font-bold mb-4">Learning Challenges</h1>
            <p className="text-lg text-muted-foreground">
              Test your skills with coding challenges, quizzes, and projects
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                <CardTitle>Filters</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Difficulty</h3>
                  <div className="flex flex-wrap gap-2">
                    {["beginner", "intermediate", "advanced"].map((difficulty) => (
                      <Button
                        key={difficulty}
                        variant={selectedDifficulty === difficulty ? "default" : "outline"}
                        onClick={() => setSelectedDifficulty(selectedDifficulty === difficulty ? null : difficulty)}
                        className="capitalize"
                      >
                        {difficulty}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {["coding", "quiz", "project"].map((type) => (
                      <Button
                        key={type}
                        variant={selectedType === type ? "default" : "outline"}
                        onClick={() => setSelectedType(selectedType === type ? null : type)}
                        className="capitalize"
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges Grid */}
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Showing {filteredChallenges.length} challenge{filteredChallenges.length !== 1 ? "s" : ""}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChallenges.map((challenge) => (
                <Card key={challenge.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex gap-2 flex-wrap">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(challenge.category)}`}>
                          {challenge.category.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(challenge.type)}`}>
                          {challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">{challenge.points}</p>
                        <p className="text-xs text-muted-foreground">points</p>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-6 flex-1">{challenge.description}</p>
                    <Button className="w-full">Start Challenge</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredChallenges.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-muted-foreground">No challenges match your filters. Try adjusting them.</p>
                </CardContent>
              </Card>
            )}
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

