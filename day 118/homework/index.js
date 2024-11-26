class LibraryItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.isAvailable = true;
    }

    borrowItem() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You have borrowed "${this.title}".`);
        } else {
            console.log(`"${this.title}" is currently not available.`);
        }
    }

    returnItem() {
        this.isAvailable = true;
        console.log(`You have returned "${this.title}".`);
    }
}


class Book extends LibraryItem {
    constructor(title, year, author, genre) {
        super(title, year);
        this.author = author;
        this.genre = genre;
    }

    getSummary() {
        return `${this.title} by ${this.author} (${this.year}) - Genre: ${this.genre}`;
    }
}


class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
        super(title, year);
        this.issueNumber = issueNumber;
    }

    getSummary() {
        return `${this.title} (Issue #${this.issueNumber}) - Published in ${this.year}`;
    }
}
