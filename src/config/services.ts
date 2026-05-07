export interface Service {
  title: string;
  slug: string;
  description: string;
  price: string;
  imageSrc: string;
  mostPopular: boolean;
  features?: string[];
  imageClassName?: string;
  fullDescription?: string;
  aboutPractice?: string;
  quote?: string;
  note?: string;
  receivePoints?: string[];
  faqs?: { question: string; answer: string }[];
  testimonials?: { name: string; text: string; location: string; rating: number }[];
  gallery?: string[];
  detailImageSrc?: string;
  detailPrice?: string;
  detailTitle?: string;
  detailFeatures?: string[];
  specialApplications?: string;
  howItWorks?: string;
  traditionalNote?: string;
  secondaryNote?: string;
  tertiaryNote?: string;
  quaternaryNote?: string;
  quinaryNote?: string;
  finalNote?: string;
}

export const services: Service[] = [
  {
    title: "Meditation Demo Session",
    slug: "meditation-program",
    description: "Discover the power of meditation through our 3-Level Structured Meditation Program designed to help you achieve inner peace, clarity, and spiritual awakening.",
    price: "₹99",
    imageSrc: "/services/card_img_1.png",
    mostPopular: false,
    features: [],
    detailFeatures: [],
    fullDescription: "Discover the power of meditation through our 3-Level Structured Meditation Program designed to help you achieve inner peace, clarity, and spiritual awakening.\n\nMeditation is not just about sitting in silence — it is a journey inward, a process of calming the noise of daily life and reconnecting with the stillness that already exists within you.\n\nThis structured program is designed for all levels — whether you are a complete beginner or someone who has tried meditation before. Each level builds gently on the previous one, guiding you step by step toward deeper awareness, focus, and peace.",
    note: "✨ Power of Meditation Program\n\nThrough this program, you will experience a calm and focused mind that remains steady even in daily stress, improved clarity in decisions and thought processes, and the release of mental blocks that hold back personal and professional growth.\n\nThis is not just a session — it is the beginning of a lifelong practice.\n\n⸻\n\n🌿 Why Meditation?\n\nIn today's world, the mind is constantly pulled in different directions — stress, distractions, fears, and overthinking can drain your energy and affect every area of life.\n\nMeditation is one of the oldest and most proven methods to:\n\n* Calm an overactive mind\n* Reduce stress and emotional tension\n* Improve focus, memory, and mental clarity\n* Build inner strength and resilience\n* Reconnect with your true self beyond daily roles and worries\n\nScientific research and ancient wisdom both agree — regular meditation creates measurable, lasting changes in the mind, body, and energy.",
    receivePoints: [],
    secondaryNote: "🕉️ About the Tradition\n\nThe meditation practices taught in this program are rooted in ancient Indian spiritual traditions — passed down through generations of teachers, saints, and practitioners who dedicated their lives to the science of inner stillness.\n\nAt Sri Sidhi Vinaayagar Meditation Academy, we honour this lineage by teaching meditation in its most authentic and accessible form — free from complexity, open to all, and focused on genuine inner transformation.\n\nOur approach is grounded in:\n\n* Breath-based awareness practices from classical Indian tradition\n* Sound and mantra techniques that align the mind and energy body\n* Guided visualization rooted in ancient contemplative methods\n* Simple daily practices you can sustain for a lifetime\n\nWhether you come from a spiritual background or are entirely new to meditation, this tradition welcomes you exactly as you are.",
    tertiaryNote: "🧘 How the Meditation Demo Session Works\n\nIn this session, you will be guided through a live, structured meditation experience.\n\nStep 1 – Introduction & Setting Intention\nWe begin by explaining the purpose and process, helping you relax and set a clear intention for the session.\n\nStep 2 – Breathing & Grounding\nYou are guided through simple breathing exercises to calm the mind and bring your awareness to the present moment.\n\nStep 3 – Guided Meditation\nA structured, spoken meditation leads you inward — focusing on stillness, clarity, and inner peace.\n\nStep 4 – Q&A & Guidance\nAfter the practice, there is time for questions and personalized suggestions for continuing your meditation journey.",
    quaternaryNote: "🌟 Benefits of Meditation\n\nRegular meditation practice brings lasting improvements across all areas of life:\n\n🧠 Mental Benefits:\n* Reduced stress, anxiety, and overthinking\n* Improved focus, concentration, and memory\n* Greater emotional stability and mental clarity\n* Faster recovery from difficult emotions\n\n💪 Physical Benefits:\n* Improved sleep quality\n* Reduced tension and physical fatigue\n* Better breathing and regulated energy levels\n* Support for overall health and immunity\n\n✨ Spiritual Benefits:\n* Deeper self-awareness and self-understanding\n* Stronger intuition and inner guidance\n* Connection to a sense of purpose and peace\n* Gradual awakening of higher awareness",
    quinaryNote: "☀️ How Meditation Helps in Daily Life\n\nMeditation is not something you do only on a mat or in silence — its benefits flow into every moment of your day.\n\n* Morning meditation sets a calm and focused tone for the entire day\n* Even 10–15 minutes of practice reduces reactivity in stressful situations\n* Regular practitioners report better relationships, clearer decisions, and improved productivity\n* Many people find they sleep better, worry less, and feel more in control of their emotions\n* Over time, inner peace becomes your natural state — not just something you feel during meditation\n\nYou don't need hours of practice. Small, consistent steps create powerful, lasting change.",
    finalNote: "⚠️ Note\n\nThis is a demo session — a first step to help you experience meditation directly, without theory or complexity.\n\nThere is nothing you need to prepare. Just come with an open mind and the willingness to be still for a short time.\n\n⸻\n\n🙏 Final Thought\n\nMeditation is not about achieving a perfect state of mind.\nIt is about returning — again and again — to the quiet place that already exists within you.\n\nEvery session, no matter how simple, is a step toward clarity, peace, and a deeper understanding of yourself.\n\nWe look forward to sharing this practice with you.\n\n⸻\n\n📞 Connect With Us\n\nSri Sidhi Vinaayagar Meditation Academy\n📱 9585044188",
    traditionalNote: "",
    detailImageSrc: "/services/meditation.png",
    howItWorks: "",
    aboutPractice: "At Sri Sidhi VINAAYAGAR Meditation Academy, we guide you through structured levels of meditation to help you discover the infinite peace and clarity that already exists within you.",
    quote: `“In stillness, answers start to appear,\nGuiding your path with vision clear.\nQuiet the mind, and let peace flow,\nTo heights your soul is meant to go.”`,
    faqs: [
      {
        question: "1. What is this demo meditation class?",
        answer: "This is a 90-minute introductory session designed to help you experience meditation practically, not just learn theory. You will understand how meditation works and feel the benefits in the session itself."
      },
      {
        question: "2. Who can attend this class?",
        answer: "Anyone can join:\n\n* Beginners with no experience\n* People with stress, anxiety, or overthinking\n* Those interested in spirituality and self-growth\n* Working professionals, students, homemakers\n\nNo prior knowledge is required."
      },
      {
        question: "3. What will be covered in the demo session?",
        answer: "In this session, you will learn:\n\n* Basics of meditation (simple explanation)\n* Breathing techniques for calming the mind\n* How to start meditation correctly\n* Short guided meditation practice\n* Tips to control thoughts and emotions"
      },
      {
        question: "4. Will I be able to meditate after this class?",
        answer: "Yes. This class is designed so that you can start basic meditation on your own immediately after attending."
      },
      {
        question: "5. Is this a theory class or practical?",
        answer: "This is mostly practical and experience-based.\nYou will actually practice meditation during the session."
      },
      {
        question: "6. What are the benefits I can expect?",
        answer: "Many participants experience:\n\n* Immediate calmness and relaxation\n* Reduced stress and overthinking\n* Better focus and clarity\n* Peaceful mind and emotional balance"
      },
      {
        question: "7. Do I need to bring anything?",
        answer: "No special items needed.\nJust come with:\n\n* Comfortable clothing\n* Open mind and willingness to learn"
      },
      {
        question: "8. Is this related to any religion?",
        answer: "No. Meditation taught here is simple and universal, suitable for people of all backgrounds."
      },
      {
        question: "9. Can I attend online or only offline?",
        answer: "* Available offline at our center\n* Online option may also be available (if applicable)"
      },
      {
        question: "10. What happens after the demo class?",
        answer: "After the demo, you can choose to join our full meditation courses (Basic / Intermediate / Advanced) for deeper learning and transformation."
      },
      {
        question: "11. Why is the fee only ₹99?",
        answer: "This is a special introductory session to help more people experience meditation.\nOur intention is to give real value so you can decide confidently for further learning."
      },
      {
        question: "12. How do I register for the class?",
        answer: "You can book your seat by contacting us:\n\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy"
      },
      {
        question: "13. Are seats limited?",
        answer: "Yes. To maintain quality and personal attention, limited seats are available.\nAdvance booking is recommended."
      }
    ],
    testimonials: [
      { name: "Abirami", text: "This program has completely changed my perspective on life. I feel so much more at peace.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "The meditation levels are perfectly structured. Level 1 helped me build a habit I couldn't keep for years.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "A deeply spiritual journey. The guidance is profound and the atmosphere is serene.", location: "Bangalore, India", rating: 5 }
    ],
    gallery: [
      "/services/meditation.png",
      "/services/meditation.png",
      "/services/card_img_1.png",
      "/services/gallery-3.png"
    ]
  },
  {
    title: "One on One session - 45 mins",
    slug: "one-on-one-session",
    description: "Practical Sound Energy for Daily Life\nLearn correct usage of sound energy.",
    price: "₹999",
    imageSrc: "/services/card_img_2.png",
    mostPopular: true,
    detailFeatures: ["45 MINS SESSION", "SPIRITUAL CONSULTANT"],
    fullDescription: "Experience a personalized spiritual consultation designed to bring clarity, resolve energy blocks, and provide practical remedies for your specific life challenges.\n\nIn a world full of noise and general advice, a one-on-one session provides the rare opportunity to focus entirely on your unique energy, patterns, and life path. Whether you are facing career obstacles, relationship issues, health concerns, or simply seeking deeper spiritual meaning, this session serves as a mirror and a map for your journey.\n\nOur approach combines ancient spiritual wisdom with intuitive energy analysis to help you see beyond the surface of your problems and find the root cause of your struggles.",
    note: "✨ Power of Personal Consultation\n\nThrough this session, you will gain a clear understanding of your own nature and the invisible blocks that may be holding you back. You will receive specific, practical do's and don'ts tailored to your current situation, along with simple remedies that can be easily integrated into your daily routine.\n\nThis is more than just a conversation — it is a moment of alignment that helps you move forward with confidence and peace.\n\n⸻\n\n🌿 Why a 1:1 Session?\n\nMany life problems are not just physical or mental; they are energetic in nature. A personalized session helps to:\n\n* Identify specific energy blocks in your aura or home\n* Understand your behavioral patterns and how to shift them\n* Get clarity on career, business, or relationship decisions\n* Receive personalized remedies (mantras, water therapy, etc.)\n* Build inner strength and resilience through targeted guidance\n* Reconnect with your life's purpose beyond daily confusion",
    secondaryNote: "🕉️ About the Tradition\n\nThe guidance provided in these sessions is rooted in the same ancient Indian spiritual traditions that form the foundation of our academy. We draw from the wisdom of lineage-based energy practices, sound healing, and intuitive science that has been used for centuries to guide seekers and families.\n\nAt Sri Sidhi Vinaayagar Meditation Academy, we maintain the purity of this tradition while making it relevant for modern life. Our consultation approach is:\n\n* Grounded in energy analysis and nature understanding\n* Focused on practical, non-ritualistic remedies\n* Respectful of your privacy and individual path\n* Aimed at empowering you to manage your own energy\n\nWhether you are new to spirituality or a seasoned practitioner, this session meets you where you are and guides you toward where you need to be.",
    tertiaryNote: "🧘 How the 1:1 Session Works\n\nYour 45-minute session is a structured process designed to give you maximum value and clarity.\n\nStep 1 – Sharing & Listening\nWe begin by creating a safe space for you to share your concerns, current situation, and goals for the session.\n\nStep 2 – Energy & Nature Analysis\nUsing spiritual insights and energy analysis, we look into the root patterns and blocks influencing your life.\n\nStep 3 – Personalized Guidance\nYou receive clear, direct answers and suggestions for the areas of your life that need attention.\n\nStep 4 – Remedies & Next Steps\nWe provide simple, practical remedies (like mantras or daily habits) and a clear plan for your progress.",
    quaternaryNote: "🌟 Benefits of Personal Consultation\n\nA one-on-one session brings personalized shifts that general group sessions cannot provide:\n\n🧠 Mental & Emotional Benefits:\n* Immediate clarity on complex life situations\n* Reduced anxiety and confusion regarding the future\n* Greater self-understanding and emotional stability\n* Clearer focus on priorities and personal growth\n\n💼 Practical & Life Benefits:\n* Specific guidance for career and business growth\n* Better relationship dynamics through nature analysis\n* Simple remedies for home and workplace energy\n* Practical do's and don'ts to avoid repeated mistakes\n\n✨ Spiritual Benefits:\n* Identification of deeper soul lessons and patterns\n* Stronger intuition and inner guidance\n* Alignment with your true life purpose\n* Personalized tools for continued spiritual progress",
    quinaryNote: "☀️ How it Helps in Daily Life\n\nThe insights from a 1:1 session are not just for the duration of the call — they are tools you carry into every moment of your day.\n\n* Use your personalized remedies to maintain a calm and steady energy field\n* Apply your 'do's and don'ts' to make better decisions in real-time\n* Understand your reactions in relationships, leading to more peace at home\n* Approach your work with a clear mind and aligned intention\n* Over time, the guidance helps you move from reaction to conscious action\n\nYou don't need to change your whole life at once. The session provides the small, powerful shifts that lead to lasting transformation.",
    finalNote: "⚠️ Note\n\nThis session is entirely confidential. To get the most out of it, we recommend being in a quiet, undisturbed space during the call.\n\nThere is no special preparation needed. Just come with an open heart and a willingness to explore your path.\n\n⸻\n\n🙏 Final Thought\n\nSometimes, a single moment of clarity is all it takes to shift the direction of your life.\n\nEvery session is a step toward returning to your true self — the part of you that is already clear, strong, and at peace.\n\nWe look forward to supporting you on your journey.\n\n⸻\n\n📞 Connect With Us\n\nSri Sidhi Vinaayagar Meditation Academy\n📱 9585044188",
    receivePoints: [],
    aboutPractice: "At Sri Sidhi VINAAYAGAR Meditation Academy, we provide a personalized spiritual gateway through our one-on-one consultations. We believe that every individual carries a unique energetic blueprint, and our goal is to help you decode your nature, resolve deep-seated blocks, and align your life path with your true potential.",
    quote: `“One moment of clarity can shift your life’s flow,\nHelping you find the strength you already know.\nIn stillness and guidance, your true path appears,\nDissolving your doubts and quieting your fears.”`,
    faqs: [
      {
        question: "1. What is a one-to-one session?",
        answer: "This is a private personal consultation where we analyze your life through face reading and intuitive guidance to help you understand your current situation and future possibilities."
      },
      {
        question: "2. What can I expect in this session?",
        answer: "During the session, we will cover:\n\n* Your personality and character analysis\n* Life direction and opportunities\n* Hidden strengths and talents\n* Possible challenges or obstacles\n* Suitable spiritual remedies for improvement"
      },
      {
        question: "3. How long is the session?",
        answer: "Each session is 45 minutes, giving enough time for detailed analysis and guidance."
      },
      {
        question: "4. What is the consultation fee?",
        answer: "💰 ₹999 per session"
      },
      {
        question: "5. How is face reading useful?",
        answer: "Face reading helps to understand:\n\n* Your natural tendencies and behavior\n* Career and financial patterns\n* Relationship aspects\n* Decision-making ability\n\nIt gives clarity about your life path and helps you take better actions."
      },
      {
        question: "6. Can I ask my personal questions?",
        answer: "Yes. This is a completely personalized session, and you can ask questions related to:\n\n* Career / business\n* Finance\n* Relationships\n* Health (general guidance)\n* Life decisions"
      },
      {
        question: "7. Do I need to prepare anything before the session?",
        answer: "No special preparation is needed.\nJust:\n\n* Be open and relaxed\n* Come with your questions (if any)"
      },
      {
        question: "8. Is this session confidential?",
        answer: "Yes. Your details and discussion are 100% private and confidential."
      },
      {
        question: "9. Will I get exact predictions?",
        answer: "This session provides guidance and insights based on your energy and patterns.\nIt helps you understand possibilities, but your actions also play an important role."
      },
      {
        question: "10. Do you provide remedies?",
        answer: "Yes. Based on your situation, simple and effective remedies may be suggested such as:\n\n* Mantras\n* Energy practices\n* Lifestyle corrections"
      },
      {
        question: "11. Is this a one-time session or should I take multiple sessions?",
        answer: "One session gives clarity.\nHowever, for deeper guidance or continuous support, you may choose follow-up sessions."
      },
      {
        question: "12. Can this session be done online?",
        answer: "Yes.\nSessions can be done:\n\n* In person (at our center)\n* Online (video call)"
      },
      {
        question: "13. How do I book an appointment?",
        answer: "You can book your slot by contacting us:\n\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy"
      },
      {
        question: "14. What are the available timings?",
        answer: "🕙 Morning Slots:\n\n* 10:00 – 10:45\n* 10:55 – 11:40\n* 11:50 – 12:35\n* 12:45 – 1:30\n\n🌆 Evening Slots:\n\n* 5:00 – 5:45\n* 5:55 – 6:40\n* 6:50 – 7:35\n* 7:45 – 8:30\n* 8:40 – 9:25"
      },
      {
        question: "15. Who should take this session?",
        answer: "* People seeking clarity in life\n* Those facing repeated problems\n* Anyone looking for guidance and direction\n* Individuals interested in self-understanding."
      }
    ],
    testimonials: [
      { name: "Abirami", text: "The one-on-one session was deeply personal and insightful. The nature analysis gave me a clear understanding of my path forward.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "A truly unique experience. The spiritual remedies suggested were practical and have brought significant clarity to my life.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "The team creates a safe and sacred space for deep self-exploration. I highly recommend this for anyone feeling stuck or confused.", location: "Bangalore, India", rating: 5 }
    ],
    detailImageSrc: "/services/card_img_2.png",
    gallery: [
      "/services/card_img_2.png",
      "/services/card_img_2.png",
      "/services/gallery-2.png",
      "/services/gallery-3.png"
    ]
  },
  {
    title: "Auto-Writing Program",
    slug: "auto-writing-program",
    description: "Learn a powerful spiritual practice that allows your hand to become a bridge between your conscious mind and higher guidance.",
    price: "₹12,599",
    imageSrc: "/services/card_img_3.png",
    mostPopular: false,
    detailFeatures: ["5 DAYS INTENSIVE", "SPIRITUAL CONSULTANT"],
    fullDescription: "Learn a powerful spiritual practice that allows your hand to become a bridge between your conscious mind and higher guidance.\n\nAuto-writing, or automatic writing, is an ancient spiritual technique used to bypass the critical, logical mind and tap directly into the subconscious and higher realms of wisdom. It is not about literary skill or creative writing — it is about becoming a clear channel for insights that often remain hidden behind the noise of daily thoughts.\n\nIn this program, we guide you through the safe and structured process of entering a light meditative state where your hand can move freely, allowing messages, answers, and guidance to flow onto paper naturally. Whether you are looking for answers to life's big questions or seeking a deeper connection with your own inner voice, auto-writing provides a direct and profound way to listen to your soul.",
    note: "✨ Power of Auto-Writing\n\nAuto-writing is one of the most direct ways to access the wisdom that already exists within you. By quieting the 'editor' in your brain, you allow your deeper consciousness to speak. This practice helps in uncovering hidden patterns, resolving inner conflicts, and receiving guidance that feels both surprising and deeply resonant.\n\nIt is a tool for self-discovery that you can carry with you for the rest of your life.\n\n⸻\n\n✍️ Why Auto-Writing?\n\nIn our daily lives, we often rely solely on logic and external advice to make decisions. Auto-writing helps you:\n\n* Access your intuition beyond the limits of logic\n* Release suppressed emotions and mental 'clutter'\n* Get clarity on difficult life choices and obstacles\n* Connect with a sense of higher guidance and support\n* Discover hidden talents, desires, and aspects of yourself\n* Build trust in your own inner voice and spiritual connection\n\nMany practitioners find that once the 'bridge' is opened, they feel more supported and less alone in their journey.",
    secondaryNote: "🕉️ About the Tradition\n\nThe practice of allowing the hand to move under the influence of higher guidance has existed in various spiritual and mystical traditions for centuries. From ancient seers to modern mystics, the 'written channel' has been used to record sacred wisdom, poetry, and personal guidance.\n\nAt Sri Sidhi Vinaayagar Meditation Academy, we teach this practice with a focus on safety, grounding, and purity of intention. We draw from the understanding that everyone has an innate ability to connect with higher consciousness — all that is needed is the right technique and a calm, centered state of mind.\n\nOur approach is:\n\n* Grounded in meditative preparation\n* Focused on personal empowerment and self-guidance\n* Structured to ensure a safe and positive experience\n* Accessible to everyone, regardless of spiritual background",
    tertiaryNote: "🧘 How the Auto-Writing Session Works\n\nLearning auto-writing is a step-by-step process that prioritizes your comfort and mental clarity.\n\nStep 1 – Grounding & Protection\nWe begin by creating a safe energetic space and teaching you how to protect your energy during the practice.\n\nStep 2 – Entering the State\nYou are guided into a specific, light meditative state where the conscious mind remains observant but does not interfere.\n\nStep 3 – The Connection\nYou learn the correct method of holding the pen and allowing the first movements to happen naturally without judgment.\n\nStep 4 – Interpretation & Reflection\nAfter the session, we help you understand the messages or patterns that emerged and how to apply them to your life.",
    quaternaryNote: "🌟 Benefits of Auto-Writing\n\nRegular practice of auto-writing brings profound shifts in how you perceive yourself and your life:\n\n🧠 Mental & Emotional Benefits:\n* Greater clarity on complex thoughts and feelings\n* A safe way to express and release 'stuck' emotions\n* Improved problem-solving by tapping into subconscious insights\n* Reduced mental stress through the act of 'letting it flow'\n\n✨ Spiritual Benefits:\n* Stronger and more reliable intuition\n* A felt connection to higher guidance or the Higher Self\n* Deeper understanding of your soul's purpose and lessons\n* Empowerment through receiving your own answers\n\n🛡️ Personal Growth:\n* Increased self-confidence and trust in your decisions\n* A unique and creative form of meditative expression\n* A lifelong tool for guidance whenever you feel stuck",
    quinaryNote: "☀️ How it Helps in Daily Life\n\nAuto-writing is not just a spiritual exercise; it is a practical tool for modern living.\n\n* Use it in the morning to get a 'forecast' or focus for your day\n* Turn to your notebook when you face a difficult decision at work or home\n* Practice it when you feel emotionally overwhelmed to find the root cause\n* Use it to enhance your creativity in any field or hobby\n* Over time, it helps you move through life with a sense of inner companionship\n\nYou don't need a special ritual every time. Once learned, you can access this inner bridge whenever you have a pen, paper, and a few minutes of quiet.",
    finalNote: "⚠️ Note\n\nAuto-writing is a gentle and safe practice. It is not about 'trance' or losing control, but about expanding your awareness. \n\nNo prior writing or spiritual experience is needed. We recommend using a dedicated notebook for your practice.\n\n⸻\n\n🙏 Final Thought\n\nYour hand can write what your mind might not yet know.\n\nThis program is an invitation to listen to the whispers of your soul and discover the guidance that has always been within you. We look forward to helping you open this sacred bridge.\n\n⸻\n\n📞 Connect With Us\n\nSri Sidhi Vinaayagar Meditation Academy\n📱 9585044188",
    receivePoints: [],
    aboutPractice: "At Sri Sidhi VINAAYAGAR Meditation Academy, we teach auto-writing as a sacred bridge to your inner wisdom. Our focus is on providing a safe, grounded, and empowering technique that allows you to receive your own guidance and clarity directly.",
    quote: `“Let your hand write what the soul can’t say,\nA silent bridge to a higher way.\nIn every word, your truth will flow,\nGuided by wisdom you already know.”`,
    faqs: [
      {
        question: "1. What is auto writing?",
        answer: "Auto writing is a spiritual practice where you learn to receive guidance beyond your conscious mind and allow it to flow through writing.\nIt is often experienced as messages coming from higher intelligence, guiding energy, or inner wisdom."
      },
      {
        question: "2. Is this from mind or something higher?",
        answer: "Auto writing is not just imagination.\nIt is a process of going beyond the normal thinking mind and tuning into deeper intuitive or higher guidance."
      },
      {
        question: "3. Can anyone learn auto writing?",
        answer: "Yes. Anyone can learn with proper guidance.\nNo special background or spiritual experience is required — only openness and practice."
      },
      {
        question: "4. What will be taught in this 5-day course?",
        answer: "The course is structured as:\n\n* Day 1: Understanding souls, energy, and how auto writing works\n* Day 2 & 3: Initiation process (opening the channel)\n* Day 4 & 5: Practice sessions and guidance"
      },
      {
        question: "5. What is initiation?",
        answer: "Initiation is a guided process that helps you activate your sensitivity and connection to receive guidance more clearly."
      },
      {
        question: "6. What kind of guidance can I receive?",
        answer: "You may receive insights related to:\n\n* Personal life decisions\n* Emotional clarity\n* Spiritual growth\n* Problem-solving guidance"
      },
      {
        question: "7. Is this safe?",
        answer: "Yes, when learned under proper guidance, it is safe.\nWe focus on positive, protective, and guided practices only."
      },
      {
        question: "8. Will I start writing immediately?",
        answer: "Most participants begin to experience writing within the training period itself, especially after initiation and practice."
      },
      {
        question: "9. Do I need any special materials?",
        answer: "No special items required.\nYou only need:\n\n* Pen and notebook\n* Calm environment\n* Willingness to learn"
      },
      {
        question: "10. Is this related to any religion?",
        answer: "No. This is a spiritual technique, not religion-based.\nPeople from any background can learn and practice."
      },
      {
        question: "11. Can this help in daily life?",
        answer: "Yes. Auto writing can help in:\n\n* Decision making\n* Reducing confusion\n* Gaining inner clarity\n* Emotional healing and guidance"
      },
      {
        question: "12. Will I become dependent on this?",
        answer: "No. The purpose is to empower you, not make you dependent.\nYou will learn how to use it wisely as a supportive tool."
      },
      {
        question: "13. Can I ask questions during auto writing?",
        answer: "Yes. You will be trained on how to ask the right questions and receive meaningful answers."
      },
      {
        question: "14. What if I don’t get results immediately?",
        answer: "Some people experience quickly, others may take a little time.\nWith proper practice and guidance, results will improve."
      },
      {
        question: "15. What happens after the course?",
        answer: "You will be able to:\n\n* Practice on your own\n* Continue improving your connection\n* Use it for personal guidance\n\nAdvanced support may also be available if needed."
      },
      {
        question: "16. How do I join the course?",
        answer: "Contact us to register:\n\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy"
      },
      {
        question: "17. Is there limited seating?",
        answer: "Yes. To ensure proper guidance during initiation, limited seats are available."
      }
    ],
    testimonials: [
      { name: "Abirami", text: "I never thought my own hand could reveal so much. The practice is gentle yet deeply revealing.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "The 3-day sessions gave me a tool for life. Whenever I feel stuck, I turn to my journaling practice.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "Sacred warmth indeed. The BalaMaya team created such a safe container for spiritual exploration.", location: "Bangalore, India", rating: 5 }
    ],
    gallery: [
      "/services/card_img_3.png",
      "/services/card_img_3.png",
      "/services/gallery-2.png",
      "/services/gallery-3.png"
    ]
  },
  {
    title: "Business Energy Alignment",
    slug: "business-energy-alignment",
    description: "Unlock the Hidden Energy Behind Your Business Growth",
    price: "₹1599",
    detailPrice: "Depends",
    imageSrc: "/services/card_img_4.png",
    mostPopular: false,
    features: ["Business energy assessment", "Financial flow guidance"],
    detailFeatures: ["COURSE DURATION 1 DAY", "BEGINNERS"],
    fullDescription: "Unlock the Hidden Energy Behind Your Business Growth\n\nEvery business is not just built on strategy, effort, and investment — it is also deeply influenced by energy flow. When the energy in your business space, decisions, and intentions is aligned, growth becomes natural. When it is blocked, you may experience repeated struggles without clear reasons.\n\nBusiness Energy Alignment is a powerful spiritual process that identifies and corrects unseen energy imbalances affecting your business success.",

    note: "🔍 What is Business Energy Alignment?\n\nBusiness Energy Alignment is a combination of spiritual insight, energy correction, and practical guidance that helps:\n\n• Remove hidden negative influences\n• Clear stagnant or blocked energy\n• Strengthening positive vibration in business space\n• Align your business with prosperity energy\n\nThis process works not only on your office or shop space, but also on:\n\n• Business owner’s energy field\n• Decision-making clarity\n• Financial flow patterns\n• Client attraction energy\n\n⚠️ Signs Your Business Needs Energy Alignment\n\nIf you are experiencing any of the following, energy imbalance could be a reason:\n\n1. Good efforts but no consistent income\n2. Sudden drop in clients or sales\n3. Frequent losses or unexpected expenses\n4. Deals getting blocked at the last minute\n5. Staff issues, misunderstandings, or conflicts\n6. Feeling mentally stuck or confused in business decisions\n7. Negative atmosphere in office or shop\n\n🔮 What We Do in This Process\n\n🧿 Energy Cleansing\n1. Removing negative vibrations from business space\n2. Clearing heavy or stagnant energy\n\n🔱 Energy Activation\n1. Enhancing prosperity and success energy\n2. Strengthening positive vibrations in the environment\n\n🧘 Personal Alignment\n1. Aligning the business owner’s energy for better clarity and decision making\n2. Reducing stress, fear, and confusion\n\n💧 Remedies & Guidance\n1. Simple and powerful remedies (mantra, water therapy, energy practices)\n2. Practical steps to maintain positive energy daily\n\n👶 Who Can Benefit?\n\n1. Shop owners\n2. Entrepreneurs & startups\n3. Office-based businesses\n4. Freelancers and consultants\n5. Anyone facing unexplained business struggles\n\n📿 Our Approach\n\nAt Sri Sidhi Vinaayagar Meditation Academy, we combine:\n\n1. Spiritual insight\n2. Energy healing techniques\n3. Practical remedies\n\n⸻\n\n📞 Connect With Us\n\nIf you feel your business is not growing despite your efforts, it may not be lack of work — it may be lack of alignment.\n\nSri Sidhi VINAAYAGAR Meditation Academy\n📱 9585044188",
    aboutPractice: "At Sri Sidhi VINAAYAGAR Meditation Academy, we guide business owners through simple and powerful practices that help create a prosperous energy environment for both the owner and their business.",
    quote: "When a child’s mind becomes calm and focused, learning becomes effortless. Our goal is to help children unlock their natural intelligence and grow with confidence and clarity.",
    faqs: [
      { question: "What is Business Energy Alignment with remedies?", answer: "It is a complete process where we:\n* Identify energy blocks affecting your business\n* Clear negative or stagnant energy\n* Provide simple remedies to maintain positive flow\n\nIt is not just analysis — it includes practical solutions you can follow daily." },
      { question: "What kind of problems can this help with?", answer: "This can help if you are facing:\n* Low or inconsistent income\n* Sudden business losses\n* Client drop or poor conversion\n* Delays in payments or deals\n* Repeated obstacles without clear reason" },
      { question: "What are “remedies” in this process?", answer: "Remedies are simple, safe, and practical methods given after analysis, such as:\n* Mantras\n* Water therapy\n* Energy correction practices\n* Space-related adjustments\n\nThese help to maintain and strengthen positive energy." },
      { question: "Are these remedies difficult to follow?", answer: "No. Remedies are designed to be:\n* Simple\n* Easy to follow daily\n* Practical even for busy people\n\nNo complicated rituals are required." },
      { question: "Do I need to believe in this for it to work?", answer: "Belief helps, but it is not mandatory.\nConsistency in following the remedies is more important." },
      { question: "How long should I follow the remedies?", answer: "Usually, remedies are suggested for a specific period (e.g., 21 days or 48 days) depending on your situation." },
      { question: "Can I do these remedies at home or office?", answer: "Yes. Most remedies can be done:\n* At your home\n* In your office/shop\n\nSome may be specific to your business space." },
      { question: "Will this remove negative energy completely?", answer: "The process helps to clear and reduce negative influence significantly.\nRegular practice of remedies helps maintain long-term positive energy." },
      { question: "Is this safe? Any side effects?", answer: "Yes, it is completely safe.\nAll remedies are positive and constructive, with no harmful effects." },
      { question: "Will this guarantee business success?", answer: "No one can guarantee results.\nThis process helps to remove unseen blocks and improve energy flow, but your effort, planning, and market conditions also matter." },
      { question: "How soon can I see results?", answer: "Some people notice:\n* Mental clarity and positivity quickly\n* Business improvements gradually over time\n\nResults depend on your situation and consistency." },
      { question: "Do I need multiple sessions?", answer: "In many cases, one session with remedies is enough to start.\nFor deeper issues, follow-up sessions may be recommended." },
      { question: "Can this be done remotely?", answer: "Yes.\nEnergy alignment and remedies guidance can be done online or over call.\nFor space-related work, in-person visit may be suggested if needed." },
      { question: "Who should take this service?", answer: "* Business owners facing slow growth\n* People with repeated financial blocks\n* Entrepreneurs starting new ventures\n* Anyone wanting better business flow and clarity" },
      { question: "What makes your approach different?", answer: "We combine:\n* Energy analysis\n* Cleansing and activation\n* Simple practical remedies\n\nOur focus is not just identifying problems, but giving clear solutions you can apply immediately." },
      { question: "How do I get started?", answer: "You can book your consultation:\n\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy" }
    ],
    testimonials: [
      { name: "Abirami", text: "I feel so much more in control of my business decisions after this session. The stagnation is gone.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "The alignment process was gentle but the results were immediate. I feel a sense of clarity in my business I haven't felt in years.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "Truly transformative. The team creates such a safe and supportive space for business energy work.", location: "Bangalore, India", rating: 5 }
    ],
    gallery: [
      "/services/business.png",
      "/services/card_img_11.png",
      "/services/child2.png",
      "/services/gallery-3.png"
    ]
  },
  {
    title: "Home energy cleansing and Protection",
    slug: "home-energy-cleansing",
    description: "",
    price: "₹1599",
    imageSrc: "/services/card_img_5.png",
    mostPopular: false,
    features: [
      "Home energy evaluation",
      "Negative vibration removal"
    ],
    detailFeatures: ["5 DAYS INTENSIVE", "SPIRITUAL CONSULTANT"],
    fullDescription: "Your home is more than just a physical space — it is an energetic sanctuary that influences your health, relationships, and peace of mind. Every conflict, illness, or period of stress leaves behind an invisible 'imprint' that can affect the harmony of your household.\n\nHome Energy Cleansing is a specialized spiritual process designed to identify and remove these stagnant or negative vibrations. By clearing the heavy energy accumulated over time, we help restore a sense of lightness, protection, and positive flow to your living environment. Whether you have recently moved into a new house or feel that your current home has become heavy with stress, this session provides the energetic reset needed for a peaceful and prosperous family life.",
    note: "✨ Power of Home Energy Cleansing\n\nWhen the energy in a home is clear and vibrant, everything feels easier. Family members communicate more effectively, sleep is deeper, and a natural sense of protection surrounds the space. This cleansing process is like 'energetic housekeeping' — removing the invisible dust and debris that logic cannot see but your soul can feel.\n\nEstablishing a sanctuary at home is the foundation for success in every other area of your life.\n\n⸻\n\n🏠 Why Space Cleansing?\n\nOur homes often absorb more than we realize. You may benefit from space cleansing if you notice:\n\n* Frequent arguments or irritability among family members\n* Difficulty sleeping or feeling rested at home\n* A sense of heaviness or 'someone watching' in certain rooms\n* Repeated bad luck or obstacles since moving in\n* Lingering negative energy after a period of illness or loss\n* Feeling drained or anxious the moment you enter the house\n\nA clear space allows positive energy (Prana) to circulate freely, bringing health, wealth, and happiness.",
    secondaryNote: "🕉️ About the Tradition\n\nThe science of space energy has been recognized for thousands of years in traditions like Vastu Shastra and various ancient cleansing rituals. These traditions teach that the physical environment is deeply connected to the human energy field (Aura).\n\nAt Sri Sidhi Vinaayagar Meditation Academy, we utilize time-tested spiritual methods to clear negative imprints and establish a 'shield' of protection. Our approach respects the sanctity of your home while using powerful energetic tools to restore balance.\n\nOur methodology includes:\n\n* Distance or in-person energy scanning of the space\n* Identification of 'geopathic' or emotional stress zones\n* Removal of negative footprints using sound, intention, and energy correction\n* Activation of positive high-vibration energy in every room",
    tertiaryNote: "🧘 How the Space Cleansing Works\n\nOur process is thorough, respectful, and designed to create immediate shifts in the atmosphere of your home.\n\nStep 1 – Space Assessment\nWe begin by understanding the history of the house and the specific concerns you and your family are facing.\n\nStep 2 – Energy Mapping\nThe space is scanned to identify where the energy is stagnant, blocked, or heavily influenced by past events.\n\nStep 3 – The Cleansing Ritual\nUsing specific spiritual techniques, the heavy vibrations are cleared and released from the space.\n\nStep 4 – Shielding & Protection\nWe establish an energetic boundary to protect your home from external negative influences and maintain the new, high-vibration state.",
    quaternaryNote: "🌟 Benefits of Home Energy Cleansing\n\nA cleansed home becomes a powerful support system for your entire family:\n\n🧠 Mental & Emotional Benefits:\n* Significant reduction in household stress and tension\n* Clearer thinking and better decision-making at home\n* Improved emotional stability and patience among residents\n* A feeling of lightness and joy within the living space\n\n🏠 Practical & Life Benefits:\n* Deeper, more restful sleep for both adults and children\n* Fewer conflicts and better communication in relationships\n* A more welcoming atmosphere for guests and family\n* Support for overall health and recovery from illness\n\n🛡️ Energetic Benefits:\n* Removal of negative 'spirits' or stagnant emotional imprints\n* A strong shield of protection for the entire property\n* Better alignment with prosperity and success energy",
    quinaryNote: "☀️ How it Helps in Daily Life\n\nYour home is the foundation where you start and end every day. When the foundation is clear, your life flows differently.\n\n* You wake up feeling more refreshed and positive\n* Your children feel safer and more focused in their studies\n* The home becomes a place of true relaxation rather than another source of stress\n* You feel more motivated and inspired to pursue your goals\n* Over time, the peaceful atmosphere fosters deeper love and understanding\n\nYou don't need to change your furniture to change the feeling of your home. Sometimes, the biggest shift is the one you cannot see.",
    finalNote: "⚠️ Note\n\nThis process is completely safe and does not require any structural changes to your home. We recommend a quiet time for the cleansing so the shifts can be fully integrated.\n\nSimple maintenance practices will be shared with you to keep the energy vibrant.\n\n⸻\n\n🙏 Final Thought\n\nYour home is your sacred sanctuary.\n\nWhen your space is clear, your mind is free, and your heart is at peace. Let us help you create the harmonious home environment that you and your loved ones deserve.\n\n⸻\n\n📞 Connect With Us\n\nSri Sidhi Vinaayagar Meditation Academy\n📱 9585044188",
    receivePoints: [],
    aboutPractice: "At Sri Sidhi VINAAYAGAR Meditation Academy, we treat your home as a living energetic entity. Our goal is to remove the invisible blocks and stagnant vibrations that prevent your household from experiencing true peace, health, and prosperity.",
    quote: `“A peaceful home is the foundation of a peaceful life.\nWhen your space is clear, your mind follows,\nAnd your soul finds rest in a sanctuary of light.”`,
    faqs: [
      {
        question: "1. What exactly is Home Energy Cleansing?",
        answer: "It is a spiritual process of identifying and removing stagnant, negative, or heavy energies from a living space. It is like 'deep cleaning' the atmosphere of your home so it feels light and peaceful again."
      },
      {
        question: "2. How do I know if my home needs cleansing?",
        answer: "Signs include: frequent arguments at home, difficulty sleeping, feeling drained or anxious inside the house, repeated bad luck, or a general sense of heaviness that logic cannot explain."
      },
      {
        question: "3. Does this involve any physical changes or construction?",
        answer: "No. This is purely an energetic and spiritual process. No walls are broken, and no furniture needs to be moved permanently. We work with the 'vibration' of the space."
      },
      {
        question: "4. Can this be done remotely or only in-person?",
        answer: "Energy has no boundaries. We can perform effective space scanning and cleansing both in-person and remotely using advanced spiritual techniques."
      },
      {
        question: "5. How long does the cleansing process take?",
        answer: "A typical session takes about 60 to 90 minutes, depending on the size and energy state of the property."
      },
      {
        question: "6. Will it affect my pets or children?",
        answer: "Yes, positively. Children and pets are very sensitive to energy. Most people find that pets become calmer and children sleep better after a home cleansing."
      },
      {
        question: "7. How often should I get my home cleansed?",
        answer: "We recommend a deep cleansing at least once a year, or whenever you experience a major life change, illness, or a prolonged period of stress at home."
      },
      {
        question: "8. What is 'Protection Shielding'?",
        answer: "After cleansing, we establish an energetic boundary around your home to prevent external negative influences from entering and to help maintain the positive high-vibration state."
      },
      {
        question: "9. Does this help with 'Vastu' problems?",
        answer: "Yes. While it is not a replacement for Vastu architecture, energy cleansing helps mitigate the negative effects of Vastu imbalances by raising the overall vibration of the space."
      },
      {
        question: "10. Is this related to any religion?",
        answer: "No. It is based on universal energy principles. People from all backgrounds and faiths can benefit from having a peaceful, high-vibration home."
      },
      {
        question: "11. What do I need to do during the session?",
        answer: "Ideally, you should be in a relaxed state. If it's a remote session, you can simply stay in your home or follow the specific guidance provided by the consultant."
      },
      {
        question: "12. Will the results be permanent?",
        answer: "The cleansing removes past accumulations. However, because we live and interact in the space, new energies are created. We provide simple daily tools to help you maintain the clarity yourself."
      },
      {
        question: "13. How do I book an appointment?",
        answer: "You can book your slot by contacting us:\n\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy"
      }
    ],
    testimonials: [
      { name: "Abirami", text: "The home energy cleansing completely transformed my living space. It feels lighter and much more peaceful now.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "Immediate results. The conflicts in our house have reduced significantly after the energy alignment.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "A true sanctuary. The BalaMaya team's approach to space clearing is both professional and deeply spiritual.", location: "Bangalore, India", rating: 5 }
    ],
    detailImageSrc: "/services/card_img_5.png",
    gallery: [
      "/services/card_img_5.png",
      "/services/card_img_5.png",
      "/services/gallery-2.png",
      "/services/gallery-3.png"
    ]
  },
  {
    title: "Mantra Healing – Ancient Sound Energy for Modern Life",
    slug: "mantra-healing",
    description: "",
    price: "₹1599",
    detailPrice: "₹5,999",
    imageSrc: "/services/mantra_healing.png",
    detailImageSrc: "/services/manthra_header.png",
    mostPopular: false,
    features: ["Personal aura cleansing", "Advanced energy correction"],
    detailFeatures: ["5 DAYS INTENSIVE", "SPIRITUAL CONSULTANT"],
    fullDescription: "Mantra Healing is a sacred practice that uses vibrational sound energy to bring balance, clarity, and transformation in life. Every mantra carries a unique frequency that can influence the mind, body, and energy field, helping to remove blockages and restore natural harmony.\n\nWhen practiced with focus and faith, mantra healing works beyond logic—it connects deeply with the inner consciousness and universal energy.",
    note: "✨ Power of Wali Songo Mantras\n\nThe teachings of Wali Songo (the Nine Great Saints) are known for blending spiritual wisdom, devotion, and practical life guidance. Their mantras are considered powerful tools that align human energy with divine flow.\n\nThese sacred sounds are believed to carry protective, healing, and transformative vibrations, making them effective in daily life situations.",
    receivePoints: [
      "Mental Peace & Stress Relief: Calms overthinking and brings clarity.",
      "Health & Energy Balance: Helps regulate inner energy and emotional stability.",
      "Financial & Life Growth: Removes energetic blocks that affect opportunities.",
      "Protection & Stability: Creates a shield against negative influences.",
      "Instant Energy Shifts: Certain mantras are traditionally believed to act quickly in urgent situation."
    ],
    specialApplications: "Special Applications (Traditional Beliefs)\n\nIn ancient traditions, specific mantras have been used for:\n\n* Managing sudden environmental situations (like heavy rain in emergencies)\n* Supporting control of bleeding during accidents\n* Stabilizing intense emotional or energetic disturbances\n\nThese uses come from traditional spiritual practices, where sound vibration is applied with deep faith and discipline.",
    howItWorks: "How It Works\n\nMantras work on three levels:\n\n1. Sound (Vibration) – Influences the energy field\n2. Mind (Focus) – Brings awareness and control\n3. Energy (Intention) – Directs healing and transformation\n\nWhen these three align, powerful shifts can happen naturally.",
    aboutPractice: "These sacred sounds are believed to carry protective, healing, and transformative vibrations, making them effective in daily life situations.",
    quote: `“Ancient sounds, a timeless guide,
Awaken the strength that lives inside.
In every chant, your soul aligns,
With peace, with power, with divine.”`,
    faqs: [
      { question: "What is Mantra Healing?", answer: "Mantra Healing is a process of using sacred sound vibrations (mantras) to bring balance to the mind, body, and energy system. These vibrations help create calmness, clarity, and positive energy flow." },
      { question: "How does mantra healing work?", answer: "Mantras carry specific sound frequencies. When chanted or guided properly, they can: \n* Calm the mind\n* Reduce negative thought patterns\n* Strengthen inner energy\n* Create a more positive and stable mental state" },
      { question: "What kind of issues can this help with?", answer: "Mantra healing may support:\n* Stress and anxiety\n* Overthinking and emotional imbalance\n* Lack of focus or clarity\n* Negative thoughts or fear\n* Low confidence or inner disturbance." },
      { question: "Is this related to religion?", answer: "Mantras have traditional roots, but this practice is used here in a simple and universal way. Anyone from any background can benefit." },
      { question: "Do I need to know Sanskrit or any language?", answer: "No. You will be guided clearly on: \n* How to chant\n* How to pronounce\n* How to practice\nNo prior knowledge is required." },
      { question: "Will I be asked to chant loudly?", answer: "Not necessarily. You may practice:\n* Silent chanting (mental)\n* Soft chanting\n* Guided listening\nBased on your comfort." },
      { question: "How long should I practice daily?", answer: "Usually 5 to 15 minutes daily is enough. Consistency is more important than duration." },
      { question: "Will I feel results immediately?", answer: "Many people feel:\n* Calmness and relaxation quickly\n* Reduced stress\nDeeper benefits like clarity and stability develop with regular practice." },
      { question: "Are there any side effects?", answer: "No. It is completely safe. Mantra healing works in a positive and gentle way." },
      { question: "Will I be dependent on this practice?", answer: "No. The goal is to empower you to manage your mind and energy independently." },
      { question: "Can this be combined with other treatments?", answer: "Yes. It can be used along with:\n* Medical treatment\n* Therapy\n* Meditation practices\nIt acts as a supportive method, not a replacement." },
      { question: "Will I get a specific mantra for my problem?", answer: "Yes. Based on your situation, specific mantras or practices may be suggested." },
      { question: "Can children or elderly people practice this?", answer: "Yes. It is suitable for all age groups, with simple adjustments if needed." },
      { question: "How is your guidance different?", answer: "We focus on:\n* Simple and practical methods\n* Correct understanding and usage\n* Consistency and real-life application" },
      { question: "How do I start mantra healing?", answer: "You can contact us to begin:\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy" },
      { question: "Is there any preparation needed?", answer: "No special preparation required. Just:\n* Be relaxed\n* Be open to practice" }
    ],
    gallery: [
      "/services/manthra_header.png.png",
      "/services/card_img_7.png",
      "/services/gallery-2.png",
      "/services/gallery-3.png"
    ],
    testimonials: [
      { name: "Abirami", text: "Chanting the Wali Songo mantras has brought a deep sense of connection and peace to my heart.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "The power of sound is real. I use the mantras suggested daily to stay grounded and focused.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "The team at Sri Sidhi VINAAYAGAR Meditation Academy taught me how to use mantras properly. It's a tool I will use forever.", location: "Bangalore, India", rating: 5 }
    ]
  },
  {
    title: "Mantra Water Healing – Energizing Water with Sacred Sound",
    slug: "mantra-water-healing",
    description: "",
    price: "₹3200",
    imageSrc: "/services/card_img_7.png",
    detailImageSrc: "/services/mantra_water.png",
    gallery: [
      "/services/mantra_water.png",
      "/services/mantra_water_thumb_1.png",
      "/services/gallery-2.png",
      "/services/gallery-3.png"
    ],
    mostPopular: false,
    features: ["Personal aura cleansing", "Advanced energy correction"],
    detailFeatures: ["5 DAYS INTENSIVE", "SPIRITUAL CONSULTANT"],
    fullDescription: "Water has a unique ability to absorb, store, and transmit energy. In mantra healing, sacred sounds are infused into water, transforming it into a powerful medium for healing and transformation.\n\nWhen mantras are chanted with focus and intention over water, the vibrational energy gets imprinted into it. This energized water can then be used to support various aspects of life.",
    note: "✨ How Mantra Water Works\n\n🔊 Sound Imprint – Mantra vibrations enter the water structure\n🧠 Intention Encoding – Focused thoughts guide the energy\n⚡ Energy Transfer – When consumed or used, it influences the body and surroundings\n\nThis practice is rooted in ancient traditions where water is treated as a carrier of consciousness and healing energy.",
    traditionalNote: "⚠️ Note\n\nThese practices come from traditional spiritual systems and are based on experiential knowledge passed through generations. They are meant to support well-being and should be practiced with proper guidance and understanding.",
    receivePoints: [
      "👶 Children’s Memory & Focus: Helps improve concentration and mental clarity.",
      "❤️ Health & Emotional Balance: Supports overall well-being and inner stability.",
      "🧘 Energy Cleansing: Clears negative vibrations from body and aura.",
      "💰 Financial & Business Growth: Helps remove energetic blocks affecting progress.",
      "🔄 Blockage Removal: Assists in clearing stagnant energy patterns in life.",
      "🌟 Daily Protection & Positivity: Maintains a balanced and positive environment."
    ],
    aboutPractice: "When mantras are chanted with focus and intention over water, the vibrational energy gets imprinted into it. This energized water can then be used to support various aspects of life.",
    quote: `“Whispered sound into water flows,
Awakening energy the spirit knows.
In every drop, a healing art,
Restoring balance to mind and heart.”`,
    faqs: [
      { 
        question: "1. What is Mantra Water Healing Therapy?", 
        answer: "Mantra Water Healing is a practice where specific sound vibrations (mantras) are used with water, and the water is then used as a supportive method for well-being.\nIt combines focus, intention, and simple daily practice." 
      },
      { 
        question: "2. How does this work?", 
        answer: "In simple terms:\n\n* You are guided to focus your mind and intention\n* A mantra is used as a repeating anchor\n* Water becomes part of a daily routine that reinforces calm and consistency\n\nThe benefit comes from regular practice and mindful use, which can support mental and emotional balance." 
      },
      { 
        question: "3. What kind of issues can this support?", 
        answer: "This therapy is used as a supportive practice for:\n\n* Stress and mental restlessness\n* Low focus or lack of clarity\n* Daily fatigue or emotional imbalance\n* General well-being and positivity" 
      },
      { 
        question: "4. Is this a medical treatment?", 
        answer: "No.\nThis is not a medical treatment or cure.\nIt is a complementary practice that supports your overall well-being. For health conditions, always follow your doctor’s advice." 
      },
      { 
        question: "5. Is it safe to follow?", 
        answer: "Yes, it is safe when practiced as guided.\nIt is based on simple, non-invasive daily methods." 
      },
      { 
        question: "6. Do I need any special materials?", 
        answer: "No special items required.\nYou only need:\n\n* Clean drinking water\n* A calm mindset\n* Guidance provided during the session" 
      },
      { 
        question: "7. How long should I practice daily?", 
        answer: "Usually 5–10 minutes is enough.\nConsistency is more important than duration." 
      },
      { 
        question: "8. Will I see results immediately?", 
        answer: "Some people feel:\n\n* Calmness and mental clarity quickly\n\nOther benefits may develop gradually with regular practice." 
      },
      { 
        question: "9. Do I need to chant loudly?", 
        answer: "No.\nYou can:\n\n* Chant softly\n* Chant mentally\n* Follow guided instructions" 
      },
      { 
        question: "10. Is this related to any religion?", 
        answer: "No.\nThis is taught as a simple and universal practice, suitable for all backgrounds." 
      },
      { 
        question: "11. Can children or elderly people follow this?", 
        answer: "Yes.\nIt can be adapted easily for all age groups." 
      },
      { 
        question: "12. Can I combine this with other practices?", 
        answer: "Yes.\nIt can be used along with:\n\n* Meditation\n* Mantra chanting\n* Medical treatments" 
      },
      { 
        question: "13. Will I become dependent on this?", 
        answer: "No.\nThe goal is to build a simple, empowering daily habit, not dependency." 
      },
      { 
        question: "14. Will I get a specific method for my situation?", 
        answer: "Yes.\nBased on your need, you may receive personalized guidance or simple variations." 
      },
      { 
        question: "15. How do I get started?", 
        answer: "You can contact us to learn and practice:\n\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy" 
      },
      { 
        question: "16. Is there any preparation needed?", 
        answer: "No special preparation required.\nJust:\n\n* Be open\n* Follow the guidance regularly." 
      }
    ],
    testimonials: [
      { name: "Abirami", text: "The energized water practice has brought a sense of purity and calm to my daily routine. I feel more hydrated and spiritually aligned.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "A simple yet profound therapy. Drinking the mantra-infused water daily has helped me stay focused and balanced throughout the day.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "The BalaMaya team's knowledge of water energy is impressive. My children have also benefited from the increased focus it brings.", location: "Bangalore, India", rating: 5 }
    ]
  },
  {
    title: "Negative Energy Cleansing – Restore Balance, Remove Blockages",
    slug: "negative-energy-cleansing",
    description: "",
    price: "₹1599",
    imageSrc: "/services/card_img_8.png",
    mostPopular: false,
    features: ["Personal aura cleansing", "Advanced energy correction"],
    detailFeatures: ["COURSE DURATION 1 DAY", "BEGINNERS"],
    gallery: [
      "/services/neg_energy_cleansing.png",
      "/services/neg_energy_meditation.png",
      "/services/gallery-2.png",
      "/services/gallery-3.png"
    ],
    fullDescription: "Negative Energy Cleansing is a transformative spiritual practice designed to help individuals who feel overwhelmed by intense negative energies, emotional disturbances, or unexplained inner heaviness. Many people feel 'stuck', energetically drained, or experience sudden, unexplained life delays—this therapy is designed to identify and dissolve those obstacles.\n\nBy focusing on energetic stabilization and protection, this program helps you return to a natural state of clarity, peace, and personal flow.",
    note: "✨ How Negative Energy Cleansing Works\n\nNegative energy is not something you can always see, but you can feel its effects:\n\n1. Constant stress, fear, or confusion\n2. Repeated obstacles in life or finances\n3. Lack of motivation or mental clarity\n4. Sudden emotional imbalance or heaviness\n5. Disturbed sleep or unexplained fatigue\n6. Negative atmosphere in home or workplace\n\nThese can arise due to past experiences, surroundings, people’s influence, or internal thought patterns.",
    secondaryNote: "🔮 How Cleansing Works\n\nNegative Energy Cleansing works by shifting your vibrational state:\n\n🔊 Mantra Vibrations break and dissolve heavy energy patterns\n💧 Energized Water (Mantra Water) purifies internal and external energy\n🧘‍♂️ Focused Intention directs healing energy where it is needed\n🌿 Spiritual Techniques restore balance and flow\n\nThese methods help to remove energetic blocks and allow positivity to flow naturally.",
    tertiaryNote: "🌊 Types of Cleansing We Use\n\n✨ Personal Energy Cleansing\nClears emotional stress, fear, anxiety, and internal blockages\n\n🏠 Space Cleansing\nRemoves negative vibrations from home, office, or business places\n\n💧 Water-Based Cleansing\nUsing mantra-infused water for drinking or sprinkling to purify energy\n\n🔁 Blockage Removal\nHelps clear repeated life problems like financial struggles or delays.",
    quaternaryNote: "🌟 Benefits of Negative Energy Cleansing\n\nNegative energy cleansing brings noticeable shifts in your mental, emotional, and physical state.",
    receivePoints: [
      "🧠 Mental Clarity: Improves mental clarity and focus.",
      "❤️ Emotional Balance: Brings emotional stability and peace.",
      "💪 Physical Vitality: Enhances physical energy and well-being.",
      "💰 Growth Support: Supports financial and career growth.",
      "🏡 Positive Environment: Creates a positive and peaceful home or workspace.",
      "🔐 Energetic Protection: Provides protection from future negative influences."
    ],
    quinaryNote: "🔥 Signs You Need Cleansing\n\nFeeling stuck even after efforts\nRepeated failures or delays\nSudden negativity without reason\nHeavy feeling in certain places\nLack of peace in mind or surroundings",
    finalNote: "🙏 Our Approach\n\nAt Sri Sidhi VINAAYAGAR Meditation Academy, we use powerful mantra-based techniques, including sacred vibrations inspired by traditional systems such as the teachings of Wali Songo.\n\nOur approach is simple, natural, and focused on real-life results, helping you experience noticeable shifts in your energy and life situations.\n\n⸻\n\n⚠️ Note\n\nNegative Energy Cleansing is a spiritual support practice. It works best when combined with a positive mindset, right actions, and consistency. It is not a replacement for medical or professional advice but can strongly support overall well-being.\n\n⸻\n\n🌈 Final Thought\n\nWhen negative energy is cleared, life starts to flow naturally. Opportunities open, the mind becomes calm, and you begin to experience clarity, peace, and growth.\n\n⸻\n\n📞 Connect With Us\n\nSri Sidhi VINAAYAGAR Meditation Academy\n📱 9585044188",
    aboutPractice: "When negative energies are cleared, the light within you shines brighter than ever. This therapy helps you reconnect with your inner strength, clarity, and natural success flow.",
    quote: `“Clear the shadows, let light flow in,\nRelease the weight that lies within.\nIn balance and peace, your energy aligns,\nAnd a brighter, calmer life begins.”`,
    faqs: [
      { question: "1. What is Negative Energy Cleansing?", answer: "It is a spiritual process designed to identify and remove stagnant, heavy, or harmful vibrations that can affect your mental and emotional well-being." },
      { question: "2. How do I know if I need a cleansing?", answer: "Common signs include feeling unusually heavy, persistent bad luck, emotional instability, or a sense of being 'stuck' despite your best efforts." },
      { question: "3. Is the process safe?", answer: "Yes, it is a completely natural and non-invasive spiritual practice that uses sound vibrations and energy alignment to restore your inner balance." },
      { question: "4. What causes negative energy build-up?", answer: "It can come from stressful environments, past emotional wounds, negative people, or even stagnant energy in your home or workplace." },
      { question: "5. What happens during a session?", answer: "We use mantra-based vibrations, energized water healing, and guided energy stabilization to clear blockages and strengthen your aura." },
      { question: "6. Do I need to prepare anything?", answer: "No special preparation is needed. Just be in a relaxed state and come with an open mind to receive the healing." },
      { question: "7. How long does a session last?", answer: "A typical session lasts between 45 to 60 minutes, depending on the depth of the energetic imbalance." },
      { question: "8. Will I feel the results immediately?", answer: "Many people report an immediate sense of 'lightness' or relief. Deeper shifts in clarity and life progress often unfold over the following days." },
      { question: "9. Can this help with my career or finances?", answer: "Yes, by removing energetic blocks that hinder your progress, cleansing can help align you with better opportunities and success." },
      { question: "10. Is this related to any specific religion?", answer: "No. This is a universal energy-based practice that focuses on spiritual hygiene and is suitable for everyone regardless of their background." },
      { question: "11. How often should I get a cleansing?", answer: "For most people, a deep cleansing every few months is beneficial to maintain spiritual clarity and protection." },
      { question: "12. Can this be done online?", answer: "Yes, energy healing and mantra-based cleansing are equally effective when guided through a live video session." },
      { question: "13. Will it affect my family or home?", answer: "Yes, in a positive way. Your improved energy often creates a more peaceful and harmonious atmosphere for those around you." },
      { question: "14. What is the difference between this and meditation?", answer: "Meditation is a tool for self-practice, while cleansing is a focused therapeutic process to remove deep-seated energetic obstacles." },
      { question: "15. Are there any side effects?", answer: "There are no negative side effects. You may simply feel more relaxed, focused, and spiritually grounded." },
      { question: "16. How do I get started?", answer: "You can book a session through our website or contact us directly via WhatsApp to begin your journey to energetic freedom." }
    ],
    testimonials: [
      { name: "Abirami", text: "The heaviness I felt for months is finally gone. I feel like I've been reset and am ready to move forward with clarity.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "I was skeptical, but the shifts in my life after the cleansing were undeniable. My business blocks are finally clearing up.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "A safe and sacred process. The team guided me through every step, and I feel protected and at peace.", location: "Bangalore, India", rating: 5 }
    ]
  },
  {
    title: "Deep Energy Cleansing Therapy",
    slug: "deep-energy-cleansing",
    description: "",
    price: "₹1599",
    imageSrc: "/services/card_img_9.png",
    mostPopular: false,
    features: ["Personal aura cleansing", "Advanced energy correction"],
    detailFeatures: ["COURSE DURATION 1 DAY", "BEGINNERS"],
    detailImageSrc: "/services/deep_energy.png.png",
    gallery: [
      "/services/deep_energy.png.png",
      "/services/card_img_9.png",
      "/services/gallery-2.png",
      "/services/gallery-3.png"
    ],
    fullDescription: "(Spiritual Release & Protection Healing)\n\nDeep Energy Cleansing Therapy is an advanced spiritual practice designed to help individuals who feel overwhelmed by intense negative energies, emotional disturbances, or unexplained inner heaviness.\n\nSometimes, people experience states where they feel not like themselves, mentally disturbed, emotionally unstable, or energetically drained. In spiritual traditions, this is understood as an imbalance or disturbance in the personal energy field.\n\nThis therapy focuses on clearing, stabilizing, and protecting your energy system, helping you return to a state of balance and clarity.",
    note: "🔮 Our Healing Approach\n\nAt Sri Sidhi VINAAYAGAR Meditation Academy, we use a combination of powerful traditional methods to restore balance to your mind and energy field.\n\n🔊 Mantra-Based Energy Cleansing\nSacred sound vibrations are used to break and dissolve dense negative patterns\n\n💧 Mantra-Infused Water Healing\nEnergized water is used to purify internal and external energy fields\n\n🧘‍♂️ Guided Energy Alignment\nFocused intention and spiritual techniques to stabilize the mind and body\n\n🛡 Protective Energy Shielding\nPractices that help strengthen your aura and prevent future disturbances.",
    secondaryNote: "⚡ When Do You Need This Therapy?\n\nThis session may help if you experience:\n\n1. Sudden and extreme mood changes\n2. Feeling mentally disturbed or not in control\n3. Persistent fear, anxiety, or inner heaviness\n4. Negative or disturbing thoughts repeatedly\n5. Feeling drained without reason\n6. Strong discomfort in certain places or environments\n7. Lack of peace even without clear external problems.",
    tertiaryNote: "🌿 About the Tradition\n\nOur methods are inspired by ancient spiritual systems, including teachings associated with Wali Songo, known for their deep knowledge of energy balance, protection, and healing through sound and intention.",
    quaternaryNote: "🌟 Benefits of the Therapy\n\nThis deep therapy restores balance to your mind, energy, and inner self.",
    receivePoints: [
      "🧠 Mental Stability: Restores mental clarity and emotional stability.",
      "🛡️ Reduced Fear: Reduces fear, anxiety, and inner disturbance.",
      "🌊 Heavy Energy Clearing: Clears heavy or negative energy influence.",
      "💪 Restored Vitality: Improves overall energy and vitality.",
      "🧘 Grounding Peace: Creates a sense of peace and grounding.",
      "🔐 Aura Protection: Strengthens personal energy protection."
    ],
    finalNote: "⚠️ Important Note\n\nThis therapy is a spiritual support practice, not a medical or psychiatric treatment.\n\nIf someone is experiencing severe mental or physical health conditions, it is important to also seek professional medical guidance. This therapy can be used as a complementary support system.\n\n⸻\n\n🙏 Final Thought\n\nTrue healing happens when your mind, energy, and inner self come back into balance. This therapy is designed to gently guide you out of disturbance and into clarity, strength, and peace.\n\n⸻\n\n📞 Connect With Us\n\nSri Sidhi VINAAYAGAR Meditation Academy\n📱 9585044188",
    aboutPractice: "This therapy goes beyond the surface to address the core energetic issues that affect your daily life and spiritual growth.",
    quote: "“Cleanse the energy, calm the soul,\nLet healing light restore you whole.\nRelease the weight you cannot see,\nAnd return to peace, naturally.”",
    faqs: [
      { question: "What is Deep Energy Cleansing Therapy?", answer: "Deep Energy Cleansing Therapy is an advanced spiritual practice that clears heavy, negative, and stagnant energy from your personal energy field (aura), restoring balance and inner peace." },
      { question: "How does this therapy work?", answer: "We use a combination of traditional spiritual methods, including sacred sound vibrations (mantras), energized water healing, and guided energy alignment to dissolve dense energy patterns and protect your aura." },
      { question: "Who needs Deep Energy Cleansing?", answer: "This therapy is highly beneficial if you experience sudden extreme mood changes, persistent fear or anxiety, negative thought loops, unexplainable fatigue, or if you feel mentally disturbed and not in control." },
      { question: "Are there any side effects?", answer: "No. The process is completely natural and spiritually guided. You may simply feel lighter, more relaxed, and deeply grounded after the session." },
      { question: "How many sessions are required?", answer: "This program is typically structured as a 5-day intensive. Depending on the severity of the energetic imbalance, a spiritual consultant will advise if further sessions are needed." },
      { question: "Is this a substitute for medical treatment?", answer: "No. This therapy is a complementary spiritual support system. If you are experiencing severe physical or psychiatric conditions, please continue to seek professional medical guidance alongside this therapy." },
      { question: "Is this practice tied to a specific religion?", answer: "While our methods are inspired by ancient spiritual traditions and sound healing, the practice focuses purely on universal energy dynamics and is open to people from all backgrounds." },
      { question: "How will I feel after the cleansing?", answer: "Most people report feeling an immediate sense of relief—like a heavy weight has been lifted. You can expect improved mental clarity, emotional stability, and a restored sense of vitality and focus." }
    ],
    testimonials: [
      { name: "Abirami", text: "This was a deep reset for my entire being. I feel more like myself than I have in years.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "The 5-day intensive was exactly what I needed to break through long-standing emotional blocks. Truly transformative.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "I felt a heavy weight lift during the first session. The protection shielding is a game-changer for my daily peace of mind.", location: "Bangalore, India", rating: 5 }
    ]
  },
  {
    title: "Negative Influence Removal Therapy",
    detailTitle: "Negative Influence Removal Therapy - 1:1 SESSION",
    slug: "negative-influence-removal",
    description: "",
    price: "₹1599",
    imageSrc: "/services/card_img_10.png",
    mostPopular: false,
    features: ["Personal aura cleansing", "Advanced energy correction"],
    detailFeatures: ["COURSE DURATION 1 DAY", "BEGINNERS"],
    gallery: [
      "/services/neg_energy_cleansing.png",
      "/services/card_img_10.png",
      "/services/gallery-2.png",
      "/services/gallery-3.png"
    ],
    fullDescription: "(Commonly Known as Black Magic Cleansing)\n\nNegative Influence Removal Therapy is a deep spiritual cleansing process designed to help individuals who feel affected by intense negativity, unexplained obstacles, or energetic disturbances in life.\n\nIn many traditional belief systems, these experiences are often described as external negative influences or energy imbalances. This therapy focuses on identifying, clearing, and protecting against such disturbances, helping restore natural balance and flow.",
    note: "⚡ Signs of Negative Influence\n\nYou may benefit from this therapy if you experience:\n\n1. Repeated failures despite sincere efforts\n2. Sudden financial or business blocks\n3. Unexplained fear, anxiety, or emotional heaviness\n4. Disturbed sleep or negative dreams\n5. Feeling energetically drained or stuck\n6. Constant negativity in home or workplace\n7. Lack of progress without clear reason.",
    secondaryNote: "🔮 Our Healing Approach\n\nAt Sri Sidhi VINAAYAGAR Meditation Academy, we use a combination of powerful traditional methods:\n\n🔊 Mantra-Based Cleansing: Sacred sound vibrations are used to break down dense and negative energy patterns\n\n💧 Mantra Water Healing: Energized water is used for internal purification and space cleansing\n\n🧘‍♂️ Energy Alignment & Stabilization: Helps restore mental clarity and emotional balance\n\n🛡 Protection Strengthening: Builds a strong energetic shield to prevent future disturbances",
    tertiaryNote: "🌿 About the Tradition\n\nOur methods are inspired by ancient spiritual systems, including teachings associated with Wali Songo, known for their deep knowledge of energy balance, protection, and healing through sound and intention.",
    quaternaryNote: "🌟 Benefits of the Therapy\n\n1. Restores mental clarity and emotional stability\n2. Reduces fear, anxiety, and inner disturbance\n3. Clears heavy or negative energy influence\n4. Improves overall energy and vitality\n5. Creates a sense of peace and grounding\n6. Strengthens personal energy protection.",
    finalNote: "⚠️ Important Note\n\nThis therapy is a spiritual and energy-based practice. It is not a replacement for medical, psychological, or legal support.\n\nFor serious health or mental conditions, professional guidance should always be taken. This therapy works best as a complementary support system.\n\n⸻\n\n🙏 Final Thought\n\nWhen negative influences are cleared, life begins to move forward with ease. This therapy helps you reconnect with your inner strength, clarity, and natural success flow.\n\n⸻\n\n📞 Connect With Us\n\nSri Sidhi VINAAYAGAR Meditation Academy\n📱 9585044188",
    aboutPractice: "This therapy focuses on identifying, clearing, and protecting against any disturbances, helping restore natural balance and flow.",
    quote: `“Release the weight that dims your light,\nRestore your peace, reclaim your might.\nThrough calm and balance, darkness fades,\nAnd inner strength begins to rise again.”`,
    faqs: [
      {
        question: "1. What is Negative Influence Removal Therapy?",
        answer: "It is a process of identifying and clearing unwanted or heavy energy influences affecting a person, home, or workplace.\nThe aim is to restore peace, clarity, and positive energy flow."
      },
      {
        question: "2. What do you mean by “negative influence”?",
        answer: "Negative influence can include:\n\n* Heavy or disturbing energy in a space\n* Continuous negative thoughts or emotional imbalance\n* Repeated obstacles without clear reason\n* Unpleasant or uncomfortable feeling in home/office\n\nIt is not always something extreme — often it is energy imbalance or stagnation."
      },
      {
        question: "3. What are the common signs that I may need this?",
        answer: "You may consider this if you experience:\n\n* Sudden stress, fear, or anxiety without reason\n* Disturbed sleep or unusual dreams\n* Constant arguments or tension at home\n* Feeling drained or low energy in a place\n* Business or personal life getting blocked repeatedly"
      },
      {
        question: "4. What happens during this therapy?",
        answer: "The process includes:\n\n* Energy assessment (person or space)\n* Cleansing of heavy or stagnant energy\n* Strengthening positive and protective energy\n* Guidance on maintaining balance"
      },
      {
        question: "5. Is this safe?",
        answer: "Yes, it is completely safe.\nWe use only positive and protective methods focused on improving your energy and environment."
      },
      {
        question: "6. Do I need to be physically present?",
        answer: "Not always.\n\n* Personal sessions can be done in person or online\n* Space cleansing (home/office) may be done in person or guided remotely"
      },
      {
        question: "7. How long does the process take?",
        answer: "It depends on the situation, but typically:\n\n* Initial session: 45 minutes to 1 hour\n* Space cleansing may take slightly longer if needed"
      },
      {
        question: "8. Will I feel any changes immediately?",
        answer: "Many people report:\n\n* Lightness and calmness\n* Reduced stress or fear\n* Better sleep\n\nDeeper changes may happen gradually."
      },
      {
        question: "9. Do you provide remedies after the session?",
        answer: "Yes. You may be given simple remedies such as:\n\n* Mantras\n* Water therapy\n* Daily energy practices\n\nThese help maintain long-term positivity."
      },
      {
        question: "10. Is this related to any religion?",
        answer: "No. This is a universal energy-based practice, suitable for all backgrounds."
      },
      {
        question: "11. Can this completely solve my problems?",
        answer: "This therapy helps remove energetic obstacles and improve clarity,\nbut your actions, lifestyle, and decisions also play an important role."
      },
      {
        question: "12. How many sessions are required?",
        answer: "Many cases improve with one session.\nFor deeper or long-term issues, follow-up sessions may be recommended."
      },
      {
        question: "13. Who should take this service?",
        answer: "* Individuals feeling mentally or emotionally disturbed\n* Families facing repeated conflicts\n* People sensing heavy or negative energy at home\n* Business owners facing unexplained blocks"
      },
      {
        question: "14. Will this affect children or family members?",
        answer: "No negative effects.\nIn fact, it helps create a more peaceful and positive environment for everyone."
      },
      {
        question: "15. How do I book a session?",
        answer: "You can contact us:\n\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy"
      },
      {
        question: "16. Is there any preparation needed before the session?",
        answer: "No special preparation required.\nJust be open and ready to receive the process."
      }
    ],
    testimonials: [
      { name: "Abirami", text: "I feel so much more in control of my life and decisions after this session. The heaviness is gone.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "The clearing process was gentle but the results were immediate. I feel a sense of peace I haven't felt in years.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "Truly transformative. The team creates such a safe and supportive space for deep energy work.", location: "Bangalore, India", rating: 5 }
    ]
  },
  {
    title: "Children Memory Improvement Program",
    detailTitle: "Children Memory Improvement Program - 1:1 SESSION",
    slug: "children-memory-improvement",
    description: "",
    price: "₹1599",
    detailPrice: "Depends",
    imageSrc: "/services/card_img_11.png",
    detailImageSrc: "/services/child.png",
    mostPopular: false,
    features: ["Personal aura cleansing", "Advanced energy correction"],
    detailFeatures: ["5 DAYS INTENSIVE", "SPIRITUAL CONSULTANT"],
    fullDescription: "Enhancing Focus, Learning & Mental Clarity\n\nEvery child has natural intelligence and potential. Sometimes, due to distractions, stress, or lack of focus, children may find it difficult to remember, concentrate, or perform confidently in studies.\n\nOur Children Memory Improvement Program is designed to gently enhance brain function, concentration, and learning ability using a combination of mantra-based techniques, energy balancing, and guided practices.",
    note: "🌿 Why Memory & Focus Issues Happen\n\nChildren today face multiple challenges:\n\n1. Digital distractions (mobile, TV, games)\n2. Exam stress or fear of failure\n3. Lack of proper rest or mental relaxation\n4. Low concentration and scattered thinking\n5. Energy imbalance or emotional sensitivity\n\nThese factors can affect memory retention, understanding and confidence.",
    secondaryNote: "🌟 Benefits of the Therapy",
    receivePoints: [
      "🧠 Memory Boost: Improved memory and recall ability.",
      "🎯 Better Focus: Better concentration and focus on tasks.",
      "📚 Study Interest: Increased interest and engagement in studies.",
      "🛡️ Stress Relief: Reduced stress and exam fear.",
      "💪 Higher Confidence: Higher confidence and clarity in expression.",
      "✨ Emotional Balance: Positive thinking and overall emotional balance."
    ],
    tertiaryNote: "👶 Who Can Benefit?\n\n1. School students struggling with memory\n2. Children with low concentration\n3. Kids facing exam stress or fear\n4. Students who forget what they study\n5. Children needing overall mental clarity",
    quaternaryNote: "🏡 Simple Daily Practices\n\n1. Short daily mantra practice\n2. Drinking energized water\n3. Simple breathing and relaxation exercises\n4. Maintaining a positive study environment\n5. Consistent practice for best results",
    finalNote: "⚠️ Important Note\n\nThis program is a supportive developmental practice. It is not a medical treatment.\n\nIf a child has specific learning difficulties or health concerns, professional medical or educational guidance should also be considered.\n\n⸻\n\n🙏 Final Thought\n\nWhen a child’s mind becomes calm and focused, learning becomes effortless. Our goal is to help children unlock their natural intelligence and grow with confidence and clarity.\n\n⸻\n\n📞 Connect With Us\n\nSri Sidhi VINAAYAGAR Meditation Academy\n📱 9585044188",
    aboutPractice: "At Sri Sidhi VINAAYAGAR Meditation Academy, we use a combination of powerful traditional methods Mantra based focused enhancement, Relationship indicators, Future growth cycles, Practical corrective remedies",
    quote: "“Every child’s mind is full of light,\nWaiting to focus, grow, and shine bright.\nWith calm guidance and gentle care,\nConfidence and clarity will always be there.”",
    faqs: [
      {
        question: "1. What is Child Memory Improvement Therapy?",
        answer: "It is a guided process that helps improve a child’s memory, focus, and learning ability using simple techniques like:\n\n* Breathing exercises\n* Concentration practices\n* Positive affirmations\n* Energy-based support methods\n\nThe goal is to help the child learn better and feel more confident."
      },
      {
        question: "2. Which children can benefit from this?",
        answer: "This is helpful for children who:\n\n* Have difficulty remembering lessons\n* Lose focus while studying\n* Get distracted easily\n* Feel low confidence in studies\n* Take more time to understand concepts"
      },
      {
        question: "3. What age group is suitable?",
        answer: "Generally suitable for children above 6 years.\nThe methods are adjusted based on the child’s age and ability."
      },
      {
        question: "4. What will be done in the session?",
        answer: "The session may include:\n\n* Understanding the child’s current learning pattern\n* Simple breathing and focus techniques\n* Mind-calming exercises\n* Positive guidance for confidence building\n* Easy practices for daily use"
      },
      {
        question: "5. Is this safe for children?",
        answer: "Yes, completely safe.\nAll methods are gentle, natural, and child-friendly."
      },
      {
        question: "6. Will this replace school learning?",
        answer: "No. This is a supportive therapy, not a replacement.\nIt helps the child learn better, concentrate more, and perform confidently in school."
      },
      {
        question: "7. How soon can we see results?",
        answer: "Some children show improvement in:\n\n* Focus and calmness quickly\n* Memory and performance gradually\n\nConsistency in practice is important."
      },
      {
        question: "8. Do parents need to be involved?",
        answer: "Yes, parental support is helpful.\nParents may be guided on how to:\n\n* Encourage the child\n* Create a positive study environment\n* Help with simple daily practices"
      },
      {
        question: "9. Will homework or practice be given?",
        answer: "Yes, simple daily practices may be given such as:\n\n* Short breathing exercises\n* Focus techniques\n* Positive affirmations\n\nThese take only a few minutes daily."
      },
      {
        question: "10. Can this help with exam fear or stress?",
        answer: "Yes. It helps reduce:\n\n* Exam anxiety\n* Fear of studies\n* Overthinking\n\nIt builds calmness and confidence."
      },
      {
        question: "11. Is this suitable for hyperactive children?",
        answer: "Yes. The techniques help in:\n\n* Improving attention span\n* Calming the mind\n* Reducing restlessness"
      },
      {
        question: "12. How many sessions are required?",
        answer: "Some children benefit from a few sessions,\nwhile others may need regular guidance for better results."
      },
      {
        question: "13. Can this be done online?",
        answer: "Yes. Sessions can be conducted:\n\n* In person\n* Online (video call)"
      },
      {
        question: "14. What makes this approach different?",
        answer: "We focus on:\n\n* Mind + energy + behavior improvement\n* Simple and practical techniques\n* Confidence building along with memory"
      },
      {
        question: "15. How do I enroll my child?",
        answer: "You can contact us to book a session:\n\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy"
      },
      {
        question: "16. Is there any preparation needed before the session?",
        answer: "No special preparation needed.\nJust ensure the child is:\n\n* Comfortable\n* Relaxed\n* Ready to participate"
      }
    ],
    testimonials: [
      { name: "Abirami", text: "My child feels so much more in control of their focus and studies after this session. The mental block is gone.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "The improvement process was gentle but the results were immediate. My son feels a sense of concentration he hasn't felt in years.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "Truly transformative. The team creates such a safe and supportive space for children's energy work.", location: "Bangalore, India", rating: 5 }
    ],
    gallery: [
      "/services/child.png",
      "/services/card_img_11.png",
      "/services/child2.png",
      "/services/gallery-3.png"
    ]
  },
  {
    title: "Meditation Course for Pregnant Women",
    slug: "meditation-for-pregnant-women",
    description: "",
    price: "₹2999",
    detailPrice: "₹2500",
    imageSrc: "/services/card_img_12.png",
    mostPopular: false,
    features: ["Personal aura cleansing", "Advanced energy correction"],
    detailFeatures: ["COURSE DURATION 3 DAY", "BEGINNERS"],
    fullDescription: "3 Days Special Program for Mother & Baby Well‑being\n\nPregnancy is a beautiful and sensitive phase where the mother’s thoughts, emotions, and energy directly influence the baby. This 3‑day meditation program is designed to support expecting mothers with calmness, emotional balance, and positive energy.\n\nAt Sri Sidhi VINAAYAGAR Meditation Academy, we guide mothers through simple and safe practices that help create a peaceful inner environment for both mother and child.",
    note: "📅 Course Duration: 3 Days Program\n\nEach session is designed to be simple, relaxing, and easy to follow for both mother and baby.\n\n🌸 Day 1 – Mind Relaxation & Emotional Balance\n\n1. Gentle meditation to calm the mind\n2. Techniques to reduce stress and fear\n3. Creating positive thought patterns\n\n🌸 Day 2 – Mother & Baby Connection\n\n1. Guided meditation to connect with the baby\n2. Sending positive vibrations and love\n3. Emotional bonding practices\n\n🌸 Day 3 – Energy Strengthening & Protection\n\n1. Simple mantra-based relaxation\n2. Creating a positive and protective energy field\n3. Daily routine practices for continued well-being",
    secondaryNote: "🌿 Why Meditation During Pregnancy?\n\n1. Reduces stress and anxiety\n2. Promotes emotional stability\n3. Supports healthy bonding with the baby\n4. Creates a positive mental environment\n5. Helps in relaxation and better sleep\n\nA calm mother nurtures a calm and healthy baby.",
    receivePoints: [
      "🧘 Inner Peace: Deep relaxation and inner peace for the mother.",
      "👶 Baby Bonding: Strong emotional connection with the baby.",
      "🧠 Stress Relief: Positive thinking and reduced anxiety.",
      "😴 Restful Sleep: Improved sleep and mental calmness.",
      "✨ Energy Balance: Balanced energy and overall well-being."
    ],
    tertiaryNote: "👩‍🍼 Who Can Join?\n\n1. Pregnant women in any stage (with basic comfort)\n2. Mothers looking for stress relief and peace\n3. Anyone who wants to create a positive environment for the baby",
    finalNote: "⚠️ Important Note\n\nAll practices are gentle and safe.\nHowever, this is a supportive wellness program and not a medical substitute. Always follow your doctor’s advice during pregnancy.\n\n⸻\n\n📞 Connect With Us\n\nSri Sidhi VINAAYAGAR Meditation Academy\n📱 9585044188",
    aboutPractice: "At Sri Sidhi VINAAYAGAR Meditation Academy, we guide mothers through simple and safe practices that help create a peaceful inner environment for both mother and child.",
    quote: "“A calm mind, a gentle heart,\nGives your baby the perfect start.\nIn every breath, love flows within,\nNurturing life where it begins.”",
    faqs: [
      { question: "What is Pregnancy Meditation Therapy?", answer: "Pregnancy Meditation Therapy is a guided practice designed to support mental calmness, emotional balance, and positive connection with the baby during pregnancy through safe and simple meditation techniques." },
      { question: "Is meditation safe during pregnancy?", answer: "Yes, when done correctly, meditation is safe and beneficial.\nWe use only gentle, guided, and pregnancy-friendly practices." },
      { question: "What are the benefits of this therapy?", answer: "Regular practice may help:\n\n* Reduce stress and anxiety\n* Improve emotional stability\n* Create a calm and positive mindset\n* Strengthen the bond between mother and baby\n* Promote relaxation and better sleep" },
      { question: "At which stage of pregnancy can I start?", answer: "Meditation can be started at any stage of pregnancy, with techniques adjusted based on your comfort and condition." },
      { question: "What will be done in the session?", answer: "Sessions may include:\n\n* Simple breathing techniques\n* Guided relaxation\n* Positive visualization (connecting with baby)\n* Mind calming practices\n* Gentle affirmations" },
      { question: "Do I need any prior meditation experience?", answer: "No.\nThis is designed for beginners, and you will be guided step by step." },
      { question: "How long is each session?", answer: "Sessions typically last 30 to 60 minutes, depending on the program." },
      { question: "Can this help with pregnancy stress or fear?", answer: "Yes. It is especially helpful for:\n\n* Reducing fear and anxiety\n* Managing mood swings\n* Creating emotional balance" },
      { question: "Will this affect my baby in any way?", answer: "Positive mental and emotional states in the mother can create a calm and supportive environment for the baby.\nThis practice focuses on positive and safe experiences only." },
      { question: "Do I need to sit in a specific posture?", answer: "No strict posture required.\nYou can:\n\n* Sit comfortably on a chair\n* Sit with support\n* Relax in a safe position\n\nComfort is the priority." },
      { question: "Can I practice this at home?", answer: "Yes.\nYou will be guided with simple techniques that can be practiced daily at home." },
      { question: "How often should I practice?", answer: "Even 10–15 minutes daily can be beneficial.\nRegular practice gives better results." },
      { question: "Is this related to any religion?", answer: "No.\nThis is a simple, universal practice, suitable for all." },
      { question: "Can I attend online sessions?", answer: "Yes.\nSessions can be conducted:\n\n* In person\n* Online (video guidance)" },
      { question: "Do I need to consult my doctor before joining?", answer: "If you have any medical complications, it is always good to consult your doctor before starting any new practice." },
      { question: "How do I enroll?", answer: "You can contact us to join:\n\n📲 Call / WhatsApp: +91 95850 44188\n🏢 Sri Sidhi Vinaayagar Meditation Academy" },
      { question: "What makes this therapy special?", answer: "We focus on:\n\n* Mother’s emotional well-being\n* Safe and simple meditation practices\n* Creating a positive connection with the baby" }
    ],
    testimonials: [
      { name: "Abirami", text: "This course helped me feel so connected to my baby. It was a truly divine experience.", location: "Chennai, India", rating: 5 },
      { name: "Srivastava", text: "The meditation techniques were so gentle and soothing during my third trimester.", location: "Mumbai, India", rating: 5 },
      { name: "Rajeshwari", text: "A beautiful practice for any mother‑to‑be. Highly recommended.", location: "Bangalore, India", rating: 5 }
    ],
    detailImageSrc: "/services/deep_energy.png.png",
    gallery: [
      "/services/deep_energy.png.png",
      "/services/card_img_12.png",
      "/services/gallery-2.png",
      "/services/gallery-3.png"
    ]
  }
];
