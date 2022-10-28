/**
 * Second stack
 *
 *
 * By: Igor Zheleznyak
 * Version: 1.0
 * Since:   2022-09-17
 */

class SecondStack {
  // private array
  private readonly stack: number[] = []

  // gathers the pushed number
  public Push(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  // getter
  public getStack(): any {
    return this.stack
  }

  // gets pops top number
  public popNumber(): any {
    return this.stack.pop()
  }
}
export = SecondStack
