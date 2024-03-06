function createObj(value) {
    // value 값을 사용하여 객체 생성
    const obj = {
        value: value
    };

    return obj; // 생성된 객체 반환
}

console.log(createObj(3));
console.log(createObj("hello"));
