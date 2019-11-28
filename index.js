const map = require('lodash/map');
const defaults = require('lodash/defaults');
const fromPairs = require('lodash/fromPairs');


module.exports = function (options = {}) {
    return ({theme, varaints, e, addUtilities, addComponents}) => {

        const defaultOptions = {
            full: false,
            className: 'aspect',
            ratioValues: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                full: '100%',
            }
        };

        options = defaults({}, options, defaultOptions);

        const defaultAspectRatioVariants = ['responsive'];

        const aspectRatioUtilities = fromPairs(
            map(options.ratioValues, (width, iterator) => {
                return [
                    `.${e(`${options.className}-${iterator}`)}`,
                    {
                        'padding-bottom': `${width};`,
                    },
                ];
            }),
        );

        console.log('aspectRatioUtilities', aspectRatioUtilities);

        const helper = {
            '.aspect': {
                position: 'relative',
            },
            '.aspect img': {
                position: 'absolute',
                height: '100%',
                width: '100%',
            }
        };

        if(options.full) {
            addComponents(helper)
        }

        addUtilities(aspectRatioUtilities, defaultAspectRatioVariants)
    }
};
