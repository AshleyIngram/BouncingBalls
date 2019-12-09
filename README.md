Bouncing Balls
==============
An implementation of the [Bouncing Balls interview question by H4](https://github.com/hfour/exercises/tree/master/bouncing-balls).

Thanks, and I hope you enjoy reviewing my submission!

Usage
-------
My Bouncing Balls submission can be built from source by:

    1. Checking out the repository.
    2. Restoring NPM packages using ``npm restore``
    3. Building the project using ``npm run build``
    4. Opening the index.html file in the 'dist' directory

A pre-compiled submission can be found in the dist directory, in case the build workflow does not run. Simply run the 'index.html' file.

Alternatively, visit an uploaded version located [here](https://h4submission.blob.core.windows.net/balls/index.html).

Tests
-----
Tests can be run from the root directory with the command
> npm test

Dependencies
------------
The following dependencies were used in creating this project:

 - **Webpack** - Webpack is used to bundle all the required Javascript files into a single bundle.
 - **Mocha** - Mocha is a Javascript unit testing framework.
 - **Chai** - Chai is a Javascript assertion library for testing.
 - **ESLint** - ESLint is used to ensure all code has a consistent style. The [Google ESLint ruleset](https://github.com/google/eslint-config-google) is used.

Experiments
----------
Experimental functionality (that is out of scope of the original spec) can be found in the 'experiments' branch. This functionality is:
- The ability to change the _type_ of the ball, which changes the characteristics (size, colour, and bounciness).
- The ability to turn on/off collision between different balls.

This functionality is more prototypal, and less well tested.