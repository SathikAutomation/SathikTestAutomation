const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 90000,
  fullyParallel: false, // Ensures controlled execution
  workers: 2, // Limits to 2 parallel executions
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'off',
  },

  projects: [

    // ================================
    // 🔴 DEVELOPMENT ENVIRONMENT (DEV)
    // ================================

    // US Dev - Desktop
    {
      name: 'US_Dev_Desktop',
      use: { 
        baseURL: 'https://spanx-dev.myshopify.com/',
        ...devices['Desktop Chrome'],
      },
    },
    // US Dev - Mobile
    {
      name: 'US_Dev_Mobile',
      use: { 
        baseURL: 'https://spanx-dev.myshopify.com/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },

    // CA Dev - Desktop
    {
      name: 'CA_Dev_Desktop',
      use: { 
        baseURL: 'https://spanx-ca-dev.myshopify.com/',
        ...devices['Desktop Chrome'],
      },
    },
    // CA Dev - Mobile
    {
      name: 'CA_Dev_Mobile',
      use: { 
        baseURL: 'https://spanx-ca-dev.myshopify.com/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },

    // ================================
    // 🟢 PRODUCTION ENVIRONMENT (PROD)
    // ================================

    // US Prod - Desktop
    {
      name: 'US_Prod_Desktop',
      use: { 
        baseURL: 'https://spanx.com/',
        ...devices['Desktop Chrome'],
      },
    },
    // US Prod - Mobile
    {
      name: 'US_Prod_Mobile',
      use: { 
        baseURL: 'https://spanx.com/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },

    // CA Prod - Desktop
    {
      name: 'CA_Prod_Desktop',
      use: { 
        baseURL: 'https://spanx.ca/',
        ...devices['Desktop Chrome'],
      },
    },
    // CA Prod - Mobile
    {
      name: 'CA_Prod_Mobile',
      use: { 
        baseURL: 'https://spanx.ca/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },
  ],
});








 // retries: 1,

  // {
    //   name: 'Desktop Chrome',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'Desktop Edge',
    //   use: { ...devices['Desktop Edge'] },
    // },
    // {
    //   name: 'Mobile Pixel 5',
    //   use: { ...devices['Pixel 5'] },
    // },