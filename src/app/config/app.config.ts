import {OpaqueToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new OpaqueToken('app.config');

let heroesRoute = 'heroes';
export const AppConfig: IAppConfig = {
  routes: {
    heroes: heroesRoute,
    heroById: heroesRoute + '/:id'
  },
  endpoints: {
    heroes: 'https://heroes-app-devel.herokuapp.com/heroes'
  },
  votesLimit: 2,
  topHeroesLimit: 4,
  snackBarDuration: 2000
};