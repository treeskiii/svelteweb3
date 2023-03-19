
import preprocess from 'svelte-preprocess';

import adapter from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({ postcss: true }),

  kit: {
    //trailingSlash: 'always',
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      runtime: 'nodejs18.x',
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false
    })
  }
};

export default config;

// updated