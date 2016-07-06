module.exports = function(app) {
  var Voter = app.models.Voter;
  var ACL = app.models.ACL;
  Voter.hasMany(app.models.Vote, { as: 'votes', foreignKey: 'VoterId' });
  ACL.create({
    accessType: ACL.ALL,
    permission: ACL.ALLOW,
    principalType: ACL.ROLE,
    principalId: '$owner',
    model: 'Voter',
    property: '__get__votes'
  });
};