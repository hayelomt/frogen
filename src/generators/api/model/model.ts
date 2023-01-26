import fs from 'fs';
import path from 'path';
import util from 'util';
import childProcess from 'child_process';
import { FormMeta } from '../../../utils/types';
import { parseModelName } from '../../../utils/text';
import { generateSchema } from './schema';
import { getFieldList, parseTypeList } from '../../../utils/tools';

const exec = util.promisify(childProcess.exec);

const extractMigrationFile = (commandOutput: string): string => {
  const matches = commandOutput.match(/\d{4}_.+table/);

  return matches ? matches[0] : '';
};

const writeMigrationData = (tablePath: string, schema: string) => {
  const tableData = fs.readFileSync(tablePath, 'utf8');
  const replaced = tableData.replace(
    '$table->id();',
    `$table->id();\n\n${schema}\n`
  );
  fs.writeFileSync(tablePath, replaced);
};

const generateJsonModel = (name: string, fields: string[]): string => {
  return `<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class ${name} extends Model
{
    use HasFactory;

    protected $fillable = ${JSON.stringify(fields)};
}
`;
};

const generateFileModel = (name: string, fields: string[]): string => {
  return `<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;
use Spatie\\MediaLibrary\\HasMedia\\HasMedia;
use Spatie\\MediaLibrary\\HasMedia\\HasMediaTrait;

class ${name} extends Model implements HasMedia
{
    use HasFactory, HasMediaTrait;

    protected $fillable = ${JSON.stringify(fields)};
}
`;
};

/**
 * Write data to schema and model files
 *
 * @param meta
 * @returns
 */
export const generateApiModel = async (meta: FormMeta) => {
  const name = parseModelName(meta.model);
  const res = await exec(
    `cd ${meta.api.baseFolderPath} && ${meta.api.phpCommand}  artisan make:model ${name.modelName} -m`
  );

  // Update generated schema with data
  const schema = generateSchema(meta);
  const table = extractMigrationFile(res.stdout);
  //   const table = extractMigrationFile(`api Model created successfully.
  // Created Migration: 2023_01_26_050014_create_blogs_table`);
  writeMigrationData(
    path.join(meta.api.baseFolderPath, 'database/migrations', `${table}.php`),
    schema
  );

  const types = parseTypeList(meta);
  const fields = getFieldList(meta)
    .filter((i) => i.type !== 'File')
    .map((i) => i.fieldName);

  return types.has('File')
    ? generateFileModel(name.modelName, fields)
    : generateJsonModel(name.modelName, fields);
};
