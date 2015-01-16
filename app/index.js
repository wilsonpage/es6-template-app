
requirejs.config({
    baseUrl: 'components',
    paths: { app: '../' }
});

// Start loading the main app module.
requirejs(['app/js/app']);
