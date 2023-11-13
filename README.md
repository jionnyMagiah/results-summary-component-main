# Frontend Mentor - Results summary component

[Link to the challenge](https://www.frontendmentor.io/solutions/resultsummarycomponent-byxqB-opLc)

[Live preview](https://jionnymagiah.github.io/results-summary-component-main/)
## Aim of the project:
Replicate the following result summary component 

![](./design/desktop-design.jpg)

## Styles
The colors, font and font size were provided by Frontend Mentor. Margins and paddings were not provided, and I've fixed them by fine-tuning.

## Data
The scores, icon and name for each category were provided in a `.json` file. The default values for the elements showing these data is `--`. The script loads the `json` file and populates all the elements. At the same times computes the average score to show on the left card 

## Technology used
The solution has been built using html, css. The page is simple enough to use vanilla javascript to load the data and populate the elements.

To have a simpler and more readble code one could switch to a javescript framework. This would simplify the `json` loading and also allow to build a reusable component for the category card.  
For example using Svelte, the `+page.svelte` would contain something like
```html
...
{#each category as c}
    <Category {...c} />
{/each}
...
```
with the `Category` component defined as
```html
<script>
    export let name;
    export let icon;
    export let score
</script> 

<div class="category">
    <div class="icon-title">
    <img src={icon} alt="">
    <div class="name">{name}</div>
    </div>
    <div class="score-right">
        <span class="name-score">{score} </span> / 100
    </div>
</div>

<style>
<!--- CSS style for the card component--->
</style>
```


## Todo
The responsive layout will be implemented soon.