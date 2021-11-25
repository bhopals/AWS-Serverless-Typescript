#### STEPS

- Initialize Node Project - `npm init -y`
- Add Typescript config - `tsc --init`
- Install node types as Dev dependency - `npm i -D @types/node`
- Create Server and Index files
- Install npm packages - `npm i -D typescript ts-node`
- Modify/Add npm start script - `start: ts-node src/Index.ts`
- Debugging - Add/Modify Launch.json to -
  "configurations": [
  {"type": "node", "request": "launch", "name": "Debug Server","runtimeArgs": ["-r","ts-node/register"], "args": ["${workspaceFolder}/type-script/type-script-demo/Index.ts"]
  }
  ]
