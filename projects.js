// Projects data
console.log("Updated projects.js loaded - v1");
const projects = [
    {
        id: 1,
        title: "Social Media Influence on Legislation",
        description: "Analyzing the impact of social media aggressiveness on climate policy legislation using data-driven insights.",
        image: "social-media-legislation.jpg",
        imageIcon: "fas fa-balance-scale",
        tags: ["Sentiment Analysis", "Regression Analysis", "NLP", "Python"],
        category: "data-science",
        links: {
            github: "https://github.com/osheengupta/Social-Media-Influence-on-Legislation",
            demo: "#"
        }
    },
    {
        id: 2,
        title: "Companio",
        description: "Your AI conversation buddy who listens and doesn't judge!",
        image: "companio.jpg",
        imageIcon: "fas fa-comment-dots",
        tags: ["AI", "AI VoiceAgent", "Python"],
        category: "ai-agent",
        winner: true, // Mark as winner
        links: {
            github: "https://github.com/osheengupta/Companio",
            devpost: "https://devpost.com/software/companio?ref_content=my-projects-tab&ref_feature=my_projects",
            medium: "https://medium.com/@osheengupta1994/companio-your-ai-journaling-companion-1c255dc26caa",
            demo: "#"
        }
    },
    {
        id: 3,
        title: "Research Assistant",
        description: "A powerful AI research assistant that analyzes multiple URLs simultaneously using Claude 3, providing intelligent insights and question-answering capabilities with source attribution.",
        image: "research-assistant.png",
        imageIcon: "fas fa-search",
        tags: ["AI", "Vector Embeddings", "RAG", "Python"],
        category: "rag",
        links: {
            github: "https://github.com/osheengupta/Research-Assistant",
            demo: "#"
        }
    },
    {
        id: 4,
        title: "CourtIQ - Women in AI Hackathon",
        description: "AI-powered legal assistant that helps users understand their legal rights by finding relevant court cases and explaining them in plain language using vector search and language models.",
        image: "courtiq.jpg",
        imageIcon: "fas fa-gavel",
        tags: ["AI", "Vector Search", "LLM", "RAG", "Python"],
        category: "rag",
        winner: true, // Mark as winner
        links: {
            github: "https://github.com/osheengupta/Women-in-AI-Hackathon",
            medium: "https://medium.com/@osheengupta1994/courtiq-making-legal-rights-accessible-through-ai-992206e05dc5",
            demo: "#"
        }
    },
    {
        id: 5,
        title: "Crop Variety Prediction",
        description: "A machine learning system that predicts optimal crop varieties for farmers using environmental and soil data, achieving 80% accuracy with Random Forest models.",
        image: "crop-prediction.jpg",
        imageIcon: "fas fa-seedling",
        tags: ["Machine Learning", "Prediction", "Tableau", "Python"],
        category: "machine-learning",
        winner: true, // Mark as winner
        links: {
            github: "https://github.com/osheengupta/Crop-Variety-Prediction",
            demo: "#"
        }
    },
    {
        id: 6,
        title: "Heart Stroke Prediction",
        description: "A classification model to identify if a patient is susceptible to a heart stroke or not, using machine learning algorithms.",
        image: "heart-stroke.jpg",
        imageIcon: "fas fa-heartbeat",
        tags: ["Classification", "Machine Learning", "Python"],
        category: "machine-learning",
        links: {
            github: "https://github.com/osheengupta/Heart-stroke-prediction",
            demo: "#"
        }
    },
    {
        id: 7,
        title: "Breast Cancer Classification",
        description: "This project aims at classifying tumors in two categories - Malignant & Benign, with the help of machine learning models.",
        image: "breast-cancer.jpg",
        imageIcon: "fas fa-ribbon",
        tags: ["Classification", "Machine Learning", "Python"],
        category: "data-science",
        links: {
            github: "https://github.com/osheengupta/Breast-Cancer-Classification",
            demo: "#"
        }
    },
    {
        id: 8,
        title: "Data Science Job Market Analysis",
        description: "Analysis of the data science job market trends, skills in demand, and industry requirements.",
        image: "job-market.jpg",
        imageIcon: "fas fa-briefcase",
        tags: ["Web Scraping", "Visualization", "Tableau", "Machine Learning", "Python"],
        category: "machine-learning",
        links: {
            github: "https://github.com/osheengupta/Data-Science-Job-Market-Analysis",
            demo: "#"
        }
    },
    {
        id: 9,
        title: "Predictive Modeling on Loan Approvals",
        description: "Developed predictive models to determine loan approval likelihood based on applicant data.",
        image: "SBA.jpeg",
        imageIcon: "fas fa-money-bill-wave",
        tags: ["Machine Learning", "Classification", "Python"],
        category: "machine-learning",
        links: {
            github: "https://github.com/osheengupta/Predictive-Modeling-on-Loan-Approvals",
            demo: "#"
        }
    }
];

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.category}`;
    card.setAttribute('data-id', project.id);
    
    // Check if project only has GitHub link and no other links
    const hasOnlyGithub = project.links.github && 
                         !project.links.devpost && 
                         !project.links.medium && 
                         (!project.links.demo || project.links.demo === '#');
    
    // If it only has GitHub link, make the entire card clickable
    if (hasOnlyGithub) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            window.open(project.links.github, '_blank');
        });
    }
    
    // Add winner banner if project is marked as winner
    if (project.winner) {
        const winnerBanner = document.createElement('div');
        winnerBanner.className = 'winner-banner';
        // Remove the text content - it's now added via CSS ::after
        card.appendChild(winnerBanner);
    }
    
    // Create project image container first
    const imageContainer = document.createElement('div');
    imageContainer.className = 'project-image';
    
    // Try to load the image
    const img = new Image();
    img.className = 'project-thumbnail';
    img.alt = project.title;
    img.src = `images/${project.image}`;
    
    // Set up fallback for image loading errors
    img.onerror = function() {
        // If image fails to load, show icon instead
        imageContainer.innerHTML = `<i class="${project.imageIcon}"></i>`;
    };
    
    // When image loads successfully
    img.onload = function() {
        // Clear any existing content and add the image
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
    };
    
    // Start with icon as initial content
    imageContainer.innerHTML = `<i class="${project.imageIcon}"></i>`;
    
    // Create tags HTML
    const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');
    
    // Create links HTML
    let linksHtml = '';
    if (project.links.github) {
        linksHtml += `<a href="${project.links.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>`;
    }
    if (project.links.devpost) {
        linksHtml += `<a href="${project.links.devpost}" target="_blank"><i class="fas fa-external-link-alt"></i> Devpost</a>`;
    }
    if (project.links.medium) {
        linksHtml += `<a href="${project.links.medium}" target="_blank"><i class="fab fa-medium"></i> Medium</a>`;
    }
    if (project.links.demo && project.links.demo !== '#') {
        linksHtml += `<a href="${project.links.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
    }
    
    // Create project info container
    const infoContainer = document.createElement('div');
    infoContainer.className = 'project-info';
    infoContainer.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${tagsHtml}</div>
        <div class="project-links">${linksHtml}</div>
    `;
    
    // Append both containers to the card
    card.appendChild(imageContainer);
    card.appendChild(infoContainer);
    
    return card;
}

// Function to filter projects
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else if (card.classList.contains(category)) {
            // Filter by main category
            card.style.display = 'block';
        } else {
            // Check if project has the tag that matches the filter
            const project = projects.find(p => p.id.toString() === card.getAttribute('data-id'));
            if (project && project.tags) {
                // Special case for R filter - must be exact match
                if (category === 'r') {
                    if (project.tags.some(tag => tag.toLowerCase() === 'r')) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                } else {
                    // For other filters, check if any tag contains the category
                    if (project.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Initialize projects section
document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Create and append project cards
    if (projectsGrid) {
        projects.forEach(project => {
            const card = createProjectCard(project);
            projectsGrid.appendChild(card);
        });
    }
    
    // Add event listeners to filter buttons
    if (filterButtons) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter projects
                const category = this.getAttribute('data-filter');
                filterProjects(category);
            });
        });
    }
});
