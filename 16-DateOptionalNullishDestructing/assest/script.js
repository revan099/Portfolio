
//////////// 1. Date obyekt
const hour = new Date().getHours();

if (hour < 12) {
  console.log("Sabahiniz xeyir!");
} else if (hour < 18) {
  console.log("Gunortaniz xeyir!");
} else {
  console.log("Axsaminiz xeyir!");
}

//////////// 2. Object Destructuring
const employee = {
  name: "Revan Huseynov",
  department: "Engineering",
  contact: {
    email: "revan.huseyn@example.com",
    phone: "555-1234",
    emergencyContact: {
      name: "Far For",
      relation: "Spouse"
    }
  }
};

const {
  name,
  department,
  contact: {
    email,
    phone,
    emergencyContact: {
      name: emergencyContactName,
      relation: emergencyRelation
    }
  }
} = employee;

console.log({
  name,
  department,
  email,
  phone,
  emergencyContactName,
  emergencyRelation
});

//////////// 3. API-den alınan melumatlar
const apiResponse = [
  {
    id: 1,
    title: "JavaScript esaslari",
    author: "Seid Memedov",
    stats: [2500, 150, 30]
  },
  {
    id: 2,
    title: "Array Destructuring",
    author: "Leyla Eliyeva",
    stats: [1800, 220, 45]
  },
  {
    id: 3,
    title: "Muasir JavaScript",
    author: "Tural Hesenli",
    stats: [3200, 380, 70]
  }
];

const { title, author, stats } = apiResponse[1];
const [oxunma, beyenme, serh] = stats;

console.log(`Meqale: ${title}, Muellif: ${author}, ${oxunma} oxunma, ${beyenme} beyenme, ${serh} serh`);

//////////// 4. Optional chaining və Nullish coalescing birlikde
function renderUserProfile(userData) {
  const username = userData?.user?.username ?? "Qonaq";
  const avatar = userData?.user?.profile?.avatar ?? "/default-avatar.png";
  const rawBio = userData?.user?.profile?.bio;
  const bio = rawBio && rawBio.trim() !== "" ? rawBio : "Melumat yoxdur";
  const email = userData?.user?.contact?.email ?? "teyin edilmeyib";
  const premium = userData?.user?.account?.premium ?? false;

  return {
    username,
    avatar,
    bio,
    email,
    premium
  };
}


console.log(renderUserProfile({
  user: {
    username: "Revan2025",
    profile: {
      avatar: "/users/revan.jpg",
      bio: "JavaScript developer",
    },
    contact: {
      email: "revan@example.com"
    },
    account: {
      premium: true
    }
  }
}));


console.log(renderUserProfile({
  user: {
    username: "nigar",
    profile: {
      bio: ""
    },
    contact: {}
  }
}));


console.log(renderUserProfile({
  user: {
    username: null
  }
}));

console.log(renderUserProfile({}))