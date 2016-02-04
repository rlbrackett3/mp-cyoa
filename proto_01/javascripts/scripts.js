$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    console.log(windowHeight);
    $('.wrapper').css('min-height', windowHeight);

    // wrapperHeight = $('.wrapper').innerHeight();
    // $('.project-cloud-top').css('height', windowHeight*0.35);
    // $('.mission').css('height', windowHeight*0.15);
    // $('.project-cloud-bottom').css('height', windowHeight*0.35);

    // $('.project-cloud-top').height('40vh');
    // $('.mission').height('15vh');
    // $('.project-cloud-bottom').height('40vh');
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });

  
  

  // for (var i = 0; i < getProjectNames.length; i++) {
  //   var projectName = getProjectNames[i].innerText;
  //   // console.log(projectName);
  //   projectNames.push(projectName);
  // };
  // console.log(projectNames);
  
  var words = [
    {text: "ARNICA", weight: 3, link: '/', html: {
        class: 'project-name'
      }
    },
    {text: "Wooster St. Faceted Ceiling", weight: 1, link: '/'},
    {text: "Chartwell Industries ltd", weight: 2, link: '/'},
    {text: "Footyboots", weight: 1, link: '/'},
    {text: "Butterflies 4 Hope", weight: 3, link: '/'},
    {text: "Target Open House SF", weight: 1, link: '/'},
    {text: "UnSPACE", weight: 3, link: '/'},
    {text: "Claw Clock", weight: 2, link: '/'},
    {text: "ETCP", weight: 2, link: '/'},
    {text: "3D Pantings", weight: 1, link: '/'}
  ];

  // var words = []

  // add project names to words array
  // $.each(projectNames, function (i, name) {
  //   words.push({ text: projectName, weight: 10 });
  // });

  // console.log(words);
  // $.each(words, function (index, value) {
  //   console.log( value.text + ' : ' + value.weight );
  // });

  $('.p-cloud').jQCloud(words, {
    shape: 'rectangular',
    center: {x: 0.5, y: 0.5},
    autoResize: true,
    steps: 3,
    delay: 10,
    classPattern: 'project-w{n}',
    removeOverflowing: false
  });

  var projectNames = [];
  var getProjectNames = document.getElementsByClassName("project-name");

  $.each(getProjectNames, function (n, project) {
    var projectName = getProjectNames[n].innerText;
    projectNames.push(projectName);
  });

  console.log(projectNames);

  $.each(projectNames, function (n, project) {
    project.getBoundingClientRect().top;
    console.log(project);
  });

});