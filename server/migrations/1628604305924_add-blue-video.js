/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        update "Products"
        set "video"='https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/videos/blue/video.mp4',
        "videoImage"='https://seacoo-product-materials.s3.ca-central-1.amazonaws.com/videos/blue/video-preview.jpg'
        where id='ac043eb2-da20-4e31-8a1a-8a4d8ab448c9'
        or id='4eb149ec-1b49-4ba2-8297-a67e166e548a'
    `)
};

exports.down = pgm => {};