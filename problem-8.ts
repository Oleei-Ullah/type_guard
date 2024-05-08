class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}

  displayInfo(): void {
    console.log(`Your car model is:  ${this.year} ${this.brand} ${this.model}`);
  }
}

