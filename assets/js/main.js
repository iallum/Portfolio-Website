const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");

function openModal(projectId) {
  const detailsFile = `assets/md/${projectId}.md`;
  fetch(detailsFile)
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

      modalBody.innerHTML = tempDiv.innerHTML;
      modal.style.display = "flex";
    })
    .catch(error => {
      console.error("Error fetching Markdown file:", error);
      modalBody.innerHTML = `<p>Error: Could not load project details.</p>`;
      modal.style.display = "flex";
    });
}

function closeModal() {
  modal.style.display = "none";
  modalBody.innerHTML = "";
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}