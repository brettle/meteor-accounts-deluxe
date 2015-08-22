# brettle:accounts-deluxe

Give all visitors anonymous accounts to which they can add a login service
with popular accounts UI packages like
[`accounts-ui`](https://atmospherejs.com/meteor/accounts-ui) and
[`useraccounts:bootstrap`](https://atmospherejs.com/useraccounts/bootstrap).

## Demo

For a demo, visit
[brettle-accounts-demo.meteor.com](http://brettle-accounts-demo.meteor.com).

## Details

This package just includes the other `brettle:accounts-*` packages so you don't
need to add each one separately. If you want finer control, then add just the
packages that provide the features you want. Here is brief description of each
of the packages and the features they provide. Follow the links for more
information.

[`brettle:accounts-anonymous-auto`](https://atmospherejs.com/brettle/accounts-anonymous-auto) -
Automatically creates anonymous accounts for new visitors to ensure that
an account is always associated with the current user.

[`brettle:accounts-anonymous-ui`](https://atmospherejs.com/brettle/accounts-anonymous-ui) -
Monkey patches accounts UI packages to treat anonymous users like logged out
users so that they can sign up and sign in.

[`brettle:accounts-add-service`](https://atmospherejs.com/brettle/accounts-add-service) -
Allows users (anonymous or otherwise) to add login services to their accounts.

[`brettle:accounts-logout-to-switch`](https://atmospherejs.com/brettle/accounts-logout-to-switch) -
Requires that non-anonymous users logout before they login to another existing
account.

[`brettle:accounts-anonymous`](https://atmospherejs.com/brettle/accounts-anonymous) -
Provides a way to create anonymous accounts but does not automatically create
the for new visitors. The `brettle:accounts-anonymous-auto` package uses this
package.

[`brettle:accounts-multiple`](https://atmospherejs.com/brettle/accounts-multiple) -
Provides hooks for handling the case where a logged in user attempts to login
using a different service. The `brettle:accounts-add-service`,
`brettle:accounts-logout-to-switch`, and `brettle:accounts-anonymous` packages
use this package.

## Installation

```sh
meteor add brettle:accounts-deluxe
```

You will also need to install whatever login services you want to use. For
example:

```sh
meteor add accounts-password
meteor add accounts-google
```

Also, you will need to install and configure whatever accounts UI package(s) you
want to use. For example:

```sh
meteor add accounts-ui
```

## Usage

Just install the desired packages and it should work.
