function pluck(array, property) {
  return array.map(function (element) {
    return element[property];
  });
}

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function (image) {
  return image.height;
});

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];

var areas = [];
images.forEach(function (image) {
  areas.push(image.height * image.width);
});


function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  posts.forEach(function(post) {
    savePost(post);
  });
}

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function (number) {
  return number > 50;
});


var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

var filteredUsers = users.filter(function (user) {
  return user.admin;
});


function reject(array, iteratorFunction) {
  return array.filter((element) => {
    return !iteratorFunction(element);
  });
}


var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

var admin = users.find(function (user) {
  return user.admin;
});


var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function (account) {
  return account.balance === 12;
});

function findWhere(array, criteria) {
  return array.find(function (element) {
    var property = Object.keys(criteria)[0];

    return element[property] === criteria[property];
  });
}


var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

var hasSubmitted = users.every(function (user) {
  return user.hasSubmitted;
});


var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' },
];

var inProgress = requests.some(function (request) {
  return request.status === 'pending';
});


var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function (sum, trip) {
  return trip.distance + sum;
}, 0);


var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' },
];

var deskTypes = desks.reduce(
  function (sum, desk) {
    if (desk.type === 'sitting') {
      sum.sitting++;
    } else {
      sum.standing++;
    }

    return sum;
  },
  { sitting: 0, standing: 0 }
);

function unique(array) {
  return array.reduce(function (acc, element) {
      var existingElement = acc.find(function (target) {
        return target === element;
      });
  
      if (!existingElement) {
        acc.push(element);
      }
  
      return acc;
    }, []);
}

const name = 'Name';
let age = 20;
const dateOfBirth = 'January 1 2016';


const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let  message = '';
const currentCode = 'OK';

for (let  i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
    

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}


const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};


const profile = {
  name: 'Alex',
  getName: function () {
    return this.name;
  },
};

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});