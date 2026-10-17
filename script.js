
let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', function (event) {
    lastX = event.clientX;
    lastY = event.clientY;
});

function showInspectLockWarning(x, y) {
    alert("Developer Tools shortcuts are disabled on this website.");
}

document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();

    const isInspectShortcut =
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey &&
            ['i', 'j', 'c'].includes(key)) ||
        (event.ctrlKey && key === 'u') ||
        (event.metaKey && event.altKey &&
            ['i', 'j', 'c'].includes(key));

    if (isInspectShortcut) {
        event.preventDefault();
        event.stopPropagation();
        showInspectLockWarning(lastX, lastY);
    }
}, true);
