import { server } from "./socket";

server.listen(8000, () => {
  console.log("localhost: http://localhost:8000/");
});
