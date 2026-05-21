import { IncomingMessage, ServerResponse } from "http";
import { podcastService } from "../services/podcast-service";

export const podcastController = {
  async listPodcasts(req: IncomingMessage, res: ServerResponse) {
    try {
      // Separa a URL para identificar parâmetros de busca (?category=Tecnologia)
      const [, queryString] = req.url?.split("?") || [];
      
      const data = await podcastService.getPodcasts(queryString);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Erro interno no servidor" }));
    }
  }
};