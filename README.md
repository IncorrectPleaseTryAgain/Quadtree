# <a name="top">Quadtree</a>
This is an implementation of the Quadtree datastructure. This implementation is solely dependent on JavaScript and p5.js is only used for visualization purposes.

## Contents
+ [How does it work?](#how-does-it-work)
+ [References](#references)

![image](https://github.com/IncorrectPleaseTryAgain/Quadtree/assets/99939034/da3ce7c2-ffc4-43a9-91dc-4189921a1ef2)
# <a href="https://www.youtube.com/watch?v=xIZivrdn8v0">Video Preview</a>

----

# <a name="how-does-it-work">How Does It Work?</a>

A quadtree has two main objectives:
+ [Inserting data](#inserting-subdividing)
+ [Retrieving data](#query)


## <a name="inserting-subdividing">Insertion & Subdivision</a>
Firstly, a quadtree needs to be able to insert data and if neccessary subdivide and create child nodes

A <a href="https://en.wikipedia.org/wiki/Quadtree#:~:text=A%20quadtree%20is%20a%20tree,into%20four%20quadrants%20or%20regions.">quadtree</a>
is similar to a 
<a href="https://en.wikipedia.org/wiki/Binary_tree#:~:text=A%20binary%20tree%20is%20a%20rooted%20tree%20that%20is%20also,to%20it%20a%20level%20below.">binary tree</a>
in the sense that it consists of a root note which could extend into child nodes. The only difference is that a quadtree has four of these child nodes instead of two.

![Untitled](https://github.com/IncorrectPleaseTryAgain/Quadtree/assets/99939034/3b6dde54-2ae6-45a2-9fcc-15856d730855)

<br>

Each node stores some data with a capacity/limit to the amount/size of the data as well as a bounding position which its data subsides in. Once the node exceeds its data capacity it branches out and creates four new child nodes.

The boundary is represened as the green border and its data is represented by the green data points.
![image](https://github.com/IncorrectPleaseTryAgain/Quadtree/assets/99939034/60cd7466-b639-47cd-a4a9-5784b11cb6b7)
  
<br>

Once the amount af data exceeds its capacity (in this case capacity = 4) the root node (blue) branches out into four child nodes which then store the remaining data (orange). Which child node stores the data depends on if the data is within the child nodes boundary.

![image](https://github.com/IncorrectPleaseTryAgain/Quadtree/assets/99939034/bd0b930c-ca0c-4943-ae42-0cc54593b1da)

<br>

This process repeats indefinitely until all the data points have been stored.

![image](https://github.com/IncorrectPleaseTryAgain/Quadtree/assets/99939034/a9bc5281-6267-4375-b6eb-7ea831e222f7)

<br>

## <a name="query">Retrieving data / Querying</a>
Once the neccessary data has been successfully stored into the quadtree we need to be able to access that data.

Lets say we have a set of 100 points and we have stored these points in a quadtree with its capacity at 4 points per node.

![image](https://github.com/IncorrectPleaseTryAgain/Quadtree/assets/99939034/22c01890-bc46-4446-aa45-ea379251edbd)

<br>

We would like to access all the data points in some area.

![image](https://github.com/IncorrectPleaseTryAgain/Quadtree/assets/99939034/95e0fc93-c615-41f3-9d14-8ed4b7da673d)

Traditionally we would iterate through the entire data set and check if it is within the specified range which wouldn't be that expensive since we are only checking each point once and so it would run in O(n); however, if we choose to modify each point depending on other points then this becomes exponentially expensive because we would have to check each point against every other point n times.

Instead of using the traditional method we rather start at the root node and check if the range overlaps it (aka: the range area is within the bounds of the nodes designated area). If they do overlap then we check if any of its data points are within the range, we then add these 'points in range' into a list. If the node has child nodes then we recursevely do the same for all its children. At the end we will have a list of points which are within the range.

Here the points in that list are red:

![image](https://github.com/IncorrectPleaseTryAgain/Quadtree/assets/99939034/fda150e5-2cdd-4173-b38e-8830ff169152)

<br>

# <a name="references">References</a>
[1] Wikipedia Contributors. (2023, April 10). Quadtree. Wikipedia; Wikimedia Foundation. [link](https://en.wikipedia.org/wiki/Quadtree#:~:text=A%20quadtree%20is%20a%20tree,into%20four%20quadrants%20or%20regions)
<br>
[2] The Coding Train. (2018). Coding Challenge #98.1: Quadtree - Part 1 [YouTube Video](https://www.youtube.com/watch?v=OJxEcs0w_kE&t=1897s)
<br>
[3] The Coding Train. (2018). Coding Challenge #98.2: Quadtree - Part 2 [YouTube Video](https://www.youtube.com/watch?v=QQx_NmCIuCY&t=7s)
<br>
‌[4] Scott, T. (2018). Quadtrees and Octrees for Representing Spatial Information [YouTube Video](https://www.youtube.com/watch?v=xFcQaig5Z2A&t=4s)
<br>

[back to top](#top)
