var app = angular.module('portfolio', [])

//navigation controller
.controller('navCtrl', function($scope) {
  //navigation menu items
  $scope.navigation = [{
    id: '#about',
    name: 'About'
  }, {
    id: '#portfolio',
    name: 'Projects'
  }, {
    id: '#contact',
    name: 'Contacts'
  }, ];

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top'
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
  });

  //animation on Scroll
  $scope.animateHeader = function() {
    var doc = document,
      elem = doc.documentElement,
      header = doc.querySelector('.navbar-inverse'),
      didScroll = false,
      changeEffect = 220;

    window.addEventListener('scroll', function() {
      if (!didScroll) {
        didScroll = true;
        setTimeout($scope.scrollPage, 250);
      }
    }, false);

    $scope.scrollPage = function() {
      var sy = window.scrollY;
      if (sy >= changeEffect) {
        $('.navbar-inverse').addClass('navbar-animated');
      } else {
        $('.navbar-inverse').removeClass('navbar-animated');
      }
      didScroll = false;
    };
  };

  $scope.animateHeader();
})

//home controller
.controller('homeCtrl', function($scope) {
  $scope.title = "Welcome!";
  $scope.description = "Sit back, relax and explore some amazing portfolios!";
})

//about controller
.controller('aboutCtrl', function($scope) {
  $scope.aboutText = {
    title: "Hello there!",
    copyText: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    facebookUrl: "",
    githubUrl: "",
    codepenUrl: ""
  };

})

//portfolio controller
.controller('portfolioCtrl', function($scope) {
    $scope.works = [{
      id: 1,
      thumbnail: 'https://jooinn.com/images1280_/view-of-guitar.jpg',
      url: '',

      title: 'Project 1'
    }, {
      id: 2,
      thumbnail: 'https://c1.wallpaperflare.com/preview/454/755/820/bed-bedroom-black-and-white-dj.jpg',
      url: '',

      title: 'Project 2'
    }, {
      id: 3,
      thumbnail: 'https://c1.wallpaperflare.com/preview/204/358/576/technology-music-party-technology.jpg',
      url: '',

      title: 'Project 3'
    }, {
      id: 4,
      thumbnail: 'https://c1.wallpaperflare.com/preview/341/61/276/audio-close-up-electricity-electronics.jpg',
      url: '',

      title: 'Project 4'
    }, {
      id: 5,
      thumbnail: 'https://c1.wallpaperflare.com/preview/261/843/675/turntable-vinyl-record-album.jpg',
      url: '',
  
      title: 'Project 5'
    }, {
      id: 6,
      thumbnail: 'https://c0.wallpaperflare.com/preview/486/353/66/black-and-gray-cassette-tape-leaned-on-wall.jpg',
      url: '',
      title: 'Project 6'
    }];
  })
  //contact controller
  .controller('contactCtrl', function($scope) {
    $scope.contact = {};
  });