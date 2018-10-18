import os from 'os'

export class OperationSystemInfo {
  constructor() {
    this.infoList = [
      `Platform: ${os.platform()}`,
      `Release: ${os.release()}`,
      `CPU Architecutre: ${os.arch()}`,
      `CPUs: ${os.cpus().length}`,
      `Hostmanme: ${os.hostname()}`,
      `User Info: ${os.userInfo()}`
    ]
  }

  showInfo() {
    const print = info => console.log(info)
    this.infoList.forEach(print)
  }
}
