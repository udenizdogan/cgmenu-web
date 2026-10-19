import type { Dictionary } from "./tr";

export const en: Dictionary = {
  meta: {
    title: "CG Menu — QR Menu and Restaurant Management System",
    description:
      "QR menu and restaurant management system for restaurants, cafés and hotels. Multilingual digital menu, waiter ordering, kitchen display, checks and till in one web-based app.",
  },
  nav: {
    solutions: "Solutions",
    guides: "Guides",
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
      badge: "QR menu and restaurant management system",
      title: "Your menu,",
      titleAccent: "one QR code away",
      subtitle:
        "Build your menu in minutes, style it to match your brand and publish it at yourbusiness.cgmenu.tr. No reprints when prices change.",
      primary: "Start using",
      secondary: "See a sample menu",
      note: "Nothing to install. Your guests don't need an app.",
    },
    management: {
      eyebrow: "Restaurant Management System",
      title: "The whole service, from order to payment, in one dashboard",
      subtitle:
        "Built on top of your QR menu: waiters take orders on their phones, orders reach the kitchen screen and the till closes the check.",
      items: [
        {
          title: "Waiter ordering",
          body: "No handhelds: waiters enter orders at the table on a phone or tablet.",
          solution: "waiter-ordering",
        },
        {
          title: "Kitchen display",
          body: "Orders reach the kitchen with a sound alert; ready items show at the till.",
          solution: "kitchen-display",
        },
        {
          title: "Checks and till",
          body: "Full or split payments per guest; cash, card and discounts.",
          solution: "pos",
        },
        {
          title: "Daily summary",
          body: "Revenue, hourly activity, best sellers, cancellations and takings per staff member.",
          solution: "restaurant-management",
        },
      ],
      cta: "Explore the Restaurant Management System",
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
      body: "Pick the plan that fits you; your menu is live in minutes.",
      button: "Start using",
    },
  },
  features: {
    title: "Features",
    subtitle:
      "CG Menu covers everything from building your QR menu to sending orders to the kitchen, recording payments and the end-of-day report.",
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
      {
        title: "Restaurant Management System",
        items: [
          {
            title: "Floor plan",
            body: "Sections such as hall, garden and terrace; free, busy, calling and bill-requested tables on one screen.",
          },
          {
            title: "Waiter ordering",
            body: "Waiters enter items, portions and notes from a phone or tablet.",
          },
          {
            title: "Kitchen display",
            body: "Orders in New, Preparing and Ready columns, with a sound alert for new orders.",
          },
          {
            title: "Checks and payments",
            body: "Cash, card or other; split by amount or by item, with discounts and change.",
          },
          {
            title: "Daily summary",
            body: "Revenue, change on the previous day, hourly takings, item sales, cancellations and staff.",
          },
          {
            title: "Roles",
            body: "Owner, staff and waiter; each role sees only the screens it needs.",
          },
        ],
      },
    ],
  },
  solutions: {
    title: "Solutions",
    subtitle:
      "From QR menus to a full restaurant management system: CG Menu for restaurants, cafés and hotels.",
    products: "Products",
    businesses: "By business type",
    more: "Explore",
    related: "Related solutions",
    relatedGuides: "Related guides",
    faq: "Frequently asked questions",
    planTitle: "Included in the {plan} plan",
    planCta: "Start using",
    planPrices: "Compare all plans",
    demo: "See the sample menu",
  },
  guides: {
    title: "Guides",
    subtitle:
      "Practical guides for owners on QR menus, POS software and running a restaurant.",
    readingTime: "{minutes} min read",
    updated: "Updated: {date}",
    read: "Read",
    toc: "In this article",
    faq: "Frequently asked questions",
    related: "Solutions related to this article",
    more: "More guides",
    ctaTitle: "Take your menu digital today",
    ctaBody: "QR menu or restaurant management system: pick the plan that fits your business.",
    ctaButton: "See the plans",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home" },
  pricing: {
    title: "Pricing",
    subtitle:
      "Take your menu digital, or run your whole restaurant operation from one system.",
    /** Plans themselves come from the API database, see lib/plans.ts */
    perYear: "/ year",
    perMonths: "/ {count} months",
    cta: "Start using",
    unavailable: "Plans could not be loaded right now. Write to us for current prices.",
    contact: "Contact us",
    note: "Plans are billed yearly.",
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
        q: "What does the Restaurant Management System include?",
        a: "A floor plan, waiters taking orders on a phone or tablet, orders sent to a kitchen screen, checks, cash/card payments and split bills at the till, discounts and a daily revenue report. Every QR menu feature is included too.",
      },
      {
        q: "Do I need special hardware for the Restaurant Management System?",
        a: "No. It is web-based; waiters can use their own phones and the kitchen a tablet or a computer with a screen. Nothing to install.",
      },
      {
        q: "Does CG Menu replace a fiscal cash register or e-invoicing?",
        a: "No. CG Menu manages orders and checks; it does not issue fiscal documents. Check your obligations with your accountant.",
      },
      {
        q: "Is it paid?",
        a: "Yes. Plans are billed yearly; see the Pricing page for current prices.",
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
    tagline: "QR menu and restaurant management system for restaurants, cafés and hotels.",
    product: "Product",
    solutions: "Solutions",
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
