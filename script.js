document.addEventListener('DOMContentLoaded', function() {
    const farewellMessage = `
                === ✭ ===  ✭ === ✭ ===<br><br>
                Dear Principal Sister and Esteemed Sisters,<br><br>
                We cordially invite you to the farewell event for<br>
                the Class of 2025 at St. Mary's Convent School, Santragachi,<br>
                on January 11th, 2025. This occasion will be a celebration<br>
                of the hard work, growth, and accomplishments of our<br>
                graduating students, made possible by your constant support<br>
                and spiritual guidance.<br><br>
                Your presence at this special event will be a great honor,<br>
                and we would be grateful to have you with us as we bid farewell<br>
                to our beloved seniors.<br><br>
                Warm regards,
                𝑱𝒖𝒏𝒊𝒐𝒓𝒔 𝑷𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒐𝒏™<br><br>
                === ✭ ===  ✭ === ✭ ===<br><br>
                𝑱𝒖𝒏𝒊𝒐𝒓𝒔 𝑷𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒐𝒏 presents to you,<br>
                a short introductory video,<br>
                hope you like it!<br><br>
    `;

    document.getElementById('message').innerHTML = farewellMessage;
    document.getElementById('farewellVideo').src = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

    // Fade out input container and fade in message container
    const inputContainer = document.getElementById('inputContainer');
    const messageContainer = document.getElementById('messageContainer');

    inputContainer.classList.add('fade-out');
    setTimeout(function() {
        inputContainer.style.display = 'none';
        messageContainer.style.display = 'block';
        messageContainer.classList.add('fade-in');
    }, 500); // Match this duration with the CSS transition time
});