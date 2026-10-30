// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "The people behind the science",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Plants, microbes, and a changing environment",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected papers from Connor Fitzpatrick and collaborators",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-join",
          title: "join",
          description: "Bring your questions. Help us explore the answers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "Start a conversation",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-chalkbrood-disease-in-alfalfa-leaf-cutting-bees",
          title: 'chalkbrood disease in alfalfa leaf cutting bees',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ALCB/";
            },},{id: "projects-white-pine-blister-rust",
          title: 'White pine blister rust',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/WPBR/";
            },},{id: "projects-bacteria-mediated-rescue-of-plant-iron-uptake",
          title: 'Bacteria-mediated rescue of plant iron uptake',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chl_rescue/";
            },},{id: "projects-drought-and-plant-iron-nutrition",
          title: 'Drought and plant iron nutrition',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/drought-iron/";
            },},{id: "projects-uncovering-the-anatomical-molecular-and-genetic-determinants-of-phytopathogen-virulence",
          title: 'Uncovering the anatomical, molecular, and genetic determinants of phytopathogen virulence',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/plant_path_histologyLCM/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%6E%6F%72.%66%69%74%7A%70%61%74%72%69%63%6B@%75%63%61%6C%67%61%72%79.%63%61", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=PcNuhBEAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7100-9542", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
