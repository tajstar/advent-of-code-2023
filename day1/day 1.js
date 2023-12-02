
const fs = require('fs');

//puzzle one

function get_calibrations(string) {
    const inputs = fs.readFileSync('./day1.txt', 'utf8');
    const calibration_list = inputs.split(/\r?\n/);
    let calibration_values= [];
    let calibration_total = 0;

    calibration_list.forEach((coordinate)=> {
        let matches = coordinate.match(/\d/g);
        console.table(matches);
        first_number = matches[0];
        last_number = matches.splice(-1);
        final_number = Number (first_number + last_number);

        console.log(final_number);
        calibration_values.push(final_number);
    })

    calibration_values.forEach((value) => {
        calibration_total += value;
    });

    return  calibration_total;
}

get_calibrations(inputs)

//puzzle two



function get_calibrations(string) {
    let  inputs = fs.readFileSync('./day1.txt', 'utf8');
    const calibration_list = inputs.split(/\r?\n/);
    let calibration_values= [];
    let calibration_key = {"one": 1,"two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9};
    let calibration_total = 0;

    
    calibration_list.forEach((coordinate)=> {
       
        let matches = [];
       for (let i=0; i < coordinate.length; i++){
        for (let [word, number] of Object.entries(calibration_key)) {
            if (coordinate.slice(i, i + word.length) === word) {
                matches.push(number);
            }
        }
       }

        console.table(matches);
        let first_number = matches[0];
        let last_number = matches.splice(-1);
        let final_number = Number (first_number + last_number);

        console.log(final_number);
        calibration_values.push(final_number);
    })

    calibration_values.forEach((value) => {
        calibration_total += value;
    });

    return  calibration_total;
}

get_calibrations(inputs)
