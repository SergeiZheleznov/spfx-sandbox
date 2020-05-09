'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);


build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    generatedConfiguration.module.rules.push(
      {
        test: /\.(dae)$/i,
        use: [
          {
            loader: 'file-loader'
          },
        ]
      }
    );

    return generatedConfiguration;
  }
});

build.initialize(require('gulp'));
