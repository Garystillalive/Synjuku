// Data Library specific functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Table of Contents navigation - scroll to sections
    const tocMainItems = document.querySelectorAll('.toc-main[data-toc-target]');
    const tocSubItems = document.querySelectorAll('.toc-sub[data-toc-subtarget]');
    
    tocMainItems.forEach(tocMain => {
        tocMain.addEventListener('click', function() {
            const targetId = tocMain.getAttribute('data-toc-target');
            const targetSection = document.querySelector(`.category-section[data-item="${targetId}"]`);
            
            if (targetSection) {
                const offset = targetSection.offsetTop - 60;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    tocSubItems.forEach(tocSub => {
        tocSub.addEventListener('click', function() {
            const targetId = tocSub.getAttribute('data-toc-subtarget');
            const subcategoryName = tocSub.getAttribute('data-subcategory');
            const targetSection = document.querySelector(`.category-section[data-item="${targetId}"]`);
            
            if (targetSection) {
                // Find the subcategory within the section
                const subcategoryLabels = targetSection.querySelectorAll('.subcategory-label');
                subcategoryLabels.forEach(label => {
                    if (label.textContent.trim().includes(subcategoryName)) {
                        const subcategory = label.closest('.subcategory');
                        if (subcategory) {
                            const offset = subcategory.offsetTop + targetSection.offsetTop - 60;
                            window.scrollTo({
                                top: offset,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            }
        });
    });

    // Load JSON metadata for each video - display raw JSON
    const videoItems = document.querySelectorAll('.video-item[data-json-file]');
    videoItems.forEach(item => {
        const jsonFile = item.getAttribute('data-json-file');
        const metadataContainer = item.querySelector('.video-metadata');
        const video = item.querySelector('.motion-video');
        
        if (jsonFile && metadataContainer) {
            fetch(`data-library-videos/${jsonFile}`)
                .then(response => response.json())
                .then(data => {
                    // Display raw JSON
                    displayRawJSON(data, metadataContainer);
                    
                    // Set metadata height to 1/3 of video height
                    if (video) {
                        const setMetadataHeight = () => {
                            const videoHeight = video.offsetHeight;
                            const metadataHeight = videoHeight / 3;
                            const jsonContent = metadataContainer.querySelector('.json-content');
                            if (jsonContent) {
                                jsonContent.style.height = `${metadataHeight}px`;
                                jsonContent.style.maxHeight = `${metadataHeight}px`;
                            }
                        };
                        
                        // Set height when video loads
                        if (video.readyState >= 2) {
                            setMetadataHeight();
                        } else {
                            video.addEventListener('loadedmetadata', setMetadataHeight);
                        }
                        
                        // Update on resize
                        window.addEventListener('resize', setMetadataHeight);
                    }
                })
                .catch(error => {
                    console.error(`Error loading metadata from ${jsonFile}:`, error);
                    metadataContainer.innerHTML = `<div class="json-error">Error loading ${jsonFile}</div>`;
                });
        }
    });

    // Removed category metadata windows - only show metadata below videos

    // Optional: Add click handlers for video items
    videoItems.forEach(item => {
        const video = item.querySelector('.motion-video');
        if (video) {
            video.addEventListener('play', function() {
                // Could add functionality here to track video plays
            });
        }
    });
});

// Display raw JSON for individual video
function displayRawJSON(data, container) {
    if (!data || !container) return;
    
    const jsonString = JSON.stringify(data, null, 2);
    container.innerHTML = `
        <div class="metadata-header">Metadata</div>
        <pre class="json-content">${escapeHtml(jsonString)}</pre>
    `;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}


