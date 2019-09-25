const pizzaList = (req, res) => {
    res.render('locations-list',
      {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
          title: 'Loc8r',
          strapLine: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [
          {
            name: 'Tony\'s Pizza',
            address: '302 23rd street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
          },
          {
            name: 'We Got Cheese Pizza!',
            address: 'Over by United, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
          },
          {
            name: 'Are These Pepporonies? Pizza Place',
            address: '802 23rd street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
          }
        ]
      }
    );
  };
  
  const pizzaInfo = (req, res) => {
    res.render('location-info',
      {
        title: 'Starcups',
         pageHeader: {
          title: 'Loc8r',
        },
        sidebar: {
          context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
          name: 'Starcups',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          coords: {lat: 51.455041, lng: -0.9690884},
          openingTimes: [
            {
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
            },
            {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
            },
            {
              days: 'Sunday',
              closed: true
            }
          ],
          reviews: [
            {
              author: 'Mike Wizouski',
              rating: 5,
              timestamp: '16 July 2073',
              reviewText: 'They HAD A LLAMA...WITH...A....TINY....HAT! I literallycoulnd\'t be more excited about that'
            },
            {
              author: 'Charlie \"The Unicorn\" Davis',
              rating: 3,
              timestamp: '16 August 2073',
              reviewText: 'A llama in a tiny hat ate my pizza while I was in the bathroom'
            }
          ]
        }
      }
    );
  };
  
  
  module.exports = {
    pizzaList,
    pizzaInfo
  };
  