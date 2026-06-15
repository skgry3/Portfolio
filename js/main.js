document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    const summaryPanel = document.getElementById("summeryPanel");
    const projectPanel = document.querySelector(".projectPanel");
    const projectToggle = document.querySelector(".projectDropdownToggle");

    if (projectToggle && projectPanel) {
        projectToggle.addEventListener("click", () => {
            const isOpen = projectPanel.classList.toggle("is-open");
            projectToggle.setAttribute("aria-expanded", String(isOpen));
            projectToggle.querySelector("span").textContent = isOpen ? "Hide project list" : "Open project list";
        });
    }

    projects.forEach(project => {
        project.addEventListener("click", () => {
            if (projectPanel && projectToggle) {
                projectPanel.classList.remove("is-open");
                projectToggle.setAttribute("aria-expanded", "false");
                projectToggle.querySelector("span").textContent = "Open project list";
            }

            //Remove active visual state from all projects, add to clicked one
            projects.forEach(p => p.classList.remove("active-project"));
            project.classList.add("active-project");

            //Extract the data attributes from the clicked element
            const title = project.getAttribute("data-title");
            const description = project.getAttribute("data-desc");
            const imgSrc = project.getAttribute("data-img");
            const link = project.getAttribute("data-link");
            const ongoing = project.dataset.ongoing === "true";
            const contributions = project.dataset.contributions || "";
            const teammates = project.dataset.teammates || "";

            //Inject the clean structured HTML into your summary panel
            summaryPanel.innerHTML = `
                <div class="summary-content">
                    <img src="${imgSrc}" alt="${title} Preview" class="summary-image">
                    <h2 class="summary-title">${title}</h2>
                    ${ongoing ? `<span class="summary-badge">In Development</span>` : ""}
                    <hr class="summary-divider">
                    <p class="summary-description">${description}</p>
                    ${contributions ? `
                        <div>
                            <p class="step">My Contributions</p>
                            <div class="chip-row">
                                ${contributions.split(",").map(c => `<span class="chip chip-mine">${c.trim()}</span>`).join("")}
                            </div>
                        </div>` : ""}
                    ${teammates ? `
                        <div>
                            <p class="step">Teammates</p>
                            <div class="chip-row">
                                ${teammates.split(",").map(t => `<span class="chip chip-team">${t.trim()}</span>`).join("")}
                            </div>
                        </div>` : ""}
        <a href="${link}" class="button">View Project</a>
    </div>
`;
        });
    });

    document.querySelectorAll('.tech-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-open');
        });
    });
});
