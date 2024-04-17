# sort-view

Different types of sort with visual representation

## Installation
```sh
npm install sort-view
```

Sorting algorithms can be complex to understand merely by looking at their code. Visualizations in command-prompt provide a graphical representation of how the algorithm works step by step, making it easier to understand the underlying logic and behavior.<br/><br/>

<b>Key points to remember while using visualization</b><br/>
<ul>
<li>Array length should be less than 10 for visualization</li>
<li>Visualization works best when numbers are in the range 0 to 9</li>
</ul>
<br/>

**Note:** The above points are valid only in case of visualization. If there is no need of visualization then any length of numeric array will be sorted and returned.<br/><br/>

<b>Available methods: </b><br/>

1. bubblesort(array, view = boolean)<br/>
    This function takes 2 arguments where the view argument is optional to view how the sort is working at each step. The first argument is an array. The function sorts the original array using bubblesort and returns it.
    <br/>

2. insertionsort(array, view = boolean)<br/>
    This function takes 2 arguments where the view argument is optional to view how the sort is working at each step. The first argument is an array. The function sorts the original array using insertionsort and returns it.
    <br/>

3. selectionsort(array, view = boolean)<br/>
    This function takes 2 arguments where the view argument is optional to view how the sort is working at each step. The first argument is an array. The function sorts the original array using selectionsort and returns it.
    <br/>
