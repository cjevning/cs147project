var tour = {
      id: "lifts",
      showCloseButton: 'true',
      showPrevButton: 'true',
      steps: [
        {
          title: "Lifts",
          content: "This is your Lifts page.",
          target: "top",
          placement: "bottom",
          xOffset: 'center',
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
          title: "Lifts",
          content: "These are all the lifts you currently have available.",
          target: "row1",
          placement: "bottom",
          arrowOffset: '46%'
        },
        {
          title: "Search",
          content: "Too many lifts? Search here to quickly find what you're looking for.",
          target: "searchButton",
          placement: "bottom",
          arrowOffset: '78%'
        },
        {
          title: "Create a Lift",
          content: "Can't find a lift in the store? Feel free to create your own!",
          target: "row0",
          placement: "bottom",
          arrowOffset: '46%',
        },
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);