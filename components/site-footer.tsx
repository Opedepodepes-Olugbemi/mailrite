import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">MailRite</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-[250px]">
              Modern newsletter platform for creators and businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Product</h3>
              <Link href="/features" className="text-sm text-muted-foreground hover:underline">Features</Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:underline">Pricing</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:underline">Blog</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Company</h3>
              <Link href="/about" className="text-sm text-muted-foreground hover:underline">About</Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:underline">Careers</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:underline">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Legal</h3>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">Privacy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:underline">Terms</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MailRite. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://twitter.com" className="text-sm text-muted-foreground hover:underline">Twitter</Link>
            <Link href="https://github.com" className="text-sm text-muted-foreground hover:underline">GitHub</Link>
            <Link href="https://discord.com" className="text-sm text-muted-foreground hover:underline">Discord</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}