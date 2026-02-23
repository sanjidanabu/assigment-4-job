1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 1.getElementById: take an element with a specific id, it id has been unique and it has only return one element
2.getElementsByClassName: it take one class but multiple element, it has been return multiple element,it return htmlcollection.
3.querySelector: it uses css selector and took matching element,it has only return matching element
4.queryselectorAll: use selector to capture all matching element,foreach can be used,return multiple elements.
2. How do you create and insert a new element into the DOM?
ans:1. create a new element like document.createElement()
  2.insert a content
  3.insert into dom
3. What is Event Bubbling? And how does it work?
Ans: event bubbling is a process that when event occurs in child element than event gradually rises upto its parent-grandparent-document.
it works gradually parent to graandparent and grandparent to document .it works clicking on the child also triggers the parent
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:event delegation is javascript technique where we dont place a event listener in separate element,we places event listener in one parent element.
it useful because it performance is good because if there are many elements we can use single listener instead of separate listeners this consums less memory.
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() is used to stop the default behaviour of an element.it means stop browser from doing work what is used to do automatically.
stopPropagation(): stopPropagation() is used to stop event bubbling ,it means the event will not go to the parent element .