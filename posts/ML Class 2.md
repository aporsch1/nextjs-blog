---
title: 'ML Class 2'
date: '2023-09-08'
---
1. Difference between Machine Learning and AI is the use of semi-exclusively past data in order to make decisions in the future.
## Marble Example
1. Need to know if a marble is good or deformed
2. Humans don't really want to stand at a conveyor belt and look at marbles for no pay, even though it would be easy for them.
3. We want to use computers
4. To train a machine learning algorithm we need to give the machine data to train on, this means that we need to find a measure for what makes a marble good vs deformed and then train the machine on the measurements we already have from good/deformed marbles.
5. For each marble we decide to record the mass and the maximum width (width), as well as the tag of whether it is good/bad. 
6. data gets entered in some sort of table that could look something like...

| mass | width | defect |
| ---- | ----- | ------ |
| 2.7  | 7     | good   |
| 3    | 6     | good   |
| 4.1  | 12    | bad    |
| 2.9  | 3     | bad    |
| 4    | 9     | good   |

and then the algorithm would then spit out some sort of function after being trained on the data and the function would have the form $f(mass, width) \rightarrow (good / bad)$ 

## More General 
Ben Mitchell says that this table has a nice property. There are two numerical inputs and then one categorical outputs. A *[[feature]]* is one of the inputs for a machine learning model and then the output is called a *[[target]]*.

For the marble example we have two numerical features which means that we can graph them on axes against each other. We could put the width on one axis and mass on the other axis. Then, we can make some sort of identification because of patterns we see.

The result from the machine learning model is considered a *linear model* or a *classifier* because there are n outcomes, and every outcome is one of the n possible outputs. There is no gradient between outputs, just a purely discrete function.

## Another Example
We then drew another graph where there were blue points and red points where the blue points were mostly clustered around the origin and then the red points were generally further away from the origin. He then drew a green point sort of in the upper left of the top left quadrant and asked which color it would be (pretty obviously red). We then determined that our algorithm was essentially just asking what the color of the nearest by points was.
## The nearest neighbor classifier
The nearest neighbor classifying algorithm is basically that you find the nearest point in the training data to the new point and then give whichever target value the training point nearest has. **I asked a question:** I asked that if you had multiple "new points" if you assigned all of them target values according to the algorithm at once, or if you iterated through. Because the two ways had very different results. The answer is that you make the decision for all of the new points at once, because if not you can have what is essentially a slippery slope by making a decision on one point, and then using that point to turn another point, and so forth and you can slowly move further from the original point that made the first "decision" until you are really far away but still have the same target value. *So for that reason* **we apply the same function to all the new points at the same time and don't update as we go along.** 

Okay I need to make sure this actually works because if it doesn't I am going to go crazy... It did work!!