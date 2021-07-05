# MCD-OTS-Backend: https://mcd-ots-backend.herokuapp.com/

## Description 
<p>The backend application handles data relating to Mcdonalds' food items, fake customer orders, and a leaderboard. Its main purpose is to retrieve data by using get requests, and
  posting new users to the leaderboard. 
</p>

## Features 
<ul>
<li>Retrieve different type of menus like breakfast, lunch, drinks, and much more.</li>
<li>Retrieve fake customer orders.</li>
<li>Update the leaderboard with usernames and time completion.</li>
</ul> 

## Tests
<p>
  To run tests:
  <ol>
    <li>Have node.js installed.</li>
    <li>Have express.js installed</li>
    <li>Navigate into the <strong>Tests</strong> folder.</li>
    <li>In the terminal, run <code>npm test</code></li>
</ol> 
</p>

## Walkthrough

<p><strong>GET / requests</strong></p>
<ul>
<li> Endpoints: breakfast, breakfast2, lunch, lunch2, mcvlaue, and salads. I.E. <strong>lunch</strong><br><br>
    <code>
    {
  "items": [
    {
      "name": "Big Mac",
      "is_combo_item": true,
      "combo_item_number": "1",
      "sizeable": false,
      "type": "Lunch",
      "not_combo_able": false,
      "imagesrc": "/images/Big-Mac.jpg"
    },
    {
      "name": "QPC",
      "is_combo_item": true,
      "combo_item_number": "2a",
      "sizeable": false,
      "type": "Lunch",
      "not_combo_able": false,
      "imagesrc": "/images/QPC.jpg"
    },
    {
      "name": "Bacon QPC",
      "is_combo_item": true,
      "combo_item_number": "2b",
      "sizeable": false,
      "type": "Lunch",
      "not_combo_able": false,
      "imagesrc": "/images/qpc-bacon.jpg"
    },
    ...
    ]
   }
    </code> <br><br>
</li>
<li>Endpoints: dessert, dessert2, lsm, condiments, beverages, beverages2, happy_meals. I.E. dessert <br><br>
  <code>
    {
  "items": [
    {
      "name": "Apple Pie",
      "sizeable": false,
      "imagesrc": "/images/apple-pie.jpg"
    },
    {
      "name": "Strwbry Pie",
      "sizeable": false,
      "imagesrc": "/images/strawberry-pie.jpg"
    },
    {
      "name": "2 Apple Pies",
      "sizeable": false,
      "imagesrc": "/images/apple-pie.jpg"
    },
    ...
    ]
   }
  </code>
</li> <br>
<li>Endpoints: customers I.E. customers <br><br>
  <code>
    {
  "items": [
    {
      "id": 1,
      "customerimage": "/people/user1.jpg",
      "fakeorder": "Can I get 2 small fries. A big mac, a fish filet, 1 McChicken, and 1 McDouble. Thank you."
    },
    {
      "id": 2,
      "customerimage": "/people/user2.jpg",
      "fakeorder": "Hello there! May I get 2 sausage muffins, a sausage biscuit along with 3 hashbrowns. Thank you."
    },
    {
      "id": 3,
      "customerimage": "/people/user3.jpg",
      "fakeorder": "Hey there, it's pretty hot out here! Can I get a large blue slushie, a medium mango pineapple\nsmoothie, and a small strawberry shake. Thanks."
    },
    ...
    ]
   }
  </code> 
</li> <br>
<li> Endpoint: leaderboard <br><br>
  <code>
    {
  "items": [
    {
      "id": 41,
      "username": "Kenny Hoang",
      "formatted_time": "02:15"
    },
    ...
  ]
}
  </code>
</li>
</ul> 

## Technology Stack 
<ul>
<li>Javascript</li>
<li>Node.js</li>
<li>Express.js</li>
<li>Postgresql</li>
</ul> 
