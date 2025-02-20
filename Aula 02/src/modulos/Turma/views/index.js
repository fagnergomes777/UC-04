import prompt from "prompt-sync";
import { TurmaController } from "../controllers/index";

const turmaController = new TurmaController();
const input = prompt();

export class TurmaView {
  listarTurmas() {
    console.log("\nLista de turmas:");
    turmaController.listarTodas();
  }
  criarTurma() {
    const cod = input("Digite o código da turma: ");
    const nome = input("Digite o nome da turma: ");
    const sala = input("Digite a sala da turma: ");
    const capacidade = input("Digite a capacidade da turma: ");
    turmaController.criar(cod, nome, sala, capacidade);
  }
  editarTurma() {
    const codEditar = input("Digite o código da turma: ");
    const novoNome = input("Novo nome (deixe em branco para manter o mesmo): ") || null;
    const novaSala = input("Nova sala (deixe em branco para manter a mesma): ") || null;
    const novaCapacidade = input("Nova capacidade (deixe em branco para manter a mesma): ") || null;
    turmaController.editar(codEditar, novoNome, novaSala, novaCapacidade);
  }
  excluirPorCodigo() {
    const codDeletar = input("Digite o código da turma a ser deletada: ");
    turmaController.deletarPorCodigo(codDeletar);
  }
  excluirTodas() {
    turmaController.deletarTodas();
  }
}
