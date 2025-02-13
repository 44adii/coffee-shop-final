const pages = {
    login: `
        <section id="login" class="section">
            <h2>Login</h2>
            <form id="loginForm">
                <label for="loginEmail">Email:</label>
                <input type="email" id="loginEmail" required>
                <label for="loginPassword">Password:</label>
                <input type="password" id="loginPassword" required>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <button id="registerButton">Register here</button></p>
        </section>
    `,
    register: `
        <section id="register" class="section">
            <h2>Register</h2>
            <form id="registerForm">
                <label for="registerName">Name:</label>
                <input type="text" id="registerName" required>
                <label for="registerEmail">Email:</label>
                <input type="email" id="registerEmail" required>
                <label for="registerPassword">Password:</label>
                <input type="password" id="registerPassword" required>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <button id="loginButton">Login here</button></p>
        </section>
    `,
    home: `
        <section id="home" class="section">
            <img src="PHOTO-2024-10-02-20-14-38.jpg" alt="Espresso Express Coffee Shop" class="banner">
            <h2>Welcome to Espresso Express</h2>
            <p>Experience the perfect blend of quality coffee and cozy ambiance at Espresso Express. We're passionate about serving you the best coffee in Navi Mumbai!</p>
            <div id="specials">
                <h3>Today's Specials</h3>
                <ul id="specialsList">
                    <li>Caramel Macchiato - ₹249</li>
                    <li>Hazelnut Latte - ₹229</li>
                    <li>Mocha Frappuccino - ₹279</li>
                </ul>
                <button id="addSpecial">Add Special</button>
            </div>
        </section>
    `,
    menu: `
        <section id="menu" class="section">
            <h2>Our Menu</h2>
            <div class="menu-item">
                <img src="espresso.jpg" alt="Espresso">
                <div class="menu-item-details">
                    <h3>Espresso</h3>
                    <p>Rich and aromatic single shot of coffee</p>
                    <p>₹129</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="cappuchino.jpg" alt="Cappuccino">
                <div class="menu-item-details">
                    <h3>Cappuccino</h3>
                    <p>Espresso with steamed milk and foam</p>
                    <p>₹199</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="blueberry muffin.jpg" alt="Blueberry Muffin">
                <div class="menu-item-details">
                    <h3>Blueberry Muffin</h3>
                    <p>Freshly baked muffin with juicy blueberries</p>
                    <p>₹99</p>
                </div>
            </div>
        </section>
    `,
    about: `
        <section id="about" class="section">
            <h2>About Espresso Express</h2>
            <img src="PHOTO-2024-10-02-20-17-59.jpg" alt="Our Team" style="float: right; margin: 0 0 1rem 1rem; border-radius: 8px; width: 30%;">
            <p>Founded in 2010, Espresso Express has been serving the coffee lovers of Navi Mumbai with passion and dedication. Our journey began with a simple idea: to create a warm, welcoming space where people could enjoy exceptional coffee and connect with others.</p>
            <p>At Espresso Express, we believe in sourcing the finest beans from sustainable farms around the world. Our skilled baristas are trained to bring out the unique flavors in every cup, ensuring that each visit to our shop is a delightful experience.</p>
            <p>We're more than just a coffee shop - we're a community hub. We host regular events, from coffee tastings to local artist showcases, to bring people together and celebrate the vibrant culture of Navi Mumbai.</p>
            <h3>Our Mission</h3>
            <p>To serve exceptional coffee, foster community connections, and promote sustainability in every cup we brew.</p>
        </section>
    `,
    locations: `
        <section id="locations" class="section">
            <h2>Locations & Contact</h2>
            <div>
                <h3>Navi Mumbai Branch</h3>
                <p>Address: 123 Coffee Street, Sector 21, Navi Mumbai, Maharashtra 400706</p>
                <p>Phone: +91 22 1234 5678</p>
                <p>Email: info@espressoexpress.com</p>
            </div>
            <div>
                <h3>Contact Us</h3>
                <form id="contactForm">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div>
                <h3>Location Map</h3>
                <img src="google map.jpg" alt="Map of Espresso Express location" style="width: 100%; border-radius: 8px;">
            </div>
        </section>
    `,
    order: `
        <section id="order" class="section">
            <h2>Order Online</h2>
            <form id="orderForm">
                <select id="coffeeType" required>
                    <option value="">Select your coffee</option>
                    <option value="espresso">Espresso</option>
                    <option value="cappuccino">Cappuccino</option>
                    <option value="latte">Latte</option>
                    <option value="mocha">Mocha</option>
                </select>
                <select id="size" required>
                    <option value="">Select size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <div>
                    <input type="checkbox" id="extraShot"> <label for="extraShot">Extra shot</label>
                </div>
                <div>
                    <input type="checkbox" id="whippedCream"> <label for="whippedCream">Whipped cream</label>
                </div>
                <button type="submit">Place Order</button>
            </form>
        </section>
    `,
    gallery: `
        <section id="gallery" class="section">
            <h2>Our Gallery</h2>
            <div class="gallery-item">
                <img src="cozy interior coffee shop.jpg" alt="Coffee Shop Interior">
                <div class="gallery-item-details">
                    <h3>Our Cozy Interior</h3>
                    <p>Experience the warm and inviting atmosphere of Espresso Express</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="skilled barista.jpg" alt="Barista at Work">
                <div class="gallery-item-details">
                    <h3>Skilled Baristas</h3>
                    <p>Our expert baristas craft each drink with care and precision</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="coffee with croissant.jpg" alt="Coffee and Croissant">
                <div class="gallery-item-details">
                    <h3>Delicious Pairings</h3>
                    <p>Enjoy our coffee with a selection of freshly baked croissants</p>
                </div>
            </div>
        </section>
    `,
    account: `
        <section id="account" class="section">
            <h2>My Account</h2>
            <div>
                <h3>Account Information</h3>
                <p><strong>Name:</strong> Aditya Koranne</p>
                <p><strong>Email:</strong> wdminiproject@gmail.com</p>
                <p><strong>Loyalty Points:</strong> 250</p>
            </div>
            <div>
                <h3>Order History</h3>
                <ul>
                    <li>Order #1234: Large Cappuccino - ₹199 (2024-03-15)</li>
                    <li>Order #1235: Medium Latte with extra shot - ₹259 (2024-03-18)</li>
                    <li>Order #1236: Small Mocha with whipped cream - ₹239 (2024-03-20)</li>
                </ul>
            </div>
        </section>
    `
};

$(document).ready(function(){
    // Load login page by default
    loadContent('login');

    // Handle register button click
    $(document).on('click', '#registerButton', function() {
        loadContent('register');
    });

    // Handle login button click
    $(document).on('click', '#loginButton', function() {
        loadContent('login');
    });
});

// Function to load page content
function loadContent(page) {
    $('#content').html(pages[page]);

    // Hide navigation on login and register pages
    if (page === 'login' || page === 'register') {
        $('#mainNav').hide();
    } else {
        $('#mainNav').show();
    }
    
    // Add event listeners for specific pages
    if (page === 'login') {
        $('#loginForm').on('submit', handleLogin);
    } else if (page === 'register') {
        $('#registerForm').on('submit', handleRegister);
    } else if (page === 'home') {
        $('#addSpecial').on('click', addSpecial);
    } else if (page === 'order') {
        $('#orderForm').on('submit', placeOrder);
    } else if (page === 'locations') {
        $('#contactForm').on('submit', sendMessage);
    }
}

// Function to handle login
function handleLogin(e) {
    e.preventDefault();
    const email = $('#loginEmail').val();
    const password = $('#loginPassword').val();

    // Simulate successful login
    alert(`Login successful for ${email}`);
    $('#loginForm')[0].reset();
    
    // Load the home page after successful login
    loadContent('home');
}

// Function to handle registration
function handleRegister(e) {
    e.preventDefault();
    const name = $('#registerName').val();
    const email = $('#registerEmail').val();
    const password = $('#registerPassword').val();

    // Simulate successful registration
    alert(`Registration successful for ${name} with email ${email}`);
    $('#registerForm')[0].reset();
    
    // Load the home page after successful registration
    loadContent('home');
}
