document.addEventListener('DOMContentLoaded', () => {
    // Handle form switching between Farmer and Driver
    const farmerButton = document.getElementById('farmerButton');
    const driverButton = document.getElementById('driverButton');
    const farmerForm = document.getElementById('farmerForm');
    const driverForm = document.getElementById('driverForm');

    farmerButton.addEventListener('click', () => {
        farmerForm.style.display = 'block';
        driverForm.style.display = 'none';
    });

    driverButton.addEventListener('click', () => {
        farmerForm.style.display = 'none';
        driverForm.style.display = 'block';
    });

    // Handle form submission for Farmer
    farmerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(farmerForm);
        const formObj = Object.fromEntries(formData.entries());
        formObj.acres = parseInt(formObj.acres);
        formObj.price_per_acre = parseInt(formObj.price_per_acre);
        formObj.total_price = formObj.acres * formObj.price_per_acre;
        
        fetch('http://localhost:3000/farmers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObj)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Farmer Form Data Submitted:', data);
            // You can add further actions like showing a success message or updating UI here
        })
        .catch(error => console.error('Error:', error));
    });

    // Handle form submission for Driver
    driverForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(driverForm);
        const formObj = Object.fromEntries(formData.entries());
        formObj.fuel_cost = parseInt(formObj.fuel_cost);
        
        fetch('http://localhost:3000/drivers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObj)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Driver Form Data Submitted:', data);
            // You can add further actions like showing a success message or updating UI here
        })
        .catch(error => console.error('Error:', error));
    });

    // Fetch and filter data example
    const filterFarmersByLocation = (location) => {
        fetch('http://localhost:3000/farmers')
        .then(response => response.json())
        .then(farmers => {
            const filteredFarmers = farmers.filter(farmer => farmer.location === location);
            console.log('Filtered Farmers:', filteredFarmers);
            // You can further process the filtered data as needed
        })
        .catch(error => console.error('Error:', error));
    };

    // Example usage of filter function
    filterFarmersByLocation('Nairobi');
});

// Function to open tabs
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'; // Hide all tab content
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active'); // Remove active class from all tabs
    }
    document.getElementById(tabName).style.display = 'block'; // Show the current tab
    evt.currentTarget.classList.add('active'); // Add active class to the button that opened the tab
}
