/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
    pgm.addColumns('Products', {
        taxable: { type: 'boolean', notNull: true, default: true },
    })
}

exports.down = (pgm) => {}
