//Tve metodi ama ne rabotat kako treba za zal


//  function isPalindrome(string) {
//      const wordsWithSplit = string.split(',');
//      obj = {};
//      for (let i = 0; i < wordsWithSplit.length; i += 1) {
//          if (wordsWithSplit[i] == wordsWithSplit[i].split('').reverse().join('')) {
//              obj[wordsWithSplit[i]]++;
//          } else {}

//      }
//      console.log(obj);
//  }
//  let arr1 = ['makedonija', 'daj mi edna casa vino polna so vino', 'anavolimilovana', 'radar', 'kajak', 'kalabalak', 'neli ne si ti senilen', 'jadenje i piene daj', 'slusatel', 'futbal', 'muzika'];
//  let arrToString = arr1.toString();
//  isPalindrome(arrToString);


function isPalindrome(string) {
    const wordSplit = string.split(',');
    for (let i = 0; i < wordSplit.length; i++)
        if (wordSplit[i] === wordSplit[i].split('').reverse().join('')) {
            console.log(wordSplit[i] + ' is palindrome');
        } else {
            console.log(wordSplit[i] + ' is not palindrome');
        }
}

isPalindrome('makedonija,daj mi edna casa vino polna so vino,anavolimilovana,radar,kajak,kalabalak,neli ne si ti senilen,jadenje i piene daj,slusatel,futbal,muzika');