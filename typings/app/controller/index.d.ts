// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportTemplate from '../../../app/controller/template';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    template: ExportTemplate;
    user: ExportUser;
  }
}
