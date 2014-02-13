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
          arrowOffset: '50%'
        },
        {
          title: "Navigation Menu",
          content: "Click here to navigate to different parts of the app.",
          target: "menuButton",
          placement: "bottom",
          //xOffset: 'left',
          arrowOffset: '92%',
        },
        {
          title: "Lifts",
          content: "These are all the lifts you currently have available.",
          target: "liftName1",
          placement: "bottom",
          xOffset: 'right',
          arrowOffset: '25%'
        },
        {
          title: "Lift Menu",
          content: "This menu contains your options for your lifts; you can start a lift, add it to a liftlist, or get more information about a lift, such as what equipment is needed and how to do it.",
          target: "liftButton1",
          placement: "bottom",
          xOffset: 'left',
          arrowOffset: '92%',
          showNextButton: 'false',
          nextOnTargetClick: 'true'
        },
        {
          title: "Search",
          content: "Too many lifts? Search here to quickly find what you're looking for.",
          target: "searchButton",
          placement: "bottom",
          arrowOffset: '80%'
        },
        {
          title: "Create a Lift",
          content: "Can't find a lift in the store? Feel free to create your own!",
          target: "liftButton0",
          placement: "bottom",
          xOffset: 'left',
          arrowOffset: '92%',
          showNextButton: 'false',
          nextOnTargetClick: 'true'
        },
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);