import fs from "fs";
import path from "path";
import { Podcast } from "../contracts/podcast-interface";

const filePath = path.join(__dirname, "../models/podcasts.json");

export const podcastRepository = {
  // Retorna todos os podcasts do arquivo JSON
  async findAll(): Promise<Podcast[]> {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  },

  // Busca podcasts por categoria
  async findByCategory(category: string): Promise<Podcast[]> {
    const data = fs.readFileSync(filePath, "utf-8");
    const podcasts: Podcast[] = JSON.parse(data);
    return podcasts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }
};