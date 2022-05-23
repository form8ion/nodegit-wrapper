// remark-usage-ignore-next
/* eslint-disable-next-line no-unused-vars */
import {Branch, Remote, Repository} from './lib/index.js';

(async () => {
  const repository = await Repository.open(process.cwd());
  await Remote.list(repository);

  await Branch.setUpstream(
    await Branch.lookup(repository, 'master', Branch.BRANCH.LOCAL),
    'origin/master'
  );
})();
