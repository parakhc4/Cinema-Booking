# # FUNCTIONAL


1. Show the seat layout with rows, aisles, and categories, with the price per category
2. Show each seat as available, selected, or booked (with a legend)
3. User can select and deselect available seats across categories
4. Booked seats cannot be selected
5. Max 6 seats per booking
6. Show a summary of selected seats and the total price
7. Confirm button (disabled when nothing is selected) marks the selected seats as booked and shows a success message

# # NON-FUNCTIONAL


1. Layout is driven by a config object, so any cinema layout works without code changes
2. Performs well with large seating plans
3. Keyboard accessible (nice to have)

# # OUT OF SCOPE


- Login, database, cancellation, booking history



# # Entities 

"""
  Category:
    - id        (e.g. "gold")
    - name      (e.g. "Gold")
    - price     (e.g. 400)

  Row:
    - row       (e.g. "A")
    - category  (id of a Category)
    - seats     (list of seat numbers; null = aisle)

  Layout:
    - rows      (list of Row)

  Seat:
    - id        (row + number, e.g. "A5")
    - row       (e.g. "A")
    - number    (e.g. 5)
    - category  (taken from its row)

  STATE (what changes while the app runs)
    - selectedSeats: seat ids the user has picked
    - bookedSeats:   seat ids already reserved
    """