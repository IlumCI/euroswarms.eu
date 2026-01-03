import type { ComponentProps } from 'react';

interface NavigationProps extends ComponentProps<'nav'> {}

/**
 * Main navigation component for the Euroswarms Research website.
 *
 * @returns Navigation bar with logo and links
 */
export function Navigation({ className, ...props }: NavigationProps) {
  return (
    <header>
      <nav className={className} {...props}>
        <a href="/" className="brand">
          <img src="/assets/images/symbolOnly.png" alt="Euroswarms" />
          <span>Euroswarms Research</span>
        </a>
        <div className="links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/publications">Publications</a>
          <a href="/docs">Documentation</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

