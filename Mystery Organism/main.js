// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//create a factory function pAequorFactory() that return an object
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    //add the mutate method inside the returned object
    mutate() {
      let randomBase = Math.floor(Math.random()* this.dna.length);
      let originBase = returnRandBase();
      if(this.dna[randomBase] !== originBase) {
        this.dna[randomBase] = originBase;
      } else {
        this.mutate();
      }
      return this.dna
      },
    // add a method to compare the dna between specimens and print the percentil of the compatibility
    compareDNA(specimen2) {
      let count = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === specimen2.dna[i]){
          count+=1;
        }
      }
      let percent = ((count/this.dna.length)*100).toFixed(2);
      console.log(`Specimen ${this.specimenNum} and Specimen ${specimen2.specimenNum} have ${percent}% DNA in common.`)
    },
   //create a method to determine if the specimen will likely survive or not. to survive C or G must be equal or more than 0.6; 
  willLikelySurvive(){
    let cAndG = this.dna.filter(letter => letter === 'C' || letter === 'G');
    if(cAndG.length/this.dna.length >= 0.6){
      return true;
    } else {
      return false;
        }
      },
//create a complement strand dna. Rules: A match with T, and C match with G
complementStrand(){
  let compStrand = [];
  for(let i = 0; i < this.dna.length; i++){
    if(this.dna[i] === 'A'){
      compStrand.push('T');
    } else if (this.dna[i] === 'T'){
      compStrand.push('A');
    } else if (this.dna[i] === 'C'){
      compStrand.push('G');
    } else if (this.dna[i] === 'G'){
      compStrand.push('C');
    }
  }
  return compStrand;
},
    }
  }

//create 30 instances that responds true to the willlikelysurvive method.

const createSpecies = (num) => {
  let samples = [];
  let i = 0;
  while (samples.length < num){
    let test = pAequorFactory(i, mockUpStrand());
    if(test.willLikelySurvive() === true){
      samples.push(test);
      i += 1;
    }
  }
  return samples;
  }

  //use compareDNA() to find the two most related instances
const findStrongMatch = (arr) => {
  let strRel = [];
  let mostRel = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      let compared = arr[i].compareDNA(arr[j]);
      if(compared > mostRel) {
        mostRel = compared;
        strRel = ((arr[i].specimenNum), (arr[j].specimenNum));
      } else if (compared === mostRel){
        strRel.push((arr[i].specimenNum), (arr[j].specimenNum));
      }
    }
  }
  console.log(`The most related bases have ${mostRel}% DNA in common`);
  console.log(`These are the most related species:`)
  return strRel;
}

//test
//let population = createSpecies(30);
//console.log(population);
//findStrongMatch(population);
//console.log(createSpecies(30));
//console.log(pAequorFactory(1, mockUpStrand()));
//let specie3 = pAequorFactory(3, mockUpStrand());
//console.log(specie3);
//console.log(specie3.complementStrand());
/*let specie2 = pAequorFactory(2, mockUpStrand());
console.log(specie2);
specie2.mutate();
console.log(specie2)
specie2.compareDNA(specie3);
console.log(specie3.willLikelySurvive());
console.log(samples);*/







