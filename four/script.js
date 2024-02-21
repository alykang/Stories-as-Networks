window.addEventListener("load", function () {
    init();
  });

  const part_one = "beginning"; 
  const part_two = "two"; 
  const part_three = "three"; 
  const part_four = "four"; 
  
  const init = () => {
  
    let one_div = document.getElementById(part_one);
    let two_div = document.getElementById(part_two);
    let three_div = document.getElementById(part_three);
    let four_div = document.getElementById(part_four);

      one_div.innerHTML = story_text;
      two_div.innerHTML = story_text2;
      three_div.innerHTML = story_text3;
      four_div.innerHTML = story_text4;
  };
  
    const story_text = `And surely you have seen, in the darkness of the innermost rooms of these huge buildings, to which sunlight never penetrates, how the gold leaf of a sliding door or screen will pick up a distant glimmer from the garden, then suddenly send forth an ethereal glow, a faint golden light cast into the enveloping darkness, like the glow upon the horizon at sunset.`
    const story_text2 =` In no other setting is gold quite so exquisitely beautiful. You walk past, turning to look again, and yet again; and as you move away the golden surface of the paper glows ever more deeply, changing not in a flash, but growing slowly, steadily brighter, like color rising in the face of a giant. Or again you may find that the gold dust of the background, which until that moment had only a dull, sleepy luster, will, as you move past, suddenly gleam forth as if it had burst into flame.`
    const story_text3 = `How, in such a dark place, gold draws so much light to itself is a mystery to me. But I see why in ancient times statues of the Buddha were gilt with gold and why gold leaf covered the walls of the homes of the nobility. Modem man, in his well-lit house, knows nothing of the beauty of gold; but those who lived in the dark houses of the past were not merely captivated by its beauty, they also knew its practical value; for gold, in these dim rooms, must have served the function of a reflector.`
    const story_text4 = `Their use of gold leaf and gold dust was not mere extravagance. Its reflective properties were put to use as a source of illumination. Silver and other metals quickly lose their gloss, but gold retains its brilliance indefinitely to light the darkness of the room. This is why gold was held in such incredibly high esteem.`

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
      
        const gradientCenterX = (mouseX / window.innerWidth) * 100;
        const gradientCenterY = (mouseY / window.innerHeight) * 100;
      
        const revealedArea = document.querySelector(".revealed-area");
        revealedArea.style.background = `radial-gradient(
          circle 150px at ${gradientCenterX}% ${gradientCenterY}%,
          transparent 10%,
          rgba(14, 13, 6, 1)
        )`;
      });