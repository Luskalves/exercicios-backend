select
	FIRST_NAME as 'Nome',
    LAST_NAME as 'Sobrenome',
    datediff(CURRENT_DATE(), HIRE_DATE) as 'Dias empregado'
from hr.employees
