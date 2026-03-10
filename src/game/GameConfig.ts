export class GameConfig{
    private pace: number;
    private winCon: boolean[];
    private aiCount: number;

    constructor(pace: number, winCon: boolean[], aiCount: number){
        this.pace = pace;
        this.winCon = winCon;
        this.aiCount = aiCount;
    }

    // getters
    get Pace(){
        return this.pace;
    }

    get WinCon(){
        return this.winCon;
    }

    get AICount(){
        return this.aiCount;
    }
}