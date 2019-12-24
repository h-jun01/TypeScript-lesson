"use strict";
//データ型
var Cat = /** @class */ (function () {
    function Cat(age, weight) {
        this.age = age;
        this.weight = weight;
    }
    Cat.prototype.getAge = function () {
        return this.age;
    };
    Cat.prototype.getWeight = function () {
        return this.weight;
    };
    return Cat;
}());
var myCat = new Cat(3, 5.1);
var Message = "うちの猫は" + myCat.getAge() + "歳で、体重は" + myCat.getWeight() + "kgです";
document.write(Message, "<br/>");
var Monster = /** @class */ (function () {
    function Monster(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    Monster.prototype.getName = function () {
        return this.name;
    };
    Monster.prototype.getHP = function () {
        return this.hp;
    };
    return Monster;
}());
var aMonster = new Monster("スライム", 5);
document.write(aMonster.getName() + "(lv." + aMonster.getHP() + ")が現れた!", "<br/>");
//列挙型
var SEASONS;
(function (SEASONS) {
    SEASONS[SEASONS["SPRING"] = 0] = "SPRING";
    SEASONS[SEASONS["SUMMER"] = 1] = "SUMMER";
    SEASONS[SEASONS["AUTUMN"] = 2] = "AUTUMN";
    SEASONS[SEASONS["WINTER"] = 3] = "WINTER";
})(SEASONS || (SEASONS = {}));
var season = SEASONS.SUMMER;
if (season == SEASONS.SUMMER) {
    document.write("夏", "<br/>");
}
//配列
var fruits = ["りんご", "ぱいなっぷる", "きうい", "みかん"];
document.write(fruits[3], "<br/>");
//スプレッド演算子
var paramtest = function (age) {
    var restpram = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restpram[_i - 1] = arguments[_i];
    }
    return ("first item of restparam: " +
        restpram[0] +
        "length of restparam: " +
        restpram.length);
};
document.write(paramtest(1, 2, 3, 4, 5), "<br>");
//ジェネリクス
var parrot = function (data) {
    var ret = data;
    return ret;
};
document.write(parrot("ジェネリクス"));
