class Right implements Input {
    isDown(): boolean {
        return false;
    }
    isLeft(): boolean {
        return false;
    }
    isRight(): boolean {
        return true;
    }
    isUp(): boolean {
        return false;
    }

    handle() {
        moveHorizontal(1);
    }
}

class Left implements Input {
    isDown(): boolean {
        return false;
    }

    isLeft(): boolean {
        return true;
    }

    isRight(): boolean {
        return false;
    }

    isUp(): boolean {
        return false;
    }

    handle() {
        moveHorizontal(-1);
    }
}

class Up implements Input {
    isDown(): boolean {
        return false;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return false;
    }

    isUp(): boolean {
        return true;
    }

    handle() {
        moveVertical(-1);
    }
}

class Down implements Input {
    isDown(): boolean {
        return true;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return false;
    }

    isUp(): boolean {
        return false;
    }

    handle() {
        moveVertical(1);
    }
}