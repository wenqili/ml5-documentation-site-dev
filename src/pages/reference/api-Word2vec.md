---
templateKey: "model-page"
id: Word2vec
title: word2vec()
---

Word2vec is a group of related models that are used to produce [word embeddings](https://en.wikipedia.org/wiki/Word2vec)</sup>. This method allows you to perform vector operations on a given set of input vectors.

You can use the word models [we provide](https://github.com/ml5js/ml5-examples/tree/master/p5js/Word2Vec/data), trained on a corpus of english words (watch out for bias data!), or you can train your own vector models following [this tutorial](https://github.com/ml5js/ml5-data-and-training/tree/master/training). More of this soon!

### Example

```javascript
// Create a new word2vec method
const wordVectors = ml5.word2vec("data/wordvecs.json", modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Find the closest word to 'rainbow'
wordVectors.nearest("rainbow", function(err, results) {
  console.log(results);
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/Word2Vec/sketch.js) is a complete example.

## Constructor

```javascript
Word2Vec(model, ?callback)
```

### Parameters

- `model` - A string to the path of the JSON model.
- `callback` - Optional. A callback function that is called once the model has loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

```javascript
.ready
```

> Boolean value that specifies if the model has loaded.

```javascript
.model
```

> The model being used.

## Methods

```javascript
.add(inputs, ?max, ?callback)
```

> Add a series of word vectors. Returns the closest vector of that sum.

`inputs` - An array of strings containing the inputs to be added

`max` - Optional. The maximum results to return. Defaults to 1.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

```javascript
.subtract(inputs, ?max, ?callback)
```

> Subtract a series of vectors. Returns the closest vector of that sum.

`inputs` - An array of strings containing the inputs to be subtracted.

`max` - Optional. The maximum results to return. Defaults to 1.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

```javascript
.average(inputs, ?max, ?callback)
```

> Average a series of vectors. Returns the closest vector of that average.

`inputs` - An array of strings containing the inputs to be averaged.

`max` - Optional. The maximum results to return. Defaults to 1.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

```javascript
.nearest(input, ?max, ?callback)
```

> Find the nearest vector. Returns `max` array of values.

`input` - The input vector string.

`max` - Optional. The maximum results to return. Defaults to 10.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

```javascript
.getRandomWord(?callback)
```

> Find a random vector in the loaded model. Returns a string.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

## Source

[/src/Word2vec/](https://github.com/ml5js/ml5-library/tree/master/src/Word2vec)
