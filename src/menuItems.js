export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },

  {
    title: 'Accounts',
    url: '/accounts',
    submenu: [
      {
        title: 'New Account',
        url: 'newacct',
      },

      {
        title: 'Data Entry',
        url: 'dataentry',
      },
      {
        title: 'Accounting Report',
        url: 'areport',
            submenu: [
              {
                title: 'Balance Sheet',
                url: 'react',
              },
              {
                title: 'Income Summary',
                url: 'laravel',
              },
              {
                title: 'Cost of Goods Sold',
                url: 'python',
              },
              {
                title: 'Schedule of Accounts',
                url: 'python',
              },
            ],
      },
    ],
  },
  





  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'web design',
        url: 'web-design',
      },
      {
        title: 'web development',
        url: 'web-dev',
        submenu: [
          {
            title: 'Frontend',
            submenu: [
              {
                title: 'React JS',
                url: 'react',
              },
              {
                title: 'Laravel',
                url: 'laravel',
              },
              {
                title: 'Python',
                url: 'python',
              },
            ],



          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                url: 'node',
              },
              {
                title: 'PHP',
                url: 'php',
              },
            ],
          },
        ],
      },
      {
        title: 'SEO',
        url: 'seo',
      },
    ],
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are',
      },
      {
        title: 'Our values',
        url: 'our-values',
      },
    ],
  },
];