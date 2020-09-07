const request = require("supertest");
const healthCheck = require("./app.healthcheck");
const app = require("./app.server");

describe("Unit testing the /healthz route", () => {
  let server;
  beforeEach(() => {
    server = app.listen();
  });
  afterEach(() => {
    server.close();
  });

  it("should return OK status", (done) => {
    healthCheck(server);
    request(server)
      .get("/healthz")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          {
            0: [
              {
                id: expect.any(String),
                name: "SRE & Release 1",
              },
              {
                id: expect.any(String),
                name: "SRE & Release 2",
              },
              {
                id: expect.any(String),
                name: "Platform & Tools 1",
              },
              {
                id: expect.any(String),
                name: "Platform & Tools 2",
              },
              {
                id: expect.any(String),
                name: "Payroll 1",
              },
              {
                id: expect.any(String),
                name: "Payroll 2",
              },
              {
                id: expect.any(String),
                name: "Payroll 3",
              },
              {
                id: expect.any(String),
                name: "Payroll Integra",
              },
              {
                id: expect.any(String),
                name: "QA",
              },
              {
                id: expect.any(String),
                name: "Developers",
              },
              {
                id: expect.any(String),
                name: "People Ops",
              },
              {
                id: expect.any(String),
                name: "Runa All Hands",
              },
              {
                id: expect.any(String),
                name: "Coffee Break",
              },
              {
                id: expect.any(String),
                name: "Random Chats",
              },
              {
                id: expect.any(String),
                name: "Pair Programming",
              },
            ],
            status: "ok",
          },
        );
      })
      .then(done);
  });
});
