// Simulated user data for demonstration purposes
const users = [
    { email: 'user@example.com', password: 'password123' }
];

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const email = event.target[0].value;
    const password = event.target[1].value;
    const errorMessage = document.getElementById('errorMessage');

    // Check if email and password match any registered user
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        // Redirect to the dashboard if successful
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
});

// Handle registration form submission
document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const fullName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[3].value;
    const errorMessage = document.getElementById('errorMessage');

    // Basic validation for registration
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Simulate saving the new user
    users.push({ email, password });
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});

// Simulated user data for dashboard
const transactions = [
    { date: '2024-10-01', amount: 50, description: 'Groceries' },
    { date: '2024-10-03', amount: 20, description: 'Transport' },
    { date: '2024-10-05', amount: 100, description: 'Utilities' }
];

// Display transactions on dashboard
function displayTransactions() {
    const transactionsDiv = document.getElementById('transactions');
    transactions.forEach(transaction => {
        const div = document.createElement('div');
        div.className = 'transaction';
        div.innerHTML = `<h3>${transaction.date}</h3><p>$${transaction.amount} - ${transaction.description}</p>`;
        transactionsDiv.appendChild(div);
    });
}

// Call display function on dashboard load
if (window.location.pathname.includes('dashboard.html')) {
    displayTransactions();
}

// Logout functionality
document.getElementById('logout')?.addEventListener('click', function () {
    window.location.href = 'index.html'; // Redirect to home page
});
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const links = document.querySelector('.links');

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        links.style.display = 'flex'; // Show navbar links when sidebar is hidden
    } else {
        sidebar.style.left = '0px';
        links.style.display = 'none'; // Hide navbar links when sidebar is shown
    }
}