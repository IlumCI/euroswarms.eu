import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) {
    return null;
  }

  const getBreadcrumbName = (path) => {
    const names = {
      'about': 'About',
      'projects': 'Projects',
      'crca': 'CR-CA',
      'installation': 'Installation',
      'documentation': 'Documentation',
      'examples': 'Examples',
      'use-cases': 'Use Cases',
      'publications': 'Publications',
      'docs': 'Documentation',
      'contact': 'Contact',
      'lucre': 'LUCRE',
    };
    return names[path.toLowerCase()] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav className="mb-4 md:mb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <li>
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = getBreadcrumbName(name);

          return (
            <li key={routeTo} className="flex items-center gap-2">
              <span className="text-muted">/</span>
              {isLast ? (
                <span className="text-fg font-medium">{displayName}</span>
              ) : (
                <Link to={routeTo} className="hover:text-accent transition-colors">
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;

