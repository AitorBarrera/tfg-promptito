export interface Filters {
  tituloPrompt: string | null;
  nombreAutor: string | null;
  contenidoPrompt: string | null;
  orderBy: string | null;
  idLlm: number | null;
  idPromptTematica: number | null;
  idUsuarioFavorito: number | null;
  esFavorito: boolean;
}

export interface Prompt {
  id: number;
  titulo: string;
  descripcion: string;
  fechaCreacion: string;
  promptVariantes: PromptVariante[];
  usuarioCreador: Usuario;
  llms: LLM[];
  tematicas: Tematica[];
  enFavoritosDe: Usuario[];
}

export interface PromptVariante {
  id: number;
  nombre: string;
  textoPrompt: string;
  promptId: number;
}

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  passwordHash: string;
  avatarUrl: string | null;
  estaActivo: boolean;
}

export interface UsuarioPost {
  nombre: string | null;
  email: string | null;
  passwordHash: string | null;
  avatarUrl: string | null;
  idClerk: string | null;
  estaActivo: boolean | null;
}

export interface LLM {
  id: number;
  nombre: string;
  version: string;
}

export interface Tematica {
  id: number;
  nombre: string;
}
