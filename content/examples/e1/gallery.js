document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    // Dynamically fetch all images from the folder
    const fetchImages = async () => {
        try {
            const response = await fetch("images.json"); // JSON file listing all images
            const images = await response.json();

            images.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image;
                imgElement.alt = "Gallery Image";
                gallery.appendChild(imgElement);
            });
        } catch (error) {
            console.error("Error loading images:", error);
        }
    };

    fetchImages();
});