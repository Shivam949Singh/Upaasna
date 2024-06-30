document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const godName = urlParams.get('god');
  console.log('God name ===--->', godName);
  document.getElementById('godName').textContent = godName.charAt(0).toUpperCase() + godName.slice(1);

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const section = event.target.dataset.section;
          loadContent(section, godName);
      });
  });

  // Load default section
  loadContent('aarti', godName);
});

function loadContent(section, godName) {
  fetch(`data/${godName}/${section}.json`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
      const contentSection = document.getElementById('content');
      contentSection.innerHTML = ''; // Clear previous content
      data.forEach(item => {
          const div = document.createElement('div');
          div.classList.add('category-item');
          div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
          contentSection.appendChild(div);
      });
  })
  .catch(error => console.error(`Error fetching ${section} data:`, error));
}
