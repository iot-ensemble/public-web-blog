const path = require('path');

module.exports = {
  title: 'Fathym IoT Ensemble',
  tagline: 'Experience IoT in minutes | No credit card required',
  url: 'https://www.fathym.com/',
  baseUrl: '/iot/blog/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'iot-ensemble', // Usually your GitHub org/user name.
  projectName: 'public-web-blog', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-NEWEXH7W8C',
    },
    oribi: {
      trackingID: 'XzcwMzAwMzkyNA',
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(24,25,26)',
          dark: 'rgb(24,25,26)',
        }
      }
    },
    navbar: {
      title: 'IoT Ensemble',
      logo: {
        alt: 'IoT Ensemble',
        src: 'https://www.fathym.com/img/Fathym-logo-white-01.png',
      },
      items: [
        {
          to: 'https://www.fathym.com/iot',
          label: 'Home',
          position: 'left',
          target: '_top',
        },
        // {
        //   href: 'https://www.iot-ensemble.com/dashboard',
        //   label: 'Sign Up',
        //   position: 'left',
        //   target: '_top',
        // },
        // {
        //   href: 'https://www.iot-ensemble.com/pricing',
        //   label: 'Pricing',
        //   position: 'right',
        //   target: '_top',
        // },
                
        {
          to: 'https://www.fathym.com/iot/docs',
          label: 'Docs',
          position: 'right',
          target: '_top',
        },
        {
          to: '/',
          label: 'Blog',
          position: 'right',
        },
        {
          to: 'https://www.fathym.com/dashboard/iot',
          label: 'Sign In',
          position: 'right',
          target: '_top',
        },
        //{
        //  href: 'https://www.fathym.com/dashboard/iot',
        //  label: 'Sign Up',
        //  position: 'right',
        //  target: '_top',
        //},        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Next Steps',
          items: [
            {
              label: 'Getting Started',
              to: 'https://www.fathym.com/dashboard/iot',
            },
            {
              label: 'Support',
              to: 'https://www.fathym.com/iot/docs/introduction/support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              to: 'https://stackoverflow.com/questions/tagged/iot-ensemble',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/iot-ensemble',
            //},
            {
              label: 'Twitter',
              to: 'https://twitter.com/iotensemble',
            },
          ],
        },
        {
          title: 'Powered by Fathym',
          items: [
            {
              label: 'Learn More',
              to: 'https://www.fathym.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fathym, Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // The iot-ensemble website repo
          // editUrl: 'https://github.com/iot-ensemble/public-web-docs/edit/master/website/',
        },
        /* blog: {
          showReadingTime: true,
          routeBasePath: '/',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          postsPerPage: 1,
          // The iot-ensemble website blog repo
          // editUrl: 'https://github.com/iot-ensemble/public-web-blog/edit/master/website/blog/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
  // plugins: [path.resolve(__dirname, 'plugins/oribi')]
],
};
