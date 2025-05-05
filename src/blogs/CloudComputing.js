import React from 'react';
import '../styles/BlogPage.css';
import profilePic from '../assets/ProfPic1.jpg';
import blogBanner from '../assets/cloud-computing-banner.png';
import { Helmet } from 'react-helmet';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

function CloudComputing() {
  const pageUrl = window.location.href;
  const pageTitle = 'Breaking into Cloud Computing: A Beginner’s Guide';

  return (
    <div className="blog-article">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Learn how to start your journey in cloud computing—from certifications to hands-on experience." />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Tips and tools to launch your cloud career." />
        <meta property="og:image" content={`${window.location.origin}/assets/cloud-computing-banner.png`} />
        <meta property="og:url" content={pageUrl} />
      </Helmet>

      <div className="blog-header">
        <div className="author-info">
          <img src={profilePic} alt="Julio Lopez" className="author-pic" />
          <div className="author-text">
            <h2 className="author-name">Julio Lopez</h2>
            <p className="blog-date">April 2025</p>
          </div>
        </div>
        <img src={blogBanner} alt="Breaking into Cloud Computing Banner" className="blog-banner" />
      </div>

      <div className="blog-body">
        <p>
          Cloud computing is no longer the future—it’s the foundation of today’s digital economy. From startups to Fortune 500
          companies, every organization is investing in cloud platforms to scale faster, reduce costs, and innovate rapidly.
        </p>

        <p>
          But for new professionals entering the job market, the first step into cloud computing can be confusing. With a sea of
          acronyms, tools, and services, how do you get started without feeling overwhelmed?
        </p>

        <p>
          Start with understanding the “big three” cloud providers: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud
          Platform (GCP). While each has its quirks, all share core services—compute (virtual machines), storage, databases, and
          networking. Mastering these basics forms your cloud foundation.
        </p>

        <p>
          Most newcomers begin with certifications like the AWS Certified Cloud Practitioner or Azure Fundamentals. These aren’t
          just résumé boosters—they build your cloud vocabulary and teach how services connect. But certifications alone won’t land
          you a job. The real key is experience.
        </p>

        <p>
          Create an AWS free tier account and experiment. Launch EC2 instances, store files in S3, configure IAM roles. Build a
          static website or create a small database project. Document your journey—your mistakes and successes. These projects
          become your portfolio.
        </p>

        <p>
          Finally, immerse yourself in the community. Join cloud meetups, subscribe to newsletters, follow thought leaders on X (formerly Twitter). The cloud world evolves fast—staying connected means staying current.
        </p>

        <p>
          Cloud computing is a marathon, not a sprint. With the right mindset, a plan for learning, and a bit of curiosity, you’ll
          be well on your way to becoming a valuable asset in any tech organization.
        </p>

        <div className="share-buttons">
          <p>Share this article:</p>
          <FacebookShareButton url={pageUrl} quote={pageTitle} hashtag="#cloudcomputing">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={pageUrl} title={pageTitle} hashtags={['cloudcomputing', 'techcareers']}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton url={pageUrl} subject="Check this out" body="This guide to starting in cloud computing is worth reading!">
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}

export default CloudComputing;