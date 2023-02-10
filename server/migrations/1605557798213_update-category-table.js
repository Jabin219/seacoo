/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
    pgm.addColumns('Category', {
        priority: {
            type: 'int',
            notNull: true,
            default: 0,
        },
    })
}

exports.down = (pgm) => {}
