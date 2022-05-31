select JOB_ID, sum(SALARY) as 'Dinheiro da galera'
from hr.employees
group by JOB_ID;
    