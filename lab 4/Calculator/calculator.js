var answer= document.getElementById("Answer");

function EnterNumber(number)
{

answer.value+=number;
}

function EnterOperator(operator)
{

answer.value+=operator;
}

function EnterEqual()
{
    answer.value=eval(answer.value)
}

function EnterClear()
{
    answer.value=""
}