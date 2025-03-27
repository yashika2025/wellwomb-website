import React, { useState } from "react";

export default function Gamification() {
  const [userStats, setUserStats] = useState({
    points: 0,
    level: 1,
    streak: 0,
    achievements: [],
    progress: 0
  });

  const achievementsList = [
    { id: 1, name: "First Steps", description: "Completed your first health task" },
    { id: 2, name: "Consistency Champ", description: "Logged activities for 7 days" },
    { id: 3, name: "Hydration Hero", description: "Met your water intake goal for 5 days" },
    { id: 4, name: "Sleep Master", description: "Achieved 8-hour sleep for 10 nights" },
    { id: 5, name: "Wellness Guru", description: "Completed 30 wellness tasks" }
  ];

  const completeTask = (points, taskName) => {
    setUserStats(prev => {
      const newPoints = prev.points + points;
      const newLevel = Math.floor(newPoints / 500) + 1;
      const newProgress = (newPoints % 500) / 5;
      
      let newAchievements = [...prev.achievements];
      if (newPoints >= 250 && !newAchievements.some(a => a.id === 1)) {
        newAchievements.push(achievementsList[0]);
      }
      if (newPoints >= 700 && !newAchievements.some(a => a.id === 2)) {
        newAchievements.push(achievementsList[1]);
      }
      
      return {
        ...prev,
        points: newPoints,
        level: newLevel,
        progress: newProgress,
        achievements: newAchievements
      };
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🌟 Gamification Dashboard</h2>

      {/* Profile Section */}
      <div style={styles.profileSection}>
        <div style={styles.avatar}>
          <div style={styles.levelBadge}>Lvl {userStats.level}</div>
        </div>
        <div style={styles.stats}>
          <h3>Your Progress</h3>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${userStats.progress}%` }}></div>
            <span style={styles.progressText}>{userStats.points} / {userStats.level * 500} points</span>
          </div>
          <div style={styles.streak}>
            🔥 {userStats.streak}-day streak
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={styles.actions}>
        <h3>Complete Tasks</h3>
        <div style={styles.actionButtons}>
          <button onClick={() => completeTask(50)}>💧 Log Water Intake (+50)</button>
          <button onClick={() => completeTask(100)}>🏋️ Complete Workout (+100)</button>
          <button onClick={() => completeTask(75)}>🥗 Log Healthy Meal (+75)</button>
          <button onClick={() => completeTask(150)}>😴 Full Night's Sleep (+150)</button>
        </div>
      </div>

      {/* Achievements */}
      <div style={styles.achievementsSection}>
        <h3>Your Achievements</h3>
        {userStats.achievements.length > 0 ? (
          <div style={styles.achievementsGrid}>
            {userStats.achievements.map(achievement => (
              <div key={achievement.id} style={styles.achievementCard}>
                <span style={styles.achievementIcon}>🏆</span>
                <div>
                  <h4>{achievement.name}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={styles.noAchievements}>Complete tasks to earn achievements!</p>
        )}
      </div>
    </div>
  );
}

// CSS Styles
const styles = {
  container: { maxWidth: "800px", margin: "auto", padding: "20px", textAlign: "center", background: "#fff0f5", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" },
  heading: { fontSize: "24px", fontWeight: "bold", color: "#d63384", fontFamily: "'Poppins', sans-serif" },
  profileSection: { display: "flex", alignItems: "center", justifyContent: "center", gap: "30px", padding: "20px", background: "#fce4ec", borderRadius: "10px" },
  avatar: { width: "100px", height: "100px", background: "#ff4081", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2rem", position: "relative" },
  levelBadge: { position: "absolute", bottom: "-10px", right: "-10px", background: "#ffc107", padding: "5px 10px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "bold" },
  stats: { flex: 1 },
  progressBar: { height: "20px", background: "#e0e0e0", borderRadius: "10px", margin: "10px 0", position: "relative", overflow: "hidden" },
  progressFill: { height: "100%", background: "#4caf50", transition: "width 0.3s" },
  progressText: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "0.8rem", color: "white" },
  streak: { fontSize: "1.2rem", color: "#ff5722" },
  actions: { marginBottom: "30px" },
  actionButtons: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px", marginTop: "15px" },
  achievementsSection: { marginBottom: "30px" },
  achievementsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "15px", marginTop: "15px" },
  achievementCard: { display: "flex", alignItems: "center", gap: "15px", padding: "15px", background: "white", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  achievementIcon: { fontSize: "2rem" },
  noAchievements: { textAlign: "center", color: "#999", padding: "20px", background: "#f9f9f9", borderRadius: "8px" }
};
