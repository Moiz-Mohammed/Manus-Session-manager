import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2, Circle, Lock, Edit2 } from "lucide-react";

interface ProgressManagerProps {
  languageName: string;
  trackName: string;
  currentStatus: "not-started" | "in-progress" | "completed";
  currentProgress: number;
}

export default function ProgressManager({
  languageName,
  trackName,
  currentStatus,
  currentProgress,
}: ProgressManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [newProgress, setNewProgress] = useState(currentProgress);
  const [newStatus, setNewStatus] = useState(currentStatus);

  const updateLanguageMutation = trpc.progress.updateLanguage.useMutation({
    onSuccess: () => {
      setIsOpen(false);
      // Invalidate the query to refetch updated data
      trpc.useUtils().progress.languages.invalidate();
    },
  });

  const handleSave = () => {
    updateLanguageMutation.mutate({
      languageName,
      trackName,
      status: newStatus,
      progress: newProgress,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "in-progress":
        return "text-blue-600";
      case "not-started":
        return "text-gray-600";
      default:
        return "";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case "in-progress":
        return <Circle className="h-5 w-5 text-blue-600 animate-pulse" />;
      case "not-started":
        return <Circle className="h-5 w-5 text-gray-600" />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Edit2 className="h-4 w-4" />
          Update Progress
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update {languageName} Progress</DialogTitle>
          <DialogDescription>
            Mark your progress for {languageName} in the {trackName} track
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Status</label>
            <div className="space-y-2">
              {(["not-started", "in-progress", "completed"] as const).map((status) => (
                <label key={status} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-secondary">
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={newStatus === status}
                    onChange={(e) => setNewStatus(e.target.value as typeof status)}
                    className="w-4 h-4"
                  />
                  <div className="flex items-center gap-2">
                    {getStatusIcon(status)}
                    <span className="capitalize font-medium">
                      {status === "not-started" ? "Not Started" : status === "in-progress" ? "In Progress" : "Completed"}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Progress Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Progress</label>
              <span className="text-sm font-bold text-blue-600">{newProgress}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={newProgress}
              onChange={(e) => setNewProgress(parseInt(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
            />
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${newProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNewProgress(0);
                setNewStatus("not-started");
              }}
            >
              Reset
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNewProgress(50);
                setNewStatus("in-progress");
              }}
            >
              50%
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNewProgress(100);
                setNewStatus("completed");
              }}
            >
              Complete
            </Button>
          </div>

          {/* Save Button */}
          <Button
            onClick={handleSave}
            disabled={updateLanguageMutation.isPending}
            className="w-full"
          >
            {updateLanguageMutation.isPending ? "Saving..." : "Save Progress"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

