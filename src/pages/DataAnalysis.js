import React from "react";
import "../styles/DataAnalysis.css";

function DataAnalysis() {
  return (
    <div className="data-analysis">
      <h1 className="project-title">Rent vs Buy Analysis</h1>

      {/* Prominent Links Section */}
      <div className="link-section">
        <div className="github-link-wrapper">
          <a
            href="https://github.com/donlopez/Homes-rent-vs-buy"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Project on GitHub
          </a>
        </div>
      </div>

      <div className="content-wrapper">
        <section>
          <h2>Overview</h2>
          <p>
            This project aims to analyze Zillow housing data to provide insights into whether it is more advantageous to buy or rent a property in 2024.
            The analysis is conducted using Python, with findings presented through various visualizations and graphs.
          </p>
        </section>

        <section>
          <h2>Dataset</h2>
          <p>
            The dataset used in this project is sourced from Zillow and includes relevant information about housing prices, rental rates, and other key factors.
            The dataset is available in the <code>datasets</code> directory. The project evaluates housing trends, pricing, and rental rates for different cities.
          </p>
        </section>

        <section>
          <h2>Project Structure</h2>
          <p>
            The project is organized into the following main sections:
            <ul>
              <li><strong>Data Exploration and Visualizations:</strong></li>
              <ul>
                <li><strong>Jupyter Notebook 1:</strong> <a href="https://github.com/donlopez/Homes-rent-vs-buy/blob/main/notebooks/data_exploration2.ipynb" target="_blank" rel="noopener noreferrer">data_exploration2.ipynb</a> – Explores the dataset, analyzing property prices, rental rates, and regional market trends.</li>
                <li><strong>Jupyter Notebook 2:</strong> <a href="https://github.com/donlopez/Homes-rent-vs-buy/blob/main/notebooks/data_exploration.ipynb" target="_blank" rel="noopener noreferrer">data_exploration.ipynb</a> – Focuses on answering specific questions like the financial benefits of buying versus renting and how these trends vary across regions.</li>
              </ul>
            </ul>
          </p>
        </section>

        <section>
          <h2>Analysis Process</h2>
          <p>
            The analysis process begins by cleaning and preparing the dataset to ensure accuracy and completeness. Various data wrangling techniques are applied to handle missing values, outliers, and ensure data consistency.
          </p>
          <ul>
            <li><strong>Data Cleaning:</strong> Initial steps involve removing duplicates, handling missing data, and normalizing key features for comparison.</li>
            <li><strong>Exploratory Data Analysis (EDA):</strong> Using libraries such as Pandas and Matplotlib, we analyze the distribution of property prices and rental rates. Key visualizations like histograms, scatter plots, and box plots are created to identify trends.</li>
            <li><strong>Regional Trends Analysis:</strong> We explore the geographical distribution of housing prices and rental rates, segmenting the data by region to uncover regional variations.</li>
            <li><strong>Rent vs Buy Comparison:</strong> A detailed comparison is made between buying and renting costs over time, considering factors such as down payments, loan interest rates, and rental price increases.</li>
            <li><strong>Conclusion:</strong> The analysis concludes with insights into which option—buying or renting—is more advantageous in 2024, considering both short-term and long-term financial implications.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default DataAnalysis;
