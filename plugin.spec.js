const _ = require('lodash');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss/lib/postcss');
const tailwindcss = require('tailwindcss');
const aspectRatioPlugin = require('./index.js');


const generatePluginCss = (config, pluginOptions = {}) => {
    return postcss(
        tailwindcss(
            _.merge({
                theme: {
                    screens: {
                        // 'sm': '640px',
                    },
                },
                corePlugins: false,
                plugins: [
                    aspectRatioPlugin(pluginOptions),
                ],
            }, config),
        ),
    )
        .process('@tailwind components; @tailwind utilities;', {
            from: undefined,
        })
        .then(result => {
            return result.css;
        });
};


expect.extend({
    toMatchCss: cssMatcher,
});


test('autgenerate defaultvalues', () => {
    return generatePluginCss()
        .then(css => {
            expect(css)
                .toMatchCss(
                    `.aspect-1\\/2 {
      padding-bottom: 50%;
    }

    .aspect-1\\/3 {
      padding-bottom: 33.333333%;
    }

    .aspect-2\\/3 {
      padding-bottom: 66.666667%;
    }

    .aspect-1\\/4 {
      padding-bottom: 25%;
    }

    .aspect-2\\/4 {
      padding-bottom: 50%;
    }

    .aspect-3\\/4 {
      padding-bottom: 75%;
    }

    .aspect-1\\/5 {
      padding-bottom: 20%;
    }

    .aspect-2\\/5 {
      padding-bottom: 40%;
    }

    .aspect-3\\/5 {
      padding-bottom: 60%;
    }

    .aspect-4\\/5 {
      padding-bottom: 80%;
    }

    .aspect-1\\/6 {
      padding-bottom: 16.666667%;
    }

    .aspect-2\\/6 {
      padding-bottom: 33.333333%;
    }

    .aspect-3\\/6 {
      padding-bottom: 50%;
    }

    .aspect-4\\/6 {
      padding-bottom: 66.666667%;
    }

    .aspect-5\\/6 {
      padding-bottom: 83.333333%;
    }

    .aspect-1\\/12 {
      padding-bottom: 8.333333%;
    }

    .aspect-2\\/12 {
      padding-bottom: 16.666667%;
    }

    .aspect-3\\/12 {
      padding-bottom: 25%;
    }

    .aspect-4\\/12 {
      padding-bottom: 33.333333%;
    }

    .aspect-5\\/12 {
      padding-bottom: 41.666667%;
    }

    .aspect-6\\/12 {
      padding-bottom: 50%;
    }

    .aspect-7\\/12 {
      padding-bottom: 58.333333%;
    }

    .aspect-8\\/12 {
      padding-bottom: 66.666667%;
    }

    .aspect-9\\/12 {
      padding-bottom: 75%;
    }

    .aspect-10\\/12 {
      padding-bottom: 83.333333%;
    }

    .aspect-11\\/12 {
      padding-bottom: 91.666667%;
    }

    .aspect-full {
      padding-bottom: 100%;
    }`);
        })
});

test('can change ratio values', () => {
    return generatePluginCss({}, {
        ratioValues: {
            '1/2': '50%',
        }
    })
        .then(css => {
            expect(css)
                .toMatchCss(
                    `.aspect-1\\/2 { padding-bottom: 50%; }`)
        })
})

test('can have empty ratio values', () => {
    return generatePluginCss({}, {
        ratioValues: {}
    })
        .then(css => {
            expect(css).toMatchCss('')
        })
})


test('can generate helper function', () => {
    return generatePluginCss({}, {
        ratioValues: {},
        full: true
    })
        .then(css => {
            expect(css)
                .toMatchCss(`.aspect {
                 position: relative; 
                 }
                 .aspect img {
                 position: absolute;
                 height: 100%;
                 width: 100%;
                 }
                 `)
        })
})


test('can change className', () => {
    return generatePluginCss({}, {
        className: 'ratio',
        ratioValues: {
            '1/2': '50%',
        }
    })
        .then(css => {
            expect(css)
                .toMatchCss(
                    `.ratio-1\\/2 { padding-bottom: 50%; }`)
        })
})

