export class Parceiras {
    nome = "";
    email = "";
    cursos = [];
    maxProjetos = 0;
    #projetos = [];

    constructor(nome, email, cursos, maxProjetos = 3, projetos) {
        this.nome = nome;
        this.email = email;
        this.cursos = cursos;
        this.maxProjetos = maxProjetos;
        this.#projetos = projetos;
    }

    get nome() {
        return this.nome;
    }
    set nome(newNome) {
        this.nome = newNome;
    }

    get email() {
        return this.nome;
    }
    set email(newEmail) {
        this.email = newEmail;
    }

    get cursos() {
        return this.cursos;
    }
    set cursos(newCursos) {
        this.cursos = newCursos;
    }

    get maxProjetos() {
        return this.maxProjetos;
    }
    set maxProjetos(newMax) {
        this.maxProjetos = newMax;
    }

    get projetos() {
        return this.projetos;
    }

    addProject(nomeProjeto) {
        if (this.projetos.length >= this.maxProjetos) {
          throw new Error("Nº máximo de projetos já atingido");
        }
        this.projetos.push(nomeProjeto);
    }

    editNumMaxProjects(nomeProjeto, numMax){
        const projeto = this.projetos.find((proj) => proj.nome === nomeProjeto);
        if (!projeto) {
            throw new Error("Projeto não encontrado");
        }
        projeto.maxProjetos = numMax;
    }
    
}
