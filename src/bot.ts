import {BotProcessor} from "./bot-processor/bot-processor";

var botProcessor = new BotProcessor();
const port = process.env.PORT || 3000;
botProcessor.listen(port, () => {
  console.log(`Server is ready to listen on port ${port}`);
});
botProcessor.start();
