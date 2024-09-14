// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add the assetsInclude option to handle .JPG files
  assetsInclude: ['**/*.JPG', '**/*.jpg'], // Include both upper and lower case extensions
});


