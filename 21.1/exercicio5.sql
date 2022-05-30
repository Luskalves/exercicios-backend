select 
	round(max(SALARY),2) as 'Maior Salário',
    round(min(SALARY),2) as 'Menor Salário',
    round(sum(SALARY),2) as 'Soma de Todos os Salários',
    round(avg(SALARY),2) as 'Média Salarial'
from hr.employees;
    