---
title: 'Stat 61 Review'
date: '2023-09-05'
---
remember likelihood function...$L(y;\theta)=\Pi_{i=1}^n f_{y(y_{i})}$ for some param. $\theta$. Shows how likely our data is for different values of $\theta$. The **Maximum Likelihood Estimation (MLE)** maximizes $L(y;\theta)$ and then takes the derivative and sets it equal to zero to see which value of the parameter maximizes the likelihood.

## Method of Moments (Section 5.2):
second procedure for finding estimators for parameters. Often more tractable for finding estimates of parameters when PDFs have more than one parameter.
#### Moment:
the first moment is $E(Y)$, the second moment is $E(Y^2)$, third moment is $E(Y^3)$ and the $k^{th}$ moment is $E(Y^k)$
kth moment given by $\int _{-\infty}^\infty y^k*f(y;\theta)\, dy$

### Method of Moments
intuitively the kth sample moment is an approximation of the kth theoretical moment

set $E(Y)=\frac{1}{n}\sum y_{i}$,  $E(Y^2)=\frac{1}{n}\sum y_{i}^2\dots$ and the MoM estimators $\hat{\theta_{1}},\hat{\theta_{2}}\dots$ are the simultaneous solutions to this system of equations.

### Review of Tricks from Probability:

#### Named distributions:
can use known $E(Y), E(Y^2)$
-Binomial and Friends
-Normal and Friends
-Exponential and Friends (Gamma, Beta)
-Uniform

#### Properties of Expected Values and Variance
$v(Y)=E((y-\mu)^2)=E(Y^2)-E(Y)^2$
$E(aY+b)=aE(Y)+b$
$v(aY+b)=a^2v(Y)$

#### Law of the Unconscious Statistician
$E(g(Y))=\sum g(Y)P(Y=y)$ or $\int g(y)f_y(y) \, dy$

#### Moment Generating Function
$M_{y}(t)=E(e^{tY})$ and find the $k^{th}$ moment, take the $k^{th}$ derivative of $M$ with respect to $Y$ and evaluate at $t=0$ $M_{y}^{(k)}(0)=E(Y^k)$
