import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin to add a Nord theme to JupyterLab.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-nord-theme:plugin',
  description: 'A Nord theme for JupyterLab',
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = 'jupyterlab-nord-theme/index.css';

    manager.register({
      name: 'Nord',
      displayName: 'Nord Theme',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;