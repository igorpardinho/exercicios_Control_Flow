interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
  getAll(): T[]
}

export class Queue<T> implements IQueue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
  getAll(): T[] {
      return [...this.items]
  }
}
