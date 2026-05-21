import { podcastRepository } from "../repositories/podcast-repository";

export const podcastService = {
  // Retorna a lista completa ou filtra se houver termo de busca (Query Params)
  async getPodcasts(queryString?: string) {
    if (queryString) {
      const [key, val] = queryString.split("=");
      if (key === "category" && val) {
        return await podcastRepository.findByCategory(decodeURIComponent(val));
      }
    }
    return await podcastRepository.findAll();
  }
};