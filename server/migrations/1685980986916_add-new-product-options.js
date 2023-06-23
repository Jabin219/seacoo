/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.addColumns('Options', {
    onSale: { type: 'boolean', notNull: true, default: false }
  })
  pgm.sql(
    `
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh", "onSale")
        VALUES ('acb35d04-1afc-4f43-a954-058555cd53fc', 'AVG 40-60PCS/BAG x 3 Bags', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '6', '225.00', '平均40-60头/袋 三袋装', 'true');
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh", "onSale")
        VALUES ('33801edf-e13e-49fd-9357-a1d6f45ec2fb', 'AVG 35PCS/BAG x 3 Bags', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '7', '255.00', '平均35头/袋 三袋装', 'true');
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh", "onSale")
        VALUES ('db17713d-932b-403e-ba43-99bbf971db15', 'AVG 25PCS/BAG x 3 Bags', '303517f2-aea8-4ee4-b7eb-b22dd16ddef9', '8', '275.00', '平均25头/袋 三袋装', 'true');

        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh", "onSale")
        VALUES ('44637e79-3214-4f75-8b24-6b81f5fd802e', '1 Bag', '6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '0', '55.00', '一袋装', 'false');
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh", "onSale")
        VALUES ('6276c04a-01fc-49c6-b6b8-9df7fd65da9c', '3 Bags', '6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '1', '150.00', '三袋装', 'true');
        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh", "onSale")
        VALUES ('62d9d866-14e8-457e-b6ee-265abc0ac7a4', '6 Bags', '6f16e1b5-35f8-43e0-a9a5-627f25fb9a36', '2', '290.00', '六袋装', 'true');

        INSERT INTO "Options" ("id", "label", "productID", "priority", "price", "labelZh", "onSale")
        VALUES ('e06be791-b547-4af6-9ffd-347266742e17', '454g x 2 Bags', '2959ade1-e357-44a6-9d40-4dd1d58da24e', '2', '465.00', '454克 两袋装', 'true');
      `
  )
}

exports.down = pgm => {}
