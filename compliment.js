module.exports={

  getRandomCompliment: function(){
    var compliments = [
      "Keep your laws off my body, but keep your hands on it.",
      "Tell me to go make you a sandwich.",
      "Gender is a social construct, but everyone loves to cuddle.",
      "Women make up 51 percent of the country's population and only 17 percent of the government, but you're the commander-in-chief of my heart.",
      "If I had a hammer, I'd smash the patriarchy.",
      "My eyes are up here.",
      "I just really love Azealia Banks.",
      "The post-feminist fetishization of motherhood is deeply rooted in classism, but I still think we'd make cute babies.",
      "That's not the double bind I was thinking about.",
      "If you apply feminist epistemology to the story arc, Skyler White sort of becomes the hero."

    ]
    return compliment = compliments[Math.floor(Math.random()*compliments.length)];  }
  }
