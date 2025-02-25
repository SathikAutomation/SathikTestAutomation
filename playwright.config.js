const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  timeout: 90000,
  forbidOnly: !!process.env.CI,
  workers: 2,
  reporter: [
    ['list'],
    ['html', { open: 'always', outputFolder: 'test-report' }],
    ['json'],
  ],
  use: {
    headless: false,
    launchOptions: {
      slowMo: 1000,
      args: ['--start-maximized'],
    },
    trace: process.env.CI ? 'on-first-retry' : 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'off',
    viewport: null,
  },

  projects: [
    {
      name: 'US_Dev',
      testDir: './tests/Smoke',
      use: { baseURL: 'https://spanx-dev.myshopify.com/' }, 
      dependencies: ['US_Dev_Desktop'], 
    },  
    {
      name: 'CA_Dev',
      testDir: './tests/Smoke',
      use: { baseURL: 'https://spanx-ca-dev.myshopify.com/' },
      dependencies: ['CA_Dev_Desktop', 'CA_Dev_Mobile'],
    },
    {
      name: 'US_Prod',
      testDir: './tests/Smoke',
      use: { baseURL: 'https://spanx.com/' },
      dependencies: ['US_Prod_Desktop', 'US_Prod_Mobile'],
    },
    {
      name: 'CA_Prod',
      testDir: './tests/Smoke',
      use: { baseURL: 'https://spanx.ca/' },
      dependencies: ['CA_Prod_Desktop', 'CA_Prod_Mobile'],
    },
    {
      name: 'US_Dev_Desktop',
      testDir: './tests/Smoke',
      use: { 
        baseURL: 'https://spanx-dev.myshopify.com/',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'US_Dev_Mobile',
      testDir: './tests/Smoke',
      use: { 
        baseURL: 'https://spanx-dev.myshopify.com/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },
    {
      name: 'CA_Dev_Desktop',
      testDir: './tests/Smoke',
      use: { 
        baseURL: 'https://spanx-ca-dev.myshopify.com/',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'CA_Dev_Mobile',
      testDir: './tests/Smoke',
      use: { 
        baseURL: 'https://spanx-ca-dev.myshopify.com/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },
    {
      name: 'US_Prod_Desktop',
      testDir: './tests/Smoke',
      use: { 
        baseURL: 'https://spanx.com/',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'US_Prod_Mobile',
      testDir: './tests/Smoke',
      use: { 
        baseURL: 'https://spanx.com/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },
    {
      name: 'CA_Prod_Desktop',
      testDir: './tests/Smoke',
      use: { 
        baseURL: 'https://spanx.ca/',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'CA_Prod_Mobile',
      testDir: './tests/Smoke',
      use: { 
        baseURL: 'https://spanx.ca/',
        ...devices['iPhone 15'],
        isMobile: true, 
      },
    },
  ],
};





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