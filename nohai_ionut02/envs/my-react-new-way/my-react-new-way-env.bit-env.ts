import { ReactEnv } from '@teambit/react.react-env';
import type { ReactEnvInterface } from '@teambit/react.react-env';
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import { Preview } from '@teambit/preview';

export class MyReactNewWayEnv extends ReactEnv implements ReactEnvInterface {
  name = 'my-react-new-way';
  icon = 'https://static.bit.dev/extensions-icons/react.svg';

  /**
   * return an instance of a Bit preview instance.
   * notice how we pass all the hostDependencies
   * this way, the preview will be able to resolve them and create only one instance of each.
   */
  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      mounter: require.resolve('./preview/mounter'),
      hostDependencies: [
        '@nohai_ionut02/nohai_ionut02.components.data-context',
        '@mdx-js/react',
        'react',
        'react-dom',
      ],
    });
  }
}

export default new MyReactNewWayEnv();
