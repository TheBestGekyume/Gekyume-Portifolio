import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base:"/Gekyume-Portifolio/",
  plugins: [react()],
  css:{
    preprocessorOptions:{
      scss:{
        api: 'modern-compiler'
      }
    }
  }
});
