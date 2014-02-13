var tour = {
      id: "hello-hopscotch",
      showCloseButton: 'true',
      showPrevButton: 'true',
      steps: [
        {
          title: "Welcome",
          content: "Welcome to Gymplify! Let's get started...",
          target: "Jim",
          placement: "bottom",
          xOffset: 'center',
          arrowOffset: 'center'
        },
        {
          title: "Lifts",
          content: "From Bicep Curls to Sprints to Plyometrics, these are all the Lifts you currently have.",
          target: "liftButton",
          placement: "top",
          xOffset: 'center',
          arrowOffset: 'center'
        },
        {
          title: "LiftLists",
          content: "LiftLists are essentially your \"playlists\" of lifts, forming a workout you can follow, edit, or pick and choose your way through.",
          target: "listButton",
          placement: "top",
          xOffset: 'center',
          arrowOffset: 'center'
        },
        {
          title: "Shuffle",
          content: "Shuffle a random set of your lifts into a spontaneous liftlist and jump right into your workout.",
          target: "shuffleButton",
          placement: "top",
          xOffset: 'center',
          arrowOffset: 'center'
        },
        {
          title: "Store",
          content: "Visit the Store to download new lifts and liftlists.",
          target: "storeButton",
          placement: "top",
          xOffset: 'center',
          arrowOffset: 'center'
        },
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);