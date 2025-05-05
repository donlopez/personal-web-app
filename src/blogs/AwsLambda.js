import React from 'react';
import '../styles/BlogPage.css';
import profilePic from '../assets/ProfPic1.jpg';
import blogBanner from '../assets/aws-lambda-banner.png';
import { Helmet } from 'react-helmet';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

function AwsLambda() {
  const pageUrl = window.location.href;
  const pageTitle = 'Mastering AWS Lambda: Going Serverless';

  return (
    <div className="blog-article">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Learn how AWS Lambda powers modern serverless applications with speed and scale." />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="A practical guide to building cost-efficient, scalable serverless apps with AWS Lambda." />
        <meta property="og:image" content={`${window.location.origin}/assets/aws-lambda-banner.png`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="A hands-on guide to mastering AWS Lambda, the backbone of serverless architecture." />
        <meta name="twitter:image" content={`${window.location.origin}/assets/aws-lambda-banner.png`} />
      </Helmet>

      <div className="blog-header">
        <div className="author-info">
          <img src={profilePic} alt="Julio Lopez" className="author-pic" />
          <div className="author-text">
            <h2 className="author-name">Julio Lopez</h2>
            <p className="blog-date">April 2025</p>
          </div>
        </div>
        <img src={blogBanner} alt="AWS Lambda Banner" className="blog-banner" />
      </div>

      <div className="blog-body">
        <p>
          AWS Lambda is a game-changer for developers. It lets you write and run code without worrying about servers or
          infrastructure. You focus on the logic—AWS handles everything else.
        </p>

        <p>
          So what exactly is Lambda? It’s a Function-as-a-Service (FaaS) that runs in response to events. For example, an S3 upload,
          an API call, or a new database record. You write a function, configure its trigger, and deploy. That's it.
        </p>

        <p>
          Lambda is cost-efficient: you’re only charged when your code runs. There’s no need to pay for idle servers. For startups or
          side projects, this can be a financial lifesaver.
        </p>

        <p>
          In practice, Lambda integrates beautifully with services like DynamoDB, S3, API Gateway, and Step Functions. You can build
          full-stack applications that scale automatically, respond in milliseconds, and require zero server maintenance.
        </p>

        <p>
          But beware of common pitfalls. Cold starts (initial execution delay), tight timeout limits, and memory constraints are
          factors to consider. Smart architecture—like bundling your code efficiently and keeping dependencies slim—can mitigate
          these issues.
        </p>

        <p>
          Advanced features like Layers, Container Images, and Provisioned Concurrency make Lambda suitable even for production-grade
          applications. Whether you’re building a REST API, a chatbot, or an automated ML pipeline, Lambda offers unmatched
          scalability with minimal ops overhead.
        </p>

        <p>
          Once you master AWS Lambda, you unlock the full potential of serverless. You build faster, deploy smarter, and let AWS
          worry about scaling.
        </p>

        <div className="share-buttons">
          <p>Share this article:</p>
          <FacebookShareButton url={pageUrl} quote={pageTitle} hashtag="#awslambda">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={pageUrl} title={pageTitle} hashtags={['serverless', 'aws']}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton url={pageUrl} subject="Check this out" body="This blog on AWS Lambda might interest you!">
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}

export default AwsLambda;
