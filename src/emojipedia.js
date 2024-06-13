const emojipedia = [
  {
    id: 1,
    emoji: "😀",
    name: "Grinning Face",
    meaning:
      "A typical smiley face. Represents happiness, pleasure, or satisfaction.",
  },
  {
    id: 2,
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning:
      "A face laughing uncontrollably with tears running down both cheeks. Represents extreme happiness or something that is hysterically funny.",
  },
  {
    id: 3,
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes",
    meaning:
      "An expression of love or admiration. You love something so much, it literally has your heart.",
  },
  {
    id: 4,
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    meaning:
      "A face with smiling eyes and three red hearts floating above its head. Represents being in love or feeling loved.",
  },
  {
    id: 5,
    emoji: "😊",
    name: "Smiling Face with Smiling Eyes",
    meaning:
      "A smiling face with smiling eyes and rosy cheeks. Represents genuine happiness or contentment.",
  },
  {
    id: 6,
    emoji: "🤩",
    name: "Star-Struck",
    meaning:
      "A face with starry eyes, indicating an astonished or amazed appearance. Represents being star-struck or impressed.",
  },
  {
    id: 7,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "A face with smiling eyes and sunglasses. Represents coolness, confidence, or self-assurance.",
  },
  {
    id: 8,
    emoji: "🤗",
    name: "Hugging Face",
    meaning:
      "A smiling face with open hands. Represents a gesture of kindness, friendship, or affectionate embrace.",
  },
  {
    id: 9,
    emoji: "😛",
    name: "Face with Tongue",
    meaning:
      "A face with eyes closed and tongue sticking out. Often used to convey playful teasing or joking.",
  },
  {
    id: 10,
    emoji: "😜",
    name: "Winking Face with Tongue",
    meaning:
      "A face with one winking eye and a stuck-out tongue. Represents playfulness, joking, or mischief.",
  },
  {
    id: 11,
    emoji: "😉",
    name: "Winking Face",
    meaning:
      "A face with a slight smile, one closed eye, and one open eye. Represents humor, flirting, or sarcasm.",
  },
  {
    id: 12,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A face with a party hat, confetti, and a noisemaker. Represents celebrating, fun, or special occasions.",
  },
  {
    id: 13,
    emoji: "🤪",
    name: "Zany Face",
    meaning:
      "A face with a spiral eyes and a goofy smile. Represents craziness, wackiness, or silliness.",
  },
  {
    id: 14,
    emoji: "😘",
    name: "Face Blowing a Kiss",
    meaning:
      "A face with kissing lips and closed eyes. Represents affection, love, or sending a kiss.",
  },
  {
    id: 15,
    emoji: "😚",
    name: "Kissing Face with Closed Eyes",
    meaning:
      "A face with closed eyes and puckered lips, as if kissing. Represents affectionate or romantic feelings.",
  },
  {
    id: 16,
    emoji: "😙",
    name: "Kissing Face with Smiling Eyes",
    meaning:
      "A face with smiling eyes and puckered lips, as if kissing. Represents affectionate or romantic feelings.",
  },
  {
    id: 17,
    emoji: "😋",
    name: "Face Savoring Food",
    meaning:
      "A face with a tongue licking its lips. Represents enjoying delicious food or tasting something savory.",
  },
  {
    id: 18,
    emoji: "😛",
    name: "Face with Tongue",
    meaning:
      "A face with eyes closed and tongue sticking out. Often used to convey playful teasing or joking.",
  },
  {
    id: 19,
    emoji: "😜",
    name: "Winking Face with Tongue",
    meaning:
      "A face with one winking eye and a stuck-out tongue. Represents playfulness, joking, or mischief.",
  },
  {
    id: 20,
    emoji: "🤪",
    name: "Zany Face",
    meaning:
      "A face with a spiral eyes and a goofy smile. Represents craziness, wackiness, or silliness.",
  },
  // Add 30 more random emojis here...
  {
    id: 21,
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning:
      "A face with a halo above its head, representing goodness, innocence, or angelic behavior.",
  },
  {
    id: 22,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A face with a raised eyebrow, chin resting on one hand, and eyes looking upward, indicating deep thought or contemplation.",
  },
  {
    id: 23,
    emoji: "🤨",
    name: "Face with Raised Eyebrow",
    meaning:
      "A face with one eyebrow raised, usually indicating skepticism, annoyance, or disapproval.",
  },
  {
    id: 24,
    emoji: "😐",
    name: "Neutral Face",
    meaning:
      "A face with a neutral expression, showing no emotion or reaction. Represents indifference, boredom, or skepticism.",
  },
  {
    id: 25,
    emoji: "😑",
    name: "Expressionless Face",
    meaning:
      "A face with a blank, expressionless look. Represents boredom, disinterest, or a lack of emotion.",
  },
  {
    id: 26,
    emoji: "😶",
    name: "Face Without Mouth",
    meaning:
      "A face without a mouth, representing silence, speechlessness, or lack of expression.",
  },
  {
    id: 27,
    emoji: "🙄",
    name: "Face with Rolling Eyes",
    meaning:
      "A face with eyes rolled upward, indicating annoyance, frustration, or exasperation.",
  },
  {
    id: 28,
    emoji: "😏",
    name: "Smirking Face",
    meaning:
      "A face with a sly smile and raised eyebrows. Represents smugness, self-satisfaction, or flirtatiousness.",
  },
  {
    id: 29,
    emoji: "😒",
    name: "Unamused Face",
    meaning:
      "A face with a flat, closed mouth, and raised eyebrows, indicating dissatisfaction, disapproval, or annoyance.",
  },
  {
    id: 30,
    emoji: "🤐",
    name: "Zipper-Mouth Face",
    meaning:
      "A face with a zipper over the mouth, representing silence, secrecy, or keeping a secret.",
  },
  {
    id: 31,
    emoji: "😬",
    name: "Grimacing Face",
    meaning:
      "A face with a tight, closed mouth and raised eyebrows, indicating discomfort, nervousness, or awkwardness.",
  },
  {
    id: 32,
    emoji: "🤥",
    name: "Lying Face",
    meaning:
      "A face with a long nose, indicating dishonesty, deception, or fibbing.",
  },
  {
    id: 33,
    emoji: "😌",
    name: "Relieved Face",
    meaning:
      "A face with closed eyes, a slight smile, and a relaxed expression. Represents relief, contentment, or satisfaction.",
  },
  {
    id: 34,
    emoji: "😔",
    name: "Pensive Face",
    meaning:
      "A face with a slightly downward-turned mouth and raised eyebrows, indicating sadness, disappointment, or thoughtfulness.",
  },
  {
    id: 35,
    emoji: "😪",
    name: "Sleepy Face",
    meaning:
      "A face with closed eyes, indicating tiredness, sleepiness, or boredom.",
  },
  {
    id: 36,
    emoji: "🤤",
    name: "Drooling Face",
    meaning:
      "A face with drooling saliva dripping from one side of the mouth, indicating hunger, lust, or excitement.",
  },
  {
    id: 37,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A face with closed eyes and a small, blue, sweat bead on its forehead, indicating sleepiness or fatigue.",
  },
  {
    id: 38,
    emoji: "😷",
    name: "Face with Medical Mask",
    meaning:
      "A face wearing a medical mask, indicating illness, medical treatment, or protection from airborne particles.",
  },
  {
    id: 39,
    emoji: "🤒",
    name: "Face with Thermometer",
    meaning:
      "A face with closed eyes and a thermometer in its mouth, indicating sickness, illness, or fever.",
  },
  {
    id: 40,
    emoji: "🤕",
    name: "Face with Head-Bandage",
    meaning:
      "A face with a bandage wrapped around its head, indicating injury, pain, or recovery from a head injury.",
  },
  {
    id: 41,
    emoji: "🤢",
    name: "Nauseated Face",
    meaning:
      "A face with scrunched-up eyes and a green, upset expression, indicating nausea, sickness, or disgust.",
  },
  {
    id: 42,
    emoji: "🤮",
    name: "Face Vomiting",
    meaning:
      "A face with scrunched-up eyes and a stream of green vomit spewing from its mouth, indicating sickness, nausea, or disgust.",
  },
  {
    id: 43,
    emoji: "🤧",
    name: "Sneezing Face",
    meaning:
      "A face with scrunched-up eyes and a tissue blowing from its nose, indicating sneezing, illness, or allergies.",
  },
  {
    id: 44,
    emoji: "🥵",
    name: "Hot Face",
    meaning:
      "A face with flushed cheeks and a thermometer in its mouth, indicating heat, warmth, or feeling hot.",
  },
  {
    id: 45,
    emoji: "🥶",
    name: "Cold Face",
    meaning:
      "A face with blue icicles hanging from its cheeks and mouth, indicating cold temperatures, winter weather, or feeling cold.",
  },
  {
    id: 46,
    emoji: "🥴",
    name: "Woozy Face",
    meaning:
      "A face with uneven eyes and a wobbly mouth, indicating dizziness, disorientation, or intoxication.",
  },
  {
    id: 47,
    emoji: "😵",
    name: "Dizzy Face",
    meaning:
      "A face with X-shaped eyes and a wobbly mouth, indicating confusion, dizziness, or being stunned.",
  },
  {
    id: 48,
    emoji: "🤯",
    name: "Exploding Head",
    meaning:
      "A face with an exploding cranium, indicating shock, amazement, or mind-blowing realization.",
  },
  {
    id: 49,
    emoji: "🤠",
    name: "Cowboy Hat Face",
    meaning:
      "A face wearing a cowboy hat, indicating cowboy culture, the American West, or a sense of adventure.",
  },
  {
    id: 50,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A face with a party hat, confetti, and a noisemaker. Represents celebrating, fun, or special occasions.",
  },
  {
    id: 51,
    emoji: "🤩",
    name: "Star-Struck",
    meaning:
      "A face with starry eyes, indicating an astonished or amazed appearance. Represents being star-struck or impressed.",
  },
];

export default emojipedia;
