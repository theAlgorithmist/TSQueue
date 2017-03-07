/** 
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Typescript Math Toolkit: Minimal implementation of a fifo queue of generic items.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 * 
 * @version 1.0
 */

 export class TSMT$Queue<T>
 {
   protected _queue: Array<T>;                // The actual queue
   
/**
 * Construct a new queue of the supplied type
 * 
 * @return Nothing Constructs an array of the supplied data type and sets acccess to FIFO 
 */
  constructor( )
  {
    this._queue  = new Array<T>();
  }

  /**
	 * Access the length or size of the queue
	 * 
	 * @return number - queue length
	 */
	 public get length(): number
	 {
	   return this._queue.length;
   }

  /**
   * Initialize the queue from an existing array
   * 
   * @param items: Array<T> Array of queue items
   * 
   * @return Nothing - The internal queue is updated to be a copy of the input array
   */
   public fromArray(items: Array<T>): void
   {
     if (items != null && items.length && items.length > 0)
       this._queue = items.slice();
   }

 /**
   * Return the current queue as an an array
   * 
   * @return Array<T> - A copy of the current queue; the current queue is not modified.
   */
   public toArray(): Array<T>
   {
     return this._queue.slice();
   }

  /**
   * Add an item to the queue
   *
   * @param item: T Data item of type T
   *
   * @return Nothing - A non-null item is placed into onto the queue - no runtime type guard is currently applied, but this may change in the future
   */
   public enqueue(item: T): void
   {
     if (item)
       this._queue.push(item);
   }

  /**
   * Remove item from the queue
   *
   * @return item: T - Direct reference to the next queue item  or null for an empty queue.  The item is permanently removed from the queue.
   */
   public dequeue(): T
   {
     if (this._queue.length == 0)
       return null;

     return this._queue.shift();
   }

  /**
	 * Clear queue
	 * 
	 * @return Nothing - queue is emptied and is ready for new data.  Access mode remains unchanged.
	 */
	 public clear(): void
	 {
	   this._queue.length = 0;
   }
 }