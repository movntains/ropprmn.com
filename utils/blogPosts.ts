import type { BlogPost } from '@/types/BlogPost'

const blogPosts: BlogPost[] = [
  {
    date: 'December 14, 2022',
    title: 'An Overview of Security Headers',
    link: 'https://zaengle.com/blog/overview-of-security-headers',
    description: `It goes without saying that we want the websites we build to be secure. If you want to strengthen the security of your websites, adding some security headers is a great step to take. In this post, we'll dive into six security headers, their purpose, and how to apply them. As a bonus, we'll provide an example of how to add them to a site hosted on Vercel.`,
  },
  {
    date: 'September 14, 2022',
    title: 'Why Web Accessibility Matters',
    link: 'https://zaengle.com/blog/why-web-accessibility-matters',
    description:
      'Making a website accessible for all is the responsibility of anyone who builds for the web. Here are the top misconceptions about digital accessibility.',
  },
  {
    date: 'September 21, 2021',
    title: 'Designing for Accessibility',
    link: 'https://zaengle.com/blog/designing-for-accessibility',
    description: `A website's design plays a crucial role in ensuring its accessibility. In this post, we'll discuss 6 design steps to help ensure a site is accessible to all users.`,
  },
  {
    date: 'July 26, 2021',
    title: 'Consolidating Error Handling in Nuxt Apps',
    link: 'https://zaengle.com/blog/error-handling-in-nuxt-apps',
    description: `Here's how we previously handled Axios errors in our Nuxt apps, why this approach was problematic, and how we fixed it by creating a package for consolidated error handling.`,
  },
  {
    date: 'May 10, 2021',
    title: 'Resources for Learning Vue & Nuxt',
    link: 'https://zaengle.com/blog/vue-nuxt-resources',
    description: `When learning a new technology, it's always helpful to have a good list of resources that can be utilized. In this post, we'll provide a list of resources that we think are useful when it comes to learning Vue and Nuxt.`,
  },
  {
    date: 'February 4, 2021',
    title: 'Accessible Drag-and-Drop in Vue',
    link: 'https://zaengle.com/blog/accessible-drag-and-drop-in-vue',
    description: `Let's walk through how to make an accessible drag-and-drop component in Vue.`,
  },
  {
    date: 'November 10, 2020',
    title: '10 Foolproof Tips for Maximizing Website Accessibility',
    link: 'https://zaengle.com/blog/10-foolproof-tips-for-maximizing-website-accessibility',
    description:
      'Making a website accessible for everyone is easier than you may think. We discuss 10 foolproof tips that, when implemented, will improve the accessibility of your website.',
  },
  {
    date: 'September 3, 2020',
    title: 'How Semantic HTML Improves the Accessibility of a Website',
    link: 'https://zaengle.com/blog/how-semantic-html-will-improve-the-accessibility-of-a-website',
    description: 'How using semantic HTML can improve the accessibility of a website and earn easy accessibility wins.',
  },
  {
    date: 'July 6, 2020',
    title: 'Intro to the Vuex Map Helpers',
    link: 'https://zaengle.com/blog/intro-to-the-vuex-map-helpers',
    description: `Here's an introduction to the Vuex map helpers, which can help us clean up the code in our components by removing repetitive syntax.`,
  },
  {
    date: 'May 12, 2020',
    title: 'Configuring CORS for Laravel Public Storage',
    link: 'https://zaengle.com/blog/configuring-cors-for-laravel-public-storage',
    description: `How to configure an Nginx server to add an Access-Control-Allow-Origin header to resources in a Laravel API's public storage.`,
  },
  {
    date: 'February 26, 2020',
    title: 'Mocking File Upload in Vue with Jest',
    link: 'https://zaengle.com/blog/mocking-file-upload-in-vue-with-jest',
    description:
      'Testing your code is important, but it can also be time-consuming. When it comes to testing Vue with Jest, half the battle is figuring out how to mock something. Here are some ideas for better testing in Vue.',
  },
  {
    date: 'October 24, 2019',
    title: 'Named Routes in Nuxt.js',
    link: 'https://zaengle.com/blog/named-routes-in-nuxt',
    description:
      'Routing in Nuxt.js is meant to be simple. Here are three different methods of using named routes in Nuxt.',
  },
  {
    date: 'September 25, 2019',
    title: 'Dealing with Imposter Syndrome as a Junior Engineer',
    link: 'https://zaengle.com/blog/dealing-with-imposter-syndrome-as-a-junior-engineer',
    description: `Doubts are real, especially in your career. Let's explore how to deal with imposter syndrome and how to overcome fear and doubt.`,
  },
]

export { blogPosts }
