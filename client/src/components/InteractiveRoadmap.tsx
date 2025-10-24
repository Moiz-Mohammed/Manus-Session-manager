import { useState } from "react";
import { ChevronRight, CheckCircle2, Circle, Lock } from "lucide-react";

interface RoadmapNode {
  id: string;
  title: string;
  status: "completed" | "in-progress" | "available" | "locked";
  description: string;
  icon: string;
}

interface RoadmapTrack {
  title: string;
  nodes: RoadmapNode[];
  color: string;
  bgColor: string;
}

interface InteractiveRoadmapProps {
  tracks: RoadmapTrack[];
}

export default function InteractiveRoadmap({ tracks }: InteractiveRoadmapProps) {
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500 text-white";
      case "in-progress":
        return "bg-blue-500 text-white";
      case "available":
        return "bg-gray-400 text-white";
      case "locked":
        return "bg-gray-600 text-white";
      default:
        return "";
    }
  };

  const getStatusBorder = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500";
      case "in-progress":
        return "border-blue-500";
      case "available":
        return "border-gray-400";
      case "locked":
        return "border-gray-600";
      default:
        return "";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-6 w-6" />;
      case "in-progress":
        return <Circle className="h-6 w-6 animate-pulse" />;
      case "available":
        return <Circle className="h-6 w-6" />;
      case "locked":
        return <Lock className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12">
      {tracks.map((track, trackIdx) => (
        <div key={trackIdx} className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-4 h-4 rounded-full ${track.color}`}></div>
            <h3 className="text-2xl font-bold">{track.title}</h3>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className={`absolute top-8 left-0 right-0 h-1 ${track.bgColor} -z-10`}></div>

            {/* Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
              {track.nodes.map((node, nodeIdx) => (
                <div
                  key={node.id}
                  className="flex flex-col items-center"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Node Circle */}
                  <button
                    onClick={() =>
                      setExpandedNode(expandedNode === node.id ? null : node.id)
                    }
                    className={`relative mb-4 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${getStatusColor(
                      node.status
                    )} border-4 ${getStatusBorder(node.status)} cursor-pointer`}
                  >
                    <span className="text-2xl">{node.icon}</span>
                  </button>

                  {/* Node Title */}
                  <div
                    className={`text-center transition-all duration-300 ${
                      hoveredNode === node.id ? "scale-105" : ""
                    }`}
                  >
                    <p className="font-semibold text-sm md:text-base break-words max-w-[120px]">
                      {node.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 capitalize">
                      {node.status === "in-progress" ? "In Progress" : node.status}
                    </p>
                  </div>

                  {/* Expanded Details */}
                  {expandedNode === node.id && (
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 border-2 border-blue-500 z-20 animate-in fade-in slide-in-from-top-2">
                      <div className="space-y-3">
                        <h4 className="font-bold text-sm">{node.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {node.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-medium">
                          {getStatusIcon(node.status)}
                          <span className="capitalize">
                            {node.status === "in-progress"
                              ? "In Progress"
                              : node.status}
                          </span>
                        </div>
                        <button className="w-full mt-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors">
                          {node.status === "locked"
                            ? "Unlock"
                            : node.status === "completed"
                            ? "Review"
                            : "Continue"}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Connector Arrow */}
                  {nodeIdx < track.nodes.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2 top-8 text-muted-foreground">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Track Progress</span>
              <span className="text-sm font-bold">
                {Math.round(
                  (track.nodes.filter((n) => n.status === "completed").length /
                    track.nodes.length) *
                    100
                )}
                %
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${track.color}`}
                style={{
                  width: `${
                    (track.nodes.filter((n) => n.status === "completed").length /
                      track.nodes.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

