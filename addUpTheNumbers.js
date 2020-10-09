// returns !num

const addUp =
    function (num) {
        let added = num;
        num++;

        while (!(num == 1)) {
            num -= 1;
            added += num - 1;
        }
        return added;
    };

console.log(addUp(5))