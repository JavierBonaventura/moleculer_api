"use strict";
const Gps  = require('../models/gps');

module.exports = {
	name: "gps",
	settings: {

    },
    
	dependencies: [],	

	actions: {

		create: {
			params: {
				// pv: "string",
				// fh: "string",
				// lt: "number",
				// lg: "number",
				// ph: "number",
				// vg: "number",
				// c: "number",
				// tv:[],
				// s: [],
			},
			async handler(ctx) {
				console.log(ctx.params);
				let { pv, fh, lt, lg, ph, vg, c, tv, r, vo, sm, me, vv, vd, td, tm, od, s, s1, s2, s3 } = ctx.params;
				let gps = new Gps({pv, fh, lt, lg, ph, vg, c, tv, r, vo, sm, me, vv, vd, td, tm, od, s, s1, s2, s3 })
				let data = await gps.save()
				return {status: true, message: "Success", data: data.populate('gps')};
			}
		},

		list: {
			params: {
			},
			async handler(ctx) {
				let data = await Gps.find({}).populate('gps')
				return {status: true, message: "Success", data: data};
			}
		}
	},

	events: {

    },
    
	methods: {

	},

};