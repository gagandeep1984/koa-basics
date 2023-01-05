const uniqid = require('uniqid');

let events = require('../../events.json');

const createEvent = async (ctx) => {
    const { title, description, date_start, date_end, image_url, venue, } = ctx.request.body;
    console.log("Body : ", ctx.request.body);
    // 1. perform validation 

    // 2. register event.. 
    let event = { id: uniqid(), ...ctx.request.body };
    console.log("New Event : ", event);
    events.push(event);

    ctx.status = 201;
    ctx.body = event
}

const fetchEvents = async (ctx) => {
    const { offset, limit } = ctx.request.query

    let result = events; // [];

    // if (!offset && !limit) {
    //     // result = events[offset]
    // }
    // else
    //     result = events;

    ctx.status = 200;
    ctx.body = result;
}

const deleteEvent = async (ctx) => { }

const fetchEventById = async (ctx) => {
    ctx.body = "found " + ctx.params.id
}

const updateEvent = async (ctx) => { }

module.exports = {
    createEvent,
    fetchEvents, fetchEventById,
    deleteEvent,
    updateEvent,
};
