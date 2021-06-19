"use strict";

Package.describe({
  name: 'brettle:accounts-deluxe',
  version: '0.2.3',
  summary:
    'Give all visitors anonymous accounts to which a login service can be ' +
    'added with popular UI packages',
  git: 'https://github.com/brettle/meteor-accounts-deluxe.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['1.0.4', '2.3']);
  api.use('brettle:accounts-add-service@1.0.0');
  api.use('brettle:accounts-logout-to-switch@0.4.0');
  api.use('brettle:accounts-anonymous-auto@0.3.2');
  api.use('brettle:accounts-patch-ui@0.1.6');
  api.imply('accounts-base');
  api.imply('brettle:accounts-add-service');
  api.imply('brettle:accounts-logout-to-switch');
  api.imply('brettle:accounts-anonymous-auto');
  api.imply('brettle:accounts-patch-ui');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('brettle:accounts-deluxe');
  // No tests for this particular meta-package. But all of the packages it uses
  // have their own tests.
});
