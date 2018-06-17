const express = require('express');
const BodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use('/listings/:id', express.static(path.join(__dirname, 'public')));
app.use('/listings/:id', express.static(path.join(__dirname, '../sam-booking/client')));
app.use('/listings/:id', express.static(path.join(__dirname, '../georgina-reviews/client')));
app.use('/listings/:id', express.static(path.join(__dirname, '../rus-similar-listings/client')));
app.use('/listings/:id', express.static(path.join(__dirname, '../theo-hero/client')));


app.get('/api/listings/:listingId/bookings/listingInfo', (req, res) => {
  res.redirect(`http://localhost:3001/api/listings/${req.params.listingId}/bookings/listingInfo`);
});

app.get(`/api/listings/:listingId/bookings/calendar/:yearMonth`, (req, res) => {
  res.redirect(`http://localhost:3001/api/listings/${req.params.listingId}/bookings/calendar/${req.params.yearMonth}`);
});

app.get('/api/listings/:id/reviews', (req, res) => {
  res.redirect(`http://localhost:3002/api/listings/${req.params.id}/reviews`);
});

app.get('/api/similar-listings/:id', (req, res) => {
  res.redirect(`http://localhost:3004/api/similar-listings/${req.params.id}`);
});

app.get('/api/listings/:id/photos', (req, res) => {
  res.redirect(`http://localhost:3003/api/listings/photos${req.params.id}`);
});

const port = 3000;


app.listen(port, () => (console.log(`listening to: ${port}`)))


