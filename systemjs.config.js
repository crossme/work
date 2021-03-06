/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  var cropperVer = '0.6.1';
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    moment: 			  'node_modules/moment/moment.js',
    'ng2-bootstrap':              'node_modules/ng2-bootstrap',
    'primeng':                    'node_modules/primeng',
    'ng2-cache':                  'node_modules/ng2-cache',
    'underscore':                 'node_modules/underscore/',
    'ng2-img-cropper':            'https://npmcdn.com/ng2-img-cropper@'+cropperVer
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'ng2-bootstrap': 	  	  {defaultExtension: 'js'                   },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'primeng':                    { defaultExtension: 'js' },
    'ng2-cache':  { defaultExtension: 'js' },
    'underscore':                 { main: 'underscore.js', format: 'cjs' },
'ng2-img-cropper' :           { main: 'index.js', defaultExtension: 'js' }


  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
