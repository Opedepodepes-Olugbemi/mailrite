import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Content Creator",
    avatar: "SJ",
    content: "MailRite has transformed how I connect with my audience. The analytics are incredible!",
  },
  {
    name: "Michael Chen",
    title: "Marketing Director",
    avatar: "MC",
    content: "The best newsletter platform I've used. Clean interface and powerful features.",
  },
  {
    name: "Emma Davis",
    title: "Newsletter Publisher",
    avatar: "ED",
    content: "Switching to MailRite was the best decision for my growing newsletter business.",
  },
];

export function LandingTestimonials() {
  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Loved by creators
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Don't just take our word for it
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}