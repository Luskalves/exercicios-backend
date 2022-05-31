select mov.title, box.domestic_sales, box.international_sales
from Pixar.BoxOffice as box
inner join Pixar.Movies as mov
on box.movie_id = mov.id;
