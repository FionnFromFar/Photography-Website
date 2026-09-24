// Wait for the entire website to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Find all images that have the 'cycle-img' class
    const cycleImages = document.querySelectorAll('.cycle-img');
    
    cycleImages.forEach(img => {
        // Read the folder path and total photo count from the HTML
        const folder = img.getAttribute('data-folder');
        const totalPhotos = parseInt(img.getAttribute('data-count'));
        let currentPhoto = 1;
        let hoverInterval; // We define this inside so each album gets its own timer

        // When the mouse enters the photo
        img.addEventListener('mouseenter', () => {
            hoverInterval = setInterval(() => {
                currentPhoto++;
                
                // If we go past the last photo, loop back to number 1
                if (currentPhoto > totalPhotos) {
                    currentPhoto = 1;
                }
                
                // Swap the image to the next number (using your exact uppercase .JPG)
                img.src = `${folder}${currentPhoto}.JPG`; 
            }, 1200); // Changes every 0.8 seconds
        });

        // When the mouse leaves the photo
        img.addEventListener('mouseleave', () => {
            clearInterval(hoverInterval);
            currentPhoto = 1; // Reset our counter
            img.src = `${folder}1.JPG`; // Reset back to the first photo
        });
    });
    
});