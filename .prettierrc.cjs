module.exports = {
    semi: true,
    singleQuote: false,
    tabWith: 2,
    useTabs: true,
    plugins:[
        requiere("prettier-plugin-astro")
    ],
    overrides: [ 
        {
            files: "**/*astro",
            options:{
                parser: "astro",
            },
        },
    ],
};