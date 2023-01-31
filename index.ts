import 'colors';
import { models } from './src/models';
import { generateApi } from './src/runner/api-runner';
import { generateUi } from './src/runner/ui-runner';

console.log('🚀 Started template generation...\n');

// Start Runner
(async () => {
  generateUi(models.subscription);
  // await generateApi(models.subscription);

  console.log('🚀 FINISHED 🚀');
})();
