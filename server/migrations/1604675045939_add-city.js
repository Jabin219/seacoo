/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
    pgm.addColumns('Orders', {
        city: { type: 'varchar(25)' },
        status: { type: 'varchar(10)', notNull: true, default: 'unpaid' },
        orderNumber: { type: 'varchar(14)', notNull: true, unique: true },
    })
}

exports.down = (pgm) => {}
