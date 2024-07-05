document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault();

    const departmentId = document.getElementById('departmentId').value.trim();

    if (departmentId) {
        fetch(`/blw/search/${departmentId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Department not found');
                }
            })
            .then(user => {
                const searchResults = document.getElementById('searchResults');
                searchResults.innerHTML = `
                    <div class="chat">
                        <p>Department Id : <i>${user.systemid}</i></p>
                        <div class="msg">
                            <p> Department Name : ${user.department}</p>
                        </div>
                        <p>Status :<i> ${user.status}</i></p>
                        <hr>
                    </div>
                `;
            })
            .catch(error => {
                const searchResults = document.getElementById('searchResults');
                searchResults.innerHTML = `<p>${error.message}</p>`;
            });
    } else {
        alert('Please enter a Department ID');
    }
});
