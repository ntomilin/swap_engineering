function myfunc() {
	let a = 0b100;
	let b = 0b101;

	// console.log(a)
	// console.log(b);

	a ^= b ^ (b ^= a ^= b);

	console.log(a)
	console.log(b);
}

myfunc();
