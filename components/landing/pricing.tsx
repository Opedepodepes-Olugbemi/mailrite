import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: "$9",
    features: [
      "Up to 1,000 subscribers",
      "Unlimited emails",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    description: "For growing newsletters",
    price: "$29",
    features: [
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "Custom domains",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    features: [
      "Unlimited subscribers",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
    ],
  },
];

export function LandingPricing() {
  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the perfect plan for your newsletter
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-3xl font-bold">{plan.price}</div>
              <p className="text-sm text-muted-foreground">per month</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}