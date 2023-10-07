document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("certificateForm");
    const generateButton = document.getElementById("generateButton");
    const downloadLink = document.getElementById("downloadLink");

    generateButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const country = document.getElementById("country").value;

        // Send data to the server to generate the certificate
        fetch("generate_certificate.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, country }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Update the download link and show it
                downloadLink.href = data.certificateUrl;
                downloadLink.style.display = "block";
            })
            .catch((error) => {
                console.error("Error generating certificate:", error);
            });
    });
});
