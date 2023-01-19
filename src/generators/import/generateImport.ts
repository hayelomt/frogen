import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';

export const generateImports = (meta: FormMeta) => {
  const name = parseModelName(meta.model);
  console.log('>----- Start route code -----<'.white.bgCyan);

  console.log('\nImports'.blue.bold);
  const imports = `
import ${name.modelName}Page from '../../features/${
    meta.ui.parentFolder ? `${meta.ui.parentFolder}/` : ''
  }${name.folderName}/pages/${name.modelName}Page';
  `;
  console.log(imports);

  console.log('Routers'.blue.bold);
  const routers = `
          <Route
            path="/${meta.ui.parentFolder ? `${meta.ui.parentFolder}/` : ''}${
    meta.model
  }"
            element={
              <PrivateRoute>
                <${name.modelName}Page />
              </PrivateRoute>
            }
          />
  `;
  console.log(routers);

  console.log('\n>----- Finish route code -----<'.bgCyan.white);
};
