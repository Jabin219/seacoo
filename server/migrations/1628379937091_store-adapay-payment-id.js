/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.addColumns('Orders', {
        adapayId: {
            type: 'text'
        }
    })
};

exports.down = pgm => {};