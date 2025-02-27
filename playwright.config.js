const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 90000,
  fullyParallel: true, 
  workers: 2, 
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'off',
  },

  projects: [

    {
      name: 'US_Dev_Desktop',
      use: { 
        baseURL: 'https://spanx-dev.myshopify.com/',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'US_Dev_Mobile',
      use: { 
        baseURL: 'https://spanx-dev.myshopify.com/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },

    {
      name: 'CA_Dev_Desktop',
      use: { 
        baseURL: 'https://spanx-ca-dev.myshopify.com/',
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'CA_Dev_Mobile',
      use: { 
        baseURL: 'https://spanx-ca-dev.myshopify.com/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },

    {
      name: 'US_Prod_Desktop',
      use: { 
        baseURL: 'https://spanx.com/',
        ...devices['Desktop Chrome'],
      },
    },
 
    {
      name: 'US_Prod_Mobile',
      use: { 
        baseURL: 'https://spanx.com/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },

    {
      name: 'CA_Prod_Desktop',
      use: { 
        baseURL: 'https://spanx.ca/',
        ...devices['Desktop Chrome'],
      },
    },
 
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






 