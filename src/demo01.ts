class City {
	cName:string
	cLevel:number
	constructor(cName:string, cLevel:number){
		this.cName = cName
		this.cLevel = cLevel
	}

	sayHi(){
		console.log(`hi ${this.cName} your level is ${this.cLevel}`);
	}
}

const a = new City('合肥', 8)

a.sayHi()