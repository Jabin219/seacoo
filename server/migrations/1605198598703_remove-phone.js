/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
    pgm.dropColumns('Orders', ['phone'])
}

exports.down = (pgm) => {}
