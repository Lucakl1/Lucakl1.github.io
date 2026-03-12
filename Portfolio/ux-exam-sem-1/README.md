# Exam Description

## Description

The Final Project will be delivered individually or in groups of up to 4 students. Working in groups of 4 is highly recommended due to the scope and complexity of the project. It is also recommended to mix students with different profiles in each group (e.g., some better at design, some better at coding, and some better at project management).

Please register your names here, even if you decide to work alone.

### The Project will consist of designing and developing a small webshop front-end application where users can:

Sign up
Log in
Once logged in, browse the products
Add products to cart
Check out the cart
Log out
Products

### The information about products will be gathered from the Fake Store API (https://fakestoreapi.com/), which contains 20 products.

All the information the API provides for each product must be displayed, including its picture. Find more information in the API’s documentation (https://fakestoreapi.com/docs) and GitHub page (https://github.com/keikaavousi/fake-store-api).

#### Users

The application users will not be managed via the Fake Store API, but stored in a JSON file that the application will access via JSON Server (https://www.npmjs.com/package/json-server), which allows access to a JSON file as a REST API. For an example on JSON Server use, check out https://github.com/arturomorarioja/js_towns.

When signing up, the application will require the user’s email address, password, and repeating the password. A valid email address is expected. The password must be between 8 and 20 characters long, and contain at least one lowercase letter, one uppercase letter, one number, and one special character. Both passwords must match.

When logging in, the user must introduce his/her email address and password.

Upon correct log in, the application will store the logged in user’s email in localStorage. Upon log out, said email will be removed from localStorage.

#### Cart

The application will allow to add each product to the cart. Cart information will be stored in localStorage.

Upon check out, the user will be asked for his/her delivery address, billing address, and credit card number. Once the user confirms, a success message will be displayed and the cart will be emptied from localStorage. No further action must be taken.

When a user logs out, its cart information must remain in localStorage. If two users log into the application at different times, both their carts must remain stored in localStorage when they log out.

To redirect from one page to another in JavaScript, this source can be handy.

Architecture Diagram



## Code

The application will be developed with HTML5, CSS3 and JavaScript.

No back-end technologies or further front-end libraries (e.g., Bootstrap, Tailwind), JavaScript libraries (e.g., jQuery) or JavaScript frameworks (e.g., React, Angular, Vue, Svelte) are allowed. If in doubt about the use of tools, ask your teacher.

All HTML, CSS and JavaScript paths must be relative.
Semantic HTML must be used, with especial attention to landmark elements.
The application’s entry point will be index.html. Avoid different names for the sake of deployability.
<em> and <strong> will be used instead of <i> and <b>, respectively.
<br> must be avoided.
No inline HTML elements must contain block elements.
All CSS colours, font families, and fixed pixel dimensions (e.g., the width of a book cover image) will be declared as custom properties (CSS variables). No colour, font family, or fixed pixel dimension must be hardcoded, except for small border, margin or padding sizes.
Pixel units must be avoided except for breakpoints, fixed sizes (e.g., images, cards), borders, margins and paddings.
Fonts must be loaded in CSS, never in HTML. Make sure to load only the necessary font sizes.
The page must be fully responsive (i.e., it must adapt to all viewport widths). Use whatever CSS functionalities you find appropriate for that purpose (e.g., media queries, float, flexbox, grid).
A mobile first approach will be used.
Accessibility will be enforced:
Colour contrast for all textual elements on the site
Avoidance of complex fonts
Keyboard-only accessibility for the whole site
Use of ARIA labels
Use of appropriate HTML form input types
Semantic use of <a> and <button>
Minimum size of touch elements
Attention must be paid to the performance of the web application:
Image format, size and resolution
Loading of external fonts
Deferred CSS load, if applicable
Lazy loading of JavaScript, if applicable
Use of JavaScript modules
Use of const and let in JavaScript
Use of asynchronous JavaScript whenever possible
However, the code will not be prepared for deployment (e.g., minification, bundling), as it must be legible for your teacher
No backend ID (e.g., a product ID) will appear in code
Information Architecture

Cluttering will be expressly avoided through the methods discussed in the White Space slides
Attention will be paid to path establishment 
Wayfinding methods (at least one) have to be defined
A sitemap must be created in the format deemed most appropriate for the project. Make sure that it focuses on pages, not functionalities
Visual and Industrial Design

A conscious design of colour palette and typography must be defined
Static wireframes, but not prototypes, will be created for all pages in the website for either the desktop view or the mobile view
At least one present web design trend among those covered in the Web Design Trends slides will be present in the application
Usability Testing

A usability test will be designed, but not conducted:

Preference and performance measures must be defined
A script with scenarios and tasks must be written
In general, every concept covered in the subject during the semester, including everything in the slides, must be enforced.

 

## Deliverables

A product and a report must be delivered.

The product is the code of the application in a zip file.

The report is a pdf file in A4 format that contains only the following:

The swatch for the colour palette
The name of each font used along with a sample sentence
Screenshots of the wireframes
The sitemap
The usability test design, exclusively:
List of preference and performance variables
Script with scenarios and tasks
Do not include links (e.g., GitHub, Figma) in the report.

Failure to comply with formalities (including the presence of unrequired elements in the report) will result in a lower grade.

## Deadline

The product and report will be delivered to Wiseflow no later than Tuesday 16 December 2025 at 12:00 (noon). This date and time is tentative and could vary. You will all receive an email from Wiseflow indicating the exact date and time.



# Description of the physical exam 

The exam is individual, physical, oral, and internally censored.

Each student will connect his/her laptop to the classroom’s projector. It is recommended to make sure that all relevant files and applications are already open before the exam starts (e.g., IDE, browser, front-end application, pdf report).

The schedule will be made available on Wiseflow. According to KEA regulations, students can be required to take the exam up to one hour before their scheduled time. Be ready at least one hour in advance.


### Each exam takes a maximum of 30 minutes, distributed as follows:

Max. 25 minutes. Exam:
Max. 10 minutes. The student presents his/her Exam Project
Max. 15 minutes. The examiners ask questions
5 minutes. The examiners grade the exam and communicate the grade to the student
Materials:

Only those delivered to Wiseflow (the product and the report).           
No slides, Powerpoint presentations, GitHub repositories, links to Figma pages or similar are allowed.
Questions


## These are examples of some of the potential questions that could be asked at the exam:

### General questions:
In front-end web development, what is the separation of concerns pattern?
In HTML, what is the difference between block and inline elements?
When should one use <section> and when <article>?
What are the advantages of using a <label> for an <input>?
How is the mobile first approach implemented in CSS?
In CSS, when should one use flexbox and when grid?
What is the difference between declaring a JavaScript variable with const, let, var and nothing?
What are the differences between loading a JavaScript file in HTML with defer, with async, without any of them in the header or without any of them at the end of the document?
What are the advantages of using JavaScript modules?
How should ARIA labels be used?
Explain the differences between wireframes and prototypes, and when each one should be used
Describe at least 3 present trends in web design among those covered in the class slides
What are the advantages of usability testing?
How are guerrilla tests conducted?
Explain at least 2 colour palette schemes
Explain at least 2 wayfinding methods
Explain at least 3 methods for removing visual clutter from a design
What can be done to improve the performance of a web application in relation to its deployment? 

### Questions related to the students’ implementation of the Exam Project:
What criteria did you use to choose your colour palette?
What criteria did you use to choose your typography?
What present trends are you implementing in your project? Why?
Why did you choose the preference/performance measures that you chose?
How would you measure your preference measures?
How could the results of the usability test affect the design?
Discuss your design of navigation structures
Describe your design of wayfinding methods
Why did you choose the sitemap representation that you chose?
How did you implement responsiveness in your web application?
How did you account for accessibility in your web application?
How did you improve your application’s performance?
How did you organise the hierarchy of semantic HTML?

### Practical questions:
Create a small HTML form and process it in JavaScript
Change the CSS code in your Exam Project
Fix some responsiveness mistake in your Exam Project
Fix some JavaScript issue in your Exam Project
Fix some keyboard-only navigation issue in your Exam Project
Write from scratch JavaScript code that consumes an API
Tamper with the API URL and show how the application behaves. Improve the UX if necessary
Run Google Lighthouse and explain how you would improve some of the measures
Follow-up questions may also be asked.
