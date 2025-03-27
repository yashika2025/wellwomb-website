import React, { useState } from 'react';

const courses = [
  {
    id: 1,
    title: "PCOD Nutrition Guide",
    description: "Learn about anti-inflammatory diets, essential nutrients, and balanced eating for PCOD.",
    duration: "4 weeks",
    lessons: 10,
    category: "nutrition",
    progress: 20
  },
  {
    id: 2,
    title: "Hormonal Balance & Lifestyle",
    description: "Understand how lifestyle changes can help regulate hormonal imbalances in PCOD.",
    duration: "5 weeks",
    lessons: 12,
    category: "hormonal health",
    progress: 40
  },
  {
    id: 3,
    title: "Mindfulness & Stress Relief",
    description: "Reduce stress with meditation, yoga, and breathing techniques tailored for PCOD.",
    duration: "3 weeks",
    lessons: 8,
    category: "mental health",
    progress: 60
  },
  {
    id: 4,
    title: "Exercise for PCOD",
    description: "Learn about the best workouts for hormonal balance and weight management.",
    duration: "6 weeks",
    lessons: 15,
    category: "fitness",
    progress: 30
  }
];

export default function WellWombEducationHub() {
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(courses.map(course => course.category))];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="education-container">
      <h2 className="title">WellWomb Education Hub 🎗️</h2>
      
      {/* Storytelling Section */}
      <div className="story-section">
        <img src="/images/aisha_story.png" alt="Aisha's Journey" className="story-image" />
        <p className="story-text">
          Meet <strong>Aisha</strong>, a vibrant teenager who loves dancing and painting. 
          When she started facing irregular periods, mood swings, and fatigue, she felt lost.  
          One day, she discovered <strong>WellWomb</strong>, a safe space to learn about PCOD.  
          Through interactive courses and expert advice, Aisha regained control of her health.  
          <br/><br/>
          Follow Aisha's journey and empower yourself with knowledge to live healthier and happier! 
        </p>
      </div>
      
      {/* Tabs Section */}
      <div className="tabs">
        <button 
          className={activeTab === 'courses' ? 'active' : ''}
          onClick={() => setActiveTab('courses')}
        >
          Courses
        </button>
        <button 
          className={activeTab === 'articles' ? 'active' : ''}
          onClick={() => setActiveTab('articles')}
        >
          Articles
        </button>
      </div>

      {/* Course Section */}
      {activeTab === 'courses' && (
        <>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="meta">
                  <span>{course.duration}</span>
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* CSS Styling */}
      <style jsx>{`
        .education-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        .title {
          font-size: 26px;
          font-weight: bold;
          color: #D63384;
        }
        .story-section {
          background: #fff5f8;
          padding: 15px;
          border-radius: 10px;
          margin: 20px 0;
          text-align: center;
        }
        .story-image {
          width: 100%;
          max-width: 400px;
          border-radius: 10px;
          margin-bottom: 15px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
        .story-text {
          font-size: 16px;
          color: #555;
          line-height: 1.5;
        }
        .tabs button {
          padding: 10px;
          margin: 5px;
          border: none;
          background: #f8c8dc;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }
        .tabs button.active {
          background: #D63384;
          color: white;
          font-weight: bold;
        }
        .category-filters button {
          padding: 5px 10px;
          margin: 5px;
          border: none;
          background: #ffd6e0;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }
        .category-filters button.active {
          background: #D63384;
          color: white;
        }
        .courses-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
          margin-top: 20px;
        }
        .course-card {
          background: #fff;
          padding: 15px;
          border-radius: 10px;
          border: 1px solid #ffafcc;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          transition: 0.3s;
        }
        .course-card:hover {
          transform: scale(1.02);
          box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.2);
        }
        .meta {
          font-size: 12px;
          color: #555;
        }
        .progress-bar {
          width: 100%;
          height: 8px;
          background: #ffe0ec;
          border-radius: 5px;
          margin-top: 8px;
          overflow: hidden;
        }
        .progress {
          height: 100%;
          background: #D63384;
        }
      `}</style>
    </div>
  );
}
