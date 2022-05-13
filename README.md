# IronMaidensBnb: React codealong


Codealong to practice React (React Router, useEffect, APIs, etc)

- Goal (wireframes): https://whimsical.com/ironmaidensbnb-MVw1gkTJrekF2QTaEKCMJU

- For that, we will use IronBnB API: https://ironbnb-m3.herokuapp.com


## Step 1: structure, NavBar, HomePage

```
<NavBar />
```

```
path="/"
  <HomePage />
```


## Step 2: ApartmentsList

```
path="/apartments"
  <ApartmentsList />
  --> call API (GET /apartments )
  --> display links for each apartment
```


## Step 3: ApartmentDetails
```
path="/apartments/42"
  <ApartmentDetails />
  --> call API   (GET /apartments/42 )
  --> display aparment details

```

## Step 4: Create new Apartment
```
path="/apartments/create"
  <CreateApartment />
  --> form (controlled component)
  --> call API   (POST /apartments + body)

```


## Improvements

- [x] Store API baseUrl in .env
- [ ] Single API call to get the info (Instead of calling the API in <ApartmentsList> and <ApartmentDetails>)
  - Make one single call to the API in <App>
  - Pass the info as props to <ApartmentsList> and <ApartmentDetails>
- [ ] Conditional rendering
- [ ] Display spinner/loader while data is loading
- [ ] Apply different ways to add style in React (inline styles, plain css with one file per component, scss...)
- [ ] (advanced) create a service (a function or class in charge of all requests to the api; we did that in m2 at some point)
- [ ] (advanced) Convert all function components to class components
  (note: syntax to do props, state and api requests are a bit different in class components)

