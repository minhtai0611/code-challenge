import initializeApp from './app';

const PORT = process.env.PORT || 3000;

initializeApp()
    .then((app) => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to initialize the app:', error);
    });