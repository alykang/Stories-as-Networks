window.addEventListener("load", function () {
    /* 
     Everything inside this function will fire once the page loads.
     Our init() function is defined below and it's what sets the interactive part of the page in motion.  
     */
    init();
  });
  
  
  /* 
  Setting the variables top_id and bottom_id as the ids of the divs we want to target later (this way we don't have to write it again and again if we need a reference to the ids later.
  */
  const part_one = "beginning"; 

  
  
  /* The init() function defined here is where the real interaction happens. All of the active code is run here. */
  const init = () => {
  
    /*
      document.getElementById allows to actually grab a reference to an element on the page. Here we grab a reference to our two top and bottom divs so that we can interact with them further. 
    */
    let one_div = document.getElementById(part_one);


  

  
    /* Now we USE the two references we have to our divs and replace their innerHTML (all the stuff contained within the div tag) with our story text.  */
    one_div.innerHTML = story_text;
  };
  
  
  /* Here we declare a variable story_text that holds the value of our text (now we don't have to copy and paste huge blocks of text into our markup*/
  const story_text = `I possess no specialized knowledge of architecture, but I understand that in the Gothic cathedral of the West, the roof is thrust up and up so as to place its pinnacle as high in the heavens as possible-and that herein is thought to lie its special beauty.  In the temples of Japan, on the other hand, a roof of heavy tiles is first laid out, and in the deep, spacious shadows created by the eaves the rest of the structure is built. 
  Nor is this true only of temples; in the palaces of the nobility and the houses of the common people, what first strikes the eye is the massive roof of tile or thatch and the heavy darkness that hangs beneath the eaves. 
  Even at midday cavernous darkness spreads over all beneath the roof's edge, making entryway, doors, walls, and pillars all but invisible. 
  The grand temples of Kyoto-Chion'in, Honganji-and the farmhouses of the remote countryside are alike in this respect: like most buildings of the past their roofs give the impression of possessing far greater weight, height, and surface than all that stands beneath the eaves.
  In making for ourselves a place to live, we first spread a parasol to throw a shadow on the earth, and in the pale light of the shadow we put together a house. There are of course roofs on Western houses too, but they are less to keep off the sun than to keep off the wind and the dew; even from without it is apparent that they are built to create as few shadows as possible and to expose the interior to as much light as possible. If the roof of a Japanese house is a parasol, the roof of a Western house is no more than a cap, with as small a visor as possible so as to allow the sunlight to penetrate directly beneath the eaves. There are no doubt all sorts of reasons-climate, building materials-for the deep Japanese eaves. The fact that we did not use glass, concrete, and bricks, for instance, made a low roof necessary to keep off the driving wind and rain. A light room would no doubt have been more convenient for us, too, than a dark room. The quality that we call beauty, however, must always grow from the realities of life, and our ancestors, forced to live in dark rooms, presently came to discover beauty in shadows, ultimately to guide shadows towards beauty's ends.`
