select
	DEPARTMENT_ID as 'Id dos Departamentos',
    round(avg(SALARY), 2) as 'Média Salarial',
    count(EMPLOYEE_ID) as 'Quantidade de funcionarios'
from hr.employees
group by DEPARTMENT_ID
