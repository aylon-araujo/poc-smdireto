import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    server: {
      port: 3000,
    },
    define: {
      'process.env': env,
    },
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
  };
});
