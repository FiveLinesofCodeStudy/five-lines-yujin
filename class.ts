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

class Flux implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return true;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#ccffcc";
    }
}

class Unbreakable implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return true;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#999999";
    }
}

class Air implements Tile {
    isAir(): boolean {
        return true;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {}
}

class Player implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return true;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {}
}

class Stone implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return true;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#0000cc";
    }
}

class FallingStone implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return true;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#0000cc";
    }
}

class Box implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return true;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#8b4513";
    }
}

class FallingBox implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return true;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#8b4513";
    }
}

class Key1 implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return true;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#ffcc00";
    }
}

class Lock1 implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return true;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#ffcc00";
    }
}

class Key2 implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return true;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return false;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#00ccff";
    }
}

class Lock2 implements Tile {
    isAir(): boolean {
        return false;
    }

    isBox(): boolean {
        return false;
    }

    isFallingBox(): boolean {
        return false;
    }

    isFallingStone(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKey1(): boolean {
        return false;
    }

    isKey2(): boolean {
        return false;
    }

    isLock1(): boolean {
        return false;
    }

    isLock2(): boolean {
        return true;
    }

    isPlayer(): boolean {
        return false;
    }

    isStone(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#00ccff";
    }
}