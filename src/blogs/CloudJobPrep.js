import React from 'react';
import '../styles/BlogPage.css';
import profilePic from '../assets/ProfileWeb.png';
import blogBanner from '../assets/cloud-job-prep-banner.png';
import { Helmet } from 'react-helmet';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

function CloudJobPrep() {
  const pageUrl = 'https://www.lopezbio.com/blog/cloud-job-prep';
  const pageTitle = 'Bridging the Gap: Preparing for Cloud Jobs with Real Experience';

  return (
    <div className="blog-article">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="How hands-on experience can better prepare students for careers in cloud computing." />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Insights into cloud education, real experience, and the gap between certification and competence." />
        <meta property="og:image" content="https://www.lopezbio.com/assets/cloud-job-prep-banner.png" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="How real-world cloud experience bridges the gap between learning and doing." />
        <meta name="twitter:image" content="https://www.lopezbio.com/assets/cloud-job-prep-banner.png" />
      </Helmet>

      <div className="blog-header">
        <div className="author-info">
          <img src={profilePic} alt="Julio Lopez" className="author-pic" />
          <div className="author-text">
            <h2 className="author-name">Julio Lopez</h2>
            <p className="blog-date">April 14, 2025</p>
          </div>
        </div>
        <img src={blogBanner} alt="Bridging the Gap Banner" className="blog-banner" />
      </div>

      <div className="blog-body">
        <p>
          Certifications in the cloud computing job market are not enough. Many students spend months preparing for exams,
          only to be told they lack real-world skills. Cloud consultant Soleyman Shahir put it bluntly: despite many certs,
          he was often told companies were “looking for someone with more hands-on skills” (02:05–02:09). The disconnect
          between classroom learning and job expectations is sharp.
        </p>
        <p>
          While demand for cloud services grows, companies struggle to hire skilled professionals. Certifications focus
          heavily on theory, often ignoring practical application. As Shahir explained, “those fancy certifications don’t
          translate to on-the-job performance” (03:14–03:16). Employers are forced to retrain new hires or lower their
          standards.
        </p>
        <p>
          Bootcamps and cert programs often fail to build actual competence. Researchers like Holdgraf et al. argue that
          these programs cannot simulate the scale and complexity of enterprise systems. Many graduates never touch AWS,
          Azure, or GCP during their education, and are unprepared for the real-world cloud environments they’ll face on day one.
        </p>
        <p>
          The solution? Experiential learning: cloud labs, team projects, and real deployments. Studies show these approaches
          dramatically improve confidence, performance, and job readiness. According to Ouh and Gan, hands-on training boosts
          students’ understanding and makes certifications more meaningful when paired with practical experience.
        </p>
        <p>
          Tools like Docker-based Jupyter labs let students simulate real cloud infrastructure. According to Holdgraf et al.,
          containerized lab environments help learners apply concepts in realistic scenarios. These platforms can be accessed
          remotely and allow collaboration among students, offering an ideal learning experience for schools with limited resources.
        </p>
        <p>
          Supporting these findings, Oleksiuk et al. conducted a study using ANOVA to compare students trained with and without
          hands-on cloud labs. Their results showed a clear performance increase among students who had practical lab access, as
          they were more engaged, confident, and technically competent.
        </p>
        <p>
          The urgency for change is also evident in the workforce. Researcher Ling Li points out that by 2025, over 50% of all
          employees will require reskilling due to evolving technologies. This reinforces the need for education systems to align
          with workforce demands, preparing students not just for exams—but for real roles in the cloud industry.
        </p>
        <p>
          Fortunately, there are already tools and support in place. Tech companies like AWS and Microsoft provide cloud credits,
          pre-built labs, and learning paths for educators. By adopting even small-scale labs or capstone projects, schools can
          begin to close the experience gap and prepare students more effectively.
        </p>
        <p>
          Employers must also evolve. Shahir notes: “what matters is proving you can apply knowledge” (03:21–03:27). Instead of
          relying solely on certificates, companies should evaluate practical problem-solving skills, real deployments, and
          project experience during the hiring process.
        </p>
        <p>
          In short: to succeed in cloud, students need experience, not just certificates. Schools must adopt dynamic,
          skills-based teaching. Employers must prioritize hands-on competence. Together, we can reshape cloud education
          and hiring for the better.
        </p>

        <div className="share-buttons">
          <p>Share this article:</p>
          <FacebookShareButton url={pageUrl} quote={pageTitle} hashtag="#cloudjobs">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={pageUrl} title={pageTitle} hashtags={['cloudcomputing', 'careers']}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton url={pageUrl} subject="Check this out" body="You might find this blog insightful!">
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>

        <h2>Works Cited</h2>
        <ul className="works-cited">
          <li>
            Holdgraf et al. “Portable Learning Environments...” arXiv:1703.04900, 2017.  
            <a href="https://arxiv.org/pdf/1703.04900" target="_blank" rel="noopener noreferrer">
              https://arxiv.org/pdf/1703.04900
            </a>
          </li>
          <li>
            Li, Ling. “Reskilling and Upskilling...” Information System Frontier, vol. 26, no. 11, 2022, pp. 1697–1712.  
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9278314/" target="_blank" rel="noopener noreferrer">
              PMC9278314
            </a>
          </li>
          <li>
            Oleksiuk et al. "Evaluating the Effectiveness..." CEUR Workshop Proceedings, vol. 3679, 2024, pp. 111–126.  
            <a href="https://ceur-ws.org/Vol-3679/paper15.pdf" target="_blank" rel="noopener noreferrer">
              https://ceur-ws.org/Vol-3679/paper15.pdf
            </a>
          </li>
          <li>
            Ouh, Eng Lieh, and Gan, Benjamin. “Are You Cloud-Certified?” arXiv:2305.13662, 2023.  
            <a href="https://arxiv.org/pdf/2305.13662" target="_blank" rel="noopener noreferrer">
              https://arxiv.org/pdf/2305.13662
            </a>
          </li>
          <li>
            Shahir, Soleyman. “Why Your Cloud Certifications Are Worthless...” YouTube, Tech with Soleyman.  
            <a href="https://www.youtube.com/watch?v=q9HLmyM7ql0&t=12s" target="_blank" rel="noopener noreferrer">
              https://youtube.com/watch?v=q9HLmyM7ql0&t=12s
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CloudJobPrep;
