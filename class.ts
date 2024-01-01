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

class Falling implements FallingState {
    isFalling() {
        return true;
    }
    isResting() {
        return false;
    }

    moveHorizontal(tile: Tile, dx: number) {
    }

    boxMoveHorizontal(dx: number) {}
}

class Resting implements FallingState {
    isFalling() {
        return false;
    }
    isResting() {
        return true;
    }

    moveHorizontal(tile: Tile, dx: number) {
        if (map[playery][playerx+dx+dx].isAir() && !map[playery+1][playerx+dx].isAir()) {
            map[playery][playerx+dx+dx] = tile;
            moveToTile(playerx+dx, playery);
        }
    }

    boxMoveHorizontal(dx: number) {
        if (map[playery][playerx + dx + dx].isAir() && !map[playery + 1][playerx + dx].isAir()) {
            map[playery][playerx + dx + dx] = map[playery][playerx + dx];
            moveToTile(playerx + dx, playery);
        }
    }
}

class FallStrategy {
    constructor(private falling: FallingState) {
    }

    getFalling() {
        return this.falling;
    }

    update(tile: Tile ,x: number, y: number) {
        this.falling = map[y+1][x].isAir() ? new Falling() : new Resting();
        this.drop(tile, x, y);
    }

    private drop(tile: Tile, x: number, y: number) {
        if (this.falling.isFalling()) {
            map[y+1][x] = tile;
            map[y][x] = new Air();
        }
    }
}

class RemoveLock1 implements RemoveStrategy {
    check(tile: Tile) {
        return tile.isLock1();
    }
}

class RemoveLock2 implements RemoveStrategy {
    check(tile: Tile) {
        return tile.isLock2();
    }
}

class KeyConfiguration {
    constructor(private color: string, private _1: boolean, private removeStrategy: RemoveStrategy) {}

    getColor() {
        return this.color;
    }

    is1() {
        return this._1;
    }

    getRemoveStrategy() {
        return this.removeStrategy;
    }
}

class Flux implements Tile {
    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
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

    drop() {};
    rest() {};

    canFall(): boolean {
        return false;
    }

    update(x: number, y: number) {};
}

class Unbreakable implements Tile {
    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
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

    canFall(): boolean {
        return false;
    }

    drop() {};
    rest() {};

    update(x: number, y: number) {};
}

class Air implements Tile {
    isAir(): boolean {
        return true;
    }

    isFalling(): boolean {
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

    canFall(): boolean {
        return false;
    }

    drop() {};
    rest() {};

    update(x: number, y: number) {};
}

class Player implements Tile {
    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
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

    canFall(): boolean {
        return false;
    }

    drop() {};
    rest() {};

    update(x: number, y: number) {};
}

class Stone implements Tile {
    private fallStrategy: FallStrategy;
    // private falling: FallingState;
    constructor(private falling: FallingState) {
        // this.falling = falling;
        this.fallStrategy = new FallStrategy(falling);
    }

    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
        return this.fallStrategy.getFalling().isFalling();
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
        // this.falling.moveHorizontal(this, dx);
        this.fallStrategy.getFalling().moveHorizontal(this, dx);
    }

    moveVertical(dy: number): void {
    }

    canFall(): boolean {
        return true;
    }

    drop() {
        this.falling = new Falling();
    };
    rest() {
        this.falling = new Resting();
    };

    update(x: number, y: number) {
        this.fallStrategy.update(this, x,y);
    };
}

class Box implements Tile {
    private fallStrategy: FallStrategy;

    constructor(private falling: FallingState) {
        this.fallStrategy = new FallStrategy(falling);
    }

    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
        return this.fallStrategy.getFalling().isFalling();
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
        this.falling.boxMoveHorizontal(dx);
    }

    moveVertical(dy: number): void {
    }

    canFall(): boolean {
        return true;
    }

    drop() {
        this.falling = new Falling();
    };
    rest() {
        this.falling = new Resting();
    };

    update(x: number, y: number) {
        if (map[y+1][x].isAir()) {
            this.falling = new Falling();
            map[y+1][x] = this;
            map[y][x] = new Air();
        } else if (this.falling.isFalling()) {
            this.falling = new Resting();
        }
    };
}

class Key implements Tile {
    constructor(private keyConf: KeyConfiguration) {};

    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
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

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#ffcc00";
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = this.keyConf.getColor();
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isEdible(): boolean {
        return false;
    }

    isPushable(): boolean {
        return false;
    }

    moveHorizontal(dx: number): void {
        // removeLock1()
        remove(this.keyConf.getRemoveStrategy());
        moveToTile(playerx + dx, playery);
    }

    moveVertical(dy: number): void {
        // removeLock1()
        remove(this.keyConf.getRemoveStrategy());
        moveToTile(playerx, playery + dy);
    }

    canFall(): boolean {
        return false;
    }

    drop() {};
    rest() {};

    update(x:number, y:number) {};
}

class Lock implements Tile {
    constructor(private keyConf: KeyConfiguration) {};

    isAir(): boolean {
        return false;
    }

    isFalling(): boolean {
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
        return this.keyConf.is1();
    }

    isLock2(): boolean {
        return !this.keyConf.is1();
    }

    isPlayer(): boolean {
        return false;
    }

    isUnbreakable(): boolean {
        return false;
    }

    color(g: CanvasRenderingContext2D): void {
        g.fillStyle = "#ffcc00";
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = this.keyConf.getColor();
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

    canFall(): boolean {
        return false;
    }

    drop() {};
    rest() {};

    update(x:number, y:number) {};
}

// class Key2 implements Tile {
//     isAir(): boolean {
//         return false;
//     }
//
//     isFalling(): boolean {
//         return false;
//     }
//
//     isFlux(): boolean {
//         return false;
//     }
//
//     isKey1(): boolean {
//         return false;
//     }
//
//     isKey2(): boolean {
//         return true;
//     }
//
//     isLock1(): boolean {
//         return false;
//     }
//
//     isLock2(): boolean {
//         return false;
//     }
//
//     isPlayer(): boolean {
//         return false;
//     }
//
//     isUnbreakable(): boolean {
//         return false;
//     }
//
//     color(g: CanvasRenderingContext2D): void {
//         g.fillStyle = "#00ccff";
//     }
//
//     draw(g: CanvasRenderingContext2D, x: number, y: number): void {
//         g.fillStyle = "#00ccff";
//         g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
//     }
//
//     isEdible(): boolean {
//         return false;
//     }
//
//     isPushable(): boolean {
//         return false;
//     }
//
//     moveHorizontal(dx: number): void {
//         // removeLock2()
//         remove(new RemoveLock2());
//         moveToTile(playerx + dx, playery);
//     }
//
//     moveVertical(dy: number): void {
//         // removeLock2()
//         remove(new RemoveLock2());
//         moveToTile(playerx, playery + dy);
//     }
//
//     canFall(): boolean {
//         return false;
//     }
//
//     drop() {};
//     rest() {};
//
//     update(x:number, y:number) {};
// }
//
// class Lock2 implements Tile {
//     isAir(): boolean {
//         return false;
//     }
//
//     isFalling(): boolean {
//         return false;
//     }
//
//     isFlux(): boolean {
//         return false;
//     }
//
//     isKey1(): boolean {
//         return false;
//     }
//
//     isKey2(): boolean {
//         return false;
//     }
//
//     isLock1(): boolean {
//         return false;
//     }
//
//     isLock2(): boolean {
//         return true;
//     }
//
//     isPlayer(): boolean {
//         return false;
//     }
//
//     isUnbreakable(): boolean {
//         return false;
//     }
//
//     color(g: CanvasRenderingContext2D): void {
//         g.fillStyle = "#00ccff";
//     }
//
//     draw(g: CanvasRenderingContext2D, x: number, y: number): void {
//         g.fillStyle = "#00ccff";
//         g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
//     }
//
//     isEdible(): boolean {
//         return false;
//     }
//
//     isPushable(): boolean {
//         return false;
//     }
//
//     moveHorizontal(dx: number): void {
//     }
//
//     moveVertical(dy: number): void {
//     }
//
//     canFall(): boolean {
//         return false;
//     }
//
//     drop() {};
//     rest() {};
//
//     update(x:number, y:number) {};
// }