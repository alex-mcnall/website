// Select radio box based on theme selection once the page has loaded
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        document.querySelector(`input[name="theme"][value="${savedTheme}"]`).checked = true;
    } else {
        document.querySelector('input[name="theme"][value="system"]').checked = true;
    }
});

// Listen for system colour scheme change
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
mediaQuery.addEventListener("change", applyTheme);

// Listen for radio button change
const radioButtons = document.querySelectorAll('input[name="theme"]');

// Event listener for radio button change
radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'light') {
            localStorage.theme = 'light';
        } else if (this.value === 'dark') {
            localStorage.theme = 'dark';
        } else if (this.value === 'system') {
            localStorage.removeItem('theme');
        }

        // Re-run the initialization logic to apply the theme
        applyTheme();
    });
});
