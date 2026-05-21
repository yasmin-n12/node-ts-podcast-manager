import { IncomingMessage, ServerResponse } from "http";
import { podcastController } from "./controllers/podcast-controller";

export const app = async (req: IncomingMessage, res: ServerResponse) => {
  const [baseUrl] = req.url?.split("?") || [];

  // Rota: GET /api/podcasts
  if (req.method === "GET" && baseUrl === "/api/podcasts") {
    await podcastController.listPodcasts(req, res);
  } else {
    // Rota padrão para caminhos não encontrados (404)
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Rota não encontrada" }));
  }
};