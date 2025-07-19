// js/projects.js
const projects = [
  {
    title: "AI-Based Healthcare Diagnosis",
    description: "Built a DL model for early neurological disorder detection using MRI segmentation."
  },
  {
    title: "Multilingual Sentiment Analyzer",
    description: "Cross-domain tool using XLM-R and BERT, served as scalable API."
  },
  {
    title: "Fraud Detection System",
    description: "Autoencoder-based anomaly detection for financial transaction streams."
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  container.appendChild(div);
});
