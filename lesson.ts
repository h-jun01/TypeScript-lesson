//データ型
let Message: string;
class Cat {
  private age: number;
  private weight: number;

  constructor(age: number, weight: number) {
    this.age = age;
    this.weight = weight;
  }

  public getAge() {
    return this.age;
  }

  public getWeight() {
    return this.weight;
  }
}
let myCat = new Cat(3, 5.1);
Message =
  "うちの猫は" + myCat.getAge() + "歳で、体重は" + myCat.getWeight() + "kgです";
document.write(Message, "<br/>");

class Monster {
  private name: string;
  private hp: number;

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  public getName() {
    return this.name;
  }

  public getHP() {
    return this.hp;
  }
}
let aMonster = new Monster("スライム", 5);
document.write(
  aMonster.getName() + "(lv." + aMonster.getHP() + ")が現れた!",
  "<br/>"
);

//列挙型
enum SEASONS {
  SPRING,
  SUMMER,
  AUTUMN,
  WINTER
}

let season: SEASONS;
season = SEASONS.SUMMER;

if (season == SEASONS.SUMMER) {
  document.write("夏", "<br/>");
}

//配列
let fruits: string[] = ["りんご", "ぱいなっぷる", "きうい", "みかん"];
document.write(fruits[3], "<br/>");

//スプレッド演算子
const paramtest = (age: number, ...restpram: number[]): string => {
  return (
    "first item of restparam: " +
    restpram[0] +
    "length of restparam: " +
    restpram.length
  );
};
document.write(paramtest(1, 2, 3, 4, 5), "<br>");

//ジェネリクス
const parrot = <T>(data: T): T => {
  let ret: T;
  ret = data;
  return ret;
};
document.write(parrot<string>("ジェネリクス"));
