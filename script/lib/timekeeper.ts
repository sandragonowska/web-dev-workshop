type timekeeperCallback = (elapsedMin: number, elapsedSec: number) => void

interface Timekeeper {
    registerCallback: (callback: timekeeperCallback) => Timekeeper
    reset: () => void
}
export class KeepTheTime implements Timekeeper {
    private callback: timekeeperCallback;
    private startTime: number;

    constructor() {
        this.startTime = Date.now();
        setInterval(() => this.onInterval(), 1000);
    }

    registerCallback(callback: timekeeperCallback): Timekeeper {
        this.callback = callback;
        return this;
    }

    reset(){}

    private onInterval() {
        const nowDate = Date.now();
        const duration = (nowDate-this.startTime)/1000;
        const sec = Math.round(duration % 60);
        const min = Math.round((duration - sec) / 60);

        if(this.callback) {
            this.callback(min, sec);
        }
    }
}