---
title: 'ML Class 1'
date: '2023-09-06'
---
an introduction.
### Definitions:

Artificial Intelligence: getting computers to get better at tasks that humans are good at and computers are generally bad at (judging tiny animal cuteness).

Machine Learning: Strict subset of AI that looks at the behavior of algorithms that are defined by _past data_

Deep Learning: A strict subset of machine learning that is quite computationally intensive, examines algorithms that are _connectionist models_ that function through _emergent behavior._

### This Class:

The scope of the class is a survey of all of the subtopics inside of Machine Learning so we have some knowledge about a bunch of topics so that we can pivot easily for different careers. Will cover a bunch of different algorithms and techniques as well as discussion about AI ethics and other things like that.

### Difference between Normal programming workflow and Machine Learning programming workflow:

Normal Programming workflow:

1. Look at requirements, i.e. "what should this program do?"
2. choose program design based on requirements
3. implement the program
4. test and debug

ML workflow:

1. take examples of what we want the program to do
2. implement the ML algorithm
3. Algo takes the examples and outputs a "solver" as its output
4. Then assess the performance of the "solver"

### Example 1:

|   |   |   |
|---|---|---|
|input 1|input 2|output|
|2|1|3|
|2|4|6|
|-1|3|2|

We don't want a "memorized" result such as some sort of solution like a dictionary, which would not work for settings where the inputs are not included in the dictionary. We want something known as a _generalized_ solution.

**Generalization:** a solution such that any inputs will lead to the correct result, even if the inputs are not included in the examples.

We then have to think about how many examples there have to be until we can get a "solver" that is generalized.

In practice we cannot guarantee that the solver will reach true generalization but we can _approach_ generalization.

Computers are better at humans than producing numbers, humans are better than interpreting numbers than computers. Thus it is up to humans to decide if an algorithms is close enough to generalized or not. 90% is good enough at predicting how high people will rate kitten cuteness, but 90% is not nearly high enough for an algorithm for a self driving car that is supposed to avoid crashes.

### Example 2:

type 1 and type 2 error for models might need to be weighted very differently. For example, a factory that makes dynamite might be much happier identifying a good stick of dynamite as bad and not sending it than send a bad stick of dynamite that could cause a serious injury or accident and then subject themselves to moral loss as well as fiscal catastrophe from the impact to their reputation

[[ML Class 2]]