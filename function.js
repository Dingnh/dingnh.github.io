var clock = new Vue({
  el: "#app-clock",
  data: {
    time: "",
    date: "",
    clicker: "{ { Click Me } }",
    active: false,
    display: true
  },
  methods: {
    showLinks: function() {
      this.active = !this.active;
      if (this.active === false) {
        this.clicker = "{ { Click Me } }";
        shortcutLinks.active = !shortcutLinks.active;
      } else {
        this.clicker = "{ { Shortcuts } }";
        setTimeout(function() {
          shortcutLinks.active = !shortcutLinks.active;
        }, 500);
      }
    }
  }
});

var shortcutLinks = new Vue({
  el: "#app-shortcut",
  data: {
    shortcuts: [
      { name: "YOUTUBE" },
      { name: "FACEBOOK" },
      { name: "TRELLO" },
      { name: "E-LEARN" },
      { name: "GITHUB" },
      { name: "SLACK" },
      { name: "iMAIL" },
      { name: "iZONE" }
    ],
    icons: [
      { icon: "fa fa-youtube-play" },
      { icon: "fa fa-facebook-square" },
      { icon: "fa fa-trello" },
      { icon: "fa fa-graduation-cap" },
      { icon: "fa fa-github" },
      { icon: "fa fa-slack" },
      { icon: "fa fa-envelope" },
      { icon: "fa fa-user" }
    ],
    bgcolor: [
      { backgrd: "EE5555" },
      { backgrd: "3355AA" },
      { backgrd: "007AC0" },
      { backgrd: "e17055" },
      { backgrd: "ad5c51" },
      { backgrd: "3AAE84" },
      { backgrd: "6EC4CB" },
      { backgrd: "CC2E5B" }
    ],
    hrefs: [
      { link: "https://www.youtube.com/" },
      { link: "https://www.facebook.com/" },
      { link: "https://trello.com/b/kKCJrOpx/n-i-c-c" },
      { link: "https://elearn.sunway.edu.my/" },
      { link: "https://github.com/" },
      { link: "https://slack.com/intl/en-my/" },
      {
        link: "https://outlook.office.com/owa/?realm=imail.sunway.edu.my&vd=www"
      },
      { link: "https://izone.sunway.edu.my/login" }
    ],
    active: false,
    display: true
  }
});

Vue.component("nav-links", {
  props: ["title", "hrefsrc"],
  template: `
		<li>
			<a :href='hrefsrc'>{{ title }}</a>
		</li>
		`
});

var showNav = new Vue({
  el: "#app-navbar",
  data: {
    active: false,
    links: [
      { isActive: true, title: "Home", href: "https://dingnh.github.io" },
      {
        isActive: false,
        title: "DateCalculator",
        href: "https://dingnh.github.io/dateCalculator/"
      },
      {
        isActive: false,
        title: "TimeTable",
        href: "https://dingnh.github.io/DY1S3_Timetable.PNG"
      }
    ]
  },
  methods: {
    showNavbar: function() {
      this.active = !this.active;
    }
  }
});

var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var timerID = setInterval(updateTime, 1000);

updateTime();

function updateTime() {
  var cd = new Date();
  clock.time =
    zeroPadding(cd.getHours(), 2) +
    ":" +
    zeroPadding(cd.getMinutes(), 2) +
    ":" +
    zeroPadding(cd.getSeconds(), 2);
  clock.date =
    zeroPadding(cd.getFullYear(), 4) +
    "/" +
    zeroPadding(cd.getMonth() + 1, 2) +
    "/" +
    zeroPadding(cd.getDate(), 2);
}

function zeroPadding(num, digit) {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}
