select *
from Pixar.Movies as m
left join Pixar.Theater as t
on t.id = m.theater_id
order by t.name;