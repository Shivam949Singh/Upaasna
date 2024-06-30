document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const godName = urlParams.get('god');
    console.log('God name ===--->', godName);
    document.getElementById('godName').textContent = godName.charAt(0).toUpperCase() + godName.slice(1);

    // Function to fetch and display Aarti content
      fetch(`data/${godName}/aarti.json`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Received data:', data);
          const aartiTitle = document.getElementById('aarti_title');
          const aartiDescription = document.getElementById('aarti_description');
          const chalisaTitle = document.getElementById('chalisa_title');
          const chalisaDescription = document.getElementById('chalisa_description');
          const stotraTitle = document.getElementById('stotra_title');
          const stotraDescription = document.getElementById('stotra_description');
          if (aartiTitle) {
            const div = document.createElement('div');
            div.innerHTML = `<h1>${data[0].title}</h1>`;
            aartiTitle.appendChild(div);
          } else {
              console.error('Aarti Title not found in the DOM');
          }

          if (aartiDescription) {
            const div = document.createElement('div');
            div.innerHTML = `<h2>${data[0].description}</h2>`;
            aartiDescription.appendChild(div);
          } else {
              console.error('Aarti Description not found in the DOM');
          }

          if (chalisaTitle) {
                  const div = document.createElement('div');
                  div.innerHTML = `<h1>${data[1].title}</h1>`;//<h2>${data[1].description}</h2>`;
                  chalisaTitle.appendChild(div);
          } else {
              console.error('Chalisa Title not found in the DOM');
          }

          if (chalisaDescription) {
            const div = document.createElement('div');
            div.innerHTML = `<h2>${data[1].description}</h2>`;
            chalisaDescription.appendChild(div);
          } else {
              console.error('Aarti Description not found in the DOM');
          }

          if (stotraTitle) {
                  const div = document.createElement('div');
                  div.innerHTML = `<h1>${data[2].title}</h1>`;//<h2>${data[2].description}</h2>`;
                  stotraTitle.appendChild(div);
          } else {
              console.error('Strotra title not found in the DOM');
          }

          if (stotraDescription) {
            const div = document.createElement('div');
            div.innerHTML = `<h2>${data[2].description}</h2>`;
            stotraDescription.appendChild(div);
          } else {
              console.error('Aarti Description not found in the DOM');
          }
      })
      .catch(error => console.error('Error fetching Aarti data:', error)
    );  

    // // Function to fetch and display Chalisa content
    // fetch(`data/${godName}/chalisa.json`)
    //     .then(response => response.json())
    //     .then(data => {
    //         const chalisaSection = document.getElementById('chalisa');
    //         data.forEach(item => {
    //             const div = document.createElement('div');
    //             div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    //             chalisaSection.appendChild(div);
    //         });
    //     })
    //     .catch(error => console.error('Error fetching Chalisa data:', error));

    // // Function to fetch and display Stotra content
    // fetch(`data/${godName}/stotra.json`)
    //     .then(response => response.json())
    //     .then(data => {
    //         const stotraSection = document.getElementById('stotra');
    //         data.forEach(item => {
    //             const div = document.createElement('div');
    //             div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    //             stotraSection.appendChild(div);
    //         });
    //     })
    //     .catch(error => console.error('Error fetching Stotra data:', error));
});
