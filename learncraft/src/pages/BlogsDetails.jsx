import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

// Comprehensive blog content mapped by blog id
const blogContent = {
  // Data Science Blogs
  "data-science-fundamentals-2025": {
    title: "Data Science Fundamentals: A Complete Guide for Beginners in 2025",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    category: "Data Science",
    date: "January 15, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Data science has emerged as one of the most sought-after fields in the 21st century, combining statistics, computer science, and domain expertise to extract meaningful insights from data. If you're considering a career in data science, this comprehensive guide will help you understand the fundamentals and get started on your journey.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What is Data Science?</h2>
        <p className="mb-4">
          Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines elements of mathematics, statistics, computer science, and domain expertise to analyze and interpret complex data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Components of Data Science</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mt-6 mb-3">1. Data Collection and Cleaning</h3>
          <p className="mb-4">
            The first step in any data science project involves gathering raw data from various sources such as databases, APIs, web scraping, or files. Data cleaning is crucial as real-world data is often messy, containing missing values, duplicates, and errors. This process ensures data quality and reliability for analysis.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. Exploratory Data Analysis (EDA)</h3>
          <p className="mb-4">
            EDA involves examining datasets to summarize their main characteristics, often using visual methods. This step helps identify patterns, detect anomalies, test hypotheses, and check assumptions. Tools like Python's Pandas, Matplotlib, and Seaborn are commonly used for EDA.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Statistical Analysis and Modeling</h3>
          <p className="mb-4">
            Statistical methods are applied to model data relationships and make predictions. This includes hypothesis testing, regression analysis, and probability distributions. Understanding statistics is fundamental to making valid inferences from data.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. Machine Learning</h3>
          <p className="mb-4">
            Machine learning algorithms enable computers to learn from data and make decisions without being explicitly programmed. This includes supervised learning (classification, regression), unsupervised learning (clustering, dimensionality reduction), and reinforcement learning.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">5. Data Visualization</h3>
          <p className="mb-4">
            Effective visualization communicates findings clearly to stakeholders. Tools like Tableau, Power BI, and Python libraries (Matplotlib, Plotly) help create compelling visual representations of data insights.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Essential Skills for Data Scientists</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Programming:</strong> Python and R are the most popular languages in data science</li>
          <li><strong>Statistics and Mathematics:</strong> Understanding probability, linear algebra, and calculus</li>
          <li><strong>Database Management:</strong> SQL for querying and managing data</li>
          <li><strong>Machine Learning:</strong> Knowledge of algorithms and frameworks like scikit-learn, TensorFlow</li>
          <li><strong>Communication:</strong> Ability to explain complex findings to non-technical audiences</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Career Paths in Data Science</h2>
        <p className="mb-4">
          Data science offers diverse career opportunities including Data Analyst, Data Scientist, Machine Learning Engineer, Business Intelligence Analyst, and Data Engineer. Each role requires different skill sets and offers unique challenges and rewards.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Getting Started</h2>
        <p className="mb-4">
          To begin your data science journey, start by learning Python or R, understanding basic statistics, and working on real-world projects. Online courses, bootcamps, and hands-on practice with datasets from platforms like Kaggle are excellent ways to build your skills.
        </p>
        <p className="mb-6">
          Remember, data science is a field that requires continuous learning. Stay updated with the latest tools, techniques, and industry trends to remain competitive in this dynamic field.
        </p>
      </>
    ),
  },
  "machine-learning-career-guide": {
    title: "How to Build a Successful Career in Machine Learning: Expert Tips",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    category: "Data Science",
    date: "January 10, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Machine Learning (ML) has become one of the most exciting and rapidly growing fields in technology. With applications ranging from recommendation systems to autonomous vehicles, ML engineers are in high demand. Here's your comprehensive guide to building a successful career in machine learning.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Understanding Machine Learning</h2>
        <p className="mb-4">
          Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data and use it to learn patterns and make predictions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Essential Skills for ML Engineers</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mt-6 mb-3">1. Strong Programming Foundation</h3>
          <p className="mb-4">
            Python is the most popular language for ML due to its extensive libraries (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch). You should also be comfortable with version control (Git) and software engineering best practices.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. Mathematics and Statistics</h3>
          <p className="mb-4">
            A solid understanding of linear algebra, calculus, probability, and statistics is crucial. These mathematical foundations help you understand how algorithms work and when to apply them.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Machine Learning Algorithms</h3>
          <p className="mb-4">
            Master both supervised (linear regression, decision trees, neural networks) and unsupervised learning (clustering, dimensionality reduction) algorithms. Understanding deep learning frameworks is increasingly important.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. Data Handling</h3>
          <p className="mb-4">
            Learn to work with large datasets, handle missing data, feature engineering, and data preprocessing. Experience with databases (SQL, NoSQL) and big data tools (Spark, Hadoop) is valuable.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Building Your Portfolio</h2>
        <p className="mb-4">
          Create a strong portfolio by working on diverse projects. Start with classic problems like image classification, sentiment analysis, or recommendation systems. Document your projects on GitHub and write clear README files explaining your approach and results.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Career Paths</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>ML Engineer:</strong> Build and deploy ML models in production</li>
          <li><strong>Research Scientist:</strong> Develop new algorithms and advance the field</li>
          <li><strong>Data Scientist:</strong> Apply ML to solve business problems</li>
          <li><strong>MLOps Engineer:</strong> Focus on deploying and maintaining ML systems</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Tips for Success</h2>
        <p className="mb-4">
          Stay updated with research papers, participate in Kaggle competitions, contribute to open-source projects, and network with professionals in the field. Continuous learning is key in this rapidly evolving domain.
        </p>
      </>
    ),
  },
  "python-data-analysis-tutorial": {
    title: "Python for Data Analysis: Essential Libraries and Techniques",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4a18d93?w=1200&h=600&fit=crop",
    category: "Data Science",
    date: "January 5, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Python has become the go-to language for data analysis due to its simplicity and powerful libraries. This tutorial covers the essential libraries and techniques you need to master for effective data analysis.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Core Libraries for Data Analysis</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1. Pandas - Data Manipulation</h3>
        <p className="mb-4">
          Pandas is the cornerstone of data analysis in Python. It provides DataFrame and Series structures that make it easy to manipulate, clean, and analyze structured data. Key operations include filtering, grouping, merging, and transforming datasets.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. NumPy - Numerical Computing</h3>
        <p className="mb-4">
          NumPy provides support for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on these arrays. It's the foundation for many other scientific computing libraries.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Matplotlib & Seaborn - Data Visualization</h3>
        <p className="mb-4">
          Matplotlib is the primary plotting library, while Seaborn provides a high-level interface for statistical graphics. Together, they enable you to create publication-quality visualizations.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Common Data Analysis Workflows</h2>
        <p className="mb-4">
          A typical data analysis workflow includes: loading data, exploring and cleaning it, performing statistical analysis, visualizing results, and drawing conclusions. Python's ecosystem makes each step straightforward and efficient.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Best Practices</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Always start with exploratory data analysis to understand your data</li>
          <li>Handle missing values appropriately based on your use case</li>
          <li>Use vectorized operations in Pandas for better performance</li>
          <li>Document your analysis process clearly</li>
          <li>Validate your results and check for data quality issues</li>
        </ul>
      </>
    ),
  },
  // Digital Marketing Blogs
  "digital-marketing-strategies-2025": {
    title: "Top Digital Marketing Strategies That Work in 2025",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    category: "Digital Marketing",
    date: "January 12, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          The digital marketing landscape continues to evolve rapidly. As we navigate through 2025, businesses must adapt to new technologies, consumer behaviors, and platform algorithms. Here are the top digital marketing strategies that are delivering results this year.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. AI-Powered Marketing Automation</h2>
        <p className="mb-4">
          Artificial Intelligence is revolutionizing how marketers create and deliver personalized experiences. AI tools can analyze customer behavior, predict preferences, and automate content delivery at optimal times, significantly improving engagement rates and ROI.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Video Marketing Dominance</h2>
        <p className="mb-4">
          Video content continues to dominate social media and search results. Short-form videos on platforms like TikTok, Instagram Reels, and YouTube Shorts are particularly effective. Live streaming and interactive videos are also gaining traction.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Voice Search Optimization</h2>
        <p className="mb-4">
          With the growing use of smart speakers and voice assistants, optimizing for voice search is crucial. Focus on conversational keywords, featured snippets, and local SEO to capture voice search traffic.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. Social Commerce Integration</h2>
        <p className="mb-4">
          Social media platforms are becoming shopping destinations. Instagram Shopping, Facebook Shops, and TikTok Shop allow businesses to sell directly through social media, reducing friction in the customer journey.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Content Personalization at Scale</h2>
        <p className="mb-4">
          Personalized content drives higher engagement and conversions. Use data analytics to segment audiences and deliver tailored messages, product recommendations, and offers that resonate with individual customers.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. Sustainability and Purpose-Driven Marketing</h2>
        <p className="mb-4">
          Consumers increasingly support brands that align with their values. Incorporate sustainability, social responsibility, and authentic purpose into your marketing messages to build stronger brand connections.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">7. Privacy-First Marketing</h2>
        <p className="mb-4">
          With stricter data privacy regulations, marketers must focus on first-party data collection, transparent consent practices, and building direct relationships with customers rather than relying solely on third-party data.
        </p>
      </>
    ),
  },
  "seo-optimization-guide": {
    title: "Complete SEO Optimization Guide: Boost Your Website Rankings",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2d1c6?w=1200&h=600&fit=crop",
    category: "Digital Marketing",
    date: "January 8, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Search Engine Optimization (SEO) is essential for improving your website's visibility and driving organic traffic. This comprehensive guide covers everything you need to know about optimizing your site for search engines.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">On-Page SEO Fundamentals</h2>
        <p className="mb-4">
          On-page SEO involves optimizing individual web pages to rank higher. Key elements include title tags, meta descriptions, header tags (H1, H2, H3), URL structure, internal linking, and keyword optimization. Ensure your content is high-quality, relevant, and provides value to users.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Technical SEO</h2>
        <p className="mb-4">
          Technical SEO ensures search engines can crawl and index your site effectively. Focus on site speed, mobile responsiveness, SSL certificates, XML sitemaps, robots.txt files, and structured data markup. A fast, mobile-friendly site is crucial for rankings.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Keyword Research</h2>
        <p className="mb-4">
          Effective keyword research identifies terms your target audience uses. Use tools like Google Keyword Planner, Ahrefs, or SEMrush to find relevant keywords with good search volume and manageable competition. Focus on long-tail keywords for better targeting.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Content Quality</h2>
        <p className="mb-4">
          High-quality, original content that answers user queries is fundamental to SEO success. Create comprehensive, well-researched content that provides value. Update content regularly to keep it fresh and relevant.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Link Building</h2>
        <p className="mb-4">
          Quality backlinks from authoritative sites signal to search engines that your content is valuable. Focus on earning natural links through great content, guest posting, and building relationships in your industry.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Local SEO</h2>
        <p className="mb-4">
          For local businesses, optimize for local search by claiming your Google Business Profile, ensuring NAP (Name, Address, Phone) consistency across directories, and getting local citations and reviews.
        </p>
      </>
    ),
  },
  "social-media-marketing-tips": {
    title: "Social Media Marketing: Best Practices for 2025",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
    category: "Digital Marketing",
    date: "January 3, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Social media marketing has become an essential component of any successful marketing strategy. With billions of users across various platforms, social media offers unparalleled opportunities to connect with your audience, build brand awareness, and drive conversions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Platform-Specific Strategies</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Facebook & Instagram</h3>
        <p className="mb-4">
          Focus on visual storytelling, user-generated content, and Facebook Groups for community building. Use Instagram Stories, Reels, and IGTV for engaging content. Leverage Facebook's detailed targeting options for ads.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">LinkedIn</h3>
        <p className="mb-4">
          Share professional insights, industry news, and thought leadership content. LinkedIn is ideal for B2B marketing, networking, and establishing authority in your field.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">TikTok</h3>
        <p className="mb-4">
          Create authentic, entertaining short-form videos. TikTok's algorithm favors engagement, so focus on trends, challenges, and creative content that encourages interaction.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Content Strategy</h2>
        <p className="mb-4">
          Develop a content calendar that balances promotional, educational, and entertaining content. Use a mix of formats: images, videos, carousels, and stories. Consistency in posting and maintaining brand voice are key.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Engagement and Community</h2>
        <p className="mb-4">
          Respond to comments, messages, and mentions promptly. Build a community by encouraging user-generated content, hosting Q&As, and creating interactive content like polls and quizzes.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Analytics and Measurement</h2>
        <p className="mb-4">
          Track key metrics like engagement rate, reach, impressions, clicks, and conversions. Use platform analytics and third-party tools to measure ROI and adjust your strategy accordingly.
        </p>
      </>
    ),
  },
  // Civil Engineering Blogs
  "autocad-mastery-guide": {
    title: "AutoCAD Mastery: Essential Skills for Civil Engineers",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop",
    category: "Civil Engineering",
    date: "January 14, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          AutoCAD is the industry-standard software for computer-aided design (CAD) in civil engineering. Mastering AutoCAD can significantly enhance your productivity and career prospects. This guide covers essential skills every civil engineer should know.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Getting Started with AutoCAD</h2>
        <p className="mb-4">
          AutoCAD's interface includes the ribbon, command line, tool palettes, and drawing area. Familiarize yourself with these elements and customize your workspace for efficiency. Learn essential commands like LINE, CIRCLE, RECTANGLE, and basic editing commands.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2D Drafting Fundamentals</h2>
        <p className="mb-4">
          Master precision drawing using coordinates, object snaps, and tracking. Learn to create layers, apply linetypes, and use blocks for reusable components. Understanding dimensioning, text, and hatching is crucial for creating professional drawings.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3D Modeling for Civil Engineering</h2>
        <p className="mb-4">
          While 2D drafting is fundamental, 3D modeling helps visualize projects and create more accurate designs. Learn to create 3D objects, use viewports, and generate sections and elevations from 3D models.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Advanced Techniques</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Dynamic blocks for parametric designs</li>
          <li>Xrefs (external references) for collaborative projects</li>
          <li>Sheet sets for managing multiple drawings</li>
          <li>Customization with AutoLISP and macros</li>
          <li>Plotting and publishing for professional output</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Best Practices</h2>
        <p className="mb-4">
          Maintain consistent layer standards, use appropriate line weights, and organize drawings logically. Regular practice and working on real projects will help you master AutoCAD efficiently.
        </p>
      </>
    ),
  },
  "revit-architecture-bim": {
    title: "Revit Architecture and BIM: Transforming Modern Construction",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
    category: "Civil Engineering",
    date: "January 11, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Building Information Modeling (BIM) has revolutionized the architecture, engineering, and construction (AEC) industry. Revit Architecture, Autodesk's BIM software, enables professionals to create intelligent 3D models that contain both geometric and data information.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Understanding BIM</h2>
        <p className="mb-4">
          BIM is a process that involves creating and managing digital representations of physical and functional characteristics of places. Unlike traditional CAD, BIM models are intelligent, containing information about building components, materials, and relationships.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Benefits of BIM and Revit</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Improved collaboration between project stakeholders</li>
          <li>Reduced errors and conflicts through clash detection</li>
          <li>Better visualization and communication</li>
          <li>Automated documentation and scheduling</li>
          <li>Cost estimation and quantity takeoff</li>
          <li>Facility management and maintenance planning</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Features of Revit Architecture</h2>
        <p className="mb-4">
          Revit uses parametric modeling, where elements are defined by parameters and relationships. Changes to one element automatically update related elements. The software includes tools for walls, floors, roofs, doors, windows, and other building components.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Workflow in Revit</h2>
        <p className="mb-4">
          Start by creating a project template, then build the model using families (parametric components). Use views, sheets, and schedules to document the design. Collaboration is facilitated through worksharing, allowing multiple users to work on the same model.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Future of BIM</h2>
        <p className="mb-4">
          BIM is becoming mandatory in many countries for public projects. Integration with cloud computing, augmented reality, and AI is expanding BIM's capabilities, making it essential for modern construction professionals.
        </p>
      </>
    ),
  },
  "structural-analysis-fundamentals": {
    title: "Structural Analysis Fundamentals: Key Concepts Every Engineer Should Know",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop",
    category: "Civil Engineering",
    date: "January 7, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Structural analysis is a fundamental aspect of civil engineering that determines the effects of loads on physical structures and their components. Understanding these principles is essential for designing safe, efficient, and economical structures.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Types of Loads</h2>
        <p className="mb-4">
          Structures must resist various loads including dead loads (permanent weight), live loads (occupancy and use), wind loads, seismic loads, and environmental loads. Understanding load combinations and factors of safety is crucial for design.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Material Properties</h2>
        <p className="mb-4">
          Key material properties include strength (tensile, compressive, shear), modulus of elasticity, Poisson's ratio, and thermal expansion. These properties determine how materials respond to applied loads.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Analysis Methods</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mt-6 mb-3">Static Analysis</h3>
          <p className="mb-4">
            Determines forces, moments, and deflections under static loading conditions. Methods include equilibrium equations, method of joints, and method of sections.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Finite Element Analysis (FEA)</h3>
          <p className="mb-4">
            FEA divides complex structures into smaller elements, solving equations for each element to determine overall behavior. Software like STAAD Pro, ETABS, and ANSYS use FEA.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Design Codes and Standards</h2>
        <p className="mb-4">
          Structural design follows building codes (like IS codes, ACI, AISC) that specify minimum requirements for safety, serviceability, and durability. Engineers must stay updated with code revisions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Modern Tools</h2>
        <p className="mb-4">
          Modern structural analysis uses sophisticated software that can model complex geometries, nonlinear behavior, and dynamic effects. However, understanding fundamental principles remains essential for validating software results.
        </p>
      </>
    ),
  },
  // Rural Courses Blogs
  "rural-skill-development": {
    title: "Empowering Rural Communities Through Skill Development Programs",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop",
    category: "Rural Courses",
    date: "January 13, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Skill development programs are playing a transformative role in rural communities across India. By providing access to quality education and vocational training, these programs are creating new opportunities and improving livelihoods.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">The Need for Rural Skill Development</h2>
        <p className="mb-4">
          Rural areas often face challenges including limited access to quality education, lack of employment opportunities, and migration to urban areas. Skill development programs address these issues by providing relevant training that leads to employment or entrepreneurship.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Skill Areas</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Digital Literacy:</strong> Basic computer skills, internet usage, and digital tools</li>
          <li><strong>Vocational Training:</strong> Tally accounting, MS Office, technical skills</li>
          <li><strong>Soft Skills:</strong> Communication, personality development, spoken English</li>
          <li><strong>Entrepreneurship:</strong> Business planning, financial management, marketing</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Impact of Training Programs</h2>
        <p className="mb-4">
          Well-designed skill development programs have shown significant impact: increased employment rates, higher incomes, reduced migration, and improved confidence among participants. Many trainees have started their own businesses or found better employment opportunities.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Success Factors</h2>
        <p className="mb-4">
          Effective programs focus on practical, hands-on training, local relevance, industry partnerships, and post-training support. Accessibility, affordability, and quality instruction are crucial for success.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">The Way Forward</h2>
        <p className="mb-4">
          Expanding skill development programs, integrating technology, and creating stronger industry linkages will further empower rural communities. Government initiatives, NGO partnerships, and private sector involvement are all essential for scaling these programs.
        </p>
      </>
    ),
  },
  "digital-literacy-rural-india": {
    title: "Digital Literacy in Rural India: Bridging the Technology Gap",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    category: "Rural Courses",
    date: "January 9, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Digital literacy has become essential in today's world, yet rural India faces significant challenges in accessing and utilizing digital technologies. This article explores initiatives and strategies to bridge the digital divide.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">The Digital Divide</h2>
        <p className="mb-4">
          While urban areas have embraced digital technologies, rural communities often lack access to devices, internet connectivity, and digital skills. This divide limits opportunities in education, employment, healthcare, and financial services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Importance of Digital Literacy</h2>
        <p className="mb-4">
          Digital literacy enables individuals to access government services online, participate in e-commerce, use digital payment systems, access educational resources, and connect with opportunities beyond their immediate geography.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Training Programs</h2>
        <p className="mb-4">
          Effective digital literacy programs teach basic computer operations, internet usage, email, social media, online safety, and relevant applications like MS Office. Programs should be conducted in local languages and consider local needs.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Infrastructure Challenges</h2>
        <p className="mb-4">
          Reliable internet connectivity and access to affordable devices remain barriers. Initiatives like Digital India, community computer centers, and mobile-based learning are addressing these challenges.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Success Stories</h2>
        <p className="mb-4">
          Many rural individuals have transformed their lives through digital literacy. From farmers using apps for better crop management to women starting online businesses, digital skills are creating new pathways to prosperity.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Future Outlook</h2>
        <p className="mb-4">
          As connectivity improves and smartphones become more affordable, digital literacy programs will play an increasingly important role in rural development. Continued investment in infrastructure and training is essential.
        </p>
      </>
    ),
  },
  "vocational-training-success": {
    title: "Success Stories: How Vocational Training Changed Lives in Rural Areas",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop",
    category: "Rural Courses",
    date: "January 6, 2025",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Vocational training has been a game-changer for many individuals in rural areas, providing them with skills that lead to employment, entrepreneurship, and improved livelihoods. Here are inspiring stories of transformation.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Story 1: From Farm to Finance</h2>
        <p className="mb-4">
          Priya, a young woman from a small village, enrolled in a Tally accounting course. After completing her training, she started providing accounting services to local businesses. Today, she runs a successful accounting firm serving over 50 clients, earning more than her family's traditional farming income.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Story 2: The Computer Teacher</h2>
        <p className="mb-4">
          Ramesh learned basic computer skills and MS Office through a rural training program. He started teaching computer basics to children in his village, eventually opening a small computer training center. His center has trained over 200 students, many of whom have found jobs in nearby towns.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Story 3: English Opens Doors</h2>
        <p className="mb-4">
          Anjali participated in a spoken English and personality development program. Improved communication skills helped her secure a job as a customer service representative. She now supports her family and is pursuing further education online.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Common Success Factors</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Quality training with practical focus</li>
          <li>Post-training support and mentorship</li>
          <li>Access to resources and opportunities</li>
          <li>Determination and hard work</li>
          <li>Community support and encouragement</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Lessons Learned</h2>
        <p className="mb-4">
          These stories demonstrate that with the right training and support, individuals in rural areas can achieve remarkable success. Vocational training not only provides skills but also builds confidence and opens doors to new possibilities.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">The Ripple Effect</h2>
        <p className="mb-4">
          Success stories inspire others in the community to pursue training. As more people gain skills and improve their livelihoods, entire communities benefit from increased economic activity and improved quality of life.
        </p>
      </>
    ),
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const blog = blogContent[id];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Loader />;
  if (!blog) return <div className="p-6 text-xl text-center">Blog not found</div>;
  
  return (
    <>
      <Helmet>
        <title>{blog.title} | Learncraft Blog</title>
        <meta name="description" content={`Read: ${blog.title} on the Learncraft blog. ${blog.category} insights, tips, and news for learners and professionals.`} />
        <meta property="og:title" content={`${blog.title} | Learncraft Blog`} />
        <meta property="og:description" content={`Read: ${blog.title} on the Learncraft blog.`} />
      </Helmet>
      <div className="px-4 sm:px-6 md:px-10 py-6 max-w-5xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Link>
        
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-auto object-cover rounded-xl mb-6 max-h-[500px] shadow-lg"
          loading="lazy"
        />
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <span className="inline-flex items-center">
            <Tag className="mr-2" size={16} />
            {blog.category}
          </span>
          <span className="inline-flex items-center">
            <Calendar className="mr-2" size={16} />
            {blog.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {blog.title}
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
          {blog.content}
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2" size={20} />
            Back to All Blogs
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
