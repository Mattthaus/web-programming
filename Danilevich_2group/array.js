let arr = new Array();
let num = 0;
while(true)
{
	num = prompt('Введи число в массив (одно)');
	if (num == "") break;
	else arr.push(parseInt(num));
}
alert('Твой массив: ' + arr);
for (let i = 1; i < arr.length; i++)
{
	let x = arr[i];
	let j = i-1;
	while ((j >= 0) && (arr[j] > x))
	{
		arr[j+1] = arr[j];
		j--;
	}
	arr[j+1] = x;
}
alert('Сортированный массив: ' + arr);
alert('Минимальный элемент:' + arr[0]);
alert('Максимальный элемент:' + arr[arr.length-1]);
function arraySum(arr){
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
	    sum += arr[i];
	    }
	return sum;
}
arraySum(arr);
alert('Сумма членов массива:' + arraySum(arr));
