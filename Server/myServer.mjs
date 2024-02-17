import fastify from "fastify";
import formBodyPlugin from "fastify-formbody";
import cors from "fastify-cors";

const server = fastify();
server.register(formBodyPlugin);

server.register(cors, {
  origin: "*",
  methods: ["POST"],
});

server.post("/amountUniqueWords", (request, reply) => {
  const arrayOfStrings = getArrayOfWordsFromRequest(request.body.text);

  const uniqWords = new Set(arrayOfStrings);

  return reply.send(uniqWords.size);
});

server.post("/wordStatistic", (request, reply) => {
  const arrayOfStrings = getArrayOfWordsFromRequest(request.body.text);
  const wordStatistic = new Map();
  arrayOfStrings.forEach((element) => {
    if (element) {
      element = element.toLowerCase();
      if (!wordStatistic.has(element)) {
        wordStatistic.set(element, 1);
      } else {
        wordStatistic.set(element, wordStatistic.get(element) + 1);
      }
    }
  });

  const result = Array.from(wordStatistic.entries());

  return reply.send(result);
});

server.get("/", (request, reply) => {
  return reply.send("GET request received");
});

server.listen({ port: 3500 }).then(() => console.log("Server is working"));

function getArrayOfWordsFromRequest(text) {
  const userInput = text;
  const separator = " ";
  let arrayOfStrings = userInput.split(separator);
  arrayOfStrings = arrayOfStrings
    .filter((el) => el)
    .map((el) => el.toLowerCase());
  return arrayOfStrings;
}
