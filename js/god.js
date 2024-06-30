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
        .then(response => response.json())
        .then(data => {
          console.log('recieved data : ', data);
            const aartiSection = document.getElementById('aarti');
            console.log('aarti section : ', aartiSection);
            data.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
                aartiSection.appendChild(div);
            });
        })
            .catch(error => console.error('Error fetching Aarti data:', error));

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
