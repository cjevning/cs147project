var tour = {
      id: "lists",
      showCloseButton: 'true',
      showPrevButton: 'true',
      steps: [
        {
          title: "LiftLists",
          content: "This is your LiftLists page.",
          target: "top",
          placement: "bottom",
          arrowOffset: '46%'
        },
        {
          title: "Navigation Menu",
          content: "Click here to navigate to different parts of the app.",
          target: "menuButton",
          placement: "bottom",
          arrowOffset: '89%',
        },
        {
          title: "LiftLists",
          content: "These are all the liftlists you currently have available.",
          target: "row1",
          placement: "bottom",
          arrowOffset: '46%'
        },
        {
          title: "Create a LiftList",
          content: "Click here to create a new liftlist from scratch.",
          target: "row0",
          placement: "bottom",
          arrowOffset: '46%',
        },
        {
          title: "Search",
          content: "Too many liftlists? Search here to quickly find what you're looking for.",
          target: "searchButton",
          placement: "bottom",
          arrowOffset: '78%'
        },
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);