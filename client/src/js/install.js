const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    installBtn.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const prompt = window.deferredPrompt;

    if (!prompt) {
        return;
    }

    prompt.prompt();
    window.deferredPrompt = null;
    installBtn.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
