import type { Dictionary } from "./tr";

export const en: Dictionary = {
  meta: {
    title: "CG Menu — QR menus for your business",
    description:
      "QR menus for restaurants, cafés and hotels. Match your brand and publish a multilingual, multi-currency menu in minutes.",
  },
  nav: {
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    login: "Log in",
    cta: "Start using",
    menu: "Menu",
    language: "Language",
  },
  home: {
    hero: {
      badge: "For restaurants, cafés and hotels",
      title: "Your menu,",
      titleAccent: "one QR code away",
      subtitle:
        "Build your menu in minutes, style it to match your brand and publish it at yourbusiness.cgmenu.tr. No reprints when prices change.",
      primary: "Start using",
      secondary: "See a sample menu",
      note: "Nothing to install. Your guests don't need an app.",
    },
    featuresEyebrow: "Features",
    featuresTitle: "Everything you need in one place",
    featuresSubtitle:
      "No separate tools, designers or print shops needed to run your menu.",
    features: [
      {
        title: "Your own address",
        body: "Your business goes live at yourbusiness.cgmenu.tr. Download your QR code and put it on the tables.",
      },
      {
        title: "On-brand design",
        body: "Add your colours, logo and fonts so the menu reflects your brand.",
      },
      {
        title: "Multilingual menu",
        body: "Offer your menu in any language. Guests pick theirs with one tap.",
      },
      {
        title: "Multiple currencies",
        body: "Show prices in lira, euro, dollar and more. Set the rate yourself or let it update automatically.",
      },
      {
        title: "Guest feedback",
        body: "Let guests leave a rating and a comment before they leave the table. Follow it all from your dashboard.",
      },
      {
        title: "Instant updates",
        body: "When a price, item or stock status changes, your menu updates within seconds.",
      },
    ],
    steps: {
      eyebrow: "How it works",
      title: "Live in three steps",
      items: [
        {
          title: "Create your account",
          body: "Choose your business name and address. Setup takes a few minutes.",
        },
        {
          title: "Add your menu",
          body: "Enter categories and items, upload photos and set your colours.",
        },
        {
          title: "Share your QR code",
          body: "Download it, print it and place it on your tables. Your menu is ready.",
        },
      ],
    },
    brand: {
      eyebrow: "Brand",
      title: "Bring your brand to your menu",
      body: "Apply your brand by setting colours and adding your logo and fonts. Customise how your menu looks, and use videos and images to tell guests your story.",
      points: [
        "Colour palette, logo and cover image",
        "Ready-made fonts or your own",
        "An “Our story” section with images and video",
      ],
    },
    global: {
      eyebrow: "Language & currency",
      title: "Every guest's language, every guest's currency",
      body: "Built for businesses that host travellers. Items without a translation fall back to your default language.",
      points: [
        "Add any number of languages and switch them on or off",
        "Automatic or manual exchange rates",
        "Language and currency pickers at the top of the menu",
      ],
    },
    feedback: {
      eyebrow: "Feedback",
      title: "What do your guests think?",
      body: "Collect ratings and comments with the feedback form on your menu. Hear about problems before the guest leaves.",
      points: [
        "Star rating and comment",
        "Feedback matched to a table number",
        "Everything in a single inbox",
      ],
    },
    cta: {
      title: "Publish your menu",
      titleAccent: "today",
      body: "Free during early access. No credit card required.",
      button: "Start using",
    },
  },
  features: {
    title: "Features",
    subtitle:
      "CG Menu covers everything from building your menu to hearing back from guests.",
    groups: [
      {
        title: "Menu management",
        items: [
          {
            title: "Categories and items",
            body: "Reorder by drag and drop. Add descriptions, photos, portion options and prices.",
          },
          {
            title: "Tags and allergens",
            body: "Inform guests with tags such as vegetarian, vegan, spicy and gluten-free.",
          },
          {
            title: "Availability",
            body: "Mark items as sold out with one tap.",
          },
        ],
      },
      {
        title: "Brand and appearance",
        items: [
          {
            title: "Colours and fonts",
            body: "Match your menu's colours and fonts to your brand and preview changes live.",
          },
          {
            title: "Logo and cover",
            body: "Upload your logo and cover image; images are optimised automatically.",
          },
          {
            title: "Your story",
            body: "Introduce your business with images and video.",
          },
        ],
      },
      {
        title: "Language and currency",
        items: [
          {
            title: "Multilingual content",
            body: "Enter a translation for each item and category. Missing ones fall back to the default language.",
          },
          {
            title: "Multiple currencies",
            body: "Enter prices in one currency; the others are calculated from the exchange rate.",
          },
          {
            title: "Rate control",
            body: "Use the daily automatic rate or pin your own.",
          },
        ],
      },
      {
        title: "Sharing and feedback",
        items: [
          {
            title: "QR code",
            body: "Download your QR code in print-ready formats. Generate codes per table.",
          },
          {
            title: "Your own subdomain",
            body: "Your menu is served at yourbusiness.cgmenu.tr over a secure connection.",
          },
          {
            title: "Feedback form",
            body: "Collect ratings and comments from guests and follow them in your dashboard.",
          },
        ],
      },
    ],
  },
  pricing: {
    title: "Pricing",
    subtitle: "CG Menu is free during early access.",
    plans: [
      {
        name: "Early Access",
        price: "Free",
        description: "Build and publish your menu.",
        features: [
          "yourbusiness.cgmenu.tr address",
          "QR code",
          "Brand customisation",
          "Multiple languages and currencies",
          "Feedback form",
        ],
        cta: "Start using",
        highlighted: true,
      },
      {
        name: "Pro",
        price: "Coming soon",
        description: "Extra features for growing businesses.",
        features: [
          "Everything in Early Access",
          "Your own domain",
          "View statistics",
          "Priority support",
        ],
        cta: "Notify me",
        highlighted: false,
      },
    ],
    note: "Existing accounts will be told in advance when paid plans are announced.",
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Can't find your answer? Write to us.",
    items: [
      {
        q: "Do my guests need to install an app?",
        a: "No. Scanning the QR code with the phone camera is enough; your menu opens in the browser.",
      },
      {
        q: "Do I need to reprint the QR code when I change my menu?",
        a: "No. The QR code points to your menu's address. Change the content as often as you like; the code stays the same.",
      },
      {
        q: "What will my menu's address be?",
        a: "You get an address in the form yourbusiness.cgmenu.tr, using the name you choose at sign-up.",
      },
      {
        q: "Which languages do you support?",
        a: "You can add any language to your menu and enter the translations in the dashboard.",
      },
      {
        q: "Can I show prices in different currencies?",
        a: "Yes. You enter prices in your main currency; other currencies are calculated from a rate you set or one that updates automatically.",
      },
      {
        q: "Is it paid?",
        a: "It is free during early access. You will be told in advance when paid plans are announced.",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Write to us with your questions and suggestions.",
    emailLabel: "Email",
    form: {
      name: "Your name",
      business: "Business name",
      message: "Your message",
      email: "Your email address",
      submit: "Send",
      hint: "We will get back to you by email.",
      sent: "Thank you! Your message has reached us.",
      error: "Could not send your message. Please try again in a moment or email us.",
    },
  },
  legal: {
    draftNotice:
      "This text is a draft. It will be legally reviewed and completed with company details before launch.",
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          h: "Data we collect",
          p: "The name, email and business details you provide when creating an account, and the technical logs needed to run the service.",
        },
        {
          h: "How we use data",
          p: "To provide the service, manage your account, offer support and improve the service.",
        },
        {
          h: "Sharing",
          p: "Your data is not shared with third parties other than providers needed to deliver the service, such as hosting.",
        },
        {
          h: "Your rights",
          p: "You have the right to access, correct and request deletion of your data. Contact us with your request.",
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      sections: [
        {
          h: "The service",
          p: "CG Menu is an online service that lets businesses build and publish digital menus.",
        },
        {
          h: "Account responsibility",
          p: "You are responsible for the security of your account and for the content you publish on your menu.",
        },
        {
          h: "Acceptable use",
          p: "The service may not be used for content that is unlawful, misleading or infringes the rights of others.",
        },
        {
          h: "Changes",
          p: "Significant changes to these terms will be announced in advance.",
        },
      ],
    },
    kvkk: {
      title: "KVKK Privacy Notice",
      sections: [
        {
          h: "Data controller",
          p: "The data controller's legal name and contact details will appear in this section.",
        },
        {
          h: "Personal data processed and purposes",
          p: "Identity and contact data are processed for membership, delivering the service and running support.",
        },
        {
          h: "Legal basis",
          p: "Data is processed on the basis of entering into and performing a contract, and of legitimate interest.",
        },
        {
          h: "Your rights",
          p: "Contact us to exercise your rights under Article 11 of Law No. 6698.",
        },
      ],
    },
  },
  footer: {
    tagline: "QR menus for restaurants, cafés and hotels.",
    product: "Product",
    legal: "Legal",
    demo: "Sample menu",
    rights: "All rights reserved.",
    family: "A Cyprus Guide product",
  },
  notFound: {
    title: "Page not found",
    body: "The page you are looking for may have moved or never existed.",
    back: "Back to home",
  },
};
