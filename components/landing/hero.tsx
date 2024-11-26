import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function LandingHero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Create Newsletters That Connect, Convert, and Grow Your Audience
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          MailRite is your all-in-one platform for crafting beautiful newsletters,
          managing subscribers, and analyzing engagement. Start growing your
          audience today.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/signup">
            <Mail className="mr-2 h-4 w-4" /> Start for Free
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          <Link href="/demo">Request Demo</Link>
        </Button>
      </div>
      <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          No credit card required
        </div>
        <div className="flex items-center">
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          14-day free trial
        </div>
        <div className="flex items-center">
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Cancel anytime
        </div>
      </div>
    </section>
  );
}