'use strict'

let result = ''
let global_result = ''
let operator = ''
let first_number = ''
let final_result = ''

$(document).ready(function () {

    function erase() {
        $("#operator_add, #operator_subtract, #operator_multiply, #operator_divide").hide();
    }

    function show() {
        $("#operator_add, #operator_subtract, #operator_multiply, #operator_divide").css('display', 'inline');
    }

    function calculate(operator, a, b) {
        switch (operator) {
            case '+':
                return Number(a) + Number(b)
            case '-':
                return Number(a) - Number(b)
            case '*':
                return Number(a) * Number(b)
            case '/':
                return Number(a) / Number(b)
        }
    }

    // keyboard try
    // window.addEventListener('keydown', function(event) {
    //     switch (event.keyCode) {
    //         case 49:
    //             $("#global_result").html(Number(result + '1'));
    //             result = result + '1'
    //             global_result = Number(result)
    //             break

    //         case 50:
    //             $("#global_result").html(Number(result + '2'));
    //             result = result + '2'
    //             global_result = Number(result)
    //             break
            
    //         case 51:
    //             $("#global_result").html(Number(result + '3'));
    //             result = result + '3'
    //             global_result = Number(result)
    //             break
            
    //         case 52:
    //             $("#global_result").html(Number(result + '4'));
    //             result = result + '4'
    //             global_result = Number(result)
    //             break
            
    //         case 53:
    //             $("#global_result").html(Number(result + '5'));
    //             result = result + '5'
    //             global_result = Number(result)
    //             break
            
    //         case 54:
    //             $("#global_result").html(Number(result + '6'));
    //             result = result + '6'
    //             global_result = Number(result)
    //             break
            
    //         case 55:
    //             $("#global_result").html(Number(result + '7'));
    //             result = result + '7'
    //             global_result = Number(result)
    //             break
            
    //         case 56:
    //             $("#global_result").html(Number(result + '8'));
    //             result = result + '8'
    //             global_result = Number(result)
    //             break
            
    //         case 57:
    //             $("#global_result").html(Number(result + '9'));
    //             result = result + '9'
    //             global_result = Number(result)
    //             break
            
    //         case 48:
    //             $("#global_result").html(Number(result + '0'));
    //             result = result + '0'
    //             global_result = Number(result)
    //             break
            
    //         case 67:
    //             $("#global_result").html('0');
    //             first_number = ''
    //             result = ''
    //             operator = ''
    //             global_result = ''
    //             final_result = ''
    //             show()
    //             break
            
    //         case 107:
    //             $("#global_result").html('+');
    //             operator = '+'
    //             first_number = global_result
    //             result = ''
    //             global_result = ''
    //             erase()
    //             break
            
    //         case 109:
    //             $("#global_result").html('-');
    //             operator = '-'
    //             first_number = global_result
    //             result = ''
    //             global_result = ''
    //             erase()
    //             break
            
    //         case 106:
    //             $("#global_result").html('*');
    //             operator = '*'
    //             first_number = global_result
    //             result = ''
    //             global_result = ''
    //             erase()
    //             break
            
    //         case 111:
    //             $("#global_result").html('/');
    //             operator = '/'
    //             first_number = global_result
    //             result = ''
    //             global_result = ''
    //             erase()
    //             break
    //     }        
    // }, false);

    $('.click-me').click(function () {
    
        switch ($(this).attr('id')) {
                     
            case 'digit_1':
                $("#global_result").html(Number(result + '1'));
                result = result + '1'
                global_result = Number(result)
                break

            case 'digit_2':
                $("#global_result").html(Number(result + '2'));
                result = result + '2'
                global_result = Number(result)
                break

            case 'digit_3':
                $("#global_result").html(Number(result + '3'));
                result = result + '3'
                global_result = Number(result)
                break

            case 'digit_4':
                $("#global_result").html(Number(result + '4'));
                result = result + '4'
                global_result = Number(result)
                break
            
            case 'digit_5':
                $("#global_result").html(Number(result + '5'));
                result = result + '5'
                global_result = Number(result)
                break

            case 'digit_6':
                $("#global_result").html(Number(result + '6'));
                result = result + '6'
                global_result = Number(result)
                break

            case 'digit_7':
                $("#global_result").html(Number(result + '7'));
                result = result + '7'
                global_result = Number(result)
                break
            
            case 'digit_8':
                $("#global_result").html(Number(result + '8'));
                result = result + '8'
                global_result = Number(result)
                break

            case 'digit_9':
                $("#global_result").html(Number(result + '9'));
                result = result + '9'
                global_result = Number(result)
                break

            case 'digit_0':
                $("#global_result").html(Number(result + '0'));
                result = result + '0'
                global_result = Number(result)
                break
            
            case 'coma':
                $("#global_result").html(String(result + '.'));
                result = result + '.'
                global_result = Number(result)
                break
            
            case 'reset_button':
                $("#global_result").html('0');
                first_number = ''
                result = ''
                operator = ''
                global_result = ''
                final_result = ''
                show()
                break
            
            case 'operator_add':
                $("#global_result").html('+');
                operator = '+'
                first_number = global_result
                result = ''
                global_result = ''
                erase()
                break
            
            case 'operator_subtract':
                $("#global_result").html('-');
                operator = '-'
                first_number = global_result
                result = ''
                global_result = ''
                erase()
                break

            case 'operator_multiply':
                $("#global_result").html('*');
                operator = '*'
                first_number = global_result
                result = ''
                global_result = ''
                erase()
                break

            case 'operator_divide':
                $("#global_result").html('/');
                operator = '/'
                first_number = global_result
                result = ''
                global_result = ''
                erase()
                break
            
            case 'result_button':
                show()
                if (first_number === undefined || global_result === undefined) {
                    alert('Źle wprowadzona kolejność')
                    $("#global_result").html('0');
                    first_number = ''
                    result = ''
                    operator = ''
                    global_result = ''
                    final_result = ''
                    break
                } else {
                    final_result = calculate(operator, first_number, global_result)
                    $("#global_result").html(final_result)
                    first_number = ''
                    result = ''
                    operator = ''
                    global_result = final_result
                    final_result = ''
                    show()
                    break   
                }     
        }      
    })
})