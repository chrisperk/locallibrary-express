var mongoose = require('./mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 }
});

// Virtual for Genre's url
GenreSchema
    .virtual('url')
    .get(function() {
        return '/catolog/genre/' + this._id;
    });

module.exports = mongoose.model('Genre', GenreSchema);