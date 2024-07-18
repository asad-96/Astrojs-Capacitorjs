import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'projects-astro-first-demo',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    url: 'http://192.168.1.5:4321',
    cleartext: true
  }
};

export default config;
