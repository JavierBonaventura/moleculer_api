const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GpsSchema = new Schema({
	pv: {
		type: String
	},
	fh: {
		type: String
	},
	lt: {
		type: Number
	},
	lg: {
		type: Number
	},
	ph: {
		type: Number
	},
	vg: {
		type: Number
	},
	c: {
		type: Number
	},
	tv: [{
		r: { type: Number },
		vo: { type: Number },
		sm: { type: Number },
		me: { type: Number },
		vv: { type: Number },
		vd: { type: Number },
		td: { type: Number },
		tm: { type: Number },
		od: { type: Number },
	}],
	s: [{
		s1: { type: Number },
		s2: { type: String },
		s3: { type: Boolean }
	}],

}, {
	timestamps: true
});


module.exports = mongoose.model("Gps", GpsSchema);