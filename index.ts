import 'colors';
import { models } from './src/models';
import { generateApi } from './src/runner/api-runner';
import { generateUi } from './src/runner/ui-runner';

console.log('🚀 Started template generation...\n');

// Start Runner
(async () => {
  generateUi(models.teammember);
  // await generateApi(models.teammember);

  console.log('🚀 FINISHED 🚀');
})();
