// Expandable Menu Functionality
document.addEventListener('DOMContentLoaded', function() {

    const menuItems = document.querySelectorAll('.menu-item');
    const menuContainer = document.querySelector('.menu-container');
    let expandedItem = null;

    menuItems.forEach((item, index) => {
        // Make menu label clickable to expand/collapse
        const menuLabel = item.querySelector('.menu-label');
        if (menuLabel) {
            menuLabel.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // If clicking the same item, collapse it
                if (item === expandedItem) {
                    collapseItem(item);
                    expandedItem = null;
                    return;
                }
                
                // Collapse previously expanded item
                if (expandedItem) {
                    collapseItem(expandedItem);
                }
                
                // Expand clicked item
                expandItem(item, index);
                expandedItem = item;
            });
        }
        
        // Prevent video interactions from collapsing menu
        const videos = item.querySelectorAll('video');
        videos.forEach(video => {
            video.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    });

    // Table of Contents clickable functionality
    const tocMainItems = document.querySelectorAll('.toc-main[data-toc-target]');
    const tocSubItems = document.querySelectorAll('.toc-sub[data-toc-subtarget]');
    
    tocMainItems.forEach(tocMain => {
        tocMain.addEventListener('click', function() {
            const targetId = tocMain.getAttribute('data-toc-target');
            const targetItem = document.querySelector(`.menu-item[data-item="${targetId}"]`);
            
            if (targetItem) {
                const index = Array.from(menuItems).indexOf(targetItem);
                
                // If already expanded, collapse it
                if (targetItem === expandedItem) {
                    collapseItem(targetItem);
                    expandedItem = null;
                } else {
                    // Collapse previously expanded item
                    if (expandedItem) {
                        collapseItem(expandedItem);
                    }
                    
                    // Expand target item
                    expandItem(targetItem, index);
                    expandedItem = targetItem;
                    
                    // Scroll to top of content
                    setTimeout(() => {
                        const content = targetItem.querySelector('.menu-content');
                        if (content) {
                            content.scrollTop = 0;
                        }
                    }, 100);
                }
            }
        });
    });
    
    tocSubItems.forEach(tocSub => {
        tocSub.addEventListener('click', function() {
            const targetId = tocSub.getAttribute('data-toc-subtarget');
            const subcategoryName = tocSub.getAttribute('data-subcategory');
            const targetItem = document.querySelector(`.menu-item[data-item="${targetId}"]`);
            
            if (targetItem) {
                const index = Array.from(menuItems).indexOf(targetItem);
                
                // Expand the parent category if not already expanded
                if (targetItem !== expandedItem) {
                    if (expandedItem) {
                        collapseItem(expandedItem);
                    }
                    expandItem(targetItem, index);
                    expandedItem = targetItem;
                }
                
                // Scroll to the subcategory
                setTimeout(() => {
                    const content = targetItem.querySelector('.menu-content');
                    if (content) {
                        // Find the subcategory label
                        const subcategoryLabels = content.querySelectorAll('.subcategory-label');
                        subcategoryLabels.forEach(label => {
                            if (label.textContent.trim() === subcategoryName) {
                                const subcategory = label.closest('.subcategory');
                                if (subcategory) {
                                    const offset = subcategory.offsetTop - content.offsetTop - 20;
                                    content.scrollTo({
                                        top: offset,
                                        behavior: 'smooth'
                                    });
                                }
                            }
                        });
                    }
                }, 200);
            }
        });
    });

    // Click outside to collapse
    document.addEventListener('click', function(e) {
        // Don't collapse if clicking on TOC items
        if (e.target.closest('.table-of-contents')) {
            return;
        }
        
        if (expandedItem && !expandedItem.contains(e.target)) {
            collapseItem(expandedItem);
            expandedItem = null;
        }
    });

    function expandItem(item, index) {
        item.classList.add('expanded');
        menuContainer.classList.add('has-expanded');
        
        // Position content to the right
        const content = item.querySelector('.menu-content');
        if (content) {
            content.style.transitionDelay = '0.2s';
        }
        
        // Add slight animation delay for other items
        menuItems.forEach((otherItem, otherIndex) => {
            if (otherItem !== item) {
                const delay = Math.abs(otherIndex - index) * 0.03;
                otherItem.style.transitionDelay = `${delay}s`;
            }
        });
    }

    function collapseItem(item) {
        item.classList.remove('expanded');
        menuContainer.classList.remove('has-expanded');
        
        // Reset all items with smooth transition
        menuItems.forEach((otherItem, otherIndex) => {
            otherItem.style.transitionDelay = `${otherIndex * 0.02}s`; // Staggered collapse
            
            // Reset content
            const content = otherItem.querySelector('.menu-content');
            if (content) {
                content.style.transitionDelay = '';
            }
        });
    }

    // Scroll indicator functionality
    function updateScrollIndicator() {
        const indicator = document.getElementById('scrollIndicator');
        if (!indicator) return;

        const scrollableElements = document.querySelectorAll('.menu-content');
        let activeElement = null;

        scrollableElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            if (computedStyle.visibility === 'visible' && 
                computedStyle.opacity === '1' &&
                element.scrollHeight > element.clientHeight) {
                activeElement = element;
            }
        });

        if (activeElement) {
            const scrollTop = activeElement.scrollTop;
            const scrollHeight = activeElement.scrollHeight;
            const clientHeight = activeElement.clientHeight;
            const scrollPercent = scrollTop / (scrollHeight - clientHeight);
            
            const elementRect = activeElement.getBoundingClientRect();
            const indicatorTop = elementRect.top + (elementRect.height * scrollPercent);
            
            indicator.style.top = `${indicatorTop}px`;
            indicator.classList.add('visible');
        } else {
            indicator.classList.remove('visible');
        }
    }

    // Update scroll indicator on scroll
    document.addEventListener('scroll', updateScrollIndicator, true);
    
    // Also check when content is expanded or scrolled
    document.querySelectorAll('.menu-content').forEach(content => {
        content.addEventListener('scroll', updateScrollIndicator);
        
        const observer = new MutationObserver(updateScrollIndicator);
        observer.observe(content, { 
            attributes: true, 
            attributeFilter: ['style', 'class']
        });
    });

    // Initial check
    setTimeout(updateScrollIndicator, 100);
    
    // Lazy load videos when content becomes visible
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                // Videos are already set to preload="metadata", so they'll load when needed
                videoObserver.unobserve(video);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    // Observe all videos for lazy loading
    document.querySelectorAll('.motion-video').forEach(video => {
        videoObserver.observe(video);
    });
});

