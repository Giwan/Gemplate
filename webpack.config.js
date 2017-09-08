var path = require( "path" );
var proxy = require('http-proxy-middleware');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    context: __dirname + "/src",
    entry: "./app.jsx",

    output: {
        filename: "app.js",
        /*
         * The location where the generated files are stored.
         * This entire directory is uploaded to the deployment location
         */
        path: __dirname + "/dist",
    },

    module: {
        rules: [ {
                /*
                 * Apply transform to all .js files that
                 * are not in node_modules
                 */

                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    "react-hot-loader",
                    "eslint-loader",
                    "babel-loader"
                ],
            },

            {
                /*
                 * Process SCSS files from bottom to top
                 * first SASS and then autoprefixer
                 */
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader?browsers=last 3 versions',
                    'sass-loader?outputStyle=expanded'
                ]
            },

            {
                /*
                 * Copy all html files to dist dir
                 */
                test: /\.(html|json)$/,
                loader: "file-loader?name=[name].[ext]",
            },

            {
                /*
                 * Move all image type files to public folder
                 * use require to pick them up again
                 */
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=public/[name].[ext]",
            },

            {
                test: /\.(ico)$/i,
                loader: "file-loader?name=[name].[ext]"
            },

        ],
    },
    resolve: {
        modules: [
            path.join( __dirname, "src" ),
            "node_modules"
        ],
        // alias directories to search for
        alias: {
            Main: path.resolve( __dirname, 'src/component/Main/Main' ),
            Clicker: path.resolve( __dirname, 'src/component/Clicker/Clicker' ),
            style: path.resolve( __dirname, 'src/style.scss' )
        },
        // allows files to be required without extensions
        extensions: [ ".js", ".jsx", ".json" ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://nl.tst.knowblearticles.com',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
