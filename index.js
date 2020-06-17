class Formatter {
  //add static methods here
  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
     return string.replace(/[^A-Za-z0-9-']+/g, '');
  }
  static titleize (string){
    const  noEffect = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newString = string.split('').map(word => {
      noeffect.includes(word) ? word:capitalize(word)).join('')
    })
    return  this.capitalize(newString);
  }
}
