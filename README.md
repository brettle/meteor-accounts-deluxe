# brettle:accounts-deluxe

Give all visitors anonymous accounts to which they can add a login service
with popular accounts UI packages like
[`accounts-ui`](https://atmospherejs.com/meteor/accounts-ui) and
[`useraccounts:bootstrap`](https://atmospherejs.com/useraccounts/bootstrap).

This package just includes the other `brettle:accounts-*` packages so you don't
need to add each one separately.  See [the Details
section](https://github.com/brettle/meteor-accounts-deluxe/blob/master/README.md#details)
for a brief description of the individual packages.


## Demo

For a demo, visit
[brettle-accounts-demo.meteor.com](http://brettle-accounts-demo.meteor.com).

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

## FAQ

*Note*: The answers below contain my personal opinions on related packages by
other developers. I reviewed those packages and sometimes contributed to them
before or while working on the `brettle:accounts-*` suite. I based the
techniques that I use on these what I saw in these other packages or lessons I
learned from them, so I sincerely appreciate that the developers took the time
to create them and open source them. If you are a developer of one of the
packages I mention and feel that my comments mis-characterize you or your
package, please let me know via PR, issue, or personal email, and I'll do my
best to fix it. Thanks!

 <h3>How are `brettle:accounts-anonymous`, `brettle:accounts-anonymous-auto`, and `brettle:accounts-anonymous-ui` different from [artwells:accounts-guest](https://atmospherejs.com/artwells/accounts-guest)?</h3>

The `artwells:accounts-guest` package provides guest accounts, supports using
`accounts-ui`, and optionally provides automatic sign-in and deletion of old
guest accounts.

As of 0.1.12, `artwells:accounts-guest` provides guests accounts by using
`accounts-password` to create users with randomly generated email addresses and
passwords. That means that if you want to allow guest users and sign-in using an
OAuth service but not don't want to support password based login, you will need
to change whatever UI package you use so that it doesn't give the user the
option to register with a password. A future release of
`artwells:accounts-guest` will include [code I
contributed](https://github.com/artwells/meteor-accounts-guest/pull/35) to
support truly anonymous users like those provided by
`brettle:accounts-anonymous` (i.e. without requiring `accounts-password`).

The `artwells:accounts-guest` package supports using `accounts-ui`, while
`brettle:accounts-anonymous-ui` supports using either `accounts-ui` or the
`useraccounts:*` suite. Also, `artwells:accounts-guest` supports `accounts-ui`
by overriding the `{{currentUser}}` helper globally so that it returns null when
the user is a guest. This causes the `loginButtons` template to display the
"Sign In" link to guest users, but it also means that any other templates that
use the `{{currentUser}}` helper will not be able access guest users. The
`brettle:accounts-anonymous-ui` package takes a different approach. It overrides
the `{{currentUser}}` helper solely in the `loginButtons` template. Changing
`artwells:accounts-guest` to do the same thing might cause
backward-compatibility issues for any applications that rely on the current
global behavior.

The `artwells:accounts-guest` package supports automatic sign-in with a
configuration option, while `brettle:accounts-anonymous-auto` provides this
feature in a separate package.

The `artwells:accounts-guest` package provides direct support for removing old
guest accounts. The `brettle:accounts-*` suite does not provide any direct
support for such a feature, taking the position that it's simple enough and
app-specific enough that it doesn't warrant inclusion in a package.

The `brettle:accounts-*` suite started as a friendly fork of
`artwells:accounts-guest` driven by a desire to forgo backward compatibility
concerns and a desire to split the package into `brettle:accounts-anonymous`,
`brettle:accounts-anonymous-auto`, and `brettle:accounts-anonymous-ui`. That
said, if you use a future release of `artwells:accounts-guest` configured to
create truly anonymous guest accounts, those accounts should work with the rest
of the `brettle:accounts-*` suite just like the accounts created by
`brettle:accounts-anonymous`.

 <h3>How is `brettle:accounts-add-service` different from
 [`splendido:accounts-meld`](https://atmospherejs.com/splendido/accounts-meld),
 [`mondora:connect-with`](https://atmospherejs.com/mondora/connect-with), and [`bozhao:link-accounts`](https://atmospherejs.com/bozhao/link-accounts)?</h3>

The
[`splendido:accounts-meld`](https://atmospherejs.com/splendido/accounts-meld)
package is closest to `brettle:accounts-add-service`, and which is best depends
on your particular requirements. The `splendido:accounts-meld` package supports
adding any OAuth service to an existing account and combining accounts that have
the same verified email address. The `brettle:accounts-add-service` package
supports adding *any* login service, OAuth or non-OAuth (e.g.
`accounts-password`), but does *not* support combining accounts that have the
same verified email address. If a user attempts to add a service using the
credentials of another user, the `brettle:accounts-add-service` will sign the
user in to the other account, or, if you have installed
`brettle:accounts-logout-to-switch`, it will tell the user to sign out before
signing in is as the other user. Neither package will combine the two accounts.
If you want that functionality, you should consider using
`splendido:accounts-meld`.

The [`mondora:connect-with`](https://atmospherejs.com/mondora/connect-with)
package allows you to add any OAuth service to an account, but like
`splendido:accounts-meld` it does not support non-OAuth services. Also, unlike
`splendido:accounts-meld`, it requires the client to call
`Meteor.linkWithService` instead of `Meteor.loginWithService` to add the
service. This means that you need to provide your own UI for adding services.
With either `splendido:accounts-meld` or `brettle:accounts-add-service`, you can
use the `useraccounts` suite to get a ready-made UI for adding (and removing)
services.

The [`bozhao:link-accounts`](https://atmospherejs.com/bozhao/link-accounts) has
the same drawbacks as `mondora:connect-with` but it does not support arbitrary
OAuth services. Support for individual OAuth services is hard-coded into the
package.

 <h3>Why monkey patch the
 [`useraccounts`](https://atmospherejs.com/useraccounts/core) suite?</h3>

I would prefer if the `useraccounts` suite treated anonymous users as signed out
users, so I submitted [a feature
design](https://github.com/meteor-useraccounts/core/issues/499) to see whether
@splendido would consider a PR adding that functionality. He replied that he is
(understandably) focused on finishing version 2 of the `useraccounts` suite and
would rather not add PRs to version 1 at this point. Since I wanted to support
version 1 of `useraccounts`, that meant that I could either fork the entire
`useraccounts` suite (which consists of 14 packages, one per UI framework and
then some) or I could release a package that monkey patches the handful of
packages in the `useraccounts` suite that need changing to treat anonymous users
as signed out users. I opted for the latter route.
