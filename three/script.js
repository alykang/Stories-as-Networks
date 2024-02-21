window.addEventListener("load", function () {
    init();
  });

  const part_one = "beginning"; 
  const part_two = "two"; 
  const part_three = "three"; 
  const part_four = "four";
  const part_five = "five";
  const part_six = "six";
  const part_seven = "seven";
  const part_eight = "eight";
  const part_nine = "nine";
  
  const init = () => {
  
    let one_div = document.getElementById(part_one);
    let two_div = document.getElementById(part_two);
    let three_div = document.getElementById(part_three);
    let four_div = document.getElementById(part_four);
    let five_div = document.getElementById(part_five);
    let six_div = document.getElementById(part_six);
    let seven_div = document.getElementById(part_seven);
    let eight_div = document.getElementById(part_eight);
    let nine_div = document.getElementById(part_nine);

      one_div.innerHTML = story_text;
      two_div.innerHTML = story_text2;
      three_div.innerHTML = story_text3;
      four_div.innerHTML = story_text4;
      five_div.innerHTML = story_text5;
      six_div.innerHTML = story_text6;
      seven_div.innerHTML = story_text7;
      eight_div.innerHTML = story_text8;
      nine_div.innerHTML = story_text9;
  };
  
    const story_text = `A Japanese room might be likened to an inkwash painting, the paper-paneled shoji being the expanse where the ink is thinnest, and the alcove where it is darkest. Whenever I see the alcove of a tastefully built Japanese room, I marvel at our comprehension of the secrets of shadows, our sensitive use of shadow and light.`
    const story_text2 = `For the beauty of the alcove is not the work of some clever device. An empty space is marked off with plain wood and plain walls, so that the light drawn into it forms dim shadows within emptiness. There is nothing more. And yet, when we gaze into the darkness that gathers behind the crossbeam, around the flower vase, beneath the shelves, though we know perfectly well it is mere shadow, we are overcome with the feeling that in this small corner of the atmosphere there reigns complete and utter silence; that here in the darkness immutable tranquility holds sway.`
    const story_text3 = ` The "mysterious Orient" of which Westerners speak probably refers to the uncanny silence of these dark places. And even we as children would feel an inexpressible chill as we peered into the depths of an alcove to which the sunlight had never penetrated. Where lies the key to this mystery? illtimately it is the magic of shadows. Were the shadows to be banished from its comers, the alcove would in that instant revert to mere void.`
    const story_text4 = `This was the genius of our ancestors, that by cutting off the light from this empty space they imparted to the world of shadows that formed there a quality of mystery and depth superior to that of any wall painting or ornament. The technique seems simple, but was by no means so simply achieved. `
    const story_text5 = `We can imagine with little difficulty what extraordinary pains were taken with each invisible detail-the placement of the window in the shelving recess, the depth of the crossbeam, the height of the threshold. But for me the most exquisite touch is-the pale white glow of the shoji in the study bay; I need only pause before it and I forget the passage of time.`
    const story_text6 = `The study bay, as the name suggests, was originally a projecting window built to provide a place for reading. Over the years it came to be regarded as no more than a source of light for the alcove; but most often it serves not so much to illuminate the alcove as to soften the sidelong rays from without, to filter them through paper panels.`
    const story_text7 = `There is a cold and desolate tinge to the light by the time it reaches these panels. The little sunlight from the garden that manages to make its way beneath the eaves and through the corridors has by then lost its power to illuminate, seems drained of the complexion of life. It can do no more than accentuate the whiteness of the paper. I sometimes linger before these panels and study the surface of the paper, bright, but giving no impression of brilliance.`
    const story_text8 = `In temple architecture the main room stands at a considerable distance from the garden; so dilute is the light there that no matter what the season, on fair days or cloudy, morning, midday, or evening, the pale, white glow scarcely varies. And the shadows at the interstices of the ribs seem strangely immobile, as if dust collected in the corners had become a part of the paper itself.  I blink in uncertainty at this dreamlike luminescence, feeling as though some misty film were blunting my vision.`
    const story_text9 = `The light from the pale white paper, powerless to dispel the heavy darkness of the alcove, is instead repelled by the darkness, creating a world of confusion where dark and light are indistinguishable. Have not you yourselves sensed a difference in the light that suffuses such a room, a rare tranquility not found in ordinary light? Have you never felt a sort of fear in the face of the ageless, a fear that in that room you might lose all consciousness of the passage of time, that untold years might pass and upon emerging you should find you had grown old and gray?`


    document.addEventListener("DOMContentLoaded", function() {
      var wrappers = document.querySelectorAll('.wrapper div');
  
      function handleScroll() {
          wrappers.forEach(function(wrapper) {
              if (isInViewport(wrapper)) {
                  wrapper.classList.add('active');
              } else {
                  wrapper.classList.remove('active');
              }
          });
      }
  
      function isInViewport(element) {
          var rect = element.getBoundingClientRect();
          var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
          var middleViewport = viewportHeight / 1; // Vertical middle of the viewport
  
          return rect.top + rect.height / 2 >= 0 && rect.top + rect.height / 2 <= middleViewport;
      }
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
  });
  