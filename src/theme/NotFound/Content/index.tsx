import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import styles from "../styles.module.css";

export default function NotFoundContent({
  className,
}: {
  className?: string;
}): React.ReactElement {
  return (
    <main
      className={clsx(
        "container margin-vert--xl",
        styles.notFoundContainer,
        className,
      )}
    >
      <div className={styles.notFoundCard}>
        <div className={styles.notFoundIllustration}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
            <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
          </svg>
        </div>

        <div className={styles.notFoundBadge}>404</div>

        <h1 className={styles.notFoundTitle}>
          <Translate
            id="theme.NotFound.title"
            description="The title of the 404 page"
          >
            Page Not Found
          </Translate>
        </h1>

        <p className={styles.notFoundDescription}>
          <Translate
            id="theme.NotFound.p1"
            description="The first paragraph of the 404 page"
          >
            We couldn't find what you were looking for. The page may have been
            moved, renamed, or no longer exists.
          </Translate>
        </p>

        <div className={styles.notFoundActions}>
          <Link to="/" className="button button--primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Home
          </Link>
          <Link to="/docs/intro" className="button button--secondary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Documentation
          </Link>
        </div>

        <div className={styles.notFoundQuickLinks}>
          <div className={styles.notFoundQuickLinksTitle}>Quick Navigation</div>
          <div className={styles.notFoundLinksGrid}>
            <Link to="/docs/intro" className={styles.notFoundLink}>
              🚀 Getting Started
            </Link>
            <Link
              to="/docs/getting-started/launch-guide"
              className={styles.notFoundLink}
            >
              📖 Launch Guide
            </Link>
            <Link
              to="/docs/getting-started/home-dashboard"
              className={styles.notFoundLink}
            >
              📊 Home Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
