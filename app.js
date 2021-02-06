const prompt = require('prompt');

const fibonacci_num_recursive = (num) => {
    return num < 1 ? 0
        : num <= 2 ? 1
        : fibonacci_num_recursive(num - 1) + fibonacci_num_recursive(num - 2);
}

const fibonacci_series_recursive = (num) => {
    if (num === 1) {
        return [1, 2];//[0, 1];
    } 
    else {
        let s = fibonacci_series_recursive(num - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

const generateFibonacci = async () => {
    let n1 = 1, n2 = 2, nextTerm, sum = 0, series_arr = [];
    let series_str = '';

    console.log('Enter the length of Fibonacci Series: ');
    prompt.start();
    prompt.get(['length'], function (err, result) {
        if(err) return;

        // console.log(fibonacci_num_recursive(result.length));
        // console.log(fibonacci_series_recursive(result.length));

        console.log('Generating the Series of length: %d', result.length);
        console.log('...........\n');

        for (let i = 1; i <= result.length; i++) {
            series_arr.push(n1)
            series_str += n1 + ', ';
            sum += n1;
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        console.log('Fibonacci Series: %s', series_arr);
        console.log('Series Sum: %d', sum);
    })
}
 
generateFibonacci();
