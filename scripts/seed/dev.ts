import db, { genId } from '../../src/modules/db';

const run =async () => {
  await db.post.createMany({
    data: [
      {
        id: genId(),
        slug: 'using-node-dev-stack',
        title: 'Using Node Dev Stack',
        publishedAt: new Date(),
      },
      {
        id: genId(),
        slug: 'draft-post',
        title: 'Draft Post',
      },
    ],
  });
};

// Auto-run when called directly
if (require.main === module) {
  run().then(() => {
    console.log('Data seed complete');
    process.exit();
  });
}