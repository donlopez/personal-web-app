import React from 'react';
import '../styles/BlogPage.css';
import profilePic from '../assets/ProfPic1.jpg';

function CloudComputing() {
  return (
    <div className="blog-article">
      <div className="blog-header">
        <div className="author-info">
          <img src={profilePic} alt="Julio Lopez" className="author-pic" />
          <div className="author-text">
            <h2 className="author-name">Julio Lopez</h2>
            <p className="blog-date">April 2025</p>
          </div>
        </div>
        <h1 className="blog-title">Breaking into Cloud Computing: A Beginner’s Guide</h1>
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
      </div>
    </div>
  );
}

export default CloudComputing;
