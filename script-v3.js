// Convert text to vertical Chinese-style layout (character by character)
function convertToVertical(text) {
    return text.split('').map(char => {
        if (char === ' ') {
            return '<span class="char-space"> </span>';
        }
        return `<span class="char">${char}</span>`;
    }).join('');
}

// Expandable Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Convert all menu labels to vertical character-by-character display
    const menuLabels = document.querySelectorAll('.menu-label');
    menuLabels.forEach(label => {
        const originalText = label.textContent;
        label.innerHTML = convertToVertical(originalText);
    });

    const menuItems = document.querySelectorAll('.menu-item');
    const menuContainer = document.querySelector('.menu-container');
    let expandedItem = null;

    menuItems.forEach((item, index) => {
        // Make entire menu item clickable, not just the label
        item.addEventListener('click', function(e) {
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
    });

    // Click outside to collapse
    document.addEventListener('click', function(e) {
        if (expandedItem && !expandedItem.contains(e.target)) {
            collapseItem(expandedItem);
            expandedItem = null;
        }
    });

    function expandItem(item, index) {
        item.classList.add('expanded');
        menuContainer.classList.add('has-expanded');
        
        // Keep items aligned at top
        const topY = 80;
        const leftPadding = 150; // Increased left padding from edge when expanded
        const rightPadding = 150; // Increased right padding from edge when expanded
        const itemSpacing = 60; // Spacing between items when stacked
        const contentWidth = 380; // Content panel width
        const contentGap = 60; // Increased gap between items and content
        
        // Items up to and including clicked item go to left
        // Remaining items go to right
        const leftItemsCount = index + 1; // Including the clicked item
        const rightItemsCount = menuItems.length - leftItemsCount;
        
        // Calculate positions with staggered animation delays
        menuItems.forEach((otherItem, otherIndex) => {
            otherItem.classList.remove('position-left', 'position-right');
            
            // Calculate animation delay for staggered effect
            const delay = Math.abs(otherIndex - index) * 0.05; // 50ms delay per item
            otherItem.style.transitionDelay = `${delay}s`;
            
            if (otherIndex <= index) {
                // Items up to and including clicked item → left side
                otherItem.classList.add('position-left');
                otherItem.style.top = `${topY}px`;
                otherItem.style.left = `${leftPadding + (otherIndex * itemSpacing)}px`;
                otherItem.style.transform = 'none';
                
                // Position content after left items
                if (otherItem === item) {
                    const content = otherItem.querySelector('.menu-content');
                    if (content) {
                        const contentLeft = leftPadding + (leftItemsCount * itemSpacing) + contentGap;
                        content.style.left = `${contentLeft}px`;
                        content.style.transitionDelay = `${0.3 + delay}s`; // Content appears after items
                    }
                }
            } else {
                // Remaining items → right side
                otherItem.classList.add('position-right');
                const rightIndex = otherIndex - leftItemsCount;
                const rightStart = window.innerWidth - rightPadding - (rightItemsCount * itemSpacing);
                otherItem.style.top = `${topY}px`;
                otherItem.style.left = `${rightStart + (rightIndex * itemSpacing)}px`;
                otherItem.style.transform = 'none';
            }
        });
    }

    function collapseItem(item) {
        item.classList.remove('expanded');
        menuContainer.classList.remove('has-expanded');
        
        // Reset all items to center with smooth transition
        menuItems.forEach((otherItem, otherIndex) => {
            otherItem.classList.remove('position-left', 'position-right');
            otherItem.style.transitionDelay = `${otherIndex * 0.03}s`; // Staggered collapse
            otherItem.style.top = '';
            otherItem.style.left = '';
            otherItem.style.transform = '';
            
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
});

