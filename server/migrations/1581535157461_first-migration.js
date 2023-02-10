/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
    pgm.createExtension('uuid-ossp')
    pgm.createTable('Products', {
        id: { type: 'uuid', notNull: true, primaryKey: true },
        userID: {
            type: 'uuid',
        },
        name: { type: 'varchar(50)', notNull: true },
        description: 'text',
        shortDescription: 'varchar(99)',
        stock: { type: 'int', notNull: true, default: 0 },
        price: { type: 'numeric(8,2)', notNull: true },
        status: { type: 'varchar(10)', notNull: true },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        lastUpdatedAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    })
    pgm.createTable('Images', {
        id: {
            type: 'uuid',
            notNull: true,
            primaryKey: true,
            default: pgm.func('uuid_generate_v4()'),
        },
        productID: {
            type: 'uuid',
            notNull: true,
            references: '"Products"',
        },
        url: { type: 'text', notNull: true },
        priority: { type: 'int' },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    })

    pgm.createTable('Transactions', {
        userID: {
            type: 'uuid',
            notNull: true,
            default: pgm.func('uuid_generate_v4()'),
        },
        orderID: { type: 'varchar(50)', notNull: true },
        status: { type: 'varchar(10)', notNull: true },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        lastUpdatedAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    })
    pgm.createTable('Orders', {
        id: {
            type: 'uuid',
            notNull: true,
            primaryKey: true,
            default: pgm.func('uuid_generate_v4()'),
        },
        country: {
            type: 'varchar(20)',
            notNull: true,
        },
        province: {
            type: 'varchar(20)',
            notNull: true,
        },
        street: {
            type: 'varchar(50)',
        },
        postalCode: {
            type: 'varchar(50)',
            notNull: true,
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        lastUpdatedAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    })
    pgm.createTable('OrderDetail', {
        id: {
            type: 'uuid',
            notNull: true,
            default: pgm.func('uuid_generate_v4()'),
        },
        orderID: {
            type: 'uuid',
            notNull: true,
            references: '"Orders"',
        },
        price: { type: 'numeric(8,2)', notNull: true },
        productID: { type: 'uuid', notNull: true, references: '"Products"' },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        lastUpdatedAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    })
}

exports.down = (pgm) => {}
