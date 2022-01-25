"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/names", async function (request, reply) {
    return [
      {
        name: "Astra Wiggins",
      },
      {
        name: "Kitra Pitts",
      },
      {
        name: "James Mcfadden",
      },
      {
        name: "Grant Jimenez",
      },
      {
        name: "Shaeleigh Morin",
      },
    ];
  });
};
