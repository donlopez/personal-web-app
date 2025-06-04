import React from 'react';
import '../styles/BlogPage.css';
import profilePic from '../assets/ProfileWeb.png';
import blogBanner from '../assets/framework-comparison-banner.png';
import { Helmet } from 'react-helmet';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

function FrameworkComparison() {
  const pageUrl = window.location.href;
  const pageTitle = 'React vs Angular vs Vue: Choosing the Right Framework';

  return (
    <div className="blog-article">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Explore the strengths of React, Angular, and Vue to help pick the best frontend framework for your next project." />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="A side-by-side comparison of React, Angular, and Vue—breaking down their features, use cases, and pros & cons." />
        <meta property="og:image" content={`${window.location.origin}/assets/framework-comparison-banner.png`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="Explore React, Angular, and Vue to find the best frontend framework for your project." />
        <meta name="twitter:image" content={`${window.location.origin}/assets/framework-comparison-banner.png`} />
      </Helmet>

      <div className="blog-header">
        <div className="author-info">
          <img src={profilePic} alt="Julio Lopez" className="author-pic" />
          <div className="author-text">
            <h2 className="author-name">Julio Lopez</h2>
            <p className="blog-date">March 26, 2025</p>
          </div>
        </div>
        <img src={blogBanner} alt="Framework Comparison Banner" className="blog-banner" />
      </div>

      <div className="blog-body">
        <p>
          JavaScript frameworks have redefined modern web development. React, Angular, and Vue are three of the most powerful tools
          available—but choosing the right one can make or break your project (or sanity).
        </p>

        <p>
          React, created by Facebook, has exploded in popularity thanks to its component-based structure and ecosystem. It doesn’t
          prescribe a specific architecture, which offers freedom but also means you’ll likely need to learn Redux, React Router,
          and other libraries. For developers who value flexibility and performance, React is a powerhouse.
        </p>

        <p>
          Angular, built by Google, is a complete framework. It includes routing, form validation, HTTP requests, dependency
          injection—everything you need out of the box. But with great power comes great complexity. Angular’s TypeScript syntax,
          lifecycle hooks, and steep learning curve make it ideal for large teams and enterprise-level apps.
        </p>

        <p>
          Vue is the newcomer, but it combines the best of both worlds: simple, reactive data binding like React with optional
          structure like Angular. Its learning curve is gentle, which makes it a great choice for small projects, freelancers, and
          hobbyists. Vue’s popularity in Asia and growing support in Western countries shows it’s no longer a niche player.
        </p>

        <p>
          If you're building large-scale apps with strict architectural needs, Angular is worth the investment. If you want full
          control and are willing to assemble your own stack, React delivers. If you're new and want quick results with clean code,
          Vue is your best friend.
        </p>

        <p>
          Remember—no tool is objectively better. Choose the one that best aligns with your team, your timeline, and your
          long-term goals.
        </p>

        <div className="share-buttons">
          <p>Share this article:</p>
          <FacebookShareButton url={pageUrl} quote={pageTitle} hashtag="#frontendframeworks">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={pageUrl} title={pageTitle} hashtags={['react', 'angular', 'vue']}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton url={pageUrl} subject="Check this out" body="This blog on frontend frameworks might interest you!">
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}

export default FrameworkComparison;
