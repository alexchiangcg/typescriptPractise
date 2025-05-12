// TS 成員類型 （公開，私有，受保護的）
// 修飾詞 public private protected

// class UserInformation {
//   private name: string = 'bruce'
//   getName() {
//     return this.name
//   }
// }

// class StremerInformation extends UserInformation {
//   // hello() {
//   //   console.log(this.name);
//   // }
// }

// const sInfo = new StremerInformation();
// console.log(sInfo.getName())


// JS 原生私有成員寫法（2020的新功能）

class UserInformation {
  #name: string = 'bruce'
  getName() {
    return this.#name
  }
}

const u = new UserInformation()
console.log(u.getName());

