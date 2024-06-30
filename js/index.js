document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const godItems = document.querySelectorAll('.god-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        godItems.forEach(function(item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    godItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const godName = item.dataset.god;
            console.log('god name ==-->',godName);
            window.location.href = `god.html?god=${godName}`;
        });
    });
});
