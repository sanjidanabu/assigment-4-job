// 8 cards
const initialJobs = [
    { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users.", status: "all" },
    { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern tools.", status: "all" },
    { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "all" },
    { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infractecture.", status: "all" },
    { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "all" },
    { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "all" },
    { id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "all" },
    { id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: "all" }
];
let jobs = [...initialJobs];
let currentTab = 'all-tab';


const jobContainer = document.getElementById('job-container');
const emptyState = document.getElementById('empty-state');
const totalCountEl = document.getElementById('totalCount');
const interviewCountEl = document.getElementById('interviewCount');
const rejectedCountEl = document.getElementById('rejectedCount');
const currentViewCountEl = document.getElementById('currentViewCount');


function renderJobs() {
    jobContainer.innerHTML = '';
    
    
    const filteredJobs = jobs.filter(job => {
        if (currentTab === 'all-tab') return true;
        if (currentTab === 'interview-tab') return job.status === 'Interview';
        if (currentTab === 'rejected-tab') return job.status === 'Rejected';
    });

    
    updateDashboard(filteredJobs.length);

    if (filteredJobs.length === 0) {
        jobContainer.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        jobContainer.classList.remove('hidden');
        emptyState.classList.add('hidden');
        
        filteredJobs.forEach(job => {
            const card = document.createElement('div');
            card.className = "bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative mb-4 w-[90%] md:w-[80%] mx-auto";
            
            card.innerHTML = `
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-xl font-bold text-black">${job.company}</h3>
                        <p class="text-gray-500 font-medium">${job.position}</p>
                    </div>
                    <button onclick="deleteJob(${job.id})" class="hover:text-red-600">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                
                <div class="flex flex-wrap gap-4 my-3 text-sm text-gray-600">
                    <span><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
                    <span>. ${job.type}</span>
                    <span>. ${job.salary}</span>
                </div>
                
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">${job.description}</p>
                
                <div class="flex gap-3">
                    <button onclick="updateStatus(${job.id}, 'Interview')" 
                        class="px-4 py-1.5 border rounded-md text-sm font-medium transition-colors ${job.status === 'Interview' ? 'bg-green-100 text-green-700 border-green-500' : 'text-green-600 border-green-200 hover:bg-green-50'}">
                        INTERVIEW
                    </button>
                    <button onclick="updateStatus(${job.id}, 'Rejected')" 
                        class="px-4 py-1.5 border rounded-md text-sm font-medium transition-colors ${job.status === 'Rejected' ? 'bg-red-100 text-red-700 border-red-500' : 'text-red-600 border-red-200 hover:bg-red-50'}">
                        REJECTED
                    </button>
                </div>
            `;
            jobContainer.appendChild(card);
        });
    }
}



