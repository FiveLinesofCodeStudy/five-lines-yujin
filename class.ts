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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#ccffcc";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return true;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
        moveToTile(playerx + dx, playery);
    }

    moveVertical(dy: number): void {
        moveToTile(playerx, playery + dy);
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#999999";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    }

    isEdible(): boolean {
        return true;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
        moveToTile(playerx + dx, playery);
    }

    moveVertical(dy: number): void {
        moveToTile(playerx, playery + dy);
    }
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
    }
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#0000cc";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return true;
    }

    moveHorizontal(dx: number): void {
        if (map[playery][playerx + dx + dx].isAir() && !map[playery + 1][playerx + dx].isAir()) {
            map[playery][playerx + dx + dx] = map[playery][playerx + dx];
            moveToTile(playerx + dx, playery);
        }
    }

    moveVertical(dy: number): void {
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#0000cc";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#8b4513";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return true;
    }
    moveHorizontal(dx: number): void {
        if (map[playery][playerx + dx + dx].isAir() && !map[playery + 1][playerx + dx].isAir()) {
            map[playery][playerx + dx + dx] = map[playery][playerx + dx];
            moveToTile(playerx + dx, playery);
        }
    }

    moveVertical(dy: number): void {
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#8b4513";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#ffcc00";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
        removeLock1()
        moveToTile(playerx + dx, playery);
    }

    moveVertical(dy: number): void {
        removeLock1()
        moveToTile(playerx, playery + dy);
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#ffcc00";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#00ccff";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
        removeLock2()
        moveToTile(playerx + dx, playery);
    }

    moveVertical(dy: number): void {
        removeLock2()
        moveToTile(playerx, playery + dy);
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

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#00ccff";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
    }

    moveVertical(dy: number): void {
    }

}