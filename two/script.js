window.addEventListener("load", function () {
    init();
  });

  const part_one = "beginning"; 
  const part_two = "two"; 
  const part_three = "three"; 
  const part_four = "four"; 
  const part_five = "five"; 
  const part_six = "six"; 
  
  const init = () => {
  
    let one_div = document.getElementById(part_one);
    let two_div = document.getElementById(part_two);
    let three_div = document.getElementById(part_three);
    let four_div = document.getElementById(part_four);
    let five_div = document.getElementById(part_five);
    let six_div = document.getElementById(part_six);

      one_div.innerHTML = story_text;
      two_div.innerHTML = story_text2;
      three_div.innerHTML = story_text3;
      four_div.innerHTML = story_text4;
      five_div.innerHTML = story_text5;
      six_div.innerHTML = story_text6;
      
    };
    const story_text = `And so it has come to be that the beauty of a Japanese room depends on a variation of shadows, heavy shadows against light shadows-it has nothing else. Westerners are amazed at the simplicity of Japanese rooms, perceiving in them no more than ashen walls bereft of ornament.Their reaction is understandable, but it betrays a failure to comprehend the mystery of shadows. `
    const story_text2 = `Out beyond the sitting room, which the rays of the sun can at best but barely reach, we extend the eaves or build on a veranda, putting the sunlight at still greater a remove. The light from the garden steals in but dimly through paper-paneled doors, and it is precisely this indirect light that makes for us the charm of a room. We do our walls in neutral colors so that the sad, fragile, dying rays can sink into absolute repose.`
    const story_text3 = `Of course the Japanese room does have its picture alcove, and in it a hanging scroll and a flower arrangement.But the scroll and the flowers serve not as ornament but rather to give depth to the shadows. We value a scroll above all for the way it blends with the walls of the alcove, and thus we consider the mounting quite as important as the calligraphy or painting.`
    const story_text4 = `Wherein lies the power of an otherwise ordinary work to produce such an effect? Most often the paper, the ink, the fabric of the mounting will possess a certain look of antiquity, and this look of antiquity will strike just the right balance with the darkness of the alcove and room. Even the greatest masterpiece will lose its worth as a scroll if it fails to blend with the alcove, while a work of no particular distinction may blend beautifully with the room and set off to unexpected advantage both itself and its surroundings.`
    const story_text5 = `We have all had the experience, on a visit to one of the great temples of Kyoto or Nara, of being shown a scroll, one of the temple's treasures, hanging in a large, deeply recessed alcove. So dark are these alcoves, even in bright daylight, that we can hardly discern the outlines of the work; all we can do is listen to the explanation of the guide, follow as best we can the all-but invisible brush strokes, and tell ourselves how magnificent a painting it must be. Yet the combination of that blurred old painting and the dark alcove is one of absolute harmony. The lack of clarity, far from disturbing us, seems rather to suit the painting perfectly.`
    const story_text6 = `For the painting here is nothing more than another delicate surface upon which the faint, frail light can play; it performs precisely the same function as the sand-textured wall. This is why we attach such importance to age and patina. A new painting, even one done in ink monochrome or subtle pastels, can quite destroy the shadows of an alcove, unless it is selected with the greatest care.`

 

    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("next").addEventListener("click", function() {
        var wrapper = document.querySelector(".wrapper");
        var wrapper2 = document.querySelector(".wrapper_2");

        wrapper.classList.add("fade-out");


        setTimeout(function() {
            wrapper.classList.add("hidden");
            wrapper2.classList.remove("hidden");
            wrapper2.classList.add("fade-in");
        }, 1000); 
    });
  });