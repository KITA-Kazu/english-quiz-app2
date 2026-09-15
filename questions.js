const questionsData = {
  1: [
    // レベル1：中学レベル（30問）
    { q: "Hurry up or we'll be late! I'll be ready ( ) two minutes.", choices: ["after", "by", "for", "in"], answer: 3 }, //[cite: 1]
    { q: "I have known him ( ) more than twenty years.", choices: ["before", "since", "for", "while"], answer: 2 }, //[cite: 1]
    { q: "It is necessary for all of us to be back ( ) six o'clock.", choices: ["since", "till", "by", "in"], answer: 2 }, //[cite: 1]
    { q: "Study very hard, ( ) you will be sorry.", choices: ["so", "or", "and", "nor"], answer: 1 }, //[cite: 1]
    { q: "No one would help me, so I had to do the work by ( ).", choices: ["alone", "me", "myself", "oneself"], answer: 2 }, //[cite: 1]
    { q: "Would you like ( ) cup of coffee?", choices: ["other", "another", "an", "the others"], answer: 1 }, //[cite: 1]
    { q: "He left the room without saying a word to ( ).", choices: ["anyone", "nobody", "someone", "no one"], answer: 0 }, //[cite: 1]
    { q: "I have been living in Tokyo ( ) 2010.", choices: ["for", "since", "from", "during"], answer: 1 },
    { q: "He is tall, ( ) his brother is short.", choices: ["but", "so", "or", "for"], answer: 0 },
    { q: " She goes to school ( ) bus every morning.", choices: ["on", "by", "with", "in"], answer: 1 },
    { q: "My father gave ( ) a nice birthday present.", choices: ["I", "my", "me", "mine"], answer: 2 },
    { q: "Look at ( ) dog over there. It's so cute!", choices: ["this", "that", "these", "those"], answer: 1 },
    { q: "We stayed at home because ( ) was raining.", choices: ["it", "this", "that", "weather"], answer: 0 },
    { q: "There are many books ( ) the table.", choices: ["in", "on", "at", "to"], answer: 1 },
    { q: " I don't have ( ) money in my wallet.", choices: ["some", "any", "many", "few"], answer: 1 },
    { q: "This cake is ( ) than that one.", choices: ["sweet", "sweeter", "sweetest", "more sweet"], answer: 1 },
    { q: "What time do you usually ( ) up in the morning?", choices: ["get", "stand", "rise", "wake"], answer: 0 },
    { q: "Ken can speak English very ( ).", choices: ["good", "well", "nice", "fluent"], answer: 1 },
    { q: "Do you have ( ) plans for this weekend?", choices: ["some", "any", "much", "little"], answer: 1 },
    { q: " The sun ( ) in the east.", choices: ["rises", "raises", "rising", "rose"], answer: 0 },
    { q: "My sister is playing ( ) piano in her room.", choices: ["a", "an", "the", "―"], answer: 2 },
    { q: "I am interested ( ) learning Japanese history.", choices: ["on", "at", "in", "for"], answer: 2 },
    { q: "Please ( ) off your shoes before entering.", choices: ["take", "put", "get", "make"], answer: 0 },
    { q: "They have ( ) to London twice.", choices: ["been", "gone", "went", "visit"], answer: 0 },
    { q: "This is the hospital ( ) I was born.", choices: ["which", "where", "that", "when"], answer: 1 },
    { q: "If it ( ) tomorrow, we will stay home.", choices: ["rains", "will rain", "rained", "raining"], answer: 0 },
    { q: "She ( ) to the library to study yesterday.", choices: ["go", "goes", "went", "has gone"], answer: 2 },
    { q: "I must finish my homework ( ) dinner.", choices: ["before", "after", "while", "until"], answer: 0 },
    { q: "He walked ( ) the street carefully.", choices: ["across", "through", "over", "along"], answer: 0 },
    { q: " We didn't have ( ) time to catch the train.", choices: ["enough", "many", "few", "large"], answer: 0 }
  ],
  2: [
    // レベル2：高校基礎レベル（30問）
    { q: "The marketing department will be busy ( ) next month.", choices: ["by", "while", "when", "until"], answer: 3 }, //[cite: 1]
    { q: "Are you ( ) or against the plan?", choices: ["at", "by", "for", "with"], answer: 2 }, //[cite: 1]
    { q: "The children have ( ) lots of new friends since we moved.", choices: ["formed", "made", "become", "got"], answer: 1 }, //[cite: 1]
    { q: "The landlord ( ) him about 90,000 yen per month in rent.", choices: ["costs", "charges", "takes", "pays"], answer: 1 }, //[cite: 1]
    { q: "I'm afraid I lost my wallet. Could you ( ) me some money?", choices: ["borrow", "rent", "owe", "lend"], answer: 3 }, //[cite: 1]
    { q: "Jim has three brothers. One is a doctor, and ( ) are computer scientists.", choices: ["another", "others", "the other", "the others"], answer: 3 }, //[cite: 1]
    { q: "Martha and I didn't know the time because ( ) had a watch.", choices: ["each of us", "both of us", "either of us", "neither of us"], answer: 3 }, //[cite: 1]
    { q: "Hiroshi has three sons, but ( ) of them live in Japan.", choices: ["few", "one", "neither", "none"], answer: 3 }, //[cite: 1]
    { q: "Thanks ( ) her kind advice, he succeeded in passing the exam.", choices: ["for", "to", "of", "with"], answer: 1 }, //[cite: 1]
    { q: "The bus was delayed ( ) a severe snowstorm.", choices: ["because", "despite of", "owing to", "instead of"], answer: 2 }, //[cite: 1]
    { q: "You can smoke in here as ( ) as you leave the window open.", choices: ["far", "long", "much", "well"], answer: 1 }, //[cite: 1]
    { q: "Take a map with you in ( ) you get lost.", choices: ["that", "case", "so", "if"], answer: 1 }, //[cite: 1]
    { q: "How much is your bus ( ) home?", choices: ["fare", "fee", "cost", "price"], answer: 0 }, //[cite: 1]
    { q: "I have an ( ) with the dentist this afternoon.", choices: ["appointment", "reservation", "promise", "order"], answer: 0 }, //[cite: 1]
    { q: "We had the school picnic ( ) the rain.", choices: ["even though", "instead of", "in spite of", "while"], answer: 2 }, //[cite: 1]
    { q: "John came to see you ( ) you were out to lunch.", choices: ["for", "during", "among", "while"], answer: 3 }, //[cite: 1]
    { q: "You will become ill ( ) you stop working so hard.", choices: ["if", "until", "when", "unless"], answer: 3 }, //[cite: 1]
    { q: "He asked me to ( ) him the way to the station.", choices: ["show", "teach", "speak", "say"], answer: 0 }, //[cite: 1]
    { q: "Lunch is on me today. I'll ( ) you next time.", choices: ["borrow", "charge", "deal", "treat"], answer: 3 }, //[cite: 1]
    { q: "He got into the ( ) of biting his nails.", choices: ["habit", "manner", "custom", "practice"], answer: 0 }, //[cite: 1]
    { q: "The news ( ) her son survived surprised us all.", choices: ["about", "of", "that", "which"], answer: 2 }, //[cite: 1]
    { q: "We are supposed to ( ) a party next Saturday.", choices: ["halt", "hold", "quit", "play"], answer: 1 }, //[cite: 1]
    { q: "When did World War Two ( )?", choices: ["take place", "happen", "break out", "produce"], answer: 2 }, //[cite: 1]
    { q: "He refused to look me in ( ) face.", choices: ["the", "a", "his", "―"], answer: 0 }, //[cite: 1]
    { q: "More than twenty ( ) were injured in the train accident.", choices: ["clients", "customers", "guests", "passengers"], answer: 3 }, //[cite: 1]
    { q: "My brother chose a blue Frisbee, and I chose a red ( ).", choices: ["one", "it", "that", "frisbee"], answer: 0 }, //[cite: 1]
    { q: "Yesterday quite a ( ) students were absent due to flu.", choices: ["few", "little", "number", "many"], answer: 0 }, //[cite: 1]
    { q: "She was so tired that she fell asleep ( ) the light on.", choices: ["in", "by", "with", "for"], answer: 2 }, //[cite: 1]
    { q: "As I was talking with Susan, an idea ( ) to me.", choices: ["appeared", "happened", "occurred", "seemed"], answer: 2 }, //[cite: 1]
    { q: "Your composition is good, ( ) a few spelling mistakes.", choices: ["besides", "provided for", "except for", "without"], answer: 2 } //[cite: 1]
  ],
3: [
    // レベル3：大学入試基礎レベル（30問）
    { q: "Tom visited the park for the first time ( ) many years.", choices: ["since", "during", "through", "in"], answer: 3 }, //[cite: 1]
    { q: "A knowledge of science is ( ) great use to everyone.", choices: ["at", "for", "of", "with"], answer: 2 }, //[cite: 1]
    { q: "He was ( ) himself with joy to hear the news.", choices: ["over", "besides", "beside", "beyond"], answer: 2 }, //[cite: 1]
    { q: "Frank looks young ( ) his age, doesn't he?", choices: ["in", "with", "for", "to"], answer: 2 }, //[cite: 1]
    { q: "The mother caught her child ( ) the arm.", choices: ["with", "by", "on", "at"], answer: 1 }, //[cite: 1]
    { q: "I decided to order the book ( ) the publisher directly.", choices: ["from", "to", "for", "by"], answer: 0 }, //[cite: 1]
    { q: "There is no doubt ( ) his honesty.", choices: ["according as", "as to", "different from", "up to"], answer: 1 }, //[cite: 1]
    { q: "Two feet of snow fell yesterday, ( ) school has been canceled.", choices: ["Though", "But", "Due to", "Since"], answer: 3 }, //[cite: 1]
    { q: "We will have finished the work ( ) the time you get here.", choices: ["by", "for", "from", "till"], answer: 0 }, //[cite: 1]
    { q: "Bill ate ( ) a big lunch that he fell asleep in class.", choices: ["so", "very", "such", "enough"], answer: 2 }, //[cite: 1]
    { q: "Every ( ) I go shopping, I forget to buy one or two items.", choices: ["Sometimes", "All the time", "time", "As time goes by"], answer: 2 }, //[cite: 1]
    { q: "Let me give you a ( ) of advice.", choices: ["some", "pair", "sheet", "piece"], answer: 3 }, //[cite: 1]
    { q: "This painting stands a good ( ) of winning the prize.", choices: ["certainty", "chance", "opportunity", "possible"], answer: 1 }, //[cite: 1]
    { q: "Could you possibly make ( ) for my grandmother to sit here?", choices: ["a room", "room", "rooms", "the room"], answer: 1 }, //[cite: 1]
    { q: "I have no sense of ( ), so I got lost easily.", choices: ["course", "direction", "way", "track"], answer: 1 }, //[cite: 1]
    { q: "I have nothing to do at ( ).", choices: ["now", "current", "present", "moment"], answer: 2 }, //[cite: 1]
    { q: "How much sugar would you like? Two ( ), please.", choices: ["sections", "parts", "lumps", "squares"], answer: 2 }, //[cite: 1]
    { q: "He has a pleasant voice, but it doesn't ( ) good through a mic.", choices: ["hear", "listen", "sound", "come"], answer: 2 }, //[cite: 1]
    { q: "The boys ran outside ( ) big smiles on their faces.", choices: ["with", "on", "in", "having"], answer: 0 }, //[cite: 1]
    { q: "In ( ) of an earthquake, do not rush outside.", choices: ["event", "case", "fact", "cause"], answer: 1 }, //[cite: 1]
    { q: "I've never seen ( ) a beautiful baby before.", choices: ["so", "such", "very", "too"], answer: 1 }, //[cite: 1]
    { q: "Neither of my alarm clocks ( ) off this morning.", choices: ["went", "rang", "sounded", "played"], answer: 0 }, //[cite: 1]
    { q: "I don't understand ( ) Mary made such a big mistake.", choices: ["how", "why", "what", "that"], answer: 1 }, //[cite: 1]
    { q: "He succeeded in solving the problem ( ) ease.", choices: ["with", "in", "by", "at"], answer: 0 },
    { q: "She was at a ( ) for words when she heard the news.", choices: ["loss", "cost", "missing", "lack"], answer: 0 },
    { q: "The meeting will be held ( ) advance of the conference.", choices: ["on", "in", "for", "by"], answer: 1 },
    { q: "He is, so to ( ), a walking dictionary.", choices: ["speak", "say", "tell", "talk"], answer: 1 },
    { q: "You should take advantage ( ) this great opportunity.", choices: ["of", "on", "with", "for"], answer: 0 },
    { q: "He made a point ( ) taking a walk every morning.", choices: ["to", "of", "in", "for"], answer: 1 },
    { q: "She insisted ( ) paying for the dinner herself.", choices: ["on", "in", "at", "for"], answer: 0 }
  ],
  4: [
    // レベル4：最難関レベル（30問）
    { q: "( ) my stay in Seattle, I made a lot of life-long friends.", choices: ["During", "Though", "While", "With"], answer: 0 }, //[cite: 1]
    { q: "Robert is not ( ) great a singer as he thinks he is.", choices: ["too", "as", "a", "more"], answer: 1 }, //[cite: 1]
    { q: "Peter thinks that this is quite ( ) cheap restaurant.", choices: ["an", "a", "the", "that"], answer: 1 }, //[cite: 1]
    { q: "His point of view is quite different from ( ).", choices: ["mine", "me", "my", "I"], answer: 0 }, //[cite: 1]
    { q: "Bob won the baseball match, but failed in the speech ( ).", choices: ["match", "event", "contest", "game"], answer: 2 }, //[cite: 1]
    { q: "Aside ( ) a few minor mistakes, this is a very good paper.", choices: ["from", "of", "with", "by"], answer: 0 }, //[cite: 1]
    { q: "His essay is far ( ) perfect.", choices: ["from", "off", "away", "out"], answer: 0 }, //[cite: 1]
    { q: "On ( ) the news, she jumped for joy.", choices: ["hearing", "heard", "hear", "to hear"], answer: 0 }, //[cite: 1]
    { q: "My elder brother was born ( ) November 18, 1980.", choices: ["in", "on", "at", "by"], answer: 1 }, //[cite: 1]
    { q: "Please leave your chair as it ( ).", choices: ["is", "was", "does", "be"], answer: 0 }, //[cite: 1]
    { q: "We cannot agree with the idea that might ( ) right.", choices: ["makes", "does", "is", "has"], answer: 0 }, //[cite: 1]
    { q: "Most people do not appreciate what they have ( ) they lose it.", choices: ["until", "since", "while", "unless"], answer: 0 }, //[cite: 1]
    { q: "Hardly had I left home ( ) it began to rain heavily.", choices: ["when", "than", "after", "then"], answer: 0 },
    { q: "No sooner had he seen the police officer ( ) he ran away.", choices: ["than", "when", "then", "after"], answer: 0 },
    { q: "Scarcely had the movie started ( ) the power went out.", choices: ["before", "than", "then", "that"], answer: 0 },
    { q: "Little ( ) I dream that I would meet her again in Paris.", choices: ["did", "had", "do", "have"], answer: 0 },
    { q: "So exhaustion was he ( ) he collapsed onto the bed.", choices: ["that", "as", "which", "so"], answer: 0 },
    { q: "Were it not ( ) your help, I could not complete this task.", choices: ["for", "with", "without", "by"], answer: 0 },
    { q: "Had it not been for the rain, we ( ) played the game.", choices: ["would have", "will have", "have", "had"], answer: 0 },
    { q: "It is high time you ( ) to bed.", choices: ["went", "go", "have gone", "should go"], answer: 0 },
    { q: "Whatever ( ) happen, I will always support you.", choices: ["may", "can", "will", "must"], answer: 0 },
    { q: "Strange ( ) it may seem, what he said is true.", choices: ["as", "though", "like", "for"], answer: 0 },
    { q: "Young ( ) he was, he managed to solve the problem.", choices: ["as", "although", "despite", "even"], answer: 0 },
    { q: "Rich ( ) he is, he is far from happy.", choices: ["as", "because", "since", "for"], answer: 0 },
    { q: "Much ( ) I respect him, I cannot agree with his opinion.", choices: ["as", "that", "how", "what"], answer: 0 },
    { q: "He worked hard to the ( ) that he ruined his health.", choices: ["extent", "point", "degree", "result"], answer: 0 },
    { q: "She had no alternative ( ) to accept the offer.", choices: ["but", "except", "than", "besides"], answer: 0 },
    { q: "He went so ( ) as to say that I was a liar.", choices: ["far", "much", "long", "well"], answer: 0 },
    { q: "It goes without ( ) that health is above wealth.", choices: ["saying", "speak", "said", "talk"], answer: 0 },
    { q: "There is no ( ) what will happen tomorrow.", choices: ["telling", "saying", "know", "speak"], answer: 0 }
  ]
};