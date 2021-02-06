class SampleClass
{
	constructor(param1)
	{
		this.passedParam1 = param1
	}
}
function myNew(Class,param1)
{
	return new Class(param1)
}

const obj = myNew(SampleClass,'Keshav')
console.log(obj.passedParam1)