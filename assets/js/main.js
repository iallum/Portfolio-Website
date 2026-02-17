const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");

/**
 * Opens the project modal and populates it with project data.
 * @param {string} projectId The ID of the project to display.
 */
function openModal(projectId) {
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

      if (project.details_file) {
        fetch(project.details_file)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response for details file was not ok');
            }
            return response.text();
          })
          .then(markdownContent => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = marked.parse(markdownContent);

            const images = tempDiv.querySelectorAll('img');
            images.forEach(img => {
                img.classList.add('md-image');
            });
            
            const iframes = tempDiv.querySelectorAll('iframe');
            iframes.forEach(iframe => {
                if (window.innerWidth <= 768) {
                    iframe.style.border = '1px solid #8c9bba';
                }
            });

            const videos = tempDiv.querySelectorAll('video');
            videos.forEach(video => {
                video.style.maxWidth = '100%';
                video.style.height = 'auto';
                if (window.innerWidth <= 768) {
                    video.style.border = '1px solid #8c9bba';
                }
            });

            const paragraphs = tempDiv.querySelectorAll('p');
            paragraphs.forEach(p => {
                if (p.textContent.includes('Mapped foodware-using establishments')) {
                    p.classList.add('summary-text');
                }
            });

            modalBody.innerHTML = `<h2>${project.title}</h2><p>${project.short}</p>${tempDiv.innerHTML}`;
            modal.style.display = "flex";
          })
          .catch(error => {
            console.error("Error fetching Markdown file:", error);
            modalBody.innerHTML = `<p>Error: Could not load project details.</p>`;
            modal.style.display = "flex";
          });
      } else if (project.details) {
        modalBody.innerHTML = `<h2>${project.title}</h2><p>${project.short}</p>${project.details}`;
        modal.style.display = "flex";
      } else {
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

function closeModal() {
  modal.style.display = "none";
  modalBody.innerHTML = ""; // Clear the content
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}