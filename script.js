<script>
    // Get the button and the images section
    const teamButton = document.getElementById("teamButton");
    const teamImages = document.getElementById("teamImages");

    // Add event listener to the button
    teamButton.addEventListener("click", function() {
        // Toggle the display of the images
        if (teamImages.style.display === "none" || teamImages.style.display === "") {
            teamImages.style.display = "block";
        } else {
            teamImages.style.display = "none";
        }
    });
</script>
