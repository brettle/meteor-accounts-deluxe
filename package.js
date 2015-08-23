"use strict";

Package.describe({
  name: 'brettle:accounts-deluxe',
  version: '0.0.4',
  summary:
    'Give all visitors anonymous accounts to which a login service can be ' +
    'added with popular UI packages',
  git: 'https://github.com/brettle/meteor-accounts-deluxe.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');
  api.use('brettle:accounts-add-service@0.3.0');
  api.use('brettle:accounts-logout-to-switch@0.3.0');
  api.use('brettle:accounts-anonymous-auto@0.3.2');
  api.use('brettle:accounts-anonymous-ui@0.3.1');
  api.imply('accounts-base');
  api.imply('brettle:accounts-add-service');
  api.imply('brettle:accounts-logout-to-switch');
  api.imply('brettle:accounts-anonymous-auto');
  api.imply('brettle:accounts-anonymous-ui');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('brettle:accounts-testing-support');
  api.use('brettle:accounts-add-service@0.3.0');
  api.use('brettle:accounts-logout-to-switch@0.3.0');
  api.use('brettle:accounts-anonymous-auto@0.3.2');
  api.use('brettle:accounts-anonymous-ui@0.3.1');
  // No tests for this particular meta-package. But all of the packages it uses
  // have their own tests.
});
