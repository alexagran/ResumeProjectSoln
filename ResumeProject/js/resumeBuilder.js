

var bio = {
    "name": "Alex Agran",
    "role": "Tech Consultant",
    "contacts": {

        "mobile": "312.498.7950",
        "email": "alexagran@gmail.com",
        "github": "alexagran",
        "twitter": "@realDobleA",
        "location": "Chicago, IL"
    },
    "welcomeMessage": "Thanks for stopping by. Have a look around.",
    "skills": ["project management", "account management", "sales"],
    "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/065/3a2/00f8914.jpg",
};


var work = {
    "jobs": [
        {
            "employer": "Clarity",
            "title": "Principal",
            "dates": "05/03/2013 - present",
            "location": "Chicago, IL",
            "description": "Directs custom technology solution development to help clients increase revenue and productivity, reduce risks and costs, and provide competitive advantages. Able to quickly understand a client's business and deliver the right technological solution. Achieves results on time and within budget. Exceeds expectations.",
            "url": "http://www.claritycon.com"
        },
        {
            "employer": "Grosvenor Capital Management",
            "title": "Vice President",
            "dates": "05/01/2007 - 05/02/2013",
            "location": "Chicago, IL",
            "description": "Developed technology solutions to improve the investments decision-making process, win/retain business, increase the productivity of front and back office personnel, and reduce operational risks. Also served as a research analyst responsible for investment analysis and allocation within credit, structured credit, relative value, and multi-strategy hedge fund strategies. Was responsible for over $4 billion of investments at the time of departure. Background in finance allowed me to quickly grasp what the investments department needed to improve its decision-making process. Background in agile solutions development allowed me to quickly deliver technology solutions to fill the needs. Understanding of the business allowed me to create technology solutions were widely used by both Grosvenor employees and clients.",
            "url": "http://www.gcmlp.com"
        },
        {
            "employer": "PPM America",
            "title": "Assistant Vice President",
            "dates": "09/01/2003 - 04/30/2007",
            "location": "Chicago, IL",
            "description": "Developed technology solutions to improve the investments decision-making process business, increase the productivity of front and back office personnel, and reduce operational risks. Systems developed include risk attribution, credit research portal, cash management, and deal pipeline tracker.",
            "url": "http://www.ppmamerica.com"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Northwestern JL Kellogg School of Management",
            "dates": "2004 - 2007",
            "degree": "Masters",
            "major": ["Finance"],
            "location": "Evanston, IL",
            "url": "http://www.kellogg.northwestern.edu/"
        },
        {
            "name": "University of Illinois",
            "dates": "1995 - 1999",
            "degree": "B.S.",
            "major": "Management Information Systems",
            "location": "Urbana, IL",
            "url": "http://illinois.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-end Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "in progress",
            "url": "http://www.udacity.com",
            "classUrl": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Art.com",
            "dates": "2001 - 2002",
            "description": "ASP web application.",
            "images": []
        },
        {
            "title": "Gro.io",
            "dates": "2015",
            "description": "iOS app that controls Gro.io's hydroponic grow controller",
            "images": ["https://gro.io/wp-content/uploads/2016/05/app-1.jpg"]
        }
    ]
};


// -------------------------
// BIO SECTION
// -------------------------

bio.display = function () {

    // Sidebar
    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#sidebarContent").append(bioPic);

    $("#sidebarContent").append(HTMLcontactsStart);
    writeContacts("#topContacts:last");

    if (bio.skills.length > 0) {
        $("#sidebarContent").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var bioSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills:last").append(bioSkill);
        }
    }

    var bioName = HTMLheaderName.replace("%data%", bio.name);
    var bioRole = HTMLheaderRole.replace("%data%", bio.role);
    var bioWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(bioName + bioRole + bioWelcome);

};

// --------------------------
// WORK EXPERIENCE
// --------------------------
work.display = function () {

    // loop through each work item
    work.jobs.forEach(function (job) {

        $("#workExperience").append(HTMLworkStart);

        var workEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        workEmployer = workEmployer.replace('href="#"', "href='" + job.url + "'");
       
        var workTitle = HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(workEmployer + workTitle);

        var workDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(workDates);

        var workLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(workLocation);

        var workDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(workDescription);

    });

};

// --------------------------
// EDUCATION
// --------------------------
education.display = function () {

    // loop through brick and mortar schools
    education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);

        var schoolName = HTMLschoolName.replace("%data%", school.name);
        schoolName = schoolName.replace('href="#"', "href='" + school.url + "'");

        var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(schoolName + schoolDegree);

        var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(schoolDates);

        var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(schoolLocation);

        var schoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry:last").append(schoolMajor);
    });

    // loop through online courses
    var numCourses = 0;
    education.onlineCourses.forEach(function (onlineCourse) {
        if (numCourses === 0) {
            $("#education").append(HTMLonlineClasses);
            numCourses += 1;
        }

        $("#education").append(HTMLschoolStart);

        var onlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        onlineTitle = onlineTitle.replace('href="#"', "href='" + onlineCourse.classUrl + "'");

        var onlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        $(".education-entry:last").append(onlineTitle + onlineSchool);

        var onlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        $(".education-entry:last").append(onlineDates);

        var onlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
        onlineURL = onlineURL.replace('href="#"', "href='" + onlineCourse.url + "'");
        $(".education-entry:last").append(onlineURL);

    });

};

function writeContacts(contactSelector) {
    var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $(contactSelector).append(contactMobile);
    var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $(contactSelector).append(contactEmail);
    var contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $(contactSelector).append(contactTwitter);
    var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $(contactSelector).append(contactLocation);
}

// --------------------------
// PROJECTS
// --------------------------
projects.display = function () {

    $("#projects").append(HTMLprojectStart);

    projects.projects.forEach(function (project) {
        var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(projectTitle);

        var projectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(projectDates);

        var projectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(projectDescription);

        for (var i = 0; i < project.images.length; i++) {
            var projectImage = HTMLprojectImage.replace("%data%", project.images[i]);
            $(".project-entry:last").append(projectImage);
        }

    });

};


// --------------------------
// WRITE OUT THE PAGE
// --------------------------
bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);

// add footer contact information
writeContacts("#footerContacts:last");

// open all a tags in new window
$("a").attr("target", "_blank");



//$(document).click(function (loc) {
//    //console.log(loc);
//    logclicks(loc.pagex, loc.pagey);
//    console.log(loc.pagex + ", " + loc.pagey);
//});
