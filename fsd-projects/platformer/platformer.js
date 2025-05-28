$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(0,300,200,20);
      createPlatform(300,400,200,20);
      createPlatform(300,200,200,20);
      createPlatform(600,300,200,20);
      createPlatform(950,200,200,20);
      createPlatform(850,400,200,20);
      createPlatform(1300,400,200,20);
      createPlatform(1175,500,50,20);
      createPlatform(175,600,50,20);
      createPlatform(575,575,50,20);
      createPlatform(900,600,50,20);
      createPlatform(370,550,50,20);
      createPlatform(750,650,50,20);

    // TODO 3 - Create Collectables
      createCollectable('diamond', 200, 400, 0.5, 0.7);
      createCollectable('diamond', 400, 370, 0.5, 0.7);
      createCollectable('diamond', 400, 170, 0.5, 0.7);
      createCollectable('diamond', 1350, 170, 0.5, 0.7);
      createCollectable('diamond', 1200, 170, 0.5, 0.7);
      createCollectable('diamond', 900, 170, 0.5, 0.7);

    // TODO 4 - Create Cannons
      createCannon('left',300,3000);
      createCannon('top',600,3000);
      createCannon('right',600,3000);
      createCannon('top',900,2000);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
