window.__ModuleLoader__.load({ id: "dsh-memory", factory: (require) => {
//#region src/client/index.d.ts
declare var plugin: {
  inject: string[];
  apply: (ctx: any) => void;
};
export = plugin;
return module.exports; } });