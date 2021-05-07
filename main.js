var teamJSON = `[
    {
        "name": "204 Bears",
        "emoji": "🧸",
        "color": "#FF0000"
    },
    {
        "name": "Seawall Sandbags",
        "emoji": "⏳",
        "color": "#FF0000"
    },
    {
        "name": "Olympia Long Grapes",
        "emoji": "🍆",
        "color": "#FF0000"
    },
    {
        "name": "Little Rock Big Rocks",
        "emoji": "🧗",
        "color": "#FF0000"
    },
    {
        "name": "Corinth Spaghettification Causers",
        "emoji": "🍝",
        "color": "#FF0000"
    },
    {
        "name": "Berkeley Warrior Cats",
        "emoji": "🐈",
        "color": "#FF0000"
    },
    {
        "name": "Knoxville Tax Evasions",
        "emoji": "💸",
        "color": "#FF0000"
    },
    {
        "name": "Discount Rats",
        "emoji": "🦇",
        "color": "#FF0000"
    },
    {
        "name": "Route 66 Cars",
        "emoji": "🚗",
        "color": "#FF0000"
    },
    {
        "name": "Tuscon Non-Potable Water",
        "emoji": "🚱",
        "color": "#FF0000"
    },
    {
        "name": "Scranton Scantrons",
        "emoji": "📠",
        "color": "#FF0000"
    },
    {
        "name": "World Handholders",
        "emoji": "🤝",
        "color": "#FF0000"
    },
    {
        "name": "Raleigh Cauliflowers",
        "emoji": "🥦",
        "color": "#FF0000"
    },
    {
        "name": "Alberquerque Good Numbers",
        "emoji": "📈",
        "color": "#FF0000"
    },
    {
        "name": "New Orleans Lateral",
        "emoji": "🔛",
        "color": "#FF0000"
    },
    {
        "name": "Spokane Lumberjacks",
        "emoji": "🌲",
        "color": "#FF0000"
    },
    {
        "name": "Silicon Valley Save States",
        "emoji": "💾",
        "color": "#FF0000"
    },
    {
        "name": "Alexandria Librarians",
        "emoji": "📚",
        "color": "#FF0000"
    },
    {
        "name": "Riverdale Current",
        "emoji": "🔌",
        "color": "#FF0000"
    },
    {
        "name": "Cloud 9 Aeronauts",
        "emoji": "🛩️",
        "color": "#FF0000"
    },
    {
        "name": "Progress Works",
        "emoji": "🏗️",
        "color": "#FF0000"
    },
    {
        "name": "Fort Worth Milk",
        "emoji": "🌌",
        "color": "#FF0000"
    },
    {
        "name": "Florence Postal",
        "emoji": "📮",
        "color": "#FF0000"
    },
    {
        "name": "Buffalo Ovals",
        "emoji": "🏉",
        "color": "#FF0000"
    }
]`

var blessingJSON = `[
    {
        "name": "Hot Egg",
        "description": "All Detectives will become Hard Boiled."
    },
    {
        "name": "Wheelbarrow Formation",
        "description": "Two random batters on your Team will run the bases in Wheelbarrow Formation."
    },
    {
        "name": "Scrungle",
        "description": "Your team will gain The Scrungle."
    },
    {
        "name": "Sack Lunch",
        "description": "All Fans of this Team will recieve a Sack Lunch."
    },
    {
        "name": "4th Meal",
        "description": "A random player on your team will recieve the 4th Meal."
    },
    {
        "name": "Recursive Blood",
        "description": "Blood Transfusion. Give your players Blood Blood."
    },
    {
        "name": "Coupon",
        "description": "Your team's rotation will recieve a Discount."
    },
    {
        "name": "Thumbs Up",
        "description": "Double the fingers of a random pitcher."
    },
    {
        "name": "Expresso Lane",
        "description": "Coffee Transfusion. Give your players Espresso Coffee Style."
    },
    {
        "name": "Soul Shout",
        "description": "Increase the Soulscream of your entire team."
    },
    {
        "name": "Pot of Greed",
        "description": "Draw Two additional Cards from your Deck."
    },
    {
        "name": "Lore Bullet",
        "description": "A random Player in your Rotation will Lore Gun Bong."
    },
    {
        "name": "Radness",
        "description": "Maximise the Radness of your team."
    },
    {
        "name": "Sadness",
        "description": "Maximise the Sadness of your team."
    },
    {
        "name": "Badness",
        "description": "Maximise the Badness of your team."
    },
    {
        "name": "Madness",
        "description": "Maximise the Madness of your team."
    },
    {
        "name": "Temporal Geometry",
        "description": "Move your team's stadium to the Time Cube."
    },
    {
        "name": "It's Always Sunny",
        "description": "Move your Team's Stadium to The Sun 1."
    },
    {
        "name": "Stunt Double",
        "description": "Hire Stunt Doubles for your Lineup."
    },
    {
        "name": "Leak Spin",
        "description": "Equip the most idolized player on your team with a Leak."
    },
    {
        "name": "Neutral Special",
        "description": "Equip the least idolized player on your team with a Gun."
    },
    {
        "name": "Better Lighting",
        "description": "Fix the Lighting in your team's Shadows."
    },
    {
        "name": "Shared Interest",
        "description": "Your team will perform their Pregame Rituals together."
    },
    {
        "name": "Anchor",
        "description": "A random player on your Team will become an Anchor."
    }
]`

var teams;
var blessings;
const maxVotes = 2500;
const defVotes = 100;
var favTeam;

function load() {
    teams = JSON.parse(teamJSON);
    blessings = JSON.parse(blessingJSON);
    teams = shuffleArray(teams);

    for(var i = 0; i < blessings.length; i++) {
        blessings[i]['fVotes'] = defVotes;
        blessings[i]['votes'] = new Map();
        for(var j = 0; j < teams.length; j++) {
            blessings[i]['votes'].set(teams[j].name, 0);
        }
    }
}

function clearVotes() {
    for(var i = 0; i < blessings.length; i++) {
        blessings[i]['votes'] = new Map();
        for(var j = 0; j < teams.length; j++) {
            blessings[i]['votes'].set(teams[j].name, 0);
        }
    }
}

//i know linear search is bad. there will be no compensation
function findTeam(name){
    for(let i = 0; i < teams.length; i++){
        if(teams[i].name === name){
            return teams[i];
        }
    }
    return -1;
}

//https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
//because im too lazy to write this on my own uwu
function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

function randBetween(min, max) {
    return Math.floor(Math.random() * (min + max) - min);
}

function buildTeamOption(team) {
    var ret = document.createElement("input");
    ret.setAttribute("name", "team");
    ret.setAttribute("type", "radio");
    ret.value = team.name;

    var label = document.createElement("label");
    label.setAttribute('for', team.name);

    var title = document.createElement('h2')
    title.textContent = `${team.emoji} ${team.name}`;
    title.setAttribute('style', 'display: inline;');

    label.append(title);
    ret.onclick = function () {
        favTeam = team;
        buildProgress();
    };
    return [ret, label];
}

function buildAllTeams() {
    for (var i = 0; i < teams.length; i++) {
        teamList.append(buildTeamOption(teams[i])[0]);
        teamList.append(buildTeamOption(teams[i])[1]);
        teamList.append(document.createElement('br'));
    }
}

function buildBlessingOption(blessing) {
    var ret = document.createElement("input");
    ret.setAttribute("name", "blessing");
    ret.setAttribute("type", "number");
    ret.setAttribute("min", "0");
    ret.setAttribute("max", `${maxVotes}`);
    ret.value = defVotes;

    var label = document.createElement("label");
    label.setAttribute('for', blessing.name);
    var title = document.createElement('b');
    title.textContent = blessing.name;
    label.append(title);
    label.append(`: ${blessing.description}`);

    ret.oninput = function () {
        blessing['fVotes'] = ret.value;
        buildProgress();
    }
    return [ret, label];
}

function buildAllBlessings() {
    for (var i = 0; i < blessings.length; i++) {
        blessingList.append(buildBlessingOption(blessings[i])[0]);
        blessingList.append(buildBlessingOption(blessings[i])[1]);
        blessingList.append(document.createElement('br'));
    }
}

function sumUserVotes() {
    var ret = +0;
    for(var i = 0; i < blessings.length; i++) {
        ret = +ret + +blessings[i]['fVotes'];
    }
    return ret;
}

function buildProgress() {
    var votes = sumUserVotes();
    
    var ret = document.createElement('h2');
    ret.setAttribute('style', 'display: inline;');


    ret.textContent = `${votes} of ${maxVotes} votes cast.`;
    if(votes < maxVotes) {
        ret.textContent += ` ${maxVotes - votes} votes remaining.`;
    } else if(votes > maxVotes) {
        ret.textContent += ` ${votes - maxVotes} votes over budget!`;
    }

    if(favTeam == null) {
        ret.innerHTML += `<br>No Favorite Team selected!`;
    } else {
        ret.innerHTML += `<br>Favorite team: ${favTeam.emoji} ${favTeam.name}`;
    }

    progress.innerHTML = '';
    progress.append(ret);

    submit.innerHTML = '';
    if(votes <= maxVotes && favTeam != null) {
        var sub = document.createElement('input');
        sub.setAttribute('type', 'button');
        sub.setAttribute('value', 'Simulate Election');
        
        sub.onclick = function () {
            simulateVotes();
            simulateElection();
        }

        submit.append(sub);

    }
}

function simulateVotes() {
    clearVotes();
    for(var i = 0; i < teams.length; i++) {
        if(favTeam.name == teams[i].name) {
            //cast the right amount of votes for each blessing
            for(var j = 0; j < blessings.length; j++) {
                blessings[j].votes.set(teams[i].name, 
                    +blessings[j]['fVotes']);
            }
        } else {
            //cast each vote for a random blessing
            for(var j = 0; j < maxVotes; j++) {
                var targ = randBetween(0, blessings.length);
                blessings[targ].votes.set(teams[i].name,
                    +blessings[targ].votes.get(teams[i].name) + 1);
            } 
        }
    }
}

function simulateElection() {
    var ret = [];
    
    results.innerHTML = '';
    for(var i = 0; i < blessings.length; i++) {
        var me = {};

        //count the size of the blessing
        me['name'] = blessings[i].name;
        me['size'] = 0;
        me['highest'] = {
            team: null,
            value: -1
        };

        //count all the votes, get the total numbre of votes cast and the highest bidder
        blessings[i].votes.forEach(function(value, key) {
            me.size += +value;
            if(value > me.highest.value) {
                me.highest.team = findTeam(key);
                me.highest.value = value;
            }
        });
        
        //randomly select the winning vote & then determine who it is
        var luckyNumber = randBetween(0, me.size);
        var alreadyCounted = 0;
        me['winner'] = {
            team: null,
            value: -1
        };
        blessings[i].votes.forEach(function(value, key) {
            if(luckyNumber > alreadyCounted) {
                me.winner.team = findTeam(key);
                me.winner.value = value;
            }
            alreadyCounted += value;
        });

        ret.push(me);

        //annd add to the results
        results.innerHTML += `<br>
        <h3>${me.name} - <i>${me.size} Votes Cast</i></h3><br>
        The ${me.winner.team.name} Recieved ${me.name}.<br>
        <i>The ${me.winner.team.name} had ${Math.floor(100 * me.winner.value /me.size)}% of the Votes</i><br>`
        if(me.winner.team.name == me.highest.team.name) {
            results.innerHTML += `<i>They were the highest bidders.</i>`;
        } else {
            results.innerHTML +=`<i>Highest Bidder - The ${me.highest.team.name} with ${Math.floor(100 * me.highest.value /me.size)}%</i>`;
        }

    }
    console.log(ret);


}

var teamList = document.getElementById('teamList');
var blessingList = document.getElementById('blessingList');
var progress = document.getElementById('progress');
var submit = document.getElementById('submit');
var results = document.getElementById('results');

load();
buildAllTeams();
buildAllBlessings();
buildProgress();
