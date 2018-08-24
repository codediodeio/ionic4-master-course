// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDZQvOwS46f2Hoa1Edds3SB29sECeQP01o',
    authDomain: 'ionic4-fire.firebaseapp.com',
    databaseURL: 'https://ionic4-fire.firebaseio.com',
    projectId: 'ionic4-fire',
    storageBucket: 'ionic4-fire.appspot.com',
    messagingSenderId: '1085404550227'
  }
};
