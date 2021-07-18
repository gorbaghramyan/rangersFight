abstract class Player {
    health: number;
    _power: number;
    nickname: string;

    constructor(health: number, power: number, nickname = 'Player') {
        this.health = health;
        this._power = power;
        this.nickname = nickname;
    }

    // static classes cannot be overriden
    // abstract start() : void;
    // abstract stop() : void;
    // abstract setConfig() : void;
}

export class Ranger extends Player {
    _wins: number;
    _isFighting: boolean;
    constructor(health = 100, power = 10, nickname: string) {
        super(health, power, nickname);
        this._wins = 0;
        this._isFighting = false;
        console.log('Generated a new ranger', this);
        
    }

    static fight(Ranger1: Ranger, Ranger2: Ranger) {
        while (Ranger1.health > 0 && Ranger2.health > 0) {
            if (Ranger1._isFighting && Ranger2._isFighting) {
                setTimeout(() => {
                    Ranger1.health -= Ranger2.power;
                    Ranger2.health -= Ranger1.power;
                    console.log(Ranger1.nickname + ' health - ' + Ranger1.health);
                    console.log(Ranger2.nickname + ' health - ' + Ranger2.health);
                }, 1500);
            } else break;
        }

        if (Ranger1.health <= 0) {
            console.log(`Misfortune! ${Ranger1.nickname} died`);
            Ranger2.wins++;
        }
        if (Ranger2.health <= 0) {
            console.log(`Misfortune! ${Ranger2.nickname} died`);
            Ranger1.wins++;
        }

        if (Ranger1.health > Ranger2.health) {
            Ranger1.wins++;
            console.log(`The winner is ${Ranger1.nickname}`);

        } else if (Ranger1.health !== Ranger2.health) {
            Ranger2.wins++;
            console.log(`The winner is ${Ranger2.nickname}`);
        } else {
            console.log('Draw')
        }
        Ranger.stop(Ranger1, Ranger2);
    }

    static start(Ranger1: Ranger, Ranger2: Ranger): void {
        console.log('Starting a match');

        Ranger1._isFighting = true;
        Ranger2._isFighting = true;

        Ranger.fight(Ranger1, Ranger2);
    }

    static stop(Ranger1: Ranger, Ranger2: Ranger): void {
        if (Ranger1._isFighting && Ranger2._isFighting) {
            console.log('Match was ended');

            Ranger1._isFighting = false;
            Ranger2._isFighting = false;

            Ranger1.heal();
            Ranger2.heal();
        }
    }

    setConfig(nickname = this.nickname, power = this.power, health = this.health) {
        this.nickname = nickname;
        this.power = power;
        this.health = health;
        console.log('successfully setted configs', this);
        
    }

    heal() {
        this.health = 100;
        console.log('Ranger was healed');
    }

    get power() {
        return this._power;
    }

    set power(p) {
        p < 0 ? console.log('Power must be a non negative number') : this._power = p;
    }

    get wins() {
        return this._wins;
    }

    set wins(x) {
        if (typeof x === 'number') {
            this._wins += x;
        }
    }
}