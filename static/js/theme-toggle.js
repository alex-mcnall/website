const colorScheme = 'data-theme';
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const selectedTheme = localStorage.getItem(colorScheme)
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Set theme, if a setting is available
if (selectedTheme) {
    html.setAttribute(colorScheme, selectedTheme);
    
    // Make sure the toggle shows the correct icon

} else if (window.matchMedia('prefers-color-scheme: light)').matches) {
    html.setAttribute(colorScheme, 'light');
}

// Toggle on icon switch
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute(colorScheme) || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute(colorScheme, newTheme);
    localStorage.setItem(colorScheme, newTheme);
});

// Toggle if the system preference changes
mediaQuery.addEventListener('change', (e) => {
    const systemTheme = e.matches ? 'dark' : 'light';

    setTheme(systemTheme);
    localStorage.setItem(colorScheme, systemTheme);
});



function setTheme(theme) {
    document.documentElement.setAttribute(colorScheme, theme);
    localStorage.setItem(colorScheme, theme);
}
