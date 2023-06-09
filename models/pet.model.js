var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    petName: {
        type: String
    },
    petSpecies: {
        type: String
    },
    petGender: {
        type: String
    },
    petBreed: {
        type: String
    },
    petWeight: {
        type: Number
    },
    petBirth: {
        type: String
    },
    petCastrated: {
        type: String
    },
    petResponsible: {
        petRespFirstName: {
            type: String
        },
        petRespLastName: {
            type: String
        },
        petRespContact1: {
            type: String
        },
        petRespContact2: {
            type: String
        },
        petRespPrincipal: {
            type: String
        }
    }
});

module.exports = mongoose.model('Pet', petSchema);