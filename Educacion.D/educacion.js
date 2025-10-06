document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.card-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-link');
            if (url && url.startsWith('http')) {
                window.open(url, '_blank');
            } else {
                console.error("Error: El enlace no es válido o está incompleto.");
            }
        });
    });
});
