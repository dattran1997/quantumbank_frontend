module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                target: {
                    node: "current"
                }
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
}