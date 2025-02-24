const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
},
user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true

},
name: {
    type: String,
    required: true
},
state: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
height: {
    type: Number,
    required: true,
    min: 0
},
difficulty: {
    type: String,
    required: true
},
safe_for_jumping: {
    type: Boolean,
    required: true,
    default: false
},
latitude: {
    type: Number,
    required: true
},
longitude: {
    type: Number,
    required: true
},
photo: {
    type: String
}
}, {
    timestamps: true
});

module.exports = mongoose.model('Spot', spotSchema);


{/* <label for="photo">Image URL:</label>
<input type="url" name="photo" value="<%= spot.photo %>" /> */}