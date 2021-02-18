function Name(f,l){
	let obj = Object.create(Name.prototype)
	obj.first_name = f
	obj.last_name = l
	return obj
}
Name.prototype.full_name = function(){
	return this.first_name+' '+this.last_name
}

const obj = Name('Keshav','Singh')
console.log(obj.full_name())