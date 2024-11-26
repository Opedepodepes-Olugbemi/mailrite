import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Users, BarChart3, Zap, Globe, Lock } from "lucide-react";

const features = [
  {
    title: "Rich Text Editor",
    description: "Powerful WYSIWYG editor with real-time collaboration and autosave.",
    icon: Mail,
  },
  {
    title: "Subscriber Management",
    description: "Organize subscribers with tags, segments, and custom fields.",
    icon: Users,
  },
  {
    title: "Analytics Dashboard",
    description: "Track engagement with detailed insights and subscriber analytics.",
    icon: BarChart3,
  },
  {
    title: "Automation",
    description: "Create automated email sequences and smart segmentation.",
    icon: Zap,
  },
  {
    title: "Custom Domains",
    description: "Use your own domain for a professional brand presence.",
    icon: Globe,
  },
  {
    title: "Security First",
    description: "Enterprise-grade security with advanced encryption.",
    icon: Lock,
  },
];

export function LandingFeatures() {
  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to create, send, and analyze your newsletters
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-14 w-14 rounded-lg bg-primary p-4 text-primary-foreground" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}