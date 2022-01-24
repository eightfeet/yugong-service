// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTag from '../../../app/model/tag';
import ExportTemplate from '../../../app/model/template';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Tag: ReturnType<typeof ExportTag>;
    Template: ReturnType<typeof ExportTemplate>;
    User: ReturnType<typeof ExportUser>;
  }
}
