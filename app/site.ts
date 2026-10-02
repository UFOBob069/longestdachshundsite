export const SITE_URL = "https://www.longestdachshund.com";
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.longestdachshund.game";
export const GAME_DESCRIPTION = "A fun Android game for dachshund lovers. Create your doxie, collect snacks, unlock outfits, and enjoy cozy clubhouse adventures. Get it on Google Play.";

export const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "The Longest Dachshund",
  url: SITE_URL,
  description: GAME_DESCRIPTION,
  image: `${SITE_URL}/og.png`,
  operatingSystem: "Android",
  applicationCategory: "GameApplication",
  genre: ["Casual", "Arcade", "Virtual pet"],
  gamePlatform: "Android",
  installUrl: GOOGLE_PLAY_URL,
  sameAs: [GOOGLE_PLAY_URL],
};

export const gameFaqs = [
  {
    question: "What is The Longest Dachshund?",
    answer: "It’s a mobile dog game that combines snack-collecting arcade runs with caring for your own virtual dachshund. Steer around hazards, grow a ridiculously long dog, and return home to outfits, daily care, and clubhouse activities.",
  },
  {
    question: "Where can I download the dachshund game?",
    answer: "The Longest Dachshund is available now for Android on Google Play. Use the download links on this page to open the official listing. An iPhone version is not available yet.",
  },
  {
    question: "Can I make a dog that looks like my dachshund?",
    answer: "You can choose your dog’s name, coat, and hair type, including smooth, long-haired, and wire-haired looks. Add hats, collars, sweaters, and bandanas to give your virtual doxie a style of their own.",
  },
  {
    question: "Is it a virtual pet game or an arcade game?",
    answer: "Both. On walks, you steer, collect snacks, avoid hazards, and chase a longer run. Between walks, you can feed and play with your pup, build a daily bond, browse your closet, and spend time in the clubhouse.",
  },
  {
    question: "Does the game have in-app purchases?",
    answer: "Yes. The Google Play listing includes in-app purchases, and the boutique offers optional items. Check the item details and the Google Play purchase screen before buying.",
  },
];
