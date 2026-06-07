document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    const summaryPanel = document.getElementById("summeryPanel");

    projects.forEach(project => {
        project.addEventListener("click", () => {

            //Remove active visual state from all projects, add to clicked one
            projects.forEach(p => p.classList.remove("active-project"));
            project.classList.add("active-project");

            //Extract the data attributes from the clicked element
            const title = project.getAttribute("data-title");
            const description = project.getAttribute("data-desc");
            const imgSrc = project.getAttribute("data-img");
            const link = project.getAttribute("data-link");

            //Inject the clean structured HTML into your summary panel
            summaryPanel.innerHTML = `
                <div class="summary-content">
                    <img src="${imgSrc}" alt="${title} Preview" class="summary-image">
                    <h2 class="summary-title">${title}</h2>
                    <hr class="summary-divider">
                    <p class="summary-description">${description}</p>
                    <a href="${link}" class="button">Depart</a>
                </div>
            `;
        });
    });
});
