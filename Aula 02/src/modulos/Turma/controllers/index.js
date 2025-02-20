import { turmas } from "../../../config/database.js";
import { Turma } from "../models/index.js";

export class TurmaController {
  criar(cod, nome, sala, capacidade) {
    try {
      const novaTurma = new Turma(cod, nome, sala, capacidade);
      turmas.push(novaTurma);
      console.table(novaTurma);
    } catch (error) {
      console.error("Erro ao tentar criar turma", error.message);
    }
  }

  editar(cod, novoNome, novaSala, novaCapacidade) {
    try {
      const turma = turmas.find((turma) => turma.getCod === cod);
      if (!turma) {
        return console.log("Turma não encontrada!");
      }
      turma.nome = novoNome || turma.nome;
      turma.sala = novaSala || turma.sala;
      turma.capacidade = novaCapacidade || turma.capacidade;
    } catch (error) {
      console.error("Erro ao tentar atualizar a turma", error.message);
    }
  }

  deletarPorCodigo(cod) {
    try {
      const index = turmas.findIndex((turma) => turma.getCod === cod);
      if (index === -1) {
        return console.log("Turma não encontrada");
      }
      turmas.splice(index, 1);
      console.log("Turma excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao tentar excluir a turma", error.message);
    }
  }

  deletarTodas() {
    try {
      turmas.length = 0;
      console.log("Todas as turmas foram excluídas!");
    } catch (error) {
      console.error("Erro ao tentar excluir todas as turmas", error.message);
    }
  }

  listarPorCodigo(cod) {
    try {
      const turma = turmas.find((turma) => turma.getCod === cod);
      if (!turma) {
        return console.log("Turma não encontrada");
      }
      console.table(turma);
    } catch (error) {
      console.error("Erro ao tentar exibir a turma", error.message);
    }
  }

  listarTodas() {
    try {
      if (turmas.length === 0) {
        return console.log("Não existem turmas a serem exibidas!");
      }
      console.table(turmas);
    } catch (error) {
      console.error("Erro ao tentar exibir as turmas", error.message);
    }
  }
}
