// Need to map globals for SystemJS to see
// Also note that we are using SystemJS.import in code to avoid Webpack from treating System.import as build time split points


SystemJS.config({
    map: {
        'React': '/components/__adapters/react-adapter.js',
        'ReactDOM': '/components/__adapters/react-dom-adapter.js',
        /* add component package names here */
        'component3-package1': '/components/component3-package1/component3-package1.js',
        'component3-package2': '/components/component3-package2/component3-package2.js'
    }
});