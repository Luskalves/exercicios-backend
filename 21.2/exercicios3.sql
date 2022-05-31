select mov.title, box.rating
from Pixar.BoxOffice as box
inner join Pixar.Movies as mov
on box.movie_id = mov.id
order by box.rating desc;
