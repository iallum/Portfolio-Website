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
            // --- FIX FOR ALL DYNAMIC ELEMENTS ---
            // Create a temporary div to hold the parsed HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = marked.parse(markdownContent);

            // Find all images in the temporary div
            const images = tempDiv.querySelectorAll('img');
            images.forEach(img => {
                // NEW: Add a class to the dynamically generated images
                img.classList.add('md-image');
            });
            
            // Find all iframes and add the new styles
            const iframes = tempDiv.querySelectorAll('iframe');
            iframes.forEach(iframe => {
                // Check if the screen is a mobile size
                if (window.innerWidth <= 768) {
                    iframe.style.border = '1px solid #8c9bba';
                }
            });

            // Find all video tags in the temporary div
            const videos = tempDiv.querySelectorAll('video');
            videos.forEach(video => {
                // Ensure videos are responsive and have a max-width
                video.style.maxWidth = '100%';
                video.style.height = 'auto';
                if (window.innerWidth <= 768) {
                    video.style.border = '1px solid #8c9bba';
                }
            });

            // Find all paragraphs and apply the styling class
            const paragraphs = tempDiv.querySelectorAll('p');
            paragraphs.forEach(p => {
                // This ensures the summary text has its style
                if (p.textContent.includes('Mapped foodware-using establishments')) {
                    p.classList.add('summary-text');
                }
            });

            // --- POPULATE AND OPEN MODAL FOR .md FILE ---
            modalBody.innerHTML = `<h2>${project.title}</h2><p>${project.short}</p>${tempDiv.innerHTML}`;
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