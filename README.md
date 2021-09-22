# Sticky Notes

Knows as memo-more app.

## Idea

Long story short, Google Keep is weird. The pretty simple application is far far away from being user friendly. And the design. OMG! It looks like \*\*\*\*! However, main reasin is to practice React, Redux, TypeScript and learn Styled Components. So, don't judge this project. Do not expect too much. It's only for fun.

## Technology

-   TypeScript
-   React
-   Redux
-   React Router
-   Styled Components
-   Firebase v9
-   SCSS
-   Testing library

## Project desciption

Free tool with authorization module and posibility to share notes.

### Note

Every note has a few fields:

-   Title - required
-   Priority - required and prefilled by default value
-   Deadline date
-   Description
-   Attachments - images, movies, documents, links

### Authorization

It's provided by Firebase and has only one option - authorization via Google Acccount. Only shared notes can be visible for non logged users.

### Sorting

Sorting is possible only by:

-   priority
-   created date
-   deadline date

### Filtering

Filtering is possible only by:

-   priority
-   status - default `active`
-   deadline - maybe in a future
