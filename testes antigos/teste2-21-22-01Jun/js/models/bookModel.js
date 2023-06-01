export class Books {
    title = "";
    genre = "";
    authors = [];
    nPages = 0;
    currentPage = 0;

    constructor(title, genre, authors, nPages, currentPage = 0){
        this.title = title;
        this.genre = genre;
        this.authors = authors;
        this.nPages = nPages;
        this.currentPage = currentPage;
    }

    get title(){
        return this.title
    }
    set title(newTitle){
        this.title = newTitle
    }

    get genre(){
        return this.genre
    }
    set genre(newGenre){
        this.genre = newGenre
    }

    get authors(){
        return this.authors
    }
    set authors(newAuthor){
        this.authors = newAuthor
    }

    get nPages(){
        return this.nPages
    }
    set nPages(number){
        if (number > 0){
            this.nPages = number
        } else {
            throw Error("Invalid number total of pages")
        }
        
    }

    get currentPage() {
        return this._currentPage;
    }
    set currentPage(page) {
        if (page < 0 || page > this.totalPages) {
            throw Error("Invalid page number");
        } 
        else {
           this._currentPage = page; 
        }
    }

    forward(){
        if (this.currentPage === this.nPages) {
            throw Error('Book is already finished');
    
        } else {
            this.currentPage += 1;
        }
    }
    
    back(){
        if (this._currentPage === 0) {
            throw Error('You are already on the beggining of the book');
        } else {
            this.currentPage -= 1
        }
    }
    
    backAndForward(move,qty){
        if(qty < 0){
            throw Error("Number of pages invalid")
        }
    
        if (move === "forward"){
            if ((this.currentPage + qty) > this.nPages){
                throw Error("Invalid movement")
            }
            else {
                this.currentPage += qty
            }
            
        } else if (move === "back"){
            if ((this.currentPage - qty) < 0){
                throw Error("Invalid movement")
            }
            else {
                this.currentPage -= qty
            }
        }
        else {
            throw Error("Movement not valid")
        }
    }
}

