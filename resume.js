// Resume data
const resumeData = {
    education: [
        {
            degree: "Master of Science - Business Analytics (Data Science)",
            institution: "California State University, East Bay",
            location: "California",
            date: "GPA: 3.8 | Dec 2025",
            description: "Specializing in Data Analytics, Data Engineering & Business Intelligence, Big Data Technology, Optimization for Analytics, Machine Learning, Database Management, Statistics, Text Analytics & Generative AI and Time-Series Analytics."
        },
        {
            degree: "MBA (Marketing)",
            institution: "IMT Hyderabad",
            location: "Hyderabad, India",
            date: "GPA: 3.6 | Mar 2020",
            description: "Focused on marketing analytics and business strategy."
        },
        {
            degree: "Bachelor of Engineering (Civil Engineering)",
            institution: "Medicaps Institute of Science & Technology",
            location: "Indore, India",
            date: "GPA: 3.29 | Jun 2016",
            description: "Engineering fundamentals with technical problem-solving skills."
        }
    ],
    experience: [
        {
            position: "Data Science Analyst",
            company: "Qlikmatrix",
            location: "Delhi, India",
            date: "Sept 2022 - Oct 2023",
            description: "Improved digital advertising performance through A/B testing and time-series forecasting, increasing ROI by 14% while reducing ad spend by 27%. Developed customer segmentation models using K-means clustering and created Tableau dashboards to enhance data-driven decision making."
        },
        {
            position: "Data Analyst",
            company: "Amazon",
            location: "Bangalore, India",
            date: "May 2020 - Nov 2021",
            description: "Led fraud prevention initiatives using predictive modeling and logistic regression, saving over $1M annually and improving fraud detection accuracy by 22%. Developed an automated workflow tool and Tableau dashboards that reduced bad debt by 16% and increased team productivity by 10%."
        }
    ]
};

// Function to create timeline items
function createTimelineItem(item, type) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    let title, subtitle;
    if (type === 'education') {
        title = item.degree;
        subtitle = item.institution;
    } else {
        title = item.position;
        subtitle = item.company;
    }
    
    timelineItem.innerHTML = `
        <h4>${title}</h4>
        <h5>${subtitle} - ${item.location}</h5>
        <div class="date">${item.date}</div>
        <p>${item.description}</p>
    `;
    
    return timelineItem;
}

// Initialize resume section
document.addEventListener('DOMContentLoaded', function() {
    const educationTimeline = document.querySelector('#resume .resume-section:nth-child(1) .timeline');
    const experienceTimeline = document.querySelector('#resume .resume-section:nth-child(2) .timeline');
    
    // Populate education timeline
    if (educationTimeline) {
        resumeData.education.forEach(item => {
            const timelineItem = createTimelineItem(item, 'education');
            educationTimeline.appendChild(timelineItem);
        });
    }
    
    // Populate experience timeline
    if (experienceTimeline) {
        resumeData.experience.forEach(item => {
            const timelineItem = createTimelineItem(item, 'experience');
            experienceTimeline.appendChild(timelineItem);
        });
    }
});
