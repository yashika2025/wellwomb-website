import React, { useState } from "react";

const remediesData = [
  {
    id: 1,
    title: "Balanced Diet",
    description: "Eat a PCOD-friendly diet to manage symptoms.",
    content:
      "Include fiber-rich foods like whole grains, leafy greens, and fruits. Reduce processed sugars and dairy. Add Omega-3 fatty acids from flaxseeds and walnuts.",
    category: "Diet",
    tags: ["diet", "nutrition", "PCOD"]
  },
  {
    id: 2,
    title: "Exercise Routine",
    description: "Regular physical activity helps regulate hormones.",
    content:
      "Engage in at least 30 minutes of moderate exercise daily. Focus on yoga, strength training, and cardio to improve insulin sensitivity.",
    category: "Exercise",
    tags: ["exercise", "workout", "fitness"]
  },
  {
    id: 3,
    title: "Herbal Remedies",
    description: "Natural herbs can help regulate hormones.",
    content:
      "Try spearmint tea to lower testosterone, cinnamon to improve insulin resistance, and turmeric for reducing inflammation.",
    category: "Herbal",
    tags: ["herbal", "tea", "natural"]
  },
  {
    id: 4,
    title: "Stress Management",
    description: "Lowering stress can improve hormone balance.",
    content:
      "Practice deep breathing, meditation, and yoga. Engage in relaxing activities like painting or journaling to calm the mind.",
    category: "Lifestyle",
    tags: ["stress", "relaxation", "mental health"]
  }
];

const PCODRemedies = () => {
  const [activeRemedy, setActiveRemedy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRemedies = remediesData.filter(
    (remedy) =>
      remedy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      remedy.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🌸 WellWomb: PCOD Natural Remedies</h2>

      <input
        type="text"
        placeholder="🔍 Search remedies (e.g., diet, exercise)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />

      <div style={styles.grid}>
        <div style={styles.list}>
          {filteredRemedies.map((remedy) => (
            <div
              key={remedy.id}
              onClick={() => setActiveRemedy(remedy)}
              style={{
                ...styles.card,
                background: activeRemedy?.id === remedy.id ? "#ffe4f2" : "#fff"
              }}
            >
              <h3>{remedy.title}</h3>
              <p>{remedy.description}</p>
              <span style={styles.category}>{remedy.category}</span>
            </div>
          ))}
        </div>

        <div style={styles.detail}>
          {activeRemedy ? (
            <>
              <h3>{activeRemedy.title}</h3>
              <p>{activeRemedy.description}</p>
              <div>{activeRemedy.content}</div>
            </>
          ) : (
            <div style={styles.placeholder}>
              <p>💜 Select a remedy from the list to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    background: "#fce4ec",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Poppins', sans-serif"
  },
  heading: {
    textAlign: "center",
    color: "#D81B60",
    fontSize: "24px"
  },
  searchBar: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #D81B60",
    fontSize: "1rem",
    background: "#fff5f8"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "20px",
    marginTop: "20px"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  card: {
    padding: "15px",
    border: "1px solid #D81B60",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.2s",
    background: "#fff",
    boxShadow: "2px 2px 10px rgba(216, 27, 96, 0.1)"
  },
  category: {
    display: "block",
    fontSize: "0.8rem",
    color: "#880E4F",
    marginTop: "5px"
  },
  detail: {
    padding: "20px",
    border: "1px solid #D81B60",
    borderRadius: "8px",
    background: "#fff"
  },
  placeholder: {
    color: "#880E4F",
    textAlign: "center",
    padding: "40px 0"
  }
};

export default PCODRemedies;
