'use strict'

let result = ''
let global_result = ''
let operator = ''
let first_number = ''
let final_result = ''

$(document).ready(function () {

    function erase() {
        $("#operator_add").css('display', 'none');
        $("#operator_subtract").css('display', 'none');
        $("#operator_multiply").css('display', 'none');
        $("#operator_divide").css('display', 'none');
    }

    function show() {
        $("#operator_add").css('display', 'inline');
        $("#operator_subtract").css('display', 'inline');
        $("#operator_multiply").css('display', 'inline');
        $("#operator_divide").css('display', 'inline');
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
                final_result = calculate(operator, first_number, global_result)
                $("#global_result").html(final_result)
                first_number = ''
                result = ''
                operator = ''
                global_result = ''
                final_result = ''
                erase()
                break
        }      
    })
})