module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx}', 
        './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                thrift: {
                    light: '#4D570A',
                    DEFAULT: '#263203',
                    dark: '#11190E'
                },
                'thrift-highlight': '#D4D302',
                'thrift-lightest' : '#FFFFD8'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
