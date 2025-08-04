const teamMembers = document.getElementById("team-members");
new Sortable(teamMembers, {
  group: 'shared',
  animation: 150,
  chosenClass: "team-member-chosen",
  dragClass: "team-member-drag",
});
const myTeam = document.getElementById("my-team");
new Sortable(myTeam, {
  group: 'shared',
  animation: 150,
  chosenClass: "team-member-chosen",
  dragClass: "team-member-drag",
});