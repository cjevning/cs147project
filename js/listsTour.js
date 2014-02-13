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
          xOffset: 'center',
          arrowOffset: 'center'
        },
        {
          title: "Navigation Menu",
          content: "Click here to navigate to different parts of the app.",
          target: "listsMenuButton",
          placement: "left",
          xOffset: 'left',
          arrowOffset: 'top'
        },
        {
          title: "LiftLists",
          content: "These are all the liftlists you currently have available.",
          target: "listName1",
          placement: "bottom",
          xOffset: 'right',
          arrowOffset: 'center'
        },
        {
          title: "Create a LiftList",
          content: "Click here to create a new liftlist from scratch.",
          target: "listButton0",
          placement: "left",
          xOffset: 'left',
          arrowOffset: 'top',
          showNextButton: 'false',
          nextOnTargetClick: 'true'
        },
        {
          title: "LiftList Menu",
          content: "This menu contains your options for your liftlists; you can start a liftlist or edit it.",
          target: "listButton1",
          placement: "left",
          xOffset: 'left',
          arrowOffset: 'top',
          showNextButton: 'false',
          nextOnTargetClick: 'true'
        },
        {
          title: "Search",
          content: "Too many liftlists? Search here to quickly find what you're looking for.",
          target: "srch-term",
          placement: "bottom",
          xOffset: 'center',
          arrowOffset: 'center'
        },
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);