# Typescript Math Toolkit Queue

This is the alpha release of the Typescript Math Toolkit (FIFO) Queue.  As I have mentioned in other projects, the TSMT Data Structures library is intended to provided a necessary set of structures to support algorithms in the toolkit and corresponding demos.  I am placing the structures one-at-a-time into the public domain for purposes of additional testing and API feedback.

This is a rather minimal implementation of a (FIFO) Queue that contains the typical _enqueue()_ and _dequeue()_ methods.  It is suitable for quick porting from other applications, but is functionally equivalent to the TSMT Stack with FIFO access.  It is possible that the current code might form the base for other queue implementations, hence the desire for public testing and feedback.

Like the stack, the TSMT Queue is written on top of an Array, which is generally a very efficient structure.  A dynamic Array, however, may present space issues for very large structures.  It is also possible to base both codes off a very lightweight linked-list.  I am open to re-implementing both structures before formal release of the toolkit.


Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Typescript: 2.0.0

Version: 1.0.0


## Installation

Installation involves all the usual suspects

  - npm and gulp installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)


### Building and Running the unit tests

1. gulp compile

2. gulp test

The test suite is in Mocha/Chai and specs are in the _test_ folder.  The queue resides in the _src_ folder. 


### Using the queue

A queue may be created directly from an existing array of the appropriate type or elements may be placed one-at-a-time into the queue. 


```
let queue: TSMT$Queue<number> = new TSMT$Queue<number>();
let a:Array<number> = [1, 2, 3, 4, 5, 6];
queue.fromArray(a);
```

or

```
let queue: TSMT$Queue<number> = new TSMT$Queue<number>();

 stack.enqueue(1);
 stack.enqueue(2);
 stack.enqueue(3);
```

Pretty much all the usual suspects, blah, blah.  Refer to the specs for additional usage examples.


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <http://algorithmist.net>
