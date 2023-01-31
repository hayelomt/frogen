import 'colors';
import { models } from './src/models';
import { generateApi } from './src/runner/api-runner';
import { generateUi } from './src/runner/ui-runner';

console.log('🚀 Started template generation...\n');

// Start Runner
(async () => {
  generateUi(models.client);
  // await generateApi(models.press);

  console.log('🚀 FINISHED 🚀');
})();
