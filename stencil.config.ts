import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'Pulse',
  bundles: [
    { components: ['pulse-button','pulse-flowtt', 'pulse-flowtm', 'pulse-card'] }
  ],
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: 'src/global/settings.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss',
        'src/global/_typography.scss',
        'src/global/settings.scss',
        'src/utils/grid/pulse-flexgrid.scss',
      ]
    })
  ]
};
