import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'Pulse',
  bundles: [
    { components: ['pulse-button'] }
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
        'src/global/settings.scss',
        'src/global/_typography.scss',
        'src/global/_colors.scss',
      ]
    })
  ]
};
