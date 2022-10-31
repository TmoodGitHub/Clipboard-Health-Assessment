# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

My first approach is to look at what's being repeated. Converting to string and converting to hash were the most repeated function so I move them out into their own function. This cleans up the code nicely.

Next, I wanted to determine the frequency of checking for `event.partitionKey`, checking if `candidate` is a string, and the length. All three are also potentials for moving into their own function as well, but there is such things as oversimplification. 

So, without knowing how often these features are being used elsewhere, I left them alone. Typically, if I knew that these checks were used frequently, then I'd move them as a helper function but without the lack of access to the rest of the codebase, nothing further was changed.

Finally, the code is generally easier to read -- however, I replaced `event` with `key`. `event` makes me think this is a result of an action such as a button clicks which can be a little misleading. Instead, `key` describe what kind of value or object we can expect. I also replace `candidate` with `hashKey` so that the codebase is more verbose for it's easier to identify `hashKey` for what it is compared to `candidate`.