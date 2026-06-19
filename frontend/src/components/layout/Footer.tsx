import { Link } from 'react-router-dom'

import { Logo } from '@/components/Logo'
import { navLinks } from '@/data/mockLanding'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="nav" to="/" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Debate anyone. Sharpen your mind. The AI-powered platform for
              practicing communication, persuasion, and critical thinking.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Account</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/login"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Debatrix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
