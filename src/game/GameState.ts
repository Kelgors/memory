export class GameState {
  public tryCount: number = 0;
  public startedAt: Date | null = null;
  public stoppedAt: Date | null = null;

  reset() {}

  restart() {
    this.tryCount = 0;
    this.startedAt = new Date();
    this.stoppedAt = null;
  }

  stop() {
    if (!this.startedAt) throw new Error('Cannot stop without starting');
    this.stoppedAt = new Date();
  }

  getDuration(): number {
    if (!this.stoppedAt || !this.startedAt) return NaN;
    return this.stoppedAt.getTime() - this.startedAt.getTime();
  }

  isReady() {
    return true;
  }

  isWinning(): boolean {
    return false;
  }
}

export const gameState = new GameState();
