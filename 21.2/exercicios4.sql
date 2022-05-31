select * 
from Pixar.Theater as t
left join Pixar.Movies as m
on t.id = m.theater_id;