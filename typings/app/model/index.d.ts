// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTemplate from '../../../app/model/template';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Template: ReturnType<typeof ExportTemplate>;
    User: ReturnType<typeof ExportUser>;
  }
}
