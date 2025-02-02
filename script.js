document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('toggleDarkMode');
    
    // 检查用户是否已经选择了夜间模式
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // 记录用户选择
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
