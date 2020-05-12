const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = () =>{
  ac.grant('user')
      .resource('team').readAny()
      .resource('fixture').readAny()
    .grant('admin')
      .extend('user')
      .resource('team').createAny().updateAny().deleteAny() //allow only admins to CRUD all teams
      .resource('fixture').createAny().updateAny().deleteAny() //allow only admins to CRUD all fixtures
      .resource('profile').readAny().createAny().updateAny().deleteAny() //allow only admins to create an admin account
  // ac.lock();  // prevent further changes to the ac object
  return ac
}