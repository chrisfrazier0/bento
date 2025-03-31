// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Chris',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: 'LOCAL_STORAGE', // patched to use localStorage, see code
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '38.714',
  defaultLongitude: '-77.796',

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/chrisfrazier0',
    },
    {
      id: '2',
      name: 'Grok',
      icon: 'bot',
      link: 'https://grok.com',
    },
    {
      id: '3',
      name: 'YNAB',
      icon: 'piggy-bank',
      link: 'https://app.ynab.com',
    },
    {
      id: '4',
      name: 'Amazon',
      icon: 'shopping-bag',
      link: 'https://amazon.com',
    },
    {
      id: '5',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://x.com',
    },
    {
      id: '6',
      name: 'Netflix',
      icon: 'tv',
      link: 'https://netflix.com',
    }
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Discord',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
    {
      id: '2',
      name: 'Facebook',
      icon: 'facebook',
      link: 'https://facebook.com',
    },
    {
      id: '3',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com',
    },
    {
      id: '4',
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://linkedin.com/in/chrisfrazier0',
    },
    {
      id: '5',
      name: 'Instagram',
      icon: 'instagram',
      link: 'https://instagram.com',
    },
    {
      id: '6',
      name: 'Stack Overflow',
      icon: 'layers',
      link: 'https://stackoverflow.com',
    }
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'music',
      id: '1',
      links: [
        {
          name: 'Lofi',
          link: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
        },
        {
          name: 'DC101',
          link: 'https://www.iheart.com/live/dc101-2525/',
        },
        {
          name: 'Jazz',
          link: 'https://www.youtube.com/watch?v=HuFYqnbVbzY',
        },
        {
          name: 'Classical',
          link: 'https://www.youtube.com/watch?v=bwZUs26HZI8',
        },
      ],
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'YouTube',
          link: 'https://youtube.com',
        },
        {
          name: 'Stack Overflow',
          link: 'https://stackoverflow.com',
        },
        {
          name: 'Discord',
          link: 'https://discord.com/app',
        },
        {
          name: 'Paint',
          link: 'https://jspaint.app/',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'search',
      id: '1',
      links: [
        {
          name: 'Google',
          link: 'https://google.com',
        },
        {
          name: 'Bing',
          link: 'https://bing.com',
        },
        {
          name: 'Yahoo',
          link: 'https://yahoo.com',
        },
        {
          name: 'DuckDuckGo',
          link: 'https://duckduckgo.com',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Profile',
          link: 'https://github.com/chrisfrazier0',
        },
        {
          name: 'Repos',
          link: 'https://github.com/chrisfrazier0?tab=repositories',
        },
        {
          name: 'Gists',
          link: 'https://gist.github.com/chrisfrazier0',
        },
        {
          name: 'API',
          link: 'https://docs.github.com/en/rest',
        },
      ],
    },
  ],
};
