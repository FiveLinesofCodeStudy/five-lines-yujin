enum RawTile {
    AIR,
    FLUX,
    UNBREAKABLE,
    PLAYER,
    STONE, FALLING_STONE,
    BOX, FALLING_BOX,
    KEY1, LOCK1,
    KEY2, LOCK2
}

// enum FallingState {
//     FALLING, RESTING
// }

interface FallingState {
    isFalling(): boolean;
    isResting(): boolean;
    moveHorizontal(tile: Tile, dx: number): void;
    boxMoveHorizontal(dx: number): void;
}

interface Input {
    isRight(): boolean;
    isLeft(): boolean;
    isUp(): boolean;
    isDown(): boolean;
    handle(): void;
}

interface Tile {
    isFlux(): boolean;
    isUnbreakable(): boolean;
    isAir(): boolean;
    isPlayer(): boolean;
    isFallingStone(): boolean;
    isFallingBox(): boolean;
    isKey1(): boolean;
    isLock1(): boolean;
    isKey2(): boolean;
    isLock2(): boolean;
    color(g: CanvasRenderingContext2D): void;
    draw(g: CanvasRenderingContext2D, x:number, y:number): void;
    isEdible(): boolean;
    isPushable(): boolean;
    moveHorizontal(dx: number): void;
    moveVertical(dy: number): void;
    isStony(): boolean;
    isBoxy(): boolean;
}