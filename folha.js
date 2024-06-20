document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('editableTable');

    table.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'td') {
            if (!target.hasAttribute('contenteditable')) {
                target.setAttribute('contenteditable', 'true');
                target.focus();
            }
        }
    });

    table.addEventListener('focusout', function(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'td' && target.hasAttribute('contenteditable')) {
            target.removeAttribute('contenteditable');
        }
    });

    table.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const target = event.target;
            if (target.tagName.toLowerCase() === 'td' && target.hasAttribute('contenteditable')) {
                target.removeAttribute('contenteditable');
                event.preventDefault();
            }
        }
    });
});
