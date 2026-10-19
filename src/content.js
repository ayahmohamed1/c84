// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Secret Date / Password Protection ---
  password: {
    code: '1106',
    title: 'enter a secret date',
    subtitle: 'a date only we know ♡',
    buttonText: 'UNLOCK ♡',
    errorMessage: 'wrong date, try again 🥺',
  },

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', label: 'Captured\nMemories' },
      { id: 'flowers', icon: '🌷', label: 'Virtual\nFlowers' },
      { id: 'song', icon: '🎵', label: 'our\nsong' },
      { id: 'letter', icon: '💌', label: 'Love\nLetter' },

    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always' },
      { src: '/images/memory6.jpg', label: '❤️', tag: 'mine' },
    ],
  },



  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    // ملحوظة: النصوص مكتوبة بـ backticks (`) عشان تقدر تستخدم الأبوستروف (') براحتك من غير أي إيرور
    poems: [
      `"Hey, my Salomtyyy… you know you're my favorite person, right? 🥹❤️"`,
      `"I don't expect one message to fix everything… I just hope you'll let me show you how much you mean to me 💗"`,
      `"Even when I mess up, my love for you is real, and I'm willing to make things right 💞"`,
      `"Your feelings matter to me, even when I fail to show it the right way 🩷"`,
      `"I'm sorry I wasn't there when you needed me the most, my love."`,
      `"You deserved comfort, reassurance, and my presence… not disappointment 🥺"`,
      `"Your smile is my favorite thing in the world, and I'd do anything to see it again. 🩷🥹"`,
      `"I want to be better at loving you through my actions, not just my words 🙄"`,
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: ` *To my Salomtyyy, my favorite girl, my home… ❤️*

Baby, if there's one thing I want you to always remember, it's that you have such a special place in my heart that no one else could ever take. You're not just my girlfriend; you're the person who makes my days better, my heart happier, and my life more beautiful just by being part of it. And I never want my mistakes to make you doubt how deeply I love you or how much you mean to me. ❤️.

I know you weren't feeling well, and you were already dealing with enough. You didn't need another reason to feel upset. You needed me, and I wasn't there the way I should have been. And I'm truly sorry for that, baby.

I'm not writing this to make you forget what happened or to ask you to stop being upset. You have every right to feel the way you feel. I just want you to know that I understand why it hurt you, and I never want you to feel like your pain or your feelings are unimportant to me.

You're not just someone I love when everything is beautiful and easy. You're the person I want to be there for on the difficult days, the stressful days, the days when you're scared, exhausted, overthinking, or simply need someone to hold your hand and tell you that everything will be okay.

And I know that loving you means more than saying "I love you." It means showing up, paying attention, remembering the little things, and making you feel that you don't have to face everything alone.

I can't promise I'll never make a mistake, but I can promise that I want to learn from mine. I want to become someone you can count on, someone who makes you feel heard, understood, and cared for. Not just today, because you're upset with me, but every day after this.

Salomtyyy, you mean so much more to me than I sometimes know how to express. You bring so much happiness into my life, and the last thing I ever want is to make you question your place in my heart.

You deserve a love that makes you feel appreciated, understood, and important in the smallest moments, not just on the happy days. And that's the kind of love I want to give you. I want to keep learning you, understanding your heart, and becoming the person who knows how to make you feel loved in the way you need. Because seeing you happy means so much to me, and your feelings will never be something I want to take for granted. 🥹💕

I'm sorry, my baby. I'm sorry I wasn't there when you needed me. You deserved better from me in that moment, and I want my actions to show you that I truly mean these words.

You don't have to forgive me immediately, and you don't have to pretend you're okay just to make me feel better. Take your time, my love. I'll respect your feelings, and I'll keep trying to make things right.

*I love you, my Salomty. Not just when you're smiling and everything is okay, but also when you're tired, upset, scared, and having one of those days when the world feels a little too heavy.*

You're my girl, my favorite person, and someone I never want to stop choosing. ❤️

*I'm sorry, baby. Can I have a little chance to make you smile again? 🥹💗*."`,
    signoff: 'with all my love,',
    signature: 'yours always ♡',
  },


}

export default content
