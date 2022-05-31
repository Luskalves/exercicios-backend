select JOB_ID, sum(SALARY) as 'Dinheiro dos dev'
from hr.employees
where JOB_ID = 'IT_PROG';
    