const passport = require('passport')
const GoogleStrategy  = require('passport-google-oauth20').Strategy
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = require('../config')

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/api/user/auth/google/callback',
},  async(req,accessToken, refreshToken, profile, done) => {
    try {
        userProfile=profile;
        console.log(userProfile)
        done(null, userProfile);
    } catch (error) {
        done(error, false)
    }
}))
