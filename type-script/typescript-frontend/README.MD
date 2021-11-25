#### STEPS - FRONTEND

- Initialize Node Project - `npm init -y`
- Add Typescript config - `tsc --init`
- Create Launcher.ts
- Create Index.html and add script - `dist/Launcher.js`
- Add livesever configurations - .vscode/settings.json - {"liveServer.settings.file": "index.html"}
- Why do we need webpack - Because Browser will not let you reference another Javascript file into one, hence we require a module bundler
  that can bundle our whole source code in one file
- Add webpack configuration
- Add/Modify npm script - npm run build
