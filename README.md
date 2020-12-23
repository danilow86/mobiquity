# Rest-API-Testing
"scripts": {"test": "tap test/\*.js"}
instead of

"scripts": {"test": "node_modules/.bin/tap test/\*.js"}
to run your tests.

The actual shell your script is run within is platform dependent. By default, on Unix-like systems it is the /bin/sh command, on Windows it is the cmd.exe. The actual shell referred to by /bin/sh also depends on the system. As of npm@5.1.0 you can customize the shell with the script-shell configuration.

Scripts are run from the root of the module, regardless of what your current working directory is when you call npm run. If you want your script to use different behavior based on what subdirectory you're in, you can use the INIT_CWD environment variable, which holds the full path you were in when you ran npm run.

npm run sets the NODE environment variable to the node executable with which npm is executed. Also, if the --scripts-prepend-node-path is passed, the directory within which node resides is added to the PATH. If --scripts-prepend-node-path=auto is passed (which has been the default in npm v3), this is only performed when that node executable is not found in the PATH.

If you try to run a script without having a node_modules directory and it fails, you will be given a warning to run npm install, just in case you've forgotten.

You can use the --silent flag to prevent showing npm ERR! output on error.

You can use the --if-present flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain.

Doc: https://docs.npmjs.com/about-npm