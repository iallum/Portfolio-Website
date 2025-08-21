const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");

/**
 * Opens the project modal and populates it with project data.
 * @param {string} projectId The ID of the project to display.
 */
function openModal(projectId) {
  // Fetch project data from a JSON file
  fetch('assets/js/project-data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(projects => {
      const project = projects.find(p => p.id === projectId);

      if (!project) {
        throw new Error('Project not found');
      }

      // Populate the modal content based on the project data
      if (project.details_file) {
        fetch(project.details_file)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response for details file was not ok');
            }
            return response.text();
          })
          .then(markdownContent => {
            // --- POPULATE AND OPEN MODAL FOR .md FILE ---
            modalBody.innerHTML = `<h2>${project.title}</h2><p>${project.short}</p>${marked.parse(markdownContent)}`;
            modal.style.display = "flex";
          })
          .catch(error => {
            console.error("Error fetching Markdown file:", error);
            modalBody.innerHTML = `<p>Error: Could not load project details.</p>`;
            modal.style.display = "flex";
          });
      } else if (project.details) {
        // --- POPULATE AND OPEN MODAL FOR INLINE DETAILS ---
        modalBody.innerHTML = `<h2>${project.title}</h2><p>${project.short}</p>${project.details}`;
        modal.style.display = "flex";
      } else {
        // --- FALLBACK FOR NO DETAILS ---
        modalBody.innerHTML = `<p>No details available for this project.</p>`;
        modal.style.display = "flex";
      }
    })
    .catch(error => {
      console.error('Error fetching project data:', error);
      modalBody.innerHTML = `<p>Error: Could not load project data. Please check the console for details.</p>`;
      modal.style.display = "flex";
    });
}

/**
 * Closes the project modal.
 */
function closeModal() {
  modal.style.display = "none";
  modalBody.innerHTML = ""; // Clear the content
}

// Close the modal if the user clicks on the backdrop (outside the content)
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}