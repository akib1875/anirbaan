// JavaScript function to add a new comment with the person's name and timestamp
function addComment() {
    var name = document.getElementById("name-input").value;
    var commentText = document.getElementById("comment-input").value;

    // Check if both fields are filled
    if (name.trim() === "" || commentText.trim() === "") {
        alert("Please fill in both your name and comment!");
        return;
    }

    // Get the current timestamp
    var timestamp = new Date().toLocaleString();

    var commentElement = document.createElement("div");
    commentElement.innerHTML = "<strong>" + name + " (" + timestamp + "):</strong><br>" + commentText; // Names and timestamps on the first line, comments on the second

    document.getElementById("comments-list").appendChild(commentElement);

    // Clear the input fields after adding the comment
    document.getElementById("name-input").value = "";
    document.getElementById("comment-input").value = "";

    // Save the comment in local storage for persistence
    saveComment(name, commentText, timestamp);
}

// Function to save a comment in local storage
function saveComment(name, comment, timestamp) {
    var comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push({ name: name, comment: comment, timestamp: timestamp });
    localStorage.setItem("comments", JSON.stringify(comments));
}

// Function to load comments from local storage and display them
function loadComments() {
    var comments = JSON.parse(localStorage.getItem("comments")) || [];
    var commentsList = document.getElementById("comments-list");

    comments.forEach(function (item) {
        var commentElement = document.createElement("div");
        commentElement.innerHTML = "<strong>" + item.name + " (" + item.timestamp + "):</strong><br>" + item.comment; // Names and timestamps on the first line, comments on the second
        commentsList.appendChild(commentElement);
    });
}

// Load comments when the page loads
window.onload = loadComments;
